import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home/Home';
import Contact from './Component/Contact/Contact';
import Help from './Component/Help/Help';
import NotFound from './Component/NotFound/NotFound';
import ServiceDetail from './Component/Home/ServiceDetail/ServiceDetail';
import Header from './Component/Shared/Header/Header';
import Login from './Component/Login/Login/Login';
import Register from './Component/Login/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';
import Footer from './Component/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/contact'>
              <Contact></Contact>
            </PrivateRoute>
            <PrivateRoute path='/help'>
              <Help></Help>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/service/:serviceId'>
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
