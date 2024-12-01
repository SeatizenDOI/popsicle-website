export function Counter({ isNavMenu }: { isNavMenu: boolean }) {
    return (
        <div
            className={` ${
                isNavMenu ? 'flex rounded-lg' : 'hidden sm:flex'
            } flex-row border bg-secondary_red px-4`}
        >
            <h2 className="w-32 px-2 py-4 text-center text-white">
                <span className="text-lg font-extrabold text-primary_orange">
                    0
                </span>{' '}
                / 950 adultes
            </h2>
            <h2 className="w-32 px-2 py-4 text-center text-white">
                <span className="text-lg font-extrabold text-primary_orange">
                    0
                </span>{' '}
                / 50 juvéniles
            </h2>
        </div>
    );
}
