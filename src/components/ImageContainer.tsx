import Image from 'next/image';

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f9f9d6" offset="20%" />
      <stop stop-color="#fefee2" offset="50%" />
      <stop stop-color="#f9f9d6" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#fefee2" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
</svg>`;

const toBase64 = (str: string) =>
    typeof window === 'undefined'
        ? Buffer.from(str).toString('base64')
        : window.btoa(str);

export default function ImageContainer({
    url,
    title,
    onlyAlt,
}: {
    url: string;
    title: string;
    onlyAlt?: boolean;
}) {
    return (
        <div className="my-4 flex flex-col shadow-lg">
            <Image
                alt={title}
                className="w-full"
                src={url}
                width={1920}
                height={1080}
                placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(1920, 1080))}`}
            />
            {onlyAlt ? (
                <></>
            ) : (
                <h2 className="self-center py-6 font-semibold italic text-secondary_red">
                    {title}
                </h2>
            )}
        </div>
    );
}
