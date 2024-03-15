import Carousel from "./components/carousel";

export default function Home() {
  return (
    <div className="items-center justify-between px-56 py-4">
      <section className=" px-4 py-4 grid place-content-center bg-white/15 rounded-2xl border-white border frosted h-fit">
        <h1 className="text-center font-bold underline">Mr. Crabs' Bakery</h1>
        <Carousel className="w-[50dvh] h-[50dvh]"/>
        <p className="text-center">We have the best buns in town!</p>
      </section>
    </div>
  );
}
