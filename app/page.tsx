import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero';
import { WhyMahram } from '@/components/WhyMahram';
import { HowMahramWorks } from '@/components/HowMahramWorks';
import { Available } from '@/components/Available';
import { FAQ } from '@/components/FAQ';
import { Questions } from '@/components/Questions'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <WhyMahram />
    <HowMahramWorks />
    <Available />
    <FAQ />
    <Questions />
    <Footer />
    </>
  );
}
