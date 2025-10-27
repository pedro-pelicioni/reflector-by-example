'use client';

import React, { useState } from 'react';

interface PlaygroundProps {
  snippetFile: string;
  githubUser?: string;
  githubRepo?: string;
  height?: string;
}

export function Playground({
  snippetFile,
  githubUser = 'pedro-pelicioni',
  githubRepo = 'reflector-by-example',
  height = '600px',
}: PlaygroundProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Construct the GitHub Raw URL
  const rawUrl = `https://raw.githubusercontent.com/${githubUser}/${githubRepo}/main/snippets/${snippetFile}`;
  
  // Construct the Soroban Playground URL with the code URL parameter
  const playgroundUrl = `https://soropg.com/?codeUrl=${encodeURIComponent(rawUrl)}`;

  return (
    <div className="playground-wrapper my-8 rounded-lg overflow-hidden border border-slate-700">
      {/* Header with external link */}
      <div className="bg-slate-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-indigo-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          <span className="text-sm font-medium text-slate-300">
            Interactive Playground
          </span>
        </div>
        <a
          href={playgroundUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1"
        >
          Open in Soroban IDE
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>

      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900 z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto mb-4"></div>
            <p className="text-slate-400 text-sm">Loading playground...</p>
          </div>
        </div>
      )}

      {/* Iframe container */}
      <div className="relative">
        <iframe
          src={playgroundUrl}
          onLoad={() => setTimeout(() => setIsLoading(false), 1000)}
          title="Soroban Playground"
          className="w-full border-0"
          style={{ height, minHeight: '500px' }}
          allowFullScreen
        />
      </div>
    </div>
  );
}

