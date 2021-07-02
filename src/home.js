import React,{Component} from 'react';
import Card from './card';
import axios from 'axios';

class Home extends Component{
    state={
        movies:[],
        page:1
    }
     componentDidMount()
    {
        axios
        .get('https://api.themoviedb.org/3/movie/popular?api_key=6311677ef041038470aae345cd71bb78&language=en-US&page='+this.state.page)
        .then((response)=>{
            this.setState({movies:response.data.results})
        })
        .catch(function(error)
        {
                console.log(error)
        })
        

    }
    next(){
        this.setState({movies:this.state.movies,page:this.state.page+1});
        console.log(this.state.page)
        axios
        .get('https://api.themoviedb.org/3/movie/popular?api_key=6311677ef041038470aae345cd71bb78&language=en-US&page='+this.state.page)
        .then((response)=>{
            this.setState({movies:response.data.results})
        })
        .catch(function(error)
        {
                console.log(error)
        })
    }
    searchmovie()
    {
        let searchterm =document.querySelector("#search").value;
        this.props.history.push('/search/'+searchterm);
    }
    render()
    {
        return(
            <div>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-2">Welcome to Movie App</h1>
                        <p class="lead display-4">A onestep place where u can have  every info about all of your favourite movies.</p>
                        <input id="search" className="form-control"type="text" placeholder="search any movie"/><br/>
                        <button  className="btn  btn-dark btn-lg" onClick={this.searchmovie.bind(this)} >Search</button>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-11" >
                                <h3>Top Movies</h3>
                       </div>
                       <div className="col-1">
                       <button   className="btn  btn-dark text-white " onClick={this.next.bind(this)}>Next</button>
                       </div>
                    </div>
                        <div className="row">
                        {
                            this.state.movies.map(function(movie,index)
                            {
                                return <div className="col-3">
                                    <Card  id={movie.id} name={movie.title} overview={movie.overview} image={movie.poster_path}/>
                                    </div>
                            })
                        }
                        </div>
                </div>
            </div>
        );
    }
}
export default Home;
