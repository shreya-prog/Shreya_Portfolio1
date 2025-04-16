import {Coign, kickstand, ucf, zensar} from "../assets/images";
import {
    Bank,
    Book,
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux, resume,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript, youtube
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Wordpress Developer",
        company_name: "Kickstand Technology LLC",
        icon: kickstand,
        iconBg: "#accbe1",
        date: "Jan 2023 - Present",
        points: [
            "Created custom REST APIs to enable communication between WordPress and external systems, establishing seamless data exchange and synchronization.\n",
            "Developed custom themes from scratch and utilized advanced CSS and JavaScript techniques to achieve pixel-perfect layouts.\n",
            "Communicated closely with designers and clients to understand design specifications with provided mockups and wireframes.\n",
            

        ],
    },
    {
        title: "Graduate Research Assistant",
        company_name: "University of Central Florida",
        icon: ucf,
        iconBg: "#accbe1",
        date: "Jan 2023 - May 2024",
        points: [
            "Built a cool 3D full-stack app with React and OpenAI that dynamically generates customized products.\n" +
            "– think of it as magic, but with code!",
            "Used React Redux to keep things organized and PostgreSQL to cut down on redundant API calls \n"+
            "Spruced up the UI/UX with TypeScript and Next.js, and guess what? It bumped up our accessibility scores\n" +
            "scores by 58%",
            "On the backend, I wrangled Django REST and deployed it on AWS EC2\n" +
            "with express.js and node.js",

        ],
    },
    {
        title: "Software Developer",
        company_name: "Zensar Technologies",
        icon: zensar,
        iconBg: "#fbc3bc",
        date: "May 2021 - Oct 2022",
        points: [
            " Delivered a fully responsive, SEO-optimized online store with enhanced user experience and robust e-commerce features.\n"+ 
 "Converted PSD/Sketch designs into responsive WordPress themes using HTML5, CSS3, JavaScript, and PHP. \n"+
 "Designed custom WooCommerce features like membership systems, subscription plans, and User dashboards. \n",


        ],
    },
    {
        title: "Web Developer",
        company_name: "Coign Technologies",
        icon: Coign,
        iconBg: "#b7e4c7",
        date: "Jan 2020 - Mar 2021",
        points: [
            "Designed and modified WordPress plugins to extend functionality with ORM and Angular.js for front-end. \n" +
            "Orchestrated SDLC and DD with the help of Sprint planning to integrate website monitoring reports from Google analytics \n",            
        ],
    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/shreya-prog',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/vaishnavi-shreya-teddu-5875181a0/',
    },

    {
        name: 'Resume',
        iconUrl:resume,
        link: '',
    }
];

export const projects = [
    {
        iconUrl: Book,
        theme: 'btn-back-red',
        name: 'NoteTheBook ',
        description: 'Developed an E-commerce web application that which is built using MERN stack with responsive UI that helps users buy books related to their academic domain and helps users keep track of their orders.',
        link: 'https://github.com/shreya-prog/NoteTheBook/tree/master',
    },
    {
        iconUrl: Bank,
        theme: 'btn-back-green',
        name: 'KeepTrack',
        description: 'KeepTrack is a financial SaaS platform built using Next.js,TypeScript and AppWrite that links to numerous bank accounts, displays transactions in real time, allows users to send money to other platform users, and handles their entire finances.',
        link: 'https://github.com/shreya-prog/KeepTrack/tree/master/KeepTrack',
    },
    {
        iconUrl:youtube,
        theme: 'btn-back-blue',
        name: 'Youtube app clone',
        description: 'We designed a three-tier architecture with a client application (frontend) that will be developed using Angular Framework, a backend application that will operate on a server and will be developed using Spring Boot, and a database that is built with MongoDB.',
        link: 'https://github.com/shreya-prog/Youtube_clone/tree/master/youtube-clone-master',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'GetReal',
        description: 'Built a MERN stack application dashboard which facilitates CRUD operations and AUTH for a real estate property management application that acts as an interface for both client and server.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',

    },

];