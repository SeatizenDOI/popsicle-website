import Link from 'next/link';

export default function PrimaryButton({
    link_ref,
    name,
    new_page,
}: {
    link_ref: string;
    name: string;
    new_page: boolean;
}) {
    return (
        <Link
            href={link_ref}
            prefetch={true}
            target={new_page ? '_blank' : undefined}
            className="inline-block w-fit self-center rounded-lg bg-primary_orange px-8 py-4 text-xl font-bold text-white shadow-md transition duration-200 hover:bg-primary_red active:translate-y-1 active:shadow-inner"
        >
            <p>{name}</p>
        </Link>
    );
}
