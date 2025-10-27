import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface TutorialMetadata {
  title: string;
  description: string;
  slug: string;
}

export async function getTutorial(slug: string) {
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    metadata: data as TutorialMetadata,
    content,
  };
}

export async function getAllTutorials(): Promise<TutorialMetadata[]> {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(contentDirectory);
  
  const tutorials = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      
      return {
        ...(data as Omit<TutorialMetadata, 'slug'>),
        slug,
      };
    });
  
  return tutorials;
}

export async function getAllTutorialSlugs() {
  const tutorials = await getAllTutorials();
  return tutorials.map((tutorial) => tutorial.slug);
}

