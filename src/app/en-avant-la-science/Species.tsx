import ImageContainer from '@/components/ImageContainer';

export function Species() {
    return (
        <div>
            <ImageContainer
                url="/merou_comparaison.jpeg"
                title="Comparaison des merous"
                onlyAlt={true}
                className="my-12"
            />

            <div className="pt-8">
                <ImageContainer
                    url="/cycle_vie.jpg"
                    title="Cycle de vie d'un Croissant Queue Jaune"
                    onlyAlt={true}
                    className="my-12"
                />
            </div>
        </div>
    );
}
