import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import UseCases from "@/components/use-cases";
import HowItWorks from "@/components/how-it-works";
import AntesDespues from "@/components/antes-despues";
import Plans from "@/components/plans";
import Portfolio from "@/components/portfolio";
import Faq from "@/components/faq";
import CtaFinal from "@/components/cta-final";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <UseCases />
        <AntesDespues />
        <HowItWorks />
        <Plans />
        <Portfolio />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
