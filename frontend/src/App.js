// import React from 'react';
// import Header from './components/Header';
// import HeroSection from './components/HeroSection';
// import BolangSectionSection from './components/BolangSection';
// import Initiatives from './components/Initiatives';
// import Popular from './components/Popular';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <HeroSection />
//       <BolangSectionSection />
//       <Initiatives />
//       <Popular />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import MapView from "./components/MapView";

function App() {
  return (
    <div className="app">
      <h1>Bolang</h1>
      <MapView />
    </div>
  );
}

export default App;
