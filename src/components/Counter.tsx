export function Counter({ isNavMenu }: { isNavMenu: boolean }) {
    return (
        <div
            className={` ${
                isNavMenu ? 'flex rounded-lg' : 'hidden sm:flex'
            } flex-row border bg-secondary_red px-4`}
        >
            <h2 className="w-64 px-2 py-4 text-center text-white">
                <span className="text-lg font-extrabold text-primary_orange">
                    0
                </span>{' '}
                / 1000 mérous échantillonnés
            </h2>
        </div>
    );
}
