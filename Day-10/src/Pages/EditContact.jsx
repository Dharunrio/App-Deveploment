import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getEditedContacts } from "../Assets/Slices/ContactSlice";
import { ContactService } from "../Services/ContactService";
import { useNavigate } from "react-router-dom";
function EditContact() {
  const editedContact = useSelector(getEditedContacts);
  const [contact, setContact] = useState({
    id: editedContact.id,
    name: editedContact.name,
    phoneno: editedContact.phoneno,
    email: editedContact.email,
    groupname: editedContact.groupname,
    user: {
      id: editedContact.user.id,
      name: editedContact.user.username,
      email: editedContact.user.email,
      phoneno: editedContact.user.phoneno,
      dob: editedContact.user.dob,
      password: editedContact.user.password,
      role: editedContact.user.role,
    },
  });

  const navigate = useNavigate();
  console.log(editedContact);
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await ContactService.updateContact(contact, contact.id);
      navigate(-1);
    } catch (err) {}
  };
  return (
    <>
      <div
        className="container-fluid pt-4"
        style={{ maxWidth: "80%", paddingRight: "5%" }}
      >
        <h3 className="py-3 text-light">Edit Contact</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group pb-4">
            <input
              name="name"
              style={{ color: "white" }}
              type="text"
              className="add-con-input bg-secondary my-3 form-control"
              id="exampleInputEmail1"
              placeholder="Enter Name"
              defaultValue={contact.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group pb-4">
            <input
              name="phoneno"
              style={{ color: "white" }}
              type="number"
              className="add-con-input bg-secondary my-3 form-control"
              id="exampleInputPassword1"
              placeholder="Mobile number"
              defaultValue={contact.phoneno}
              onChange={handleChange}
            />
          </div>
          <div className="form-group pb-4">
            <input
              name="email"
              style={{ color: "white" }}
              type="email"
              className="add-con-input bg-secondary my-3 form-control"
              id="exampleInputEmail1"
              placeholder="Enter email"
              defaultValue={contact.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group pb-4">
            <input
              name="groupname"
              style={{ color: "white" }}
              type="text"
              className="add-con-input bg-secondary my-3 form-control"
              id="exampleInputEmail1"
              placeholder="Enter group name"
              defaultValue={contact.groupname}
              onChange={handleChange}
            />
          </div>
          <div className="pt-4">
            <button className="btn btn-primary d-flex align-items-center">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditContact;
