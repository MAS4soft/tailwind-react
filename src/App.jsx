import Nav from "./Components/Nav.jsx";
import Hero from "./Components/Hero.jsx";
import Services from "./Components/Services.jsx";
import Footer from "./Components/Footer.jsx";
import Team from "./Components/Team.jsx";
const app =() => {
return <main className=" p-4 text-gray-100 " >
<Nav />
<Hero />
<Team />
<Services />
<Footer />
</main>;
};

export default app;