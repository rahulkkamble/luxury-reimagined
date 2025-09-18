import LuxuryHero from '@/components/LuxuryHero';
import WelcomeSection from '@/components/WelcomeSection';
import TrendingProperties from '@/components/TrendingProperties';
import WhyInvestSection from '@/components/WhyInvestSection';
import WhyLuxoraSection from '@/components/WhyLuxoraSection';
import LuxuryFooter from '@/components/LuxuryFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <LuxuryHero />
      <WelcomeSection />
      <TrendingProperties />
      <WhyInvestSection />
      <WhyLuxoraSection />
      <LuxuryFooter />
    </div>
  );
};

export default Index;
