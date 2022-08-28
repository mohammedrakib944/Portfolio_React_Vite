import Head from "next/head";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contract from "../components/Contract";

export const themeChange = () => {
  const GetElement = document.getElementById("mainWrapper");
  GetElement.classList.toggle("dark");
};

export default function Home() {
  return (
    <div className="relative bg-no-repeat dark" id="mainWrapper">
      <div className="w-full min-h-screen bg-white dark:bg-gray-900">
        <Head>
          <meta name="description" content="Md.Rakibuzzaman" />
          <meta
            name="keywords"
            content="Rakib, Rakibuzzaman, Front end developer, React js developer, Best front end developer in Bangladesh, Blockchain Developer, Programmer, Next js Developer, Best fron end developer, best front end developer portfolio, best front end developer websites, best front end developer portfolio projects"
          />
          <meta name="author" content="Md Rakibuzzaman" />
          <title>Rakib | Blockchain Developer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contract />
      </div>
    </div>
  );
}
