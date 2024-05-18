import Image from "next/image";
import Slider from "./components/home/Slider";
import Featured from "./components/home/Featured";
import Offer from "./components/home/Offer";

export default function Home() {
  return (
    <main className="">
      <Slider />
      <Featured />
      <Offer />
    </main>
  );
}
