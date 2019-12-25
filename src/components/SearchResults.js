import React from 'react'
import { Link } from 'react-router-dom';

const SearchResults = (props) => {
    const { jobInfo } = props;
    console.log(jobInfo)
    return (
        <React.Fragment>
       <div className="container mt-5">
       <h3 className="mb-2">{jobInfo.length ? jobInfo.length : 'No'} Jobs Found</h3>
           {jobInfo.map(job => {
                return <div className="row border border-dark" key={job.id}>
                    <div className="col-md-6 mt-1 mb-1">
                        <span><strong><Link to={`/${job.id}`} >{job.title}</Link></strong></span><br />
                        <span><strong>Company</strong>: {job.company}</span>
                    </div>
                    <div className="col-md-6">
                        <span><strong>Location</strong>: {job.location}</span><br />
                        <span><strong>Published</strong>: {job.created_at}</span>
                    </div>
                </div>
               // return <h1 key={job.id}>{job.id}</h1>
            })}
       </div>
       </React.Fragment>
    )
}

export default SearchResults;
