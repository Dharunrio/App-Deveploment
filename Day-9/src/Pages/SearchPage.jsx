import React, { useState } from "react";
import SearchBar from "../Components/SearchBar";
import { contacts } from "../Assets/Contexts/Contacts";

function SearchPage() {
  const [searchInput, setSearchInput] = useState("");

  let handleChange = (e) => {
    e.preventDefault();
    let lowerCase = e.target.value.toLowerCase();
    setSearchInput(lowerCase);
  };

  const filteredData = contacts.filter((el) => {
    if (searchInput === "") {
      return null;
    } else {
      return el.name.toLowerCase().includes(searchInput);
    }
  });

  return (
    <>
      <div
        className="container-fluid pt-5"
        style={{ maxWidth: "80%", paddingRight: "5%" }}
      >
        <div className="row">
          <SearchBar handleChange={handleChange} />
        </div>
        <div className="row pt-4 h-100">
          {filteredData &&
            filteredData.map((contact) => {
              return (
                <div key={contact.id}>
                  <div className="row bg-transparent border-bottom py-2">
                    <div className="col-1">
                      <button
                        type="button"
                        className="btn btn-secondary rounded-circle"
                        disabled
                      >
                        {contact.name.slice(0, 1)}
                      </button>
                    </div>
                    <div className="col">
                      <p className="pt-2 text-light"> {contact.name} </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default SearchPage;
