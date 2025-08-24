import "./globals.css";

export const metadata = {
  title: "Juan Rivera Pérez",
  description: "Web3 builder. Essays on gaming, tools, and practice.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
