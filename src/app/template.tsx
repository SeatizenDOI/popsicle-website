import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col justify-between">
            <Header />
            <div className="mt-40">{children}</div>
            <Footer />
        </div>
    );
}
