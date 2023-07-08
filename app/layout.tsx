import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PeoplePlus - AI-Powered Mock Interviews",
  openGraph: {
    title: "PeoplePlus - AI-Powered Mock Interviews",
    description:
      "PeoplePlus is an AI-powered mock interview platform that helps you practice for your next job interview.",
    images: [
      {
        url: "https://interview.peopleplus.io/opengraph-image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PeoplePlus - AI-Powered Mock Interviews",
    description:
      "PeoplePlus is an AI-powered mock interview platform that helps you practice for your next job interview.",
    images: ["https://interview.peopleplus.io/opengraph-image"],
    creator: "@tmeyer_me",
  },
  metadataBase: new URL("https://interview.peopleplus.io"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
