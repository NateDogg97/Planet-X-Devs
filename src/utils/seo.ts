// JSON-LD helpers. Structured data is built from the same constants the pages
// render, so the markup can't drift from what visitors (and crawlers) see.

export const SITE_URL = 'https://www.planetxdevs.com';
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

interface FAQ {
  question: string;
  answer: string;
}

export function faqPageSchema(id: string, faqs: FAQ[]) {
  return {
    '@type': 'FAQPage',
    '@id': id,
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
}

/**
 * Turns a display price like "$2,000 - $15,000" or "$900-1,100" into a
 * PriceSpecification. Pass `unitText` (e.g. "MONTH") for recurring prices.
 */
export function priceSpecification(price: string, unitText?: string) {
  const amounts = (price.match(/\d[\d,]*/g) ?? []).map((n) => Number(n.replace(/,/g, '')));
  if (amounts.length === 0) return undefined;
  const [minPrice, maxPrice = minPrice] = amounts;

  return {
    '@type': unitText ? 'UnitPriceSpecification' : 'PriceSpecification',
    priceCurrency: 'USD',
    minPrice,
    maxPrice,
    ...(unitText && { unitText }),
  };
}
