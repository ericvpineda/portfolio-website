import "@styles/globals.css"

export const metadata = {
  title: "Eric Pineda Portfolio",
  description: "A page about me.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
