import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const { password } = await request.json();
    if (process.env.NEXT_PUBLIC_PASSWORD === password) {
        return NextResponse.json({ status: 200 });
    }
    return NextResponse.json({ status: 401 });
}
