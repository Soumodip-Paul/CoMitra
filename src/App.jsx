import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { AuthContext } from './components/context/authContext';
import { ScrollTop } from './components/items/ScrollTop';
import { About } from './components/pages/About';
import { DistrictWiseCovidList } from './components/pages/DistrictWiseCovidList';
import { DownloadCertificate } from './components/pages/DownloadCertificate';
import { Home } from './components/pages/Home';
import { Privacy } from './components/pages/Privacy';
import { Search } from './components/pages/Search';
import { StateWiseCovidList, StateWiseCovidVaccine } from './components/pages/StateWiseCovidList';
import { Login } from './components/utils/Login';
import { NavBar } from './components/utils/NavBar';


function App() {

    return (
        <AuthContext>
            <Router>
                <NavBar />
                <Login />
                <Switch>
                    <Route exact path='/download' >
                        <DownloadCertificate />
                    </Route>
                    <Route exact path='/about' >
                        <About />
                    </Route>
                    <Route exact path="/pin" >
                        <Search />
                    </Route>
                    <Route exact path="/district" >
                        <Search />
                    </Route>
                    <Route exact path="/privacy" >
                        <Privacy />
                    </Route>
                    <Route exact path="/cases" >
                        <StateWiseCovidList />
                    </Route>
                    <Route exact path="/vaccines" >
                        <StateWiseCovidVaccine />
                    </Route>
                    <Route path="/vaccines/:id/:state" >
                        <DistrictWiseCovidList />
                    </Route>
                    <Route exact path="/" >
                        <Home />
                    </Route>
                </Switch>
            </Router>
            <ScrollTop/>
        </AuthContext>
    )

}

export default App;
