import { PencilSquare, Trash3Fill } from "react-bootstrap-icons";
// import { contacts } from "../Assets/Contexts/Contacts";
import { useCallback, useEffect, useState } from "react";

import { ContactService } from "../Services/ContactService";
import { useDispatch } from "react-redux";
import { editContact } from "../Assets/Slices/ContactSlice";
import { useNavigate } from "react-router-dom";

const ContactList = () => {
  const array = Array.from({ length: 26 }, (value, index) => index + 1);
  const [style, setStyle] = useState({ display: "none" });
  const [isHovering, setIsHovering] = useState(-1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMouseEnter = (i) => {
    setIsHovering(i);
  };

  const handleMouseLeave = () => {
    setIsHovering(-1);
  };

  const [contacts, setContacts] = useState([]);

  const fetchContacts = useCallback(async () => {
    try {
      const response = await ContactService.getAllContacts();
      setContacts(response);
    } catch (err) {
      setStyle(style);
    }
  }, [style]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const handleEdit = (contact) => {
    let editedContact = contacts[contacts.indexOf(contact)];

    dispatch(
      editContact({
        editedContact: editedContact,
      })
    );
    navigate("editcontact");
  };

  const handleDelete = async (id) => {
    try {
      await ContactService.deleteContact(id).then(() => fetchContacts());
    } catch (err) {}
  };
  return (
    <>
      <div
        className=" contact-list container-fluid"
        style={{ paddingRight: "5%" }}
      >
        <div className="row ">
          <h3 className="py-3 px-4 text-light">All contacts</h3>
        </div>
        <div className="row" style={{ height: "100vh" }}>
          <div className="col overflow-y-auto mx-3" style={{ height: "100%" }}>
            {array &&
              array.map((num) => {
                let firstletter = String.fromCharCode(64 + num).toLowerCase();
                return (
                  <div key={num}>
                    <div
                      className="row bg-transparent border-bottom py-1 mt-3 mb-3"
                      id={firstletter}
                    >
                      <div className="col">
                        <p className="pt-2 text-light fw-bold fs-3">
                          {firstletter.toUpperCase()}
                        </p>
                      </div>
                    </div>
                    {contacts &&
                      contacts
                        .filter(
                          (contact) =>
                            contact.name.slice(0, 1).toLowerCase() ===
                            firstletter
                        )
                        .map((contact) => {
                          return (
                            <div key={contact.id}>
                              <div
                                className="row bg-transparent pt-2 pb-2"
                                onMouseEnter={() =>
                                  handleMouseEnter(contact.id)
                                }
                                onMouseLeave={handleMouseLeave}
                              >
                                <div className="col-1 pt-1">
                                  <button
                                    type="button"
                                    className="btn btn-secondary rounded fs-5"
                                    disabled
                                  >
                                    {contact.name.slice(0, 1)}
                                  </button>
                                </div>
                                <div className="col pt-1">
                                  <p className="pt-2 text-light">
                                    {contact.name}
                                  </p>
                                </div>
                                <div className="col-1 pt-1">
                                  <button
                                    type="button"
                                    className="btn btn-secondary rounded fs-5"
                                    style={
                                      isHovering === contact.id
                                        ? { display: "block" }
                                        : style
                                    }
                                    onClick={() => handleEdit(contact)}
                                  >
                                    <PencilSquare />
                                  </button>
                                </div>
                                <div className="col-1 pt-1">
                                  <button
                                    type="button"
                                    className="btn btn-secondary rounded fs-5"
                                    style={
                                      isHovering === contact.id
                                        ? { display: "block" }
                                        : style
                                    }
                                    onClick={() => handleDelete(contact.id)}
                                  >
                                    <Trash3Fill />
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                  </div>
                );
              })}
          </div>

          <div
            className="col-1 overflow-y-auto d-flex justify-content-center bg-transparent"
            style={{ height: "100%" }}
          >
            <ul
              className="list-group bg-transparent"
              style={{ fontSize: "12px" }}
            >
              {array &&
                array.map((num) => {
                  let firstletter = String.fromCharCode(64 + num).toLowerCase();
                  return (
                    <a
                      key={num}
                      href={"#" + firstletter}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <button className="btn bg-transparent">
                        <li className="list-group-item bg-transparent text-light border-0 fs-6">
                          {String.fromCharCode(64 + num)}
                        </li>
                      </button>
                    </a>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactList;
