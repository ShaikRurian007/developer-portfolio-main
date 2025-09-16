import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
// import BlogClient from "./components/homepage/blog/client";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();
  // Only filter here, randomize on client
  const filtered = data.filter((item) => item?.cover_image);
  return filtered;
};

export default async function Home() {
  const blogs = await getData();

  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      {/* <BlogClient blogs={blogs} /> */}
      <ContactSection />
    </div>
  );
};