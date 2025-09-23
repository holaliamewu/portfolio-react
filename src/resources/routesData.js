import Home from "../pages/Home";
import ThoughtOne from "../pages/t-01";
import ThoughtTwo from "../pages/t-02";
import ThoughtThree from "../pages/t-03";
import ThoughtFour from "../pages/t-04";


export const routes = [
    {
        title: "home",
        path: "/",
        element: Home,
    },
    {
        title: "coding is not hard: they lied and here's why.",
        path: "/coding-is-not-hard",
        element: ThoughtOne,
    },
    {
        title: "i love whatever you're doing. keep up.",
        path: "/i-love-whatever-youre-doing-keep-up",
        element: ThoughtTwo,
    },
    {
        title: "what we create, we are",
        path: "/what-we-create-we-are",
        element: ThoughtThree,
    },
    {
        title: "jean-michel basquiat",
        path: "/jean-michel-basquiat",
        element: ThoughtFour,
    },
]