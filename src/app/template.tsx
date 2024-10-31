import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';


export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-col justify-between min-h-screen' id='Template'>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
}