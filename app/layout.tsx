import "./globals.css";

export const metadata = {
  title: "JRP — Juan Rivera Pérez",
  description: "Long form content & onchain collections.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans flex flex-col min-h-screen">
        {/* header - appears on every page */}
        <header className="container flex items-center justify-between py-6">
          <a href="/" className="text-sm font-semibold tracking-wide hover:underline">JRP</a>
          <nav className="flex items-center gap-3">
            <a href="/content" className="text-sm border border-neutral-700/70 rounded-md px-3 py-1.5 hover:bg-neutral-800/70 transition">Content</a>
            <a href="/about"   className="text-sm border border-neutral-700/70 rounded-md px-3 py-1.5 hover:bg-neutral-800/70 transition">About</a>
          </nav>
        </header>

        {/* main content */}
        <div className="flex-1">{children}</div>

        {/* footer */}
        <footer className="border-t border-neutral-800 py-6 text-sm text-neutral-400">
          <div className="container flex flex-col sm:flex-row justify-between gap-4">
            <div>© {new Date().getFullYear()} JRP</div>
            <div className="space-x-4">
              <a href="https://warpcast.com/Juan" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">Warpcast</a>
              <a href="https://instagram.com/jrp_gg"  target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">Instagram</a>
              <a href="https://x.com/jrp_GG"          target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">Twitter</a>
              <a href="mailto:juanriveraperez00@gmail.com" className="text-red-500 hover:underline">Email</a>
              <a href="https://t.me/juanriveraperez"  target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">Telegram</a>
              <a href="https://app.ens.domains/name/juanriveraperez.eth" target="_blank" rel="noopener noreferrer" className="font-mono text-red-500 hover:underline">juanriveraperez.eth</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
