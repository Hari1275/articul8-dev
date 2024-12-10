import { NextResponse } from 'next/server';

const API_BASE_URL = 'https://api.ashbyhq.com';
const API_AUTH =
  'Basic ZGQxOWViZTgzMThkNjJhZGQwYThiZmQ2OGVjYTMxYWQ2MGRiMTUyYjRhNDNkMjM1MDdmOTIzZmVjMDlhNDg0YTo=';

export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const endpoint = searchParams.get('endpoint') || 'job.list';

    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        Authorization: API_AUTH,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ includeArchived: false }),
    });

    if (!response.ok) {
      console.error('API Response:', {
        status: response.status,
        statusText: response.statusText,
        url: response.url,
      });
      throw new Error(`API returned ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}
