export default function VideoContainer({
    url,
    title,
}: {
    url: string;
    title: string;
}) {
    return (
        <div className="my-4 flex flex-col shadow-lg">
            <iframe
                width="560"
                height="315"
                src={url}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen={true}
                className="w-full"
            ></iframe>
            <h2 className="self-center py-6 font-semibold italic text-secondary_red">
                {title}
            </h2>
        </div>
    );
}
