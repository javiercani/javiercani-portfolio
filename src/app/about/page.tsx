import { Metadata } from "next"
import { ComingSoonPage } from "@/components/layout/coming-soon"

export const metadata: Metadata = {
  title: "About | Javier Caniparoli",
  description:
    "Learn more about Javier Caniparoli - Frontend Developer, JavaScript enthusiast, and tech explorer.",
  keywords: [
    "Javier Caniparoli",
    "About Javier",
    "Frontend Developer",
    "JavaScript",
    "Next.js",
    "Vietnam Developer",
  ],
  openGraph: {
    title: "About | Javier Caniparoli",
    description:
      "Discover the story and journey of Javier Caniparoli in the world of web development.",
    url: "https://javiercani.id.vn/about",
    siteName: "Javier Caniparoli",
    type: "website",
    locale: "en_US",
    images: [
      // {
      //   url: "https://javiercani.id.vn/images/seo/about-og-image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "Javier Caniparoli About Page",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Javier Caniparoli",
    description:
      "Learn more about Javier Caniparoli - Frontend Developer and tech enthusiast.",
    // images: ["https://javiercani.id.vn/images/seo/about-og-image.png"],
  },
  alternates: {
    canonical: "https://javiercani.id.vn/about",
  },
}

export default function Page() {
  return <ComingSoonPage pageName="About" />
}
