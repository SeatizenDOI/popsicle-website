import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="mx-8 flex min-h-screen flex-col justify-between"
            id="Template"
        >
            <Header />
            <div className="mt-40">{children}</div>
            <Footer />
        </div>
    );
}
