// app/forgot-password/page.tsx
import ForgotPasswordForm from './ForgotPasswordForm'
import { GradientBackground } from '@/components/gradient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forgot Password',
  description: 'Reset your password by providing your email address.',
}

export default function ForgotPasswordPage() {
  return (
      <main className="overflow-hidden bg-gray-50">
        <GradientBackground />
        <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
          <div className="w-full max-w-md rounded-xl bg-white ring-1 shadow-md ring-black/5">
            <ForgotPasswordForm />
          </div>
        </div>
      </main>
  )
}