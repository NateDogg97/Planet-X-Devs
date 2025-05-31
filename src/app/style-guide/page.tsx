'use client';

import { theme } from '@/config/theme';
import ThemedSection from '@/components/ThemedSection';
import ThemedContainer from '@/components/ThemedContainer';
import ThemedHeading from '@/components/ThemedHeading';
import ThemedCard from '@/components/ThemedCard';
import ThemedButton from '@/components/ThemedButton';
import Footer from '@/components/Footer';

export default function StyleGuide() {
  return (
    <div className="min-h-screen">
      <ThemedSection background="gradient" padding="large">
        <ThemedContainer>
          <ThemedHeading as="h1" centered color="default">
            Style Guide
          </ThemedHeading>
          <p className="text-center text-xl text-gray-600 dark:text-gray-300 mt-4">
            Theme configuration and design system reference
          </p>
        </ThemedContainer>
      </ThemedSection>

      {/* Colors */}
      <ThemedSection padding="large">
        <ThemedContainer>
          <ThemedHeading as="h2" className="mb-8">Colors</ThemedHeading>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Primary Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {Object.entries(theme.colors.primary).map(([shade, value]) => (
                  <div key={shade} className="text-center">
                    <div className={`bg-${value} h-20 rounded-lg mb-2`}></div>
                    <p className="text-sm font-medium">{shade}</p>
                    <p className="text-xs text-gray-500">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Secondary Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {Object.entries(theme.colors.secondary).map(([shade, value]) => (
                  <div key={shade} className="text-center">
                    <div className={`bg-${value} h-20 rounded-lg mb-2`}></div>
                    <p className="text-sm font-medium">{shade}</p>
                    <p className="text-xs text-gray-500">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ThemedContainer>
      </ThemedSection>

      {/* Typography */}
      <ThemedSection padding="large" background="gray">
        <ThemedContainer>
          <ThemedHeading as="h2" className="mb-8">Typography</ThemedHeading>
          
          <div className="space-y-6">
            <ThemedCard>
              <ThemedHeading as="h1">Heading 1</ThemedHeading>
              <ThemedHeading as="h2">Heading 2</ThemedHeading>
              <ThemedHeading as="h3">Heading 3</ThemedHeading>
              <ThemedHeading as="h4">Heading 4</ThemedHeading>
              <ThemedHeading as="h5">Heading 5</ThemedHeading>
              <ThemedHeading as="h6">Heading 6</ThemedHeading>
            </ThemedCard>

            <ThemedCard>
              <h3 className="text-xl font-semibold mb-4">Paragraph Styles</h3>
              <p className={theme.typography.paragraph.small}>Small paragraph text</p>
              <p className={theme.typography.paragraph.base}>Base paragraph text</p>
              <p className={theme.typography.paragraph.large}>Large paragraph text</p>
              <p className={theme.typography.paragraph.xlarge}>Extra large paragraph text</p>
            </ThemedCard>
          </div>
        </ThemedContainer>
      </ThemedSection>

      {/* Buttons */}
      <ThemedSection padding="large">
        <ThemedContainer>
          <ThemedHeading as="h2" className="mb-8">Buttons</ThemedHeading>
          
          <div className="space-y-6">
            <ThemedCard>
              <h3 className="text-xl font-semibold mb-4">Button Variants</h3>
              <div className="flex flex-wrap gap-4">
                <ThemedButton variant="primary">Primary Button</ThemedButton>
                <ThemedButton variant="secondary">Secondary Button</ThemedButton>
                <ThemedButton variant="outline">Outline Button</ThemedButton>
              </div>
            </ThemedCard>

            <ThemedCard>
              <h3 className="text-xl font-semibold mb-4">Button Sizes</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <ThemedButton size="small">Small</ThemedButton>
                <ThemedButton size="medium">Medium</ThemedButton>
                <ThemedButton size="large">Large</ThemedButton>
              </div>
            </ThemedCard>

            <ThemedCard>
              <h3 className="text-xl font-semibold mb-4">Button States</h3>
              <div className="flex flex-wrap gap-4">
                <ThemedButton>Normal</ThemedButton>
                <ThemedButton disabled>Disabled</ThemedButton>
                <ThemedButton fullWidth>Full Width</ThemedButton>
              </div>
            </ThemedCard>
          </div>
        </ThemedContainer>
      </ThemedSection>

      {/* Spacing */}
      <ThemedSection padding="large" background="gray">
        <ThemedContainer>
          <ThemedHeading as="h2" className="mb-8">Spacing</ThemedHeading>
          
          <ThemedCard>
            <h3 className="text-xl font-semibold mb-4">Section Padding</h3>
            <div className="space-y-4">
              {Object.entries(theme.spacing.section).map(([size, value]) => (
                <div key={size} className="flex items-center gap-4">
                  <span className="font-medium w-20">{size}:</span>
                  <div className={`bg-blue-100 ${value} w-full rounded`}>
                    <div className="text-center text-sm text-blue-800">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </ThemedCard>
        </ThemedContainer>
      </ThemedSection>

      {/* Cards & Shadows */}
      <ThemedSection padding="large">
        <ThemedContainer>
          <ThemedHeading as="h2" className="mb-8">Cards & Shadows</ThemedHeading>
          
          <div className="grid md:grid-cols-3 gap-6">
            <ThemedCard shadow="small">
              <h3 className="text-lg font-semibold mb-2">Small Shadow</h3>
              <p className="text-gray-600">Card with small shadow</p>
            </ThemedCard>
            
            <ThemedCard shadow="medium">
              <h3 className="text-lg font-semibold mb-2">Medium Shadow</h3>
              <p className="text-gray-600">Card with medium shadow</p>
            </ThemedCard>
            
            <ThemedCard shadow="large" hover>
              <h3 className="text-lg font-semibold mb-2">Large Shadow + Hover</h3>
              <p className="text-gray-600">Card with large shadow and hover effect</p>
            </ThemedCard>
          </div>
        </ThemedContainer>
      </ThemedSection>

      {/* Gradients */}
      <ThemedSection padding="large" background="gray">
        <ThemedContainer>
          <ThemedHeading as="h2" className="mb-8">Gradients</ThemedHeading>
          
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(theme.gradients).map(([name, value]) => (
              <div key={name} className={`${value} p-8 rounded-xl`}>
                <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
                <p className="text-white/80">{value}</p>
              </div>
            ))}
          </div>
        </ThemedContainer>
      </ThemedSection>

      <Footer />
    </div>
  );
}