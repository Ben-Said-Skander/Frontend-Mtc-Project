import React from "react";

export default function HomeDash() {
  return (
    <div className="px-3">
      <div className="container-fluid">
        <div className="row g-3 my-2">
          <div className="col-md-3 p-1">
            <div className="p-3 bg-danger shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">230</h3>
                <p className="fs-5">Notes</p>
              </div>
              <i className="bi bi-journal-text p-3 fs-1"></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="p-3 bg-warning shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">2450</h3>
                <p className="fs-5">Files</p>
              </div>
              <i className="bi bi-file-earmark-pdf p-3 fs-1"></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="p-3 bg-primary shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">2250</h3>
                <p className="fs-5">Courses</p>
              </div>
              <i className="bi bi-stickies p-3 fs-1"></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="p-3 bg-success shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">20%</h3>
                <p className="fs-5">Chats</p>
              </div>
              <i className="bi bi-chat-dots p-3 fs-1"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
