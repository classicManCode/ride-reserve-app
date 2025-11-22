import Header from "./components/Header";
import Hero from "./components/Hero";
import RentHire from "./components/RentHire";
import Missions from "./components/Missions";
import HeroX2 from "./components/HeroX2";
import secondHero from "../src/assets/second-hero.webp";
import thirdHero from "../src/assets/third-hero.webp";
import CarDisplay from "./components/CarDisplay";
import HeroX3 from "./components/HeroX3";
import CTA from "./components/CTA";


function App() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <Hero />
        <RentHire />
        <Missions header="Number 1 Car Dealers in The Country" />
        <HeroX2
          title="UNLOCK YOUR ADVENTURE, AT THE COST OF NOTHING"
          image={secondHero}
        />
        <Missions header="Meet Our Fleet" />
        <CarDisplay />
        <Missions header="Why Choose Us" />
        <HeroX3 title="Every car in our fleet is regularly inspected and serviced for your safety and peace of mind." image={thirdHero} />

        <Missions header="Please Join In" />
       
          <CTA />
        
        
      </div>
    </>
  );
}

export default App;
