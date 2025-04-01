
import NavBar from "@/components/Navbar/Navbar";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-full flex-col bg-white">
        <NavBar />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
