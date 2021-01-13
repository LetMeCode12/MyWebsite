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

function App() {
  return (
    <Router>
      <div className="App">

        <MyNavBar />
        <SliderImage imagesPath={["https://www.download.net.pl/upload/NewsSeptember2017/google-pokaz-obraz/google-pokaz-obraz.jpg", "https://www.widzialni.pl/blog/wp-content/uploads/2017/10/google-grafika.jpg", "https://www.tapeciarnia.pl/tapety/normalne/224019_grafika_komputerowa_kwiaty.jpg"]} />
        <div className="myMain">
          <Switch>
            <Redirect exact
                from="/"
                to= "/Home" 
              />
            <Route exact path="/Home" component={(props) => <Describer {...props} />}/>
            <Route path="/BackEnd" component={(props) => <BackEnd {...props} />}/>
            <Route component={(props) => <NotFound {...props} />}/>

          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
