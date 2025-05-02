import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { query } = await request.json();

    // Simulate a response for the GraphQL query
    const response = {
      data: {
        menu: {
          items: [
            { title: 'Home', url: '/' },
            { title: 'About', url: '/about' },
            { title: 'Services', url: '/services' },
          ],
        },
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process the request' }, { status: 500 });
  }
}