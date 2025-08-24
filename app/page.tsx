export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-3xl font-bold">Juan Rivera Pérez</h1>
        <p className="text-gray-600 mt-2">
          Web3 builder & business lead at Thirdweb. I write about gaming, tools, and practice.
        </p>
        <nav className="mt-4 flex gap-4 text-blue-600">
          <a href="#essays">Essays</a>
          <a href="#notes">Notes</a>
          <a href="#about">About</a>
          <a href="#subscribe">Subscribe</a>
        </nav>
      </header>

      <section id="overview" className="mb-12">
        <h2 className="text-lg font-semibold mb-2">Overview</h2>
        <p>
          I help teams ship products that feel inevitable. At{" "}
          <a href="https://thirdweb.com" className="text-blue-600">Thirdweb</a> I lead business for
          web3 tooling used by game studios and consumer apps. My work sits at the intersection of
          distribution, incentives, and player experience.
        </p>
        <p className="text-gray-600 mt-2">
          Find me on{" "}
          <a href="https://x.com/juanriveraperez" className="text-blue-600">X</a> and{" "}
          <a href="https://www.linkedin.com/in/juanriveraperez" className="text-blue-600">LinkedIn</a>.{" "}
          Email: hello@juanriveraperez.com
        </p>
      </section>

      <section id="subscribe" className="mb-12">
        <h2 className="text-lg font-semibold mb-2">Subscribe</h2>
        <div className="border rounded-lg p-4">
          {/* Replace with Substack/Beehiiv embed later */}
          <form
            action="https://api.buttondown.email/v1/subscribers"
            method="post"
            target="_blank"
            className="flex flex-col sm:flex-row gap-2"
          >
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="flex-1 border rounded-md px-3 py-2"
            />
            <button type="submit" className="bg-black text-white px-4 py-2 rounded-md">
              Subscribe
            </button>
            <input type="hidden" name="tag" value="homepage" />
          </form>
          <p className="text-gray-600 mt-2">New essays, no spam.</p>
        </div>
      </section>

      <section id="essays" className="mb-12">
        <h2 className="text-lg font-semibold mb-2">Essays</h2>
        <ul className="space-y-2">
          <li>
            <a href="/essays/brief-history-of-nfts" className="text-blue-600">
              A Brief History of NFTs
            </a>
          </li>
          <li>
            <a href="/essays/vibe-coding" className="text-blue-600">
              Vibe Coding: Building for Players, Not Protocols
            </a>
          </li>
        </ul>
      </section>

      <section id="about" className="mb-12">
        <h2 className="text-lg font-semibold mb-2">About</h2>
        <p>
          Puerto Rico → global. I build systems, partnerships, and narratives that compound.
          Interests: game economies, creator tools, distribution, and the craft of business development.
        </p>
      </section>

      <footer className="text-gray-600 mt-12">
        © {new Date().getFullYear()} Juan Rivera Pérez
      </footer>
    </div>
  );
}
