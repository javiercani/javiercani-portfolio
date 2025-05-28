import { FullScreen } from "@/components/full-screen"
import { ExperienceTimeline } from "./containers/experience-timeline"

export const metadata = {
  title: "Experience | Javier Caniparoli",
  description:
    "Explore the professional journey of Javier Caniparoli - frontend developer with experience in modern JavaScript frameworks.",
  openGraph: {
    title: "Experience | Javier Caniparoli",
    description:
      "Frontend Developer with hands-on experience in React, Next.js, and modern UI/UX design.",
    url: "https://javiercani.id.vn/experience",
    siteName: "Javier Caniparoli",
    images: [
      // {
      //   url: "https://javiercani.id.vn/images/seo/experience-og-image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "Javier Caniparoli Experience Page",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience | Javier Caniparoli",
    description:
      "Check out Javier Caniparoli's past work and achievements in frontend development.",
    //   images: ["https://javiercani.id.vn/images/seo/experience-og-image.png"],
  },
  alternates: {
    canonical: "https://javiercani.id.vn/experience",
  },
}

export default function Page() {
  return (
    <div>
      <FullScreen>
        <ExperienceTimeline />
      </FullScreen>
    </div>
  )
}
