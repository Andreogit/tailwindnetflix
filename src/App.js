import {
  DownloadAndWatch,
  Faq,
  Footer,
  Header,
  Hero,
  KidsProfiles,
  OpenOnTv,
  WatchOnDevice,
} from "./components/AllComponents";
function App() {
  return (
    <div className="App bg-black text-white my-0 mx-auto min-w-[300px]">
      <Header />
      <Hero />
      <OpenOnTv />
      <DownloadAndWatch />
      <WatchOnDevice />
      <KidsProfiles />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
