import React,{Component} from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Home from './home';
import { Switch,Route } from 'react-router-dom';
import Moviedetails from './moviedetails';
import Search from './search'
class App extends Component{
    state={
    }
    render()
    {
        return(
            <div>
            <Navbar/>
            <Switch>
                <Route path='/' component={Home} exact></Route>
                <Route path ='/details/:id' component={Moviedetails} exact></Route> 
                <Route path='/search/:term' component={Search} ></Route>
            </Switch>
            </div>
        );
    }
}
export default App;
