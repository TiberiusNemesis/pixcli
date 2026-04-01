import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'pixcli',
    template: '%s | pixcli',
  },
  description: 'CLI tool and Rust library for programmatic Pix payments in Brazil',
  openGraph: {
    title: 'pixcli',
    description: 'CLI tool and Rust library for programmatic Pix payments in Brazil',
    images: [
      {
        url: '/api/og?title=pixcli',
        width: 1200,
        height: 630,
        alt: 'pixcli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'pixcli',
    description: 'CLI tool and Rust library for programmatic Pix payments in Brazil',
    images: ['/api/og?title=pixcli'],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col antialiased">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
