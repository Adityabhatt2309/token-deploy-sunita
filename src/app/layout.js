import "./globals.css";

export const metadata = {
  title: "Token Deployer ||",
  description: '...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
