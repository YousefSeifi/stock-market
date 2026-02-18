import Header from "./components/ui/Header";
import { ThemeToggle } from "./components/buttons/ThemeToggle";
import Footer from "./components/ui/Footer";
import BannerCarousel from "./components/layout/BannerCarousel";
import RecentlyViewed from "./components/layout/RecentlyViewed";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="hidden lg:block fixed top-145 left-3">
        <ThemeToggle />
      </div>
      <main className="container mx-auto px-4">
        <BannerCarousel />
        <RecentlyViewed />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
