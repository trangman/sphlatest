'use client';

import React, { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

interface MarkdownContentProps {
  content: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

// KeyTakeaways Component
const KeyTakeaways = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
    <h3 className="text-lg font-bold text-blue-900 mb-4">Key Takeaways</h3>
    <div className="prose prose-sm max-w-none text-gray-800">
      {children}
    </div>
  </div>
);

// QuickAnswer Component
const QuickAnswer = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8 rounded-r-lg">
    <h3 className="text-lg font-bold text-green-900 mb-4">Quick Answer</h3>
    <div className="prose prose-sm max-w-none text-gray-800">
      {children}
    </div>
  </div>
);

// FAQ Accordion Component
const FAQAccordion = ({ faqs }: { faqs: FAQItem[] }) => (
  <div className="my-8">
    {faqs.map((faq, index) => (
      <div key={index} className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
        <details className="group">
          <summary className="flex justify-between items-center font-medium cursor-pointer p-4 bg-white hover:bg-gray-50">
            <span className="text-base md:text-lg font-semibold text-blue-900 pr-2">{faq.question}</span>
            <span className="transition group-open:rotate-180 flex-shrink-0">
              <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <div className="p-4 border-t border-gray-200 bg-gray-50 text-sm md:text-base prose prose-sm max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {faq.answer}
            </ReactMarkdown>
          </div>
        </details>
      </div>
    ))}
  </div>
);

// Parse and render content with custom components
function parseAndRender(content: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let remaining = content;
  let key = 0;

  // Extract FAQAccordion components
  const faqRegex = /<FAQAccordion\s+faqs=\{([\s\S]*?)\}\s*\/>/g;
  let faqMatch;
  const faqPositions: Array<{ start: number; end: number; faqs: FAQItem[] }> = [];

  while ((faqMatch = faqRegex.exec(content)) !== null) {
    try {
      // Parse the JSON-like structure
      const faqsJson = faqMatch[1];
      // Convert to valid JSON
      const cleanedJson = faqsJson
        .replace(/(\w+):/g, '"$1":') // Add quotes to keys
        .replace(/,\s*}/g, '}') // Remove trailing commas
        .replace(/,\s*]/g, ']'); // Remove trailing commas
      
      const faqs = JSON.parse(cleanedJson);
      faqPositions.push({
        start: faqMatch.index,
        end: faqMatch.index + faqMatch[0].length,
        faqs,
      });
    } catch (e) {
      console.error('Error parsing FAQAccordion:', e);
    }
  }

  // Extract KeyTakeaways
  const keyTakeawaysRegex = /<KeyTakeaways>\s*\n([\s\S]*?)\n<\/KeyTakeaways>/g;
  const keyTakeawaysPositions: Array<{ start: number; end: number; content: string }> = [];
  let ktMatch;
  while ((ktMatch = keyTakeawaysRegex.exec(content)) !== null) {
    keyTakeawaysPositions.push({
      start: ktMatch.index,
      end: ktMatch.index + ktMatch[0].length,
      content: ktMatch[1].trim(),
    });
  }

  // Extract QuickAnswer
  const quickAnswerRegex = /<QuickAnswer>\s*\n([\s\S]*?)\n<\/QuickAnswer>/g;
  const quickAnswerPositions: Array<{ start: number; end: number; content: string }> = [];
  let qaMatch;
  while ((qaMatch = quickAnswerRegex.exec(content)) !== null) {
    quickAnswerPositions.push({
      start: qaMatch.index,
      end: qaMatch.index + qaMatch[0].length,
      content: qaMatch[1].trim(),
    });
  }

  // Combine all positions and sort
  const allPositions = [
    ...faqPositions.map(p => ({ ...p, type: 'faq' as const })),
    ...keyTakeawaysPositions.map(p => ({ ...p, type: 'keytakeaways' as const })),
    ...quickAnswerPositions.map(p => ({ ...p, type: 'quickanswer' as const })),
  ].sort((a, b) => a.start - b.start);

  // Split content and render
  let lastIndex = 0;
  for (const pos of allPositions) {
    // Add markdown before this component
    if (pos.start > lastIndex) {
      const markdownContent = content.substring(lastIndex, pos.start);
      if (markdownContent.trim()) {
        parts.push(
          <ReactMarkdown key={key++} remarkPlugins={[remarkGfm]} components={customComponents}>
            {markdownContent}
          </ReactMarkdown>
        );
      }
    }

    // Add the custom component
    if (pos.type === 'faq') {
      parts.push(<FAQAccordion key={key++} faqs={(pos as any).faqs} />);
    } else if (pos.type === 'keytakeaways') {
      parts.push(
        <KeyTakeaways key={key++}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={customComponents}>
            {(pos as any).content}
          </ReactMarkdown>
        </KeyTakeaways>
      );
    } else if (pos.type === 'quickanswer') {
      parts.push(
        <QuickAnswer key={key++}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={customComponents}>
            {(pos as any).content}
          </ReactMarkdown>
        </QuickAnswer>
      );
    }

    lastIndex = pos.end;
  }

  // Add remaining markdown
  if (lastIndex < content.length) {
    const markdownContent = content.substring(lastIndex);
    if (markdownContent.trim()) {
      parts.push(
        <ReactMarkdown key={key++} remarkPlugins={[remarkGfm]} components={customComponents}>
          {markdownContent}
        </ReactMarkdown>
      );
    }
  }

  return parts;
}

// Custom components for ReactMarkdown
const customComponents = {
  a: ({ href, children, ...props }: any) => {
    // Handle /resources/ links - these should point to betterthanfreehold.com
    if (href && href.startsWith('/resources/')) {
      // Extract the slug (remove /resources/ prefix)
      const slug = href.replace('/resources/', '');
      const externalUrl = `https://betterthanfreehold.com/${slug}`;
      return (
        <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline" {...props}>
          {children}
        </a>
      );
    }
    // External links
    if (href && (href.startsWith('http') || href.startsWith('https'))) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline" {...props}>
          {children}
        </a>
      );
    }
    // Internal site links (like /contact)
    return (
      <Link href={href || '#'} className="text-blue-600 hover:text-blue-800 hover:underline" {...props}>
        {children}
      </Link>
    );
  },
};

export default function MarkdownContent({ content }: MarkdownContentProps) {
  const renderedContent = useMemo(() => {
    if (!content || content.trim().length === 0) {
      return <p className="text-gray-500">No content available.</p>;
    }

    return parseAndRender(content);
  }, [content]);

  return (
    <div className="prose prose-lg max-w-none prose-headings:text-blue-900 prose-headings:font-bold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-blockquote:border-l-blue-600 prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-p:text-gray-700 prose-li:text-gray-700 prose-table:w-full prose-table:border-collapse prose-table:my-4 prose-th:bg-gray-100 prose-th:p-3 prose-th:border prose-th:border-gray-300 prose-th:text-left prose-th:font-bold prose-td:p-3 prose-td:border prose-td:border-gray-300 prose-td:text-left">
      {renderedContent}
    </div>
  );
}
