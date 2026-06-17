import { NextResponse } from 'next/server';
import { requests } from '~/lib/data';

export async function GET() {
  return NextResponse.json(requests, { status: 200 });
}

export async function POST({ request }) {
  const newRequest = await request.json();
  console.log('New return request:', newRequest);
  return NextResponse.json(newRequest, { status: 201 });
}