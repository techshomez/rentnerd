import Search from "./components/home/search";
import CardSlider from "./components/reuse/card/slider";

export const metadata = {
  title: "Rentnerd | Home",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <div className="home">
      <Search />
      <CardSlider />
    </div>
  );
}
