import React from "react";
import axios from "axios";
require("dotenv").config({ path: "../../.env" });

const DeleteRemarks = (props) => {
  const { idPosts } = props;
  const { idRemarks } = props;

  const deleteRemark = (e) => {
    // e.preventDefault();
    axios({
      method: "delete",
      url: `http://localhost:${process.env.REACT_APP_API_URL}/api/users/1/posts/${idPosts}/remarks/${idRemarks}`,
      withCredentials: true,
    });
    window.location.reload();
  };

  return (
    <div>
      <svg
        className="icon-remarks"
        onClick={deleteRemark}
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
      </svg>
    </div>
  );
};

export default DeleteRemarks;
