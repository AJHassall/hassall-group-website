import { OurProjects } from '../components/OurProjects/OurProjects';
import { Intro } from '../components/Intro/Intro';
import { ContactUs } from '../components/ContactUs/ContactUs';

export default function HomePage() {
  return (
    <>
      <Intro />
      <OurProjects />
      <ContactUs />
    </>
  );
}
