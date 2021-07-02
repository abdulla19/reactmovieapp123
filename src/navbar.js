import React,{Component} from 'react';
import {Link} from 'react-router-dom'
class Navbar extends Component{
    state={
    }
    render()
    {
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                        <a class="navbar-brand text-white" href="#">MovieApp</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link class="nav-link text-white" to="/">Home <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Recommended</a>
                            </li>
                            </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Navbar;
