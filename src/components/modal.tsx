// components/modal.tsx
'use client'

import { useEffect, useRef } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function Modal({ isOpen, onClose }: ModalProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-focus the email input when the modal opens.
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-md rounded-xl bg-white ring-1 shadow-md ring-black/5 p-6">
        {/* Close button in the top-right corner */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close modal"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        {/* Modal content header */}
        <div className="mb-6 text-center">
          <p className="text-lg font-bold">
            Leave your email and we will contact you soon.
          </p>
        </div>

        {/* Email input and Send button */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            // Place your form submission logic here.
            onClose() // Close modal after submission.
          }}
        >
          <div className="mb-4">
            <input
              ref={inputRef}
              type="email"
              required
              autoComplete="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-black py-2 text-white hover:cursor-pointer hover:bg-gray-800"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}