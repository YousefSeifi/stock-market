// import Image from "next/image";
// import Link from "next/link";

import Header from "./components/ui/Header";
import { ThemeToggle } from "./components/buttons/ThemeToggle";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="hidden lg:block fixed top-145 left-3">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Home;

