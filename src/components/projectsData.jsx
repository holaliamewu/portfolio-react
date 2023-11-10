import img1 from '/public/profile--Wokoma.png';
import img2 from '/public/umoImage.png';

const projects = [
    {
        title: 'Wokoma',
        id: 1,
        projectImg: img1,
        shortDescription: 'An events-tracking and to-do app - all in one',
        fullDescription: 
        "Wokoma - which means 'cozy' in .... - is a productivity-driven app that serves the purpose of notes-taking and events-tracking. It's more of a To-do cum event-tracking app. The Teck stack used was carefully selected to solve a particular issue: React Router to skip reloads demanded by anchor tags ( <a> ) to allow for smooth surfing and Tailwindcss, for it's utility first property",
        techStackUsed: ['React.Js','React Router', 'TailwindCSS'],
        status: 'In progress',
    },
    {
        title: 'Umo Dashboard',
        id: 2,
        projectImg: img2,
        shortDescription: 'A chrome extension that replaces the users homepage with lush pictures and essential widgets.',
        fullDescription:
        "Being the first 'professionally stuff I've done in my career, Umo has taught me a lot of things as a developer - from getting to know other ways of centering a div to working with APIs and my biggest fear at the time, props😂'. I choice the tech stack because it was what i had learnt that time. One thing this project taught me was grit. I got stuck so many times and got up as much as i fell.",
        techStackUsed: ['React.Js','TailwindCSS', 'Splash API'],
        status: 'In progress',
    },
]


export default projects;