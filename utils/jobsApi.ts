interface PostalAddress {
  addressRegion?: string;
  addressCountry?: string;
  addressLocality?: string;
}

interface Address {
  postalAddress: PostalAddress;
}

interface Location {
  id: string;
  name: string;
  isArchived: boolean;
  address: Address;
  isRemote: boolean;
  parentLocationId: string | null;
  type: string;
}

interface Department {
  id: string;
  name: string;
  isArchived: boolean;
  parentId: string | null;
}

interface Job {
  id: string;
  title: string;
  status: string;
  employmentType: 'FullTime' | 'PartTime';
  locationId: string;
  departmentId: string;
  jobPostingIds: string[];
}

interface ApiResponse {
  success: boolean;
  results: Job[] | Department[] | Location[];
  moreDataAvailable: boolean;
}

const fetchWithAuth = async (endpoint: string) => {
  const response = await fetch(`/api/jobs?endpoint=${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`);
  }

  return response.json();
};

export async function fetchAllData() {
  try {
    const [jobsData, departmentsData, locationsData] = await Promise.all([
      fetchWithAuth('job.list'),
      fetchWithAuth('department.list'),
      fetchWithAuth('location.list'),
    ]);

    // Filter active jobs with postings
    const jobs = (jobsData.results as Job[]).filter(
      (job) => job.jobPostingIds.length > 0 && job.status === 'Open'
    );

    // Get unique location IDs from active jobs
    const activeLocationIds = new Set(jobs.map((job) => job.locationId));

    // Filter locations that are used in active jobs
    const locations = (locationsData.results as Location[])
      .filter((loc) => !loc.isArchived && activeLocationIds.has(loc.id))
      .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically

    // Get unique department IDs from active jobs
    const activeDepartmentIds = new Set(jobs.map((job) => job.departmentId));

    // Filter departments that are used in active jobs
    const departments = (departmentsData.results as Department[])
      .filter((dept) => !dept.isArchived && activeDepartmentIds.has(dept.id))
      .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically

    return {
      jobs,
      departments,
      locations,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      jobs: [],
      departments: [],
      locations: [],
    };
  }
}

export function getDepartmentName(
  departments: Department[],
  id: string
): string {
  return departments.find((dept) => dept.id === id)?.name || '';
}

export function getLocationName(locations: Location[], id: string): string {
  const location = locations.find((loc) => loc.id === id);
  if (!location) {
    console.warn(`Location not found for ID: ${id}`);
    return '';
  }
  return location.name;
}

export function getJobType(type: string): string {
  return type === 'FullTime' ? 'Full time' : 'Part time';
}

export function getUniqueEmploymentTypes(jobs: Job[]): string[] {
  const uniqueTypes = new Set(jobs.map((job) => job.employmentType));
  return Array.from(uniqueTypes)
    .map((type) => (type === 'FullTime' ? 'Full time' : 'Part time'))
    .sort();
}
