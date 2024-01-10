import * as React from 'react';
import Index from './index.js';
import Navbar from './navbar';
import Footer from './footer';
import About from './about';
import Services from './service';
import Blog from './blog.js';
import Contact from './contact';

export default function Home() {
  return (
    <div>
    <Navbar/>
    <Index/>

    <About/>
    <Services/>
    <Blog/>
    <Contact/>

    <Footer/>
    </div>
  )
}
