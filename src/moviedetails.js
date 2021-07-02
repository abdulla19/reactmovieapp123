import React,{Component} from 'react';
import axios from 'axios';
import Card from './card'
class Moviedetails extends Component{
    state={
        details:[],
        recommend:[]
    }
    rendergenre()
    {
        if(this.state.details.genres)
        {
            return this.state.details.genres.map(function(genre)
            {
                return <span style={{marginRight:10}}>{genre.name}</span>
            })
        }
    }
    apicall(movieid)
    {
        axios
        .get('https://api.themoviedb.org/3/movie/'+movieid+'?api_key=6311677ef041038470aae345cd71bb78&language=en-US&page=1')
        .then((response)=>
        {
            let reco=this.state.recommend
            this.setState({details:response.data,recommend:reco})
        })
        .catch(function(error){
            console.log(error);
        })
        axios
        .get('https://api.themoviedb.org/3/movie/'+movieid+'/recommendations?api_key=6311677ef041038470aae345cd71bb78&language=en-US&pa')
        .then((response)=>
        {
            let deta=this.state.details
            this.setState({details:deta,recommend:response.data.results})
            window.scroll(0,0);

        })
        .catch(function(error){
            console.log(error);
        })
    }
    componentDidUpdate(prevProps,prevState)
    {
        console.log(prevState)
        console.log(prevProps)
        if(prevProps.match.params.id!=this.props.match.params.id)
        {
            this.apicall(this.props.match.params.id)
        }
    }
    componentDidMount()
    {
        console.log("CDM Call");
        let movieid=(this.props.match.params.id)
        this.apicall(movieid)
    }
    render()
    {

        console.log("render call");
        let releasedate =new Date(this.state.details.release_date);
        releasedate=releasedate.getFullYear();
        return(

            <div>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <div className="row">
                            <div className="col-3">
                            <img class="card-img-top" src={"http://image.tmdb.org/t/p/w500/"+this.state.details.poster_path} alt="..."/>
                            </div>
                            <div className="col-9">   
                                <h1 class="display-2">{this.state.details.title}({releasedate})</h1>
                                <p class="lead display-6">
                                {this.rendergenre()} 
                                *{this.state.details.runtime}min</p>
                                <h3><u>Rating :</u>({this.state.details.vote_average}/10)</h3>
                                <p> 
                                    {this.state.details.tagline}
                                </p>
                                <p>Overview</p>
                                <p>{this.state.details.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container ">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="display-4">
                                Similar to {this.state.details.title}
                            </h3>
                            <div className="row " style={{backgroundColor:'#F3F3F3'}}>
                                {
                                    this.state.recommend.map((movie,index)=>{
                                    if(index<12)
                                    {
                                        return <div className="col-3 ">
                                                <Card id={movie.id} name={movie.title} overview={movie.overview} image={movie.poster_path}/>
                                        </div>
                                    }  
                                    })
                                }
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Moviedetails;
