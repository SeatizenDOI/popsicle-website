import FaqItem from "@/app/components/FaqItem";


export default function FaqPage() {
    const faqData = [
        { question: "What is Next.js?", answer: "Next.js is a React framework..." },
        { question: "How do I create a page?", answer: "Use the pages directory..." },
        // Add more questions and answers as needed
    ];

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-8">FAQ</h1>
            {faqData.map((item, index) => (
                <FaqItem key={index} question={item.question} answer={item.answer} />
            ))}
        </div>
    );
};