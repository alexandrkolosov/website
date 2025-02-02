// create-account/page.tsx
import { Button } from '@/components/button'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Mark } from '@/components/logo'
import { clsx } from 'clsx'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Account',
  description: 'Learn how to create an account.',
}

export default function CreateAccount() {
  return (
      <main className="overflow-hidden bg-gray-50">
        <GradientBackground />
        <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
          <div className="w-full max-w-md rounded-xl bg-white ring-1 shadow-md ring-black/5">
            <div className="p-7 sm:p-11">
              <div className="flex items-start">
                <Link href="/" title="Home">
                  <Mark />
                </Link>
              </div>
              <h1 className="mt-8 text-base/6 font-medium">Create Account</h1>
              <p className="mt-1 text-sm/5 text-gray-600">
                To create an account, please contact your department of Corporate traveling.
              </p>
              <div className="m-1.5 rounded-lg bg-gray-50 py-4 text-center text-sm/5 ring-1 ring-black/5">
                <Link href="/login" className="font-medium hover:text-gray-600">
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}