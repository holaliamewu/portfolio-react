import img1 from '/public/wokoma.png';
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
        siteLink: "",
        githubLink: "https://github.com/holaliamewu/wokoma"
    }
]


export default projects;