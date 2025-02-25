import { createSession } from '@/lib/session';

export async function validatePassword(password: string): Promise<boolean> {
    const apiEndpoint = '/api/auth_route';
    const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
    });
    const result = await response.json();

    if (result.status === 200) {
        await createSession();
        return true;
    }
    return false;
}
