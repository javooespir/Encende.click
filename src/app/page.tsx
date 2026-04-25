import Nav from "@/components/nav";
import Hero from "@/components/hero";
import UseCases from "@/components/use-cases";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";
import CtaFinal from "@/components/cta-final";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <UseCases />
        <HowItWorks />
        <Testimonials />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
