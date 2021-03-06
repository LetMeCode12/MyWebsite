import './App.scss';
import MyNavBar from './Components/navBar/myNavBar';
import SliderImage from './Components/sliderImage/sliderImage';
import Footer from "./Components/footer/footer";
import Describer from './Containers/describer/describer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NotFound from './Containers/notFound/notFound';
import BackEnd from './Containers/backEnd/backEnd';
import ExpressjsLogo from "./Graphics/sliderImages/ExpressjsLogo.png"
import awsLogo from "./Graphics/sliderImages/awsLogo.png"
import Reactlogo from "./Graphics/sliderImages/Reactlogo.png"
import SpringBootLogo from "./Graphics/sliderImages/SpringBootLogo.png"
import Reduxlogo from "./Graphics/sliderImages/Reduxlogo.png"
import FrontEnd from './Containers/frontEnd/frontEnd';
import 'aos/dist/aos.css'
import Tests from './Containers/tests/tests';
import Else from './Containers/else/else';
import Aos from "aos";
import RightNav from './Components/rightNav/rightNav';
import MailModal from './Components/mailModal/mailModal';
import { useEffect, useState } from 'react';
import {NotificationContainer} from 'react-notifications';


function App() {

  useEffect(()=>{
    Aos.init({
      offset:250,
      duration:1000
    })
  })
  

  const [modalShow,setModalShow] = useState(false);

  

  const onHide=()=>{
    setModalShow(false)
  };

  const onShow=()=>{
    setModalShow(true);
  }
      
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
        <RightNav onShow={onShow}/>
        <MailModal show={modalShow} Hide={onHide} />
      </div>
      <NotificationContainer/>
    </Router>
  );
}

export default App;
