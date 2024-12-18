// /middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from '@/lib/session';

export default async function middleware(request: NextRequest) {
    const cookie = request.cookies.get('popsiclesession')?.value;
    if (!cookie) {
        return NextResponse.redirect(new URL('/auth', request.url));
    }
    const token = await decrypt(cookie);

    if (!token) {
        // Redirect to login if not authenticated
        return NextResponse.redirect(new URL('/auth/', request.url));
    }
    return NextResponse.next();
}

// Apply middleware to specific routes
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|auth).*)',
    ],
};
