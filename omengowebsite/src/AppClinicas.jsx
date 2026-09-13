import SkipLink from './components/SkipLink'
import Header from './components/Header'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import ComparisonTable from './components/ComparisonTable'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import StickyMobileCTA from './components/StickyMobileCTA'
import { clinicasContent as content } from './content/clinicas'

import './components/Logo.css'
import './components/Header.css'
import './components/Hero.css'
import './components/ChatMockup.css'
import './components/ProblemSection.css'
import './components/HowItWorks.css'
import './components/Features.css'
import './components/ComparisonTable.css'
import './components/FAQ.css'
import './components/FinalCTA.css'
import './components/Footer.css'
import './components/ShareButton.css'
import './components/StickyMobileCTA.css'

export default function AppClinicas() {
  return (
    <>
      <SkipLink />
      <Header vertical={content.vertical} ctaMessage={content.hero.ctaMessage} />
      <main id="contenido">
        <Hero content={content.hero} />
        <ProblemSection content={content.problem} />
        <HowItWorks content={content.howItWorks} />
        <Features content={content.features} />
        <ComparisonTable content={content.comparison} />
        <FAQ content={content.faq} />
        <FinalCTA content={content.finalCta} />
      </main>
      <Footer vertical={content.vertical} tagline={content.footerTagline} ctaMessage={content.hero.ctaMessage} />
      <StickyMobileCTA label="Hablar por WhatsApp" message={content.hero.ctaMessage} />
    </>
  )
}
