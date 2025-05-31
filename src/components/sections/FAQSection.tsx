import { faqItems } from '@/constants';

interface FAQSectionProps {
  title?: string;
  faqs?: typeof faqItems;
  className?: string;
}

export default function FAQSection({
  title = "Frequently Asked Questions",
  faqs = faqItems,
  className = ""
}: FAQSectionProps) {
  return (
    <section className={`py-20 bg-white dark:bg-gray-900 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            {title}
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}