import FaqItem from '@/components/FaqItem';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FAQ',
    description: 'Foires aux questions',
};

export default function FaqPage() {
    const faqData = [
        {
            question: 'What is Next.js?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas nibh ac dolor sodales aliquam a vel sapien. Phasellus bibendum libero nec fringilla tempus. Curabitur id metus id mi maximus mollis sed ac mi. Nunc commodo id enim et varius. Quisque ac tempor ex. Morbi elementum ac ex nec condimentum. Praesent eleifend, dolor quis malesuada elementum, felis est posuere arcu, at posuere augue diam eu massa. Morbi hendrerit rutrum nulla, ac fermentum nibh interdum ullamcorper. Morbi sed placerat magna, a pulvinar odio. In vitae dui sed justo bibendum tincidunt mattis eget massa. ',
        },
        {
            question: 'How do I create a page?',
            answer: ' Donec ullamcorper laoreet nisl cursus dignissim. Morbi in lacus nec metus varius rhoncus. Phasellus in pellentesque risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed non eros bibendum, laoreet elit id, dignissim sapien. Donec sodales nisl lacus, ut malesuada tortor dapibus sed. Duis vehicula turpis sit amet justo efficitur, in semper elit sodales. Vivamus facilisis tortor a metus venenatis, at aliquet lorem tempus. Fusce mattis gravida eros, eu venenatis nisi. Vivamus efficitur dui et efficitur ultricies. Vivamus placerat magna diam, non auctor nunc tempus gravida. Nunc vehicula auctor augue faucibus finibus. Integer non malesuada erat.',
        },
        {
            question: 'How do I create a page?',
            answer: ' Donec ullamcorper laoreet nisl cursus dignissim. Morbi in lacus nec metus varius rhoncus. Phasellus in pellentesque risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed non eros bibendum, laoreet elit id, dignissim sapien. Donec sodales nisl lacus, ut malesuada tortor dapibus sed. Duis vehicula turpis sit amet justo efficitur, in semper elit sodales. Vivamus facilisis tortor a metus venenatis, at aliquet lorem tempus. Fusce mattis gravida eros, eu venenatis nisi. Vivamus efficitur dui et efficitur ultricies. Vivamus placerat magna diam, non auctor nunc tempus gravida. Nunc vehicula auctor augue faucibus finibus. Integer non malesuada erat.',
        },
        {
            question: 'How do I create a page?',
            answer: ' Donec ullamcorper laoreet nisl cursus dignissim. Morbi in lacus nec metus varius rhoncus. Phasellus in pellentesque risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed non eros bibendum, laoreet elit id, dignissim sapien. Donec sodales nisl lacus, ut malesuada tortor dapibus sed. Duis vehicula turpis sit amet justo efficitur, in semper elit sodales. Vivamus facilisis tortor a metus venenatis, at aliquet lorem tempus. Fusce mattis gravida eros, eu venenatis nisi. Vivamus efficitur dui et efficitur ultricies. Vivamus placerat magna diam, non auctor nunc tempus gravida. Nunc vehicula auctor augue faucibus finibus. Integer non malesuada erat.',
        },
    ];

    return (
        <div className="mx-auto max-w-7xl p-4">
            <h1 className="mb-8 text-center text-2xl font-bold">
                Foires aux questions
            </h1>
            {faqData.map((item, index) => (
                <FaqItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                />
            ))}
        </div>
    );
}
