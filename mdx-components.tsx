import type { MDXComponents } from 'mdx/types';
import { Playground } from './components/Playground';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Playground,
  };
}

