import FAQSection from '@/components/winview/FAQSection';
import Footer from '@/components/winview/Footer';
import Header from '@/components/winview/Header';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-50">
        <img
          src="https://raw.createusercontent.com/e4c7154d-a7bb-4f7a-9126-0a9ba6fa1e50/"
          alt="Background"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#7b5aff]/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

      <Header />
      <div className="pt-32 relative z-10">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}
