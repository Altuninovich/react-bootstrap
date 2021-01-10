import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from "./Components/Navibar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./Components/Home";
import Sale from "./Components/Sale";
import Catalog from "./Components/Catalog";
import Footer from "./Components/Footer";



const App = () => {
    return (
        <>
            <Router>
                <NaviBar/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/sale" component={Sale} />
                    <Route path="/catalog" component={Catalog} />
                </Switch>
            </Router>
            <Footer/>
        </>
    )

}

export default App;
