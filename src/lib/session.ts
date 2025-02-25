import cookies from 'js-cookie';
import { SignJWT, jwtVerify } from 'jose';

const secretKey = new TextEncoder().encode(
    't5lURc51VpVwUi/14byNVfW05qINHEpIao9W+brISoY='
);

export async function encrypt() {
    return new SignJWT({ id: '12345' })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(secretKey);
}

export async function decrypt(session: string | undefined = '') {
    try {
        const { payload } = await jwtVerify(session, secretKey, {
            algorithms: ['HS256'],
        });
        return payload;
    } catch (error) {}
}

export async function createSession() {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const session = await encrypt();

    cookies.set('popsiclesession', session, {
        httpOnly: false,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/',
    });
}
