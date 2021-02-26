import './App.scss';
import MyNavBar from './components/navBar/myNavBar';
import SliderImage from './components/sliderImage/sliderImage';
import Footer from "./components/footer/footer";
import Describer from './containers/Describer/describer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NotFound from './containers/notFound/notFound';
import BackEnd from './containers/backEnd/backEnd';
import ExpressjsLogo from "./Graphics/sliderImages/ExpressjsLogo.png"
import awsLogo from "./Graphics/sliderImages/awsLogo.png"
import Reactlogo from "./Graphics/sliderImages/Reactlogo.png"
import SpringBootLogo from "./Graphics/sliderImages/SpringBootLogo.png"
import Reduxlogo from "./Graphics/sliderImages/Reduxlogo.png"
import FrontEnd from './containers/frontEnd/frontEnd';
import 'aos/dist/aos.css'
import Tests from './containers/tests/tests';
import Else from './containers/else/else';
import Aos from "aos";

function App() {

  Aos.init({
    duration:1000,
    delay:300,
    offset:300
  })
  
  return (
    <Router>
      <div className="App">

        <MyNavBar />
        <SliderImage imagesPath={[Reactlogo,Reduxlogo,SpringBootLogo,awsLogo,ExpressjsLogo]} />
        <div className="myMain">
          <Switch>
            <Redirect exact
                from="/"
                to= "/Home" 
              />
            <Route path="/Home" component={(props) => <Describer {...props} />}/>
            <Route path="/BackEnd" component={(props) => <BackEnd {...props} />}/>
            <Route path="/FrontEnd" component={(props) => <FrontEnd {...props} />}/>
            <Route path="/Tests" component={(props) => <Tests {...props} />}/>
            <Route path="/Else" component={(props) => <Else {...props} />}/>
            <Route component={(props) => <NotFound {...props} />}/>

          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
