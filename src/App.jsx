import Faq from "./component/Faq";

export default function App() {
  return (
    <div className="w-full h-screen  bg-[url('./assets/images/background-pattern-mobile.svg')] md:bg-[url('./assets/images/background-pattern-desktop.svg')] bg-light-pink bg-top bg-no-repeat flex items-center justify-center p-4">
      
      <Faq />
    </div>
  );
}


