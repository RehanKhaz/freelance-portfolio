import { Mic, ShoppingCart, Watch } from "lucide-react";
import { BsWatch } from "react-icons/bs";

export const navList: string[] = ['Home', 'About', 'Skills', 'Work', 'Contact']

export const skills = [
  {
    id: 1,
    name: 'Next js',
    icon: '/assets/nextjs.svg'
  },
  {
    id: 2,
    name: 'React JS',
    icon: '/assets/react.svg'
  },
  {
    id: 3,
    name: 'Tailwind CSS',
    icon: '/assets/tailwindcss.svg'
  },
  {
    id: 4,
    name: 'TypeScript',
    icon: '/assets/typescript.svg'
  },
  {
    id: 5,
    name: 'Sanity',
    icon: '/assets/sanity.svg'
  },
  {
    id: 6,
    name: 'Vapi',
    icon: '/assets/vapi.png'
  },
  {
    id: 7,
    name: 'JavaScript',
    icon: '/assets/javascript.svg'
  },
  {
    id: 8,
    name: 'Github',
    icon: '/assets/github.svg'
  },
  {
    id: 9,
    name: 'CSS',
    icon: '/assets/css.svg'
  },
  {
    id: 10,
    name: 'python',
    icon: '/assets/python.svg'
  },
]

export const myProjects = [
  {
    title: 'Speak Better - Agent As A Service.',
    desc: "Speak better is a Website that helps the user to enhance his communication skils. In today's world, hard skills are not just required, you should also have a very good command on Soft Skills. You can enhance your Communication Skill by talking with agent that will make a Real Feedback & will ask question from you , according to your problems. ",
    subdesc:
      "This project is an open source contribution for people who wants to excel their soft skills by talking with a Real Agent and getting Feedback that helps him the most. Don't forget to check out this.",
    href: 'https://speak-better.vercel.app',
    texture: '/videos/speak-better.mp4',
    logo: Mic,
    logoStyle: {
      backgroundColor: '#FCC800',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.svg',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.svg',
      },
      {
        id: 4,
        name: 'Vapi',
        path: '/assets/vapi.png',
      },
    ],
  },
  {
    title: 'INNOWATCH - Admin Dashboard',
    desc: 'This project is a Software-as-a-Service (SaaS) e-commerce dashboard designed to boost business efficiency by 10x. With smooth scrolling and a clean UI, its features include product management, inventory tracking, customer order management, and review customer comments.',
    subdesc:
      'Built as a  Software-as-a-Service app with Next.js 15, Tailwind CSS, TypeScript and Sanity, Admin Dashboard is designed for optimal performance and scalability.',
    href: 'https://admin-dashboard-zeta-rosy-55.vercel.app/',
    texture: '/videos/admin-dashboard.mp4',
    logo: Watch,
    logoStyle: {
      backgroundColor: '#63FFCD',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.svg',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.svg',
      },
      {
        id: 4,
        name: 'Sanity',
        path: '/assets/sanity.svg',
      },
    ],
  },
  {
    title: 'INNOWATCH - The Watches Heaven.',
    desc: 'InnoWatch is a premium e-commerce platform specializing in luxury and tech-forward watches, designed to streamline your shopping experience. With Amazing UI & UX, its features include curated watch collections and customer review integration.',
    subdesc: 'Innowatch is built using NEXT.JS , Sanity , Tailwind CSS , Clerk and Stripe. Innowatch is designed for royal & luxurious watches.',
    href: 'https://innowatch.vercel.app/',
    texture: '/videos/innowatch.mp4',
    logo: BsWatch,
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.svg'
      },
      {
        id: 4,
        name: 'sanity',
        path: '/assets/sanity.svg',
      },
    ],
  },
  {
    title: 'E-Commify | Hackathon Market Ready.',
    desc: 'E-Commify, crafted for the GIAIC Academy Hackathon, is a Next.js e-commerce platform with Sanity CMS and Tailwind CSS. Features include add-to-cart, dynamic routing, real-time cart updates, and a secure checkout page. Built for speed and scalability, it highlights responsive UI/UX and full-stack integration under hackathon constraints.',
    subdesc:
      'Built with Next.js (SSR/ISR), Sanity for real-time content, and Tailwind for styling. Key features: cart management, dynamic product pages, and checkout flow. Developed for GIAIC’s hackathon to demonstrate rapid, user-centric solutions.',
    href: 'https://hackathon-ecommerce-website-2x1l.vercel.app/',
    texture: '/videos/hackathon.mp4',
    logo: ShoppingCart,
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.svg',
      },
      {
        id: 4,
        name: 'Sanity',
        path: '/assets/sanity.svg'
      }
    ],
  }
];