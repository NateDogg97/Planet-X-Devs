import { faqItems } from '@/constants';
import ErrorBoundary from '../ErrorBoundary';

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
    <ErrorBoundary
      fallback="inline"
      title="FAQ Section Error"
      message="Unable to load FAQ section. Please try refreshing the page."
      context={{ component: 'FAQSection', faqCount: faqs.length }}
    >
      <section 
        className={`py-20 bg-white dark:bg-gray-900 ${className}`}
        aria-labelledby="faq-heading"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 
              id="faq-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
            >
              {title}
            </h2>

            <dl 
              className="space-y-6"
              itemScope
              itemType="https://schema.org/FAQPage"
            >
              {faqs.map((faq) => (
                <div 
                  key={faq.id} 
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <dt className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    <h3 itemProp="name">{faq.question}</h3>
                  </dt>
                  <dd 
                    className="text-gray-600 dark:text-gray-300"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text">{faq.answer}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
}