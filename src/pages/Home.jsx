// import Projects from "../components/Projects";
import Banner from "../components/home/Banner";
import Progres from "../components/home/Progres";
import Project from "../components/home/Project";
import Text from "../components/home/Text";
import About from "./About";



const Home = () => {
    return (
        <div>
            <Banner/>
            <Text/>
            <Project/>
            <Progres/>
            <About/>
        </div>
    );
};

export default Home;