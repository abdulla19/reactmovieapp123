import React,{Component} from 'react';
import {Link} from 'react-router-dom'
class Card extends Component{
    state={
    }
    render()
    {
        return(
            <div>
                    <div className="card mt-3" style={{overflow:'auto' ,height:'auto'}}>
                        <img class="card-img-top" src={"http://image.tmdb.org/t/p/w500/" + this.props.image} alt="..."/>
                        <div className="card-body">
                        <h5 class="card-title">{this.props.name}</h5>
                        <p class="card-text">{this.props.overview}</p>
                        <Link to={"/details/"+ this.props.id} class="btn btn-dark btn-block">View Details</Link>
                        </div>
                    </div>
            </div>
        );
    }
}
export default Card;
