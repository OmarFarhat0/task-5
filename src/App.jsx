//Import components
import BannerSection from "./components/bannerSection/BannerSection";
import BestDealsSection from "./components/bestDealsSection/BestDealsSection";
import HowWorksSection from "./components/howWorksSection/HowWorksSection";
import TrendingSection from "./components/trendingSection/TrendingSection";
import HeroSection from "./components/heroSection/HeroSection";
import MyNavbar from "./components/myNavbar/MyNavbar";
import Footer from "./components/footer/Footer";

//Import icons
import locationClSvg from "./assets/icons/locationCl.svg";
import dollarSvg from "./assets/icons/dollar.svg";
import homeSvg from "./assets/icons/home.svg";
import searchSvg from "./assets/icons/search.svg";
import selectSvg from "./assets/icons/select.svg";
import confirmSvg from "./assets/icons/confirm.svg";

//Import css files
import "./App.css";

function App() {
  return (
    <>
      <MyNavbar />
      <HeroSection
        heroData={{
          title: "Discover a place you will love to live",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.",
          srcImg: "images/hero/backHero.png",
        }}
        heroCardData={[
          {
            icon: <img src={locationClSvg} alt="Location Icon" />,
            title: "Location",
            text: "Ahmedabad, India",
          },
          {
            icon: <img src={dollarSvg} alt="Dollar Icon" />,
            title: "Price",
            text: "$1000 - $10,000",
          },
          {
            icon: <img src={homeSvg} alt="Home Icon" />,
            title: "Type of Property",
            text: "Apartment",
          },
        ]}
      />

      <HowWorksSection
        titleAndDescData={{
          title: "How it Works",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
        }}
        workFlowCardData={[
          {
            icon: <img src={searchSvg} alt="Search Icon" />,
            title: "Search Apartment",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
          },
          {
            icon: <img src={selectSvg} alt="Select Icon" />,
            title: "Select Apartment",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
            active: true,
          },
          {
            icon: <img src={confirmSvg} alt="Confirm Icon" />,
            title: "Confirm Apartment",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
          },
        ]}
      />

      <BannerSection
        srcBackImg="images/BannerSection/background.jpg"
        title="Find Dream Home"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
      />

      <TrendingSection
        titleAndDescData={{
          title: "Most Trending",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
        }}
        PropertyCardData={[
          {
            srcImg: "images/PropertyCard/1.jpg",
            price: "$300000",
            title: "Luxury Apartment in California",
            location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
          },
          {
            srcImg: "images/PropertyCard/2.jpg",
            price: "$300000",
            title: "Luxury Apartment in California",
            location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
          },
          {
            srcImg: "images/PropertyCard/3.jpg",
            price: "$300000",
            title: "Luxury Apartment in California",
            location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
          },
          {
            srcImg: "images/PropertyCard/4.jpg",
            price: "$300000",
            title: "Luxury Apartment in California",
            location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
          },
          {
            srcImg: "images/PropertyCard/5.jpg",
            price: "$300000",
            title: "Luxury Apartment in California",
            location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
          },
          {
            srcImg: "images/PropertyCard/6.jpg",
            price: "$300000",
            title: "Luxury Apartment in California",
            location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
          },
        ]}
      />

      <BestDealsSection
        titleAndDescData={{
          title: "Best Real Estate Deals",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
        }}
        items={[
          {
            title: "Residential Property",
            images: [
              {
                image: "images/imageCard/1.jpg",
                words: ["Featured", "3D"],
              },
              {
                image: "images/imageCard/2.jpg",
                words: ["Featured", "3D"],
              },
              {
                image: "images/imageCard/3.jpg",
                words: ["Featured", "3D"],
              },
            ],
          },
          {
            title: "Commercial Property",
            images: [
              {
                image: "images/imageCard/1.jpg",
                words: ["Featured", "3D"],
              },
              {
                image: "images/imageCard/3.jpg",
                words: ["Featured", "3D"],
              },
              {
                image: "images/imageCard/2.jpg",
                words: ["Featured", "3D"],
              },
            ],
          },
          {
            title: "Agriculture Property",
            images: [
              {
                image: "images/imageCard/2.jpg",
                words: ["Featured", "3D"],
              },
              {
                image: "images/imageCard/1.jpg",
                words: ["Featured", "3D"],
              },
              {
                image: "images/imageCard/3.jpg",
                words: ["Featured", "3D"],
              },
            ],
          },
          {
            title: "Industrial Property",
            images: [
              {
                image: "images/imageCard/2.jpg",
                words: ["Featured", "3D"],
              },
              {
                image: "images/imageCard/3.jpg",
                words: ["Featured", "3D"],
              },
              {
                image: "images/imageCard/1.jpg",
                words: ["Featured", "3D"],
              },
            ],
          },
        ]}
      />
      <Footer />
    </>
  );
}

export default App;
