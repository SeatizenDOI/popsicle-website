import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';


export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-col justify-between min-h-screen mx-8' id='Template'>
            <Header />
            <div className='mt-40'>{children}</div>
            <Footer />
        </div>
    );
}