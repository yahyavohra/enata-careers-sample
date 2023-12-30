import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";
import CategoryFilters from "@/components/CategoryFilters";
import SearchListing from "@/components/SearchListing";
import HeroBanner from "@/components/HeroBanner";
import "@/app/globals.scss";
export default function Home() {
  return (
    <main className="relative min-h-[100vh]">
      <Header />
      <HeroBanner />
      <section className="pb-24 pt-6 relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="md:grid  md:grid-cols-12 md:gap-10">
          <CategoryFilters />
          <SearchListing />
        </div>
      </section>
      <Footer />
    </main>
  );
}
