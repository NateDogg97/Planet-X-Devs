import Icon from '../ui/Icon';
import Section from '../layout/Section';
import Container from '../layout/Container';

interface AboutStorySectionProps {
  title?: string;
  story?: {
    intro: string;
    problem: string;
    solution: string;
  };
  highlights?: {
    title: string;
    items: string[];
  };
  className?: string;
}

const defaultStory = {
  intro: "After years of working with marketing agencies, I noticed a pattern: talented agencies were losing opportunities because they couldn't find reliable development partners.",
  problem: "Some were burned by offshore teams that overpromised and underdelivered. Others struggled with freelancers who disappeared mid-project. And many were frustrated by developers who couldn't communicate effectively with non-technical clients.",
  solution: "I created Planet X Devs to be the development partner I wish existed when I was on the agency side - reliable, communicative, and focused on making agencies look good."
};

const defaultHighlights = {
  title: "What Sets Us Apart",
  items: [
    "100% white-label - your brand, always",
    "Agency-first mindset in everything we do",
    "Communication that makes sense to your clients",
    "Pricing that lets you maintain healthy margins"
  ]
};

export default function AboutStorySection({
  title = "Why I Started Planet X Devs",
  story = defaultStory,
  highlights = defaultHighlights,
  className = ""
}: AboutStorySectionProps) {
  return (
    <Section background="gray" className={className}>
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {story.intro}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {story.problem}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {story.solution}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {highlights.title}
              </h3>
              <ul className="space-y-4">
                {highlights.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Icon name="check" className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}