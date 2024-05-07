import Blog from './components/Blog/Blog';
import Clients from './components/Clients/Clients';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Info from './components/Info/Info';
import Membership from './components/Membership/Membership';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Stats from './components/Stats/Stats';
import Layout from './components/ui/Layout';

function App() {
  return (
    <main className='min-h-screen bg-[#fafafa]'>
      <Navbar />
      <Hero />
      <Layout maxWidth='max-w-[1440px]'>
        <Clients />
        <Membership />
        <Stats />
        <Blog />
        <Info />
        <Projects />
        <Contact />
      </Layout>
      <Footer />
    </main>
  );
}

export default App;

// {"id": 1, "icon": {"url": "", "alt": "", "title": ""}}

// {
//   "id": 1,
//   "icon":{
//     "url": "",
//     "title": "title icon",
//   },
//   "title": "",
//   "desc": ""
// }
