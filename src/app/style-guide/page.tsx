'use client';

import { theme } from '@/config/theme';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Heading from '@/components/ui/Heading';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function StyleGuide() {
  return (
    <div className="min-h-screen">
      <Section background="gradient">
        <Container>
          <Heading as="h1" centered color="default">
            Style Guide
          </Heading>
          <p className="text-center text-xl text-gray-600 dark:text-gray-300 mt-4">
            Theme configuration and design system reference
          </p>
        </Container>
      </Section>

      {/* Colors */}
      <Section>
        <Container>
          <Heading as="h2" className="mb-8">Colors</Heading>
          
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
        </Container>
      </Section>

      {/* Typography */}
      <Section background="secondary">
        <Container>
          <Heading as="h2" className="mb-8">Typography</Heading>
          
          <div className="space-y-6">
            <Card>
              <Heading as="h1">Heading 1</Heading>
              <Heading as="h2">Heading 2</Heading>
              <Heading as="h3">Heading 3</Heading>
              <Heading as="h4">Heading 4</Heading>
              <Heading as="h5">Heading 5</Heading>
              <Heading as="h6">Heading 6</Heading>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-4">Paragraph Styles</h3>
              <p className={theme.typography.paragraph.small}>Small paragraph text</p>
              <p className={theme.typography.paragraph.base}>Base paragraph text</p>
              <p className={theme.typography.paragraph.large}>Large paragraph text</p>
              <p className={theme.typography.paragraph.xlarge}>Extra large paragraph text</p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Buttons */}
      <Section>
        <Container>
          <Heading as="h2" className="mb-8">Buttons</Heading>
          
          <div className="space-y-6">
            <Card>
              <h3 className="text-xl font-semibold mb-4">Button Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-4">Button Sizes</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="small">Small</Button>
                <Button size="medium">Medium</Button>
                <Button size="large">Large</Button>
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-4">Button States</h3>
              <div className="flex flex-wrap gap-4">
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
                <Button fullWidth>Full Width</Button>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Spacing */}
      <Section background="secondary">
        <Container>
          <Heading as="h2" className="mb-8">Spacing</Heading>
          
          <Card>
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
          </Card>
        </Container>
      </Section>

      {/* Cards & Shadows */}
      <Section>
        <Container>
          <Heading as="h2" className="mb-8">Cards & Shadows</Heading>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card shadow="small">
              <h3 className="text-lg font-semibold mb-2">Small Shadow</h3>
              <p className="text-gray-600">Card with small shadow</p>
            </Card>
            
            <Card shadow="medium">
              <h3 className="text-lg font-semibold mb-2">Medium Shadow</h3>
              <p className="text-gray-600">Card with medium shadow</p>
            </Card>
            
            <Card shadow="large" hover>
              <h3 className="text-lg font-semibold mb-2">Large Shadow + Hover</h3>
              <p className="text-gray-600">Card with large shadow and hover effect</p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Gradients */}
      <Section background="secondary">
        <Container>
          <Heading as="h2" className="mb-8">Gradients</Heading>
          
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(theme.gradients).map(([name, value]) => (
              <div key={name} className={`${value} p-8 rounded-xl`}>
                <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
                <p className="text-white/80">{value}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

    </div>
  );
}