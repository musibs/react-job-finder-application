import React, { Component } from 'react'
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import axios from 'axios';


class Index extends Component {

    constructor(props){
        super(props);
        this.state = {
            jobInfo : [],
            isResultAvailable : false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);
        axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${data.get('jobDescription')}&location=${data.get('jobLocation')}`)
        .then(res => {
            this.setState({
                jobInfo : res.data,
                isResultAvailable : true
            })
            
        })
        .catch(err => console.log(err));
    }

    render() {
        let component = '';
        if(this.state.isResultAvailable){
            component = <SearchResults jobInfo={this.state.jobInfo}/>
        }
        return (
            <React.Fragment>
                <SearchForm props={this.state} handleSubmit={this.handleSubmit}/>
                {component} 
            </React.Fragment>
        )
    }
}

export default Index;

