import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import KeyboardShortcut from "@/components/KeyBoardShortCut";
import TopBar from "@/components/topbar/TopBar";

const Home = () => {
  return (
    <div className='flex flex-col lg:grid lg:grid-cols-[1fr_minmax(20rem,48rem)_minmax(20rem,1fr)] lg:grid-rows-[auto_auto_1fr] relative h-screen w-screen bg-neutral-200 dark:bg-black'>
      <KeyboardShortcut />
      <Header />
      <TopBar />
      <Hero />
    </div>
  );
};

export default Home;
