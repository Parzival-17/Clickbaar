import Hero from '../sections/Hero'
import LogoBar from '../sections/LogoBar'
import Services from '../sections/Services'
import Work from '../sections/Work'
import Process from '../sections/Process'
import Testimonial from '../sections/Testimonial'
import Pricing from '../sections/Pricing'
import FAQ from '../sections/FAQ'
import CTA from '../sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <LogoBar />
      <Services />
      <Work />
      <Process />
      <Testimonial />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  )
}
