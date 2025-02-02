/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'
// Force static rendering
export const dynamic = 'force-static'

// Re-export metadata and viewport from next-sanity/studio
export { metadata, viewport } from 'next-sanity/studio'

// Add generateStaticParams() for static export compatibility
export async function generateStaticParams() {
  // Return a default parameter so that the route "/studio" is statically generated.
  return [
    {
      tool: []
    }
  ]
}

export default function StudioPage() {
  return <NextStudio config={config} />
}