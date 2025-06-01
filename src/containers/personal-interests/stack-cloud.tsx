"use client"

import { IconCloud } from "@/components/magicui/icon-cloud"

const slugs = [
  "typescript",
  "javascript",
  "python",
  "angularJs",
  "react",
  "html5",
  "css3",
  "openai",
  "colab",
  "postgresql",
  "mysql",
  "nginx",
  "vercel",
  "testinglibrary",
  "flask",
  "n8n",
  "docker",
  "git",
  "openproject",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
  "vscode",
  "nextjs",
  "tailwindcss",
  "materialui",
]

export function StackCloud() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  )

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <div className="scale-75">
        <IconCloud images={images} />
      </div>
    </div>
  )
}
