import axios from 'axios';
import React,{Component} from 'react'
import Card from './card';
class Search extends Component{
    state={
        movies:[],
        term:""
    }
    componentDidMount()
    {
        let searchTerm=(this.props.match.params.term)
        console.log(searchTerm);
        axios
        .get('https://api.themoviedb.org/3/search/movie?api_key=6311677ef041038470aae345cd71bb78&language=en-US&page=1&include_adult=false&query='+searchTerm)
        .then((response)=>
        {
            this.setState({movies:response.data.results,term:searchTerm})
            
        })
        .catch(function(error)
        {
            console.log(error);
        })
    }
    render()
    {
        return(
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                        <h3>Search results for {this.state.term}</h3>
                    </div>
                </div>
                <div className="row ">
                                {
                                    this.state.movies.map((movie,index)=>{
                                        return <div className="col-4">
                                                <Card id={movie.id} name={movie.title} overview={movie.overview} image={movie.poster_path}/>
                                        </div> 
                                    })
                                }
                </div>
                    

            </div>
        )
    }
}
export default Search;