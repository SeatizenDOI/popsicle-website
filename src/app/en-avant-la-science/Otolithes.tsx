import ImageContainer from '@/components/ImageContainer';
import VideoContainer from '@/components/VideoContainer';

export function Otolithes() {
    return (
        <div>
            <p className="text-justify">
                Les otolithes permettent de connaître l'âge et la croissance du
                poisson. Ce sont des concrétions calcaires situées dans
                l'oreille interne du poisson, qui lui servent à s'orienter dans
                l'espace et à percevoir les sons et vibrations.
            </p>

            <ImageContainer
                url="/otolithe.jpg"
                title="Positionnement des otolithes."
                onlyAlt={true}
                className="my-12"
            />
            <p className="py-12 text-justify">
                Il existe 3 paires d'otolithes, mais seule la grande, appelée
                Sagitta, est conservée. Pour déterminer l'âge du poisson, on
                compte les stries claires et sombres, semblables aux cernes d'un
                arbre.
            </p>

            <VideoContainer
                url="https://www.youtube.com/embed/0z17x3t2r0Q?si=jTOHUDZLVwXsTzqP"
                title="Échantillonnage biologique de poissons récifaux : Extraction des otolithes"
            />
        </div>
    );
}
