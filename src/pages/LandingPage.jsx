import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Sections from "../components/Sections";
import { useState } from "react";

const LandingPage = () => {
  const [searched, setSearched] = useState(false);

  return (
    <div>
      <Hero
        searched={() => {
          setSearched(true);
        }}
      />
      {!searched && <Sections />}

      <Footer />
    </div>
  );
};

export default LandingPage;
