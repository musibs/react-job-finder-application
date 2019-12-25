import React from 'react'

const SearchForm = (props) => {

    return (
       <div className="card">
           <div className="card-body mt-2">
           <form onSubmit={props.handleSubmit}>
            <div className="row">
            <div className="col-md-3 form-group">
                <input type="text" className="form-control" name="jobDescription" placeholder="Filter by position, company, benefits" />
            </div>
            <div className="col-md-3 form-group">
                <input type="text" className="form-control" name="jobLocation" placeholder="Location"/>
            </div>
            <div className="col-md-3 form-check mt-2">
                <input type="checkbox" className="form-check-input" name="isFullTime" />
                <label className="form-check-label">Full Time Only</label>
            </div>
            <div className="col-md-3">
                <button type="submit" className="btn btn-primary bg-dark" value="Search">Search</button>
            </div>
          </div>
        </form>
           </div>
       </div>
    )
}

export default SearchForm;