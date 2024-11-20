'use client';

import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';
import { FormData } from '@/lib/definition';

export function Contact() {
    const { register, handleSubmit } = useForm<FormData>();

    function onSubmit(data: FormData) {
        sendEmail(data);
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="m-8 max-w-screen-lg self-center sm:w-1/3"
        >
            <div className="mb-5">
                <label
                    htmlFor="name"
                    className="mb-3 block text-base font-medium text-black"
                >
                    Nom complet
                </label>
                <input
                    type="text"
                    placeholder="Nom complet"
                    className="w-full rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 outline-none focus:border-primary_orange focus:shadow-md"
                    {...register('name', { required: true })}
                />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="email"
                    className="mb-3 block text-base font-medium text-black"
                >
                    Adresse Mail
                </label>
                <input
                    type="email"
                    placeholder="example@domain.com"
                    className="w-full rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 outline-none focus:border-primary_orange focus:shadow-md"
                    {...register('email', { required: true })}
                />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="sujet"
                    className="mb-3 block text-base font-medium text-black"
                >
                    Sujet
                </label>
                <input
                    type="sujet"
                    placeholder="Sujet"
                    className="w-full rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 outline-none focus:border-primary_orange focus:shadow-md"
                    {...register('sujet', { required: true })}
                />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="message"
                    className="mb-3 block text-base font-medium text-black"
                >
                    Message
                </label>
                <textarea
                    rows={4}
                    placeholder="Écrivez votre message"
                    className="w-full resize-none rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 outline-none focus:border-primary_orange focus:shadow-md"
                    {...register('message', { required: true })}
                ></textarea>
            </div>
            <div>
                <button className="rounded-md bg-primary_orange px-8 py-3 text-base font-semibold text-white shadow-md outline-none transition-all duration-150 hover:scale-105 active:translate-y-1 active:shadow-inner">
                    Envoyer
                </button>
            </div>
        </form>
    );
}
