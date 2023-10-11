import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from '../Assets/Slices/UserSlice' 

const LogoutModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Log out
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p className="px-4 py-3"> Are you sure you want to log out?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  dispatch(logout());
                  navigate("/");
                }}
                className="btn btn-danger px-4"
                data-bs-dismiss="modal"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoutModal;
