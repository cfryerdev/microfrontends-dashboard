import React from "react";

export default ({ message }) => {
    return (
      <div className="alert alert-secondary">
        <i className="fa-solid fa-spinner fa-spin mr-2"></i> {message}
      </div>
    );
};
