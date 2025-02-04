'use client'

import { useState } from 'react'
import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { Modal } from '@/components/modal'
import { InsightSvg } from '@/components/InsightSvg'

import type { Metadata } from 'next'



function Hero() {
  const [isModalOpen, setModalOpen] = useState(false)
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="#"
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
            >
              YoYo Mobility starts in France SOON
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
              Streamline Your <span className="text-white">Corporate</span> Travel
          </h1>
            <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
              All Your Ground Transport in One Intelligent, AI-Driven Platform
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button onClick={() => setModalOpen(true)}>Get started</Button>
            <Button variant="secondary" href="/pricing">
              Learn More
            </Button>
          </div>
        </div>
      </Container>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
            Optimize travel costs, reduce your carbon footprint, and simplify employee mobility
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/frame.png"
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>About us</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
          Features & Value Proposition
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Insight"
          title="Unified Mobility Platform"
          description="Experience door‑to‑door journey planning with access to public transport, ride‑hailing, car sharing, micro‑mobility, and chauffeur services—all in one place."
          graphic={
            <div className="h-80 bg-[url(/screenshots/mobility_platform.png)] bg-[size:1000px_560px] bg-[left_-89px_top_-92px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Optimisation"
          title="Smart Travel Cost Optimization"
          description="Leverage dynamic fare management and budget reporting to reduce travel expenses by up to 25%. Avoid surge pricing and streamline your corporate travel policies."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/cost_opt.png)] bg-[size:1100px_650px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Always"
          title="Corporate Travel at Your Fingertips"
          description="Seamless, smart, and always ready—YoYo Mobility is at your disposal 24/7. Just like your keyboard, our AI-powered platform is always within reach, making corporate travel management effortless, efficient, and tailored to your needs."
          graphic={
            <div className="flex size-full pt-10 pl-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Multimodality"
          title="AI-Powered Route Optimization"
          description="Our intelligent journey planner factors in cost, duration, user preferences, and environmental impact. Track your carbon footprint in real time to support your ESG initiatives."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="We Are Global"
          title="Global Travelling All Over the World"
          description="Wherever business takes you, YoYo Mobility keeps you connected. Our platform integrates mobility services across the globe, ensuring seamless travel, optimized routes, and cost-effective solutions—no matter where you are."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Technology</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
            Cutting-Edge Technology
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Connection"
            title="Seamless Integrations"
            description="Connect with your existing ERP, HR, and travel management systems via our secure APIs."
            graphic={
              <div className="h-80 bg-[url(/screenshots/cutting_edge.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />

          <BentoCard
            dark
            eyebrow="Everywhere"
            title="Cross‑Platform & Real‑Time Analytics"
            description="Monitor travel data and performance 24/7. Available on iOS, Android, and Web."
            graphic={
              <div className="h-80 bg-[url(/screenshots/cross_platform.png)] bg-[size:451px_340px] bg-no-repeat" />
            }
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="On the Edge"
            title="AI & IoT "
            description="Experience the power of AI-driven route optimization combined with IoT‑enabled fleet tracking for optimal travel management."
            graphic={
              <div className="h-80 bg-[url(/screenshots/edge.png)] bg-[size:551px_244px] bg-no-repeat bg-center rounded-xl overflow-hidden" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div>
        <DarkBentoSection />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
