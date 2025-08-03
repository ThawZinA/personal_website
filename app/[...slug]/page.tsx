import { notFound } from "next/navigation"

interface CatchAllPageProps {
  params: {
    slug: string[]
  }
}

export default function CatchAllPage({ params }: CatchAllPageProps) {
  // This will automatically trigger the 404 page for any unmatched routes
  notFound()
}
