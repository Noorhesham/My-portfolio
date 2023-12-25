import { FaPlay,FaGithub  } from "react-icons/fa";
import { useParams } from "react-router";
import { useMoveBack } from "../hooks/useMoveBack";
import { IoMdArrowRoundBack } from "react-icons/io";


const ProjectsData = [
    {
      name: "Gaming-Castle",
      img: "/gaming.png",
      description: `more than 500k games using rawg api with details screenshots tags similar games everything clickable typing Javascript
        by mvc and oop Search with suggestions pagination and filters Sliders Zoom photo on click Wishlist responsive design and more....`,
      gen: "Javascript",
      tech: ["HTML", "SASS", "Css", "Javascript"],
      id: 1,
      link: "https://gaming-castle.netlify.app/",video:"https://www.youtube.com/embed/le8_Q7OT52E",
    },
    {
      name: "the wild oases",
      img: "/wild.png",
      video:'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100006306765558%2Fvideos%2F2323603804515731%2F&show_text=false&width=560&t=0',
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
      gen: "Sass",
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
  
function Projects() {
    
    const { id } = useParams();
    const moveback=useMoveBack();
    const project=ProjectsData.find(projct=>projct.id===+id);
   
    return (
        <div>
             <h1
        className=" capitalize text-center my-20 mt-24 text-7xl font-semibold text-violet-700 dark:text-gray-100 relative
            after:absolute lg:after:w-[15%] after:h-1 after:top-[50%] after:bg-pink-600 after:right-[20%]
            before:absolute lg:before:w-[15%] before:h-1 before:top-[50%] before:bg-pink-600 before:mr-2 before:left-[20%]"
      >
        {project.name}
      </h1>
            <section className=" flex-col py-10 px-16 bg-slate-800 items-center  relative">
            <button onClick={moveback} className=" transition-all duration-75 left-[10%] mb-5 relative text-white hover:bg-pink-600 bg-pink-500 py-2 px-3 rounded-lg flex items-center gap-3">
                <IoMdArrowRoundBack/>Back</button>
                <div className=" flex flex-col items-center justify-center">
                <div className=" flex items-center justify-center gap-5">
                        <img src={project.img} className=" w-[60rem] rounded-xl"/>
                    {project.video&&<iframe src={project.video} className="rounded-xl"
               width="560" height="314" style="border:none;overflow:hidden;" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>}
                    </div>
                    <div className={`py-10 px-16  flex flex-col justify-center  ${project.video?" items-start ml-[10rem]":"items-center "}`}>
                   
                        <h2 className={` flex gap-5 text-pink-500 capitalize text-5xl  place-self-start  mb-7 ${!project.video&&'ml-[23rem]'}`}>
             
                            overview
                            <a ><FaGithub className=" bg-white py-1 rounded-full transition-all hover:text-purple-500"/></a>
                            <a href={project.link}><FaPlay className=" bg-white py-3  rounded-full transition-all hover:text-purple-500"/></a>
                        </h2>
                        <ul className=" grid grid-cols-3  items-center gap-5 w-[60%] ">
                        {project.tech.map(tech=> <li className=" text-center py-2 px-10 rounded-full bg-gray-300 dark:bg-slate-600 dark:text-gray-100 inline-block">{tech}</li>)}</ul>
                        <p className="w-[60%] text-gray-200 mt-10 text-3xl leading-relaxed">{project.description}</p>
                    
                  
                    </div>                 
                </div>
        
            </section>
        </div>  
    )
}

export default Projects
