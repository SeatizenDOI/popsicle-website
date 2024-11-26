import Image from 'next/image';

export default function ImageContainer({
    url,
    title,
}: {
    url: string;
    title: string;
}) {
    return (
        <div className="my-4 flex flex-col shadow-lg">
            <Image
                alt={title}
                className="w-full"
                src={url}
                width={250}
                height={250}
            />
            <h2 className="self-center py-6 font-semibold italic text-secondary_red">
                {title}
            </h2>
        </div>
    );
}
