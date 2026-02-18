import Header from "./components/ui/Header";
import { ThemeToggle } from "./components/buttons/ThemeToggle";
import Footer from "./components/ui/Footer";
import  BannerCarousel  from "./components/layout/BannerCarousel.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="hidden lg:block fixed top-145 left-3">
        <ThemeToggle />
      </div>
      <main>
        <BannerCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
