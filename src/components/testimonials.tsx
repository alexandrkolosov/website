'use client'

import * as Headless from '@headlessui/react'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { clsx } from 'clsx'
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  type HTMLMotionProps,
} from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import useMeasure, { type RectReadOnly } from 'react-use-measure'
import { Container } from './container'
import { Link } from './link'
import { Heading, Subheading } from './text'

const testimonials = [
  {
    img: '/testimonials/tina-yards.jpg',
    name: 'Angela M.',
    title: 'Corporate Travel Manager, Leading Multinational',
    quote:
        'YoYo Mobility’s innovative and reliable platform streamlines corporate travel while significantly cutting costs.',
  },
  {
    img: '/testimonials/conor-neville.jpg',
    name: 'Mark T.',
    title: 'CFO, Global Tech Solutions',
    quote:
        'With YoYo Mobility, our company enjoys a reliable, cutting-edge travel management solution that saves money and time.',
  },
  {
    img: '/testimonials/amy-chase.jpg',
    name: 'Amy C.',
    title: 'CEO, Innovate Industries',
    quote:
        'YoYo Mobility offers a unified, innovative travel platform that consistently delivers cost savings and operational efficiency.',
  },
  {
    img: '/testimonials/veronica-winton.jpg',
    name: 'Lisa S.',
    title: 'Sustainability Officer, EcoEnterprise',
    quote:
        'We trust YoYo Mobility for its state-of-the-art, reliable technology that reduces expenses while supporting sustainability.',
  },
  {
    img: '/testimonials/dillon-lenora.jpg',
    name: 'Dillon L.',
    title: 'Fleet manager, Urban Mobility Group',
    quote:
        'YoYo Mobility’s IoT-enabled tracking and seamless integration provide a reliable, innovative system that optimizes routes and saves money.',
  },
  {
    img: '/testimonials/harriet-arron.jpg',
    name: 'Harriet A.',
    title: 'Corporate Travel Manager, Worldwide Innovations',
    quote:
        'Our travel managers value YoYo Mobility’s innovative, reliable platform for its exceptional ability to control costs and enhance efficiency.',
  },
]

function TestimonialCard({
                           name,
                           title,
                           img,
                           children,
                           bounds,
                           scrollX,
                           ...props
                         }: {
  img: string
  name: string
  title: string
  children: React.ReactNode
  bounds: RectReadOnly
  scrollX: MotionValue<number>
} & HTMLMotionProps<'div'>) {
  let ref = useRef<HTMLDivElement | null>(null)

  let computeOpacity = useCallback(() => {
    let element = ref.current
    if (!element || bounds.width === 0) return 1

    let rect = element.getBoundingClientRect()

    if (rect.left < bounds.left) {
      let diff = bounds.left - rect.left
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else if (rect.right > bounds.right) {
      let diff = rect.right - bounds.right
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else {
      return 1
    }
  }, [ref, bounds.width, bounds.left, bounds.right])

  let opacity = useSpring(computeOpacity(), {
    stiffness: 154,
    damping: 23,
  })

  useLayoutEffect(() => {
    opacity.set(computeOpacity())
  }, [computeOpacity, opacity])

  useMotionValueEvent(scrollX, 'change', () => {
    opacity.set(computeOpacity())
  })

  return (
      <motion.div
          ref={ref}
          style={{ opacity }}
          {...props}
          className="relative flex aspect-9/16 w-72 shrink-0 snap-start scroll-ml-[var(--scroll-padding)] flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-96"
      >
        <img
            alt=""
            src={img}
            className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
        />
        <div
            aria-hidden="true"
            className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-[calc(7/16*100%)] ring-1 ring-gray-950/10 ring-inset sm:from-25%"
        />
        <figure className="relative p-10">
          <blockquote>
            <p className="relative text-xl/7 text-white">
            <span aria-hidden="true" className="absolute -translate-x-full">
              “
            </span>
              {children}
              <span aria-hidden="true" className="absolute">
              ”
            </span>
            </p>
          </blockquote>
          <figcaption className="mt-6 border-t border-white/20 pt-6">
            <p className="text-sm/6 font-medium text-white">{name}</p>
            <p className="text-sm/6 font-medium">
            <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
              {title}
            </span>
            </p>
          </figcaption>
        </figure>
      </motion.div>
  )
}

function CallToAction() {
  return (
      <div>
        <p className="max-w-sm text-sm/6 text-gray-600">
          We collaborate with top-tier transport providers and technology partners to deliver unparalleled service.
        </p>
        <div className="mt-2">
          <Link
              href="#"
              className="inline-flex items-center gap-2 text-sm/6 font-medium text-pink-600"
          >
            Get started
            <ArrowLongRightIcon className="size-5" />
          </Link>
        </div>
      </div>
  )
}

export function Testimonials() {
  let scrollRef = useRef<HTMLDivElement | null>(null)
  let { scrollX } = useScroll({ container: scrollRef })
  let [setReferenceWindowRef, bounds] = useMeasure()
  let [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollX, 'change', (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current!.children[0].clientWidth))
  })

  function scrollTo(index: number) {
    let gap = 32
    let width = (scrollRef.current!.children[0] as HTMLElement).offsetWidth
    scrollRef.current!.scrollTo({ left: (width + gap) * index })
  }

  return (
      <div className="overflow-hidden py-32">
        <Container>
          <div ref={setReferenceWindowRef}>
            <Subheading>What everyone is saying</Subheading>
            <Heading as="h3" className="mt-2">
              Trusted by professionals.
            </Heading>
          </div>
        </Container>
        <div
            ref={scrollRef}
            className={clsx([
              'mt-16 flex gap-8 px-[var(--scroll-padding)]',
              '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
              'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
              '[--scroll-padding:max(--spacing(6),calc((100vw-(var(--container-2xl)))/2))] lg:[--scroll-padding:max(--spacing(8),calc((100vw-(var(--container-7xl)))/2))]',
            ])}
        >
          {testimonials.map(({ img, name, title, quote }, testimonialIndex) => (
              <TestimonialCard
                  key={testimonialIndex}
                  name={name}
                  title={title}
                  img={img}
                  bounds={bounds}
                  scrollX={scrollX}
                  onClick={() => scrollTo(testimonialIndex)}
              >
                {quote}
              </TestimonialCard>
          ))}

        </div>
        <Container className="mt-16">
          {/* You can keep the CallToAction above the navigation arrows if desired */}
          <CallToAction />
          <div className="mt-4 flex justify-center items-center gap-8">
            <Headless.Button
                onClick={() => activeIndex > 0 && scrollTo(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label="Previous testimonial"
                className={clsx(
                    'p-2 rounded-full border border-transparent bg-gray-300 transition hover:bg-gray-400',
                    'disabled:opacity-50'
                )}
            >
              {/* Reuse the right arrow icon rotated 180 degrees for the left arrow */}
              <ArrowLongRightIcon className="w-6 h-6 transform rotate-180" />
            </Headless.Button>
            <Headless.Button
                onClick={() =>
                    activeIndex < testimonials.length - 1 && scrollTo(activeIndex + 1)
                }
                disabled={activeIndex === testimonials.length - 1}
                aria-label="Next testimonial"
                className={clsx(
                    'p-2 rounded-full border border-transparent bg-gray-300 transition hover:bg-gray-400',
                    'disabled:opacity-50'
                )}
            >
              <ArrowLongRightIcon className="w-6 h-6" />
            </Headless.Button>
          </div>
        </Container>
      </div>
  )
}