'use client';

import { useState } from 'react';
import { validatePassword } from '@/utils/validate-password';
import { useRouter } from 'next/navigation';

const AuthPage: React.FC = () => {
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const isValid = await validatePassword(password);
        if (isValid) {
            window.location.href = '/';
        } else {
            setError('Le mot de passe semble incorrecte.');
        }
    };

    return (
        <div className="flex h-auto items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="rounded-lg bg-white p-6 shadow-lg"
            >
                <h2 className="mb-4 text-lg font-bold">
                    Entrer le mot de passe
                </h2>
                {error && <p className="text-red-500">{error}</p>}
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-4 w-full border px-4 py-2"
                    placeholder="Mot de passe"
                />
                <button
                    type="submit"
                    className="rounded bg-primary_orange px-4 py-2 text-white hover:bg-secondary_orange"
                >
                    Soumettre
                </button>
            </form>
        </div>
    );
};

export default AuthPage;
