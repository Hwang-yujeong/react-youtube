import React, {Suspense, lazy} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Home from './pages/Home'
// import Today from './pages/Today'
// import Developer from './pages/Developer'
// import Webd from './pages/Webd'
// import Website from './pages/Website'
// import Gsap from'./pages/Gsap'
// import Port from'./pages/Port'
// import Youtube from './pages/Youtube'
// import Channel from './pages/Channel'
// import Video from './pages/Video'
// import Search from './pages/Search'
// import Not from './pages/Not'

import Header from './components/section/Header';
import Main from './components/section/Main';
import Footer from './components/section/Footer';

const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Today'));
const Developer = lazy(() => import('./pages/Developer'));
const Webd = lazy(() => import('./pages/Webd'));
const Website = lazy(() => import('./pages/Website'));
const Gsap = lazy(()=> import('./pages/Gsap'));
const Port = lazy(()=>import('./pages/Port'));
const Youtube = lazy(()=>import('./pages/Youtube'));
const Channel = lazy(()=>import('./pages/Channel'));
const Video = lazy(()=> import('./pages/Video'));
const Search = lazy(()=>import('./pages/Search'));
const Not = lazy(()=>import('./pages/Not'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main/>}>      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/today' element={<Today/>}/>
          <Route path='/developer' element={<Developer/>}/>
          <Route path='/webd' element={<Webd/>}/>
          <Route path='/website' element={<Website/>}/>
          <Route path='/gsap' element={<Gsap/>}/>
          <Route path='/port' element={<Port/>}/>
          <Route path='/youtube' element={<Youtube/>}/>
          <Route poth='/channel/:channelId' element={<Channel/>}/>
          <Route Port='/video/:videoId' element={<Video/>}/>
          <Route port='/search/:searchId' element={<Search/>}/>
          <Route port='*' element={<Not/>}/>
        </Routes>
        </Suspense>      
    </BrowserRouter>    
  );
}

export default App;
