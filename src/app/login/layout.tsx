// login/layout.tsx
import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Sign in to your account to continue.',
}

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}