import Link from 'next/link';

export default function PrimaryButton({
    link_ref,
    name,
}: {
    link_ref: string;
    name: string;
}) {
    return (
        <Link
            // href={'https://forms.gle/JCbwYwZUYQESgGDQ7'}
            href={link_ref}
            className="inline-block w-fit self-center rounded-lg bg-primary_orange px-8 py-4 text-xl font-bold text-white shadow-md transition duration-200 hover:bg-primary_red"
        >
            <p>{name}</p>
        </Link>
    );
}
