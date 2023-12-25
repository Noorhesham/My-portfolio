import { Outlet } from "react-router-dom";
import { useTabs } from "../context/useTabs";
import { useActive } from "../context/useActiveLink";
import Tab from "../ui/Tab";
import TabItem from "../ui/TabItem";
import Window from "../ui/Window";
import WindowItem from "../ui/WindowItem";
import Pagination from "../ui/Pagination";
import {useState} from "react"
import { FaPlay,FaGithub  } from "react-icons/fa";

const Projects = [
  {
    name: "Gaming-Castle",
    img: "/gaming.png",
    description: `more than 500k games using rawg api with details screenshots tags similar games everything clickable typing Javascript
      by mvc and oop Search with suggestions pagination and filters Sliders Zoom photo on click Wishlist responsive design and more....`,
    gen: "Javascript",
    tech: ["HTML", "SASS", "Css", "Javascript"],
    id: 1,
    link: "https://gaming-castle.netlify.app/",
  },
  {
    name: "the wild oases",
    img: "/wild.png",
    video:'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100006306765558%2Fvideos%2F2323603804515731%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share',
    gen: "React",
    link: "https://wild-oasis-noor.netlify.app/",
    tech: [
      "React Router",
      "React query",
      "React hook form",
      " tailwinwd css",
    ],
    description: `receive bookings from guests who want to come to your cabin as an emloyee , you will have the ability to edit delete add
      bookings or cabins have modern charts to show Statistcs and visualizes your data. upload photos and various information
      usingforms that handles all errors and ensure that you entered the right data and way more apility to Log in log out and sign up new accounts using real email verfication with passwords using Supabase
      React router to transition between different pages As a SPA and react query to handle the remote state`,
    id: 2,
  },
  {
    name: "React Pizza App",
    img: "/pizza.png",
    gen: "React",
    link: "https://fast-pizza-app-noor.netlify.app/",
    tech: ["React Router", "React", "React hook form", " tailwinwd css"],
    description: `Simple pizza delivery App that takes name,orders from user calculate its price `,
    id: 3,
  },
  {
    name: " World Wise App",
    link: "https://worldwise-appnoor.netlify.app/",
    img: "/map.png",
    gen: "React",
    tech: ["React router", "Redux"],
    description: ` website to search cities and write down memories in an interactive map using react leaflet library`,
    id: 5,
  },
  {
    name: " Recipe  App",
    img: "/recipe.png",
    gen: "Javascript",
    tech: ["Javascript", "css", "HTML"],
    description: ` an app to search for food recipes add bookmarks upload recipes change servings update the dom and more using
          mvc architect and oop`,
    id: 6,
    link: "https://noorhesham-recipes.netlify.app/#5ed6604591c37cdc054bcc13",
  },
  {
    name: "use popcorn",
    img: "/movies.png",
    gen: "React",
    tech: ["React", "css"],
    description: ` a small app to search for movies save it to watch list etc.. `,
    id: 7,
    link: "https://movie-usepopcorn.netlify.app/",
  },
  {
    name: "japan journy",
    img: "/japan.png",
    gen: "Design",
    tech: ["Sass", "css"],
    description: `Sass design for a travel webpage with cool css effects and animations `,
    id: 8,
    link: "https://japan-webpage.netlify.app/",
  },
  {
    name: "graphic designer portfolio",
    img: "/portfolio.png",
    gen: "Javascript",
    tech: ["Javascript", "Sass", "css"],
    description: `as a freelancer built up  a portfolio for a graphic designer to show its work`,
    id: 9,
    link: "https://japan-webpage.netlify.app/",
  },
];

function Project() {
    //we got tabs and when we click on it we want to set the active tab to id and render window based on that id 
    //that window will filter the projects array based on the clicked id cause each project has a gen which will match the id 
  const { activeTab,page,handlePagination } = useTabs();
  const { refs, addRef } = useActive();

  const FilteredProjects= activeTab !== 0?Projects.filter(project=>activeTab === project.gen):Projects;
  const PaginationLength = Math.ceil(FilteredProjects.length / 6);
  const PageSize=6;
  const Pages = [];
  for (let i = 1; i <= PaginationLength; i++) {
    Pages.push(i);
  }

  return (
    <div id="projects" ref={(el) => addRef(el)}>
      <h1
        className=" overflow-hidden capitalize text-center my-20 mt-24 text-7xl font-semibold text-violet-700 dark:text-gray-100 relative
            after:absolute lg:after:w-[20%] after:h-1 after:top-[50%] after:bg-pink-600 after:right-[20%]
            before:absolute lg:before:w-[20%] before:h-1 before:top-[50%] before:bg-pink-600 before:mr-2 before:left-[20%]"
      >
        top projects
      </h1>
      <section className="flex  flex-col gap-2">
        <a href="https://github.com/Noorhesham" target="_blank" className=" text-gray-800 dark:text-gray-100 font-semibold text-center capitalize text-4xl mb-10
         bg-pink-500 w-fit m-auto py-2 px-4 rounded-xl flex items-center ">View all on git hub <FaGithub/></a>
        <Tab>
          <TabItem id={0}>All projects</TabItem>
          <TabItem id={"React"}>React</TabItem>
          <TabItem id={"Javascript"}>Vanilla javascript</TabItem>
          <TabItem id={"Design"}> designs</TabItem>
        </Tab>
        <Window >
          {FilteredProjects.slice((page - 1) * PageSize, page * PageSize).map((project) => (
            <WindowItem 
              id={project.id}
              gen={project.gen}
              img={project.img}
              name={project.name}
              link={project.link}
              description={project.description}
            />
          ))}
        </Window>
          <div className="flex overflow-hidden  justify-center gap-3 py-5">
          {PaginationLength > 1 && Pages.map((p) => <Pagination active={page===p} onClick={handlePagination} i={p} />)}
          </div>
      </section>
      <Outlet />
    </div>
  );
}

export default Project;
