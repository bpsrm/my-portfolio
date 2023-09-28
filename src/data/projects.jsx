import hercules from "../assets/projects/hercules-club.webp";
import laSante from "../assets/projects/la-sante.webp";
import weather from "../assets/projects/weather-app.webp";
import dandelion from "../assets/projects/FinalProject-Unity.webp";
import voicebrary from "../assets/projects/senior-project.webp";
import todo from "../assets/projects/todoapp.webp";
import discord from "../assets/projects/discord-clone.webp";

export const projects = {
  project: [
    {
      id: 1,
      img: hercules,
      title: "Hercules Club",
      desc: "The 2nd year mid-semester project in web and interactive application on the topic of health care website",
      link: "https://herculesclub-2bc50.web.app/",
      git: "https://github.com/bpsrm/MidProject-2020-HerculesClub",
      catagories: "normal",
      stack: ["HTML", "CSS", "JavaScript"],
      date: "Sep 2020 - Nov 2020",
    },
    {
      id: 2,
      img: laSante,
      title: "La Santé",
      desc: "The 2nd year final-semester project in web and interactive application on the topic of hospital website",
      link: "https://la-sante-final-project-2020.onrender.com",
      git: "https://github.com/bpsrm/FinalProject-2020-La-Sante",
      stack: ["HTML", "CSS", "JavaScript"],
      date: "Nov 2020 - Mar 2021",
    },
    {
      id: 3,
      img: dandelion,
      title: "Dandelions 2021",
      desc: "Unity (script C#) with Sensitivity Microphone Sound Sensor in topic beliefs about wishes in Japan about dandelions",
      link: "https://youtu.be/qAmugPXxCvY",
      git: "https://github.com/bpsrm/Dandelions-final-project-2021",
      stack: ["C#", "PHP", "Arduino", "MySql"],
      date: "Aug 2021 - Nov 2021",
    },
    {
      id: 4,
      img: voicebrary,
      title: "VoiceBrary Senior Project",
      desc: "Web App: Instant Audio Image Insights for Low Vision Learners via Object-Text Detection and Knowledge Base",
      link: "https://youtu.be/-caDoPUdlLE",
      git: "https://github.com/bpsrm/my-senior-project",
      stack: ["HTML", "CSS", "JavaScript", "APIs", "Python", "Flask", "MySql"],
      date: "Jul 2022 - Apr 2023",
    },
    {
      id: 5,
      img: weather,
      title: "Weather Forecast",
      desc: "Weather Forecast Website: Focus on Thailand, Utilizing openweathermap.org APIs",
      link: "https://weather-app-react-31c0e.web.app/",
      git: "https://github.com/bpsrm/weather-app-react",
      stack: ["HTML", "CSS", "JavaScript", "JSX", "React.js", "APIs"],
      date: "Sep 2023",
    },
    {
      id: 6,
      img: todo,
      title: "Todo App",
      desc: "To-Do Web App with React: Utilizing useState, useEffect, and Bootstrap. Implements CRUD with localStorage",
      link: "https://todoapp-6e72e.web.app/",
      git: "https://github.com/bpsrm/TodoApp",
      stack: ["HTML", "CSS", "JavaScript", "JSX", "React.js"],
      date: "Sep 2023",
    },
    {
      id: 7,
      img: discord,
      title: "Discord Clone",
      desc: "Vue3 Discord Clone: Web Application Project using Vite for Rapid Development",
      link: "https://vue-cloning-discord.web.app/",
      git: "https://github.com/bpsrm/vue-cloning-discord",
      stack: ["HTML", "CSS", "JavaScript", "JSX", "Vue.js"],
      date: "Sep 2023",
    },
  ],
  react: [
    {
      id: 1,
      img: weather,
      title: "Weather Forecast",
      desc: "A website to check weather forecasts in each area, mainly focusing on Thailand and using APIs from openweathermap.org.",
      link: "https://weather-app-react-31c0e.web.app/",
      git: "https://github.com/bpsrm/weather-app-react",
      stack: ["HTML", "CSS", "JavaScript", "JSX", "React.js", "APIs"],
      date: "Sep 2023 - Present",
    },
    {
      id: 2,
      img: todo,
      title: "Todo App (Vite + React)",
      desc: "A web application with a to-do app using useState, useEffect and Bootstrap to do this web application and use localStorage todo CRUD concept.",
      link: "https://todoapp-6e72e.web.app/",
      git: "https://github.com/bpsrm/TodoApp",
      stack: ["HTML", "CSS", "JavaScript", "JSX", "React.js"],
      date: "Sep 2023 - Present",
    },
  ],
  vue: [
    {
      id: 1,
      img: discord,
      title: "Vue 3 (Vite + Vue.js)",
      desc: "Project to create a web application using Vue3 together with Vite to clone the Discord web application.",
      link: "https://vue-cloning-discord.web.app/",
      git: "https://github.com/bpsrm/vue-cloning-discord",
      stack: ["HTML", "CSS", "JavaScript", "JSX", "Vue.js"],
      date: "Sep 2023 - Present",
    },
  ],
};
