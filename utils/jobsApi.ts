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

export async function fetchJobs(): Promise<Job[]> {
  try {
    const data: ApiResponse = await fetchWithAuth('job.list');
    return (data.results as Job[]).filter(
      (job) => job.jobPostingIds.length > 0 && job.status === 'Open'
    );
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
}

export async function fetchDepartments(): Promise<Department[]> {
  try {
    const data: ApiResponse = await fetchWithAuth('department.list');
    return data.results as Department[];
  } catch (error) {
    console.error('Error fetching departments:', error);
    return [];
  }
}

export async function fetchLocations(): Promise<Location[]> {
  try {
    const data: ApiResponse = await fetchWithAuth('location.list');
    return data.results as Location[];
  } catch (error) {
    console.error('Error fetching locations:', error);
    return [];
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
  return location ? location.name.replace('/Remote', '') : '';
}

export function getJobType(type: string): string {
  return type === 'FullTime' ? 'Full time' : 'Part time';
}
