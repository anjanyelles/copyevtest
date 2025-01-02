// import React, { useState } from "react";
// import "./App.css";
// import Sidebar from "./components/Sidebar";
// import Content from "./components/Content";

// function App() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const menuItems = [
//     "Overview and sign in help",
//     "Microsoft account overview",
//     "How to sign in to a Microsoft account",
//     "Can't sign in",
//     "Create a new Microsoft account",
//   ];

//   const slides = [
//     {
//       title: "Overview and sign in help",
//       notes: [
//         "Find guidance for signing in.",
//         "Resolve login issues.",
//         "Helpful tips for new users.",
//       ],
//     },
//     {
//       title: "Microsoft account overview",
//       notes: [
//         "Learn what a Microsoft account is.",
//         "Understand account benefits.",
//       ],
//     },
//     {
//       title: "How to sign in to a Microsoft account",
//       notes: [
//         "Step-by-step sign-in guide.",
//         "Tips for smooth login.",
//         "Troubleshooting login issues.",
//       ],
//     },
//     {
//       title: "Can't sign in",
//       notes: [
//         "Recover your account easily.",
//         "Fix password or security issues.",
//       ],
//     },
//     {
//       title: "Create a new Microsoft account",
//       notes: [
//         "Sign up for a new account.",
//         "Get access to all Microsoft services.",
//       ],
//     },
//   ];

//   return (
//     <div className="app">
//       <Sidebar
//         menuItems={menuItems}
//         activeIndex={activeIndex}
//         setActiveIndex={setActiveIndex}
//       />
//       <Content activeIndex={activeIndex} slides={slides} />
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import MenuButton from './components/MenuButton';
// import NavBar from './components/NavBar';
// import Showcase from './components/Showcase';
// import HomeCards from './components/HomeCards';
// import XboxSection from './components/XboxSection';
// import CarbonSection from './components/CarbonSection';
// import FollowUs from './components/FollowUs';
// import LinksSection from './components/LinksSection';
// import Footer from './components/Footer';
// import './App.css'

// const App = () => (
//   <>
//     <MenuButton />
//     <div className="container">
//       <NavBar />
//       <Showcase />
//       <HomeCards />
//       <XboxSection />
//       <CarbonSection />
//       <FollowUs />
//       <LinksSection />
//     </div>
//     <Footer />
//   </>
// );

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MenuButton from './components/MenuButton';
import NavBar from './components/NavBar';
import Showcase from './components/Showcase';
import HomeCards from './components/HomeCards';
import XboxSection from './components/XboxSection';
import CarbonSection from './components/CarbonSection';
import FollowUs from './components/FollowUs';
import LinksSection from './components/LinksSection';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import ManageSubscription from './components/ManageSubscription';
import MicrosoftAccountHelp from './components/GatnixAccountHelp';
import GatnixTimesheetHelp from './components/GatnixTimesheetHelp';
import Troubleshooting from './components/Troubleshooting';
import Footer1 from './components/Footer1';
import GatnixAccountHelproute from './components/GatnixAccountHelproute';
import Timesheet from './components/Timesheet';

const App = () => (
  <Router>

    <Routes>


<Route path="/" element={<Timeline />} /> 
<Route path="/accounthelp/*" element={<Troubleshooting />} />
<Route path="/timesheet/*" element={<Timesheet />} />
<Route path="/admin/*" element={<Timesheet />} />
<Route path="/superadmin/*" element={<Timesheet />} />
<Route path="/employee/*" element={<Timesheet />} />
<Route path="/consultant/*" element={<Timesheet />} />
<Route path="/approverManagers/*" element={<Timesheet />} />



<Route path="/GatnixAccountHelproute/*" element={<GatnixAccountHelproute />} />

<Route path="/accounthelp/create-approval-manager" element={<Troubleshooting />} />

      <Route path="/managesubscription" element={<ManageSubscription />} />
      <Route path="/accounthelp" element={<MicrosoftAccountHelp />} />
      <Route path="/gatnixtimesheethelp" element={<GatnixTimesheetHelp />} />


      
    </Routes>
    {/* <Footer /> */}
    <Footer1 /> 
  </Router>
);

export default App;
