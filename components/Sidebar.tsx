'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  title: string;
  href: string;
}

interface NavSection {
  section: string;
  items: NavItem[];
}

const navigation: NavSection[] = [
  {
    section: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/introduction' },
      { title: 'Installation', href: '/installation' },
    ],
  },
  {
    section: 'Basics',
    items: [
      { title: 'First Query', href: '/first-query' },
      { title: 'Price Consumer', href: '/price-consumer' },
    ],
  },
  {
    section: 'Advanced',
    items: [
      { title: 'Multi-Asset Queries', href: '/multi-asset' },
      { title: 'Lending Protocol', href: '/lending-protocol' },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-slate-700 bg-slate-900 overflow-y-auto">
      <nav className="p-4 space-y-8">
        {navigation.map((section) => (
          <div key={section.section}>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              {section.section}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                        isActive
                          ? 'bg-indigo-600 text-white font-medium'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

