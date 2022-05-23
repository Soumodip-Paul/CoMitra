import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthContext } from './components/context/authContext';
import { ScrollTop } from './components/items/ScrollTop';
import { About } from './components/pages/About';
import { DistrictWiseCovidList } from './components/pages/DistrictWiseCovidList';
import { DownloadCertificate } from './components/pages/DownloadCertificate';
import { Home } from './components/pages/Home';
import { Privacy } from './components/pages/Privacy';
import { Search } from './components/pages/Search';
import { StateWiseCovidList, StateWiseCovidVaccine } from './components/pages/StateWiseCovidList';
import { NavBar } from './components/utils/NavBar';
import { ToastContainer } from 'react-toastify';
import { Footer } from './components/utils/Footer';


function App() {

    return (
        <AuthContext>
            <Router>
                <NavBar />
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
                    {/* <Route exact path="/1234" >
                        <FindCenter />
                    </Route> */}
                    <Route exact path="/" >
                        <Home />
                    </Route>
                </Switch>
            <Footer className={"relative bottom-0"} />
            </Router>
            <ScrollTop />
            <ToastContainer
                position="bottom-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </AuthContext>
    )

}

export default App;
