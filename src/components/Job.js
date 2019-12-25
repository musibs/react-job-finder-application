import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
//import './Job.css';
export default class Job extends Component {

    constructor(props){
        super(props);
        this.state = {
            jobInfo : []
        }
    }

    componentDidMount(){
        axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${this.props.match.params.id}.json`)
        .then(res => {
            this.setState({
                jobInfo : res.data
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        const {jobInfo} = this.state;

        if(jobInfo === undefined || Object.keys(jobInfo).length === 0){
            return <Spinner />
        }
        else{
        return (
            <React.Fragment>
                <Link to="/" className="btn btn-dark btn-sm mb-4">Go Back</Link>
                <div className="card">
                    <div className="card-header">
                        <p className="text-secondary">{jobInfo.type}/{jobInfo.location}</p>
                        <h5 className="text-primary">{jobInfo.title}</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-8 block">
                                <div dangerouslySetInnerHTML={ {__html : jobInfo.description}} />
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header">
                                        <p>{jobInfo.company}</p>
                                    </div>
                                    <div className="card-body">
                                        <img className="card-img-top" src={jobInfo.company_logo} alt="Comapany Logo" />
                                        <br/><hr />
                                        <p>{jobInfo.company_url}</p>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <div className="card">
                                    <div className="card-header">
                                        How to Apply
                                    </div>
                                    <div className="card-body">
                                       <div dangerouslySetInnerHTML= { { __html : jobInfo.how_to_apply}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
        }
    }
}

