
import React from 'react';
import NavbarSec from '@/components/NavbarSec';
import Hero from '@/components/Hero';
import Logo from '@/components/Logo';
import Explore from '@/components/ExploreCourses/Explore';
import Achievement from '@/components/Achievement';
import Courses from '@/components/Courses';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Navbarfirst from '@/components/Navbarfirst';
const page = () => {
  return (
    <div >
    <Navbarfirst />
    <NavbarSec />
    <Hero />
    <Logo />
    <Explore />
    <Achievement/>
    <Courses />
    <Team />
    <Testimonials />
    <Footer />
    </div>
  )
}

export default page
