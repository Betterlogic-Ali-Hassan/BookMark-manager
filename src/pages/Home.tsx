import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import HomeSidebar from "@/components/homeSidebar/HomeSidebar";
import KeyboardShortcut from "@/components/KeyBoardShortCut";
import TopBar from "@/components/topbar/TopBar";
import { ThumbnailTogglerProvider } from "@/context/ThumbnailTogglerContext";

const Home = () => {
  return (
    <div className='flex flex-col lg:grid lg:grid-cols-[1fr_minmax(20rem,48rem)_minmax(20rem,1fr)] lg:grid-rows-[auto_auto_1fr] relative h-screen w-screen bg-neutral-200 dark:bg-black'>
      <KeyboardShortcut />
      <Header />
      <ThumbnailTogglerProvider>
        <TopBar />
        <Hero />
      </ThumbnailTogglerProvider>
      <HomeSidebar />
    </div>
  );
};

export default Home;
