// login/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/button'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Mark } from '@/components/logo'
import { Field, Input, Label } from '@headlessui/react'
import { clsx } from 'clsx'

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const res = await fetch('https://swiftdrive.ru/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ email, password }),
      })

      if (!res.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await res.json()

      // Check if token exists in the response
      if (data.token) {
        localStorage.setItem('token', data.token)
        router.push('/customer/')
      } else {
        setError('Login failed: token not received.')
      }
    } catch (err) {
      console.error(err)
      setError('Login failed. Please try again.')
    }
  }

  return (
    <main className="overflow-hidden bg-gray-50">
      <GradientBackground />
      <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
        <div className="w-full max-w-md rounded-xl bg-white ring-1 shadow-md ring-black/5">
          <form onSubmit={handleSubmit} className="p-7 sm:p-11">
            <div className="flex items-start">
              <Link href="/" title="Home">
                <Mark />
              </Link>
            </div>
            <h1 className="mt-8 text-base/6 font-medium">Welcome back!</h1>
            <p className="mt-1 text-sm/5 text-gray-600">
              Sign in to your account to continue.
            </p>

            <Field className="mt-8 space-y-3">
              <Label className="text-sm/5 font-medium">Email</Label>
              <Input
                required
                autoFocus
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={clsx(
                  'block w-full rounded-lg border border-transparent ring-1 shadow-sm ring-black/10',
                  'px-[calc(--spacing(2)-1px)] py-[calc(--spacing(1.5)-1px)] text-base/6 sm:text-sm/6',
                  'data-focus:outline data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-black'
                )}
              />
            </Field>

            <Field className="mt-8 space-y-3">
              <Label className="text-sm/5 font-medium">Password</Label>
              <Input
                required
                type="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={clsx(
                  'block w-full rounded-lg border border-transparent ring-1 shadow-sm ring-black/10',
                  'px-[calc(--spacing(2)-1px)] py-[calc(--spacing(1.5)-1px)] text-base/6 sm:text-sm/6',
                  'data-focus:outline data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-black'
                )}
              />
            </Field>

            {error && (
              <p className="mt-4 text-center text-sm text-red-600">{error}</p>
            )}

            <div className="mt-8 flex items-center justify-between text-sm/5">
              {/* Remember me and forgot password section */}
              <Field className="flex items-center gap-3">
                {/* You can include your Checkbox code here if needed */}
                <Label>Remember me</Label>
              </Field>
              <Link href="/forgot-password" className="font-medium hover:text-gray-600">
                Forgot password?
              </Link>
            </div>

            <div className="mt-8">
              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </div>
          </form>
          <div className="m-1.5 rounded-lg bg-gray-50 py-4 text-center text-sm/5 ring-1 ring-black/5">
            Not a member?{' '}
            <Link href="/create-account" className="font-medium hover:text-gray-600">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}