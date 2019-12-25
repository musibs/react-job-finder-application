import React from 'react'

const SearchResults = (props) => {
    const { jobInfo } = props;
    console.log(jobInfo)
    return (
        <React.Fragment>
        <h1 className="mb-2 mt-2">{jobInfo.length} Jobs Found</h1>
       <div className="container mt-5">
           {jobInfo.map(job => {
                return <div className="row border" key={job.id}>
                    <div className="col-md-6 mb-4 mt-4">
                        <p>{job.title}</p>
                        <p>Company - {job.company}</p>
                    </div>
                    <div className="col-md-6 mb-4 mt-4 float-right">
                        <p>{job.location}</p>
                    </div>
                </div>
               // return <h1 key={job.id}>{job.id}</h1>
            })}
       </div>
       </React.Fragment>
    )
}

export default SearchResults;
