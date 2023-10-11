import React from "react";
import { Search } from "react-bootstrap-icons";

function SearchBar(props) {
  return (
    <>
        <div className="form-group row">
            <div className="input-group col-md-12 col-sm-12 col-lg-12">
                <input type="text" className="form-control input-group-lg" onChange={props.handleChange} aria-describedby="searchHelp" placeholder="Search" />
                <button type="button" className="btn btn-secondary">
                    <Search color="white" size={20}/>
                </button>
            </div>
        </div>
    </>
  );
}

export default SearchBar;
