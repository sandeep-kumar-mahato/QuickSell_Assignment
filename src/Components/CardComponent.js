import React from "react";
import "./style.css";

const CardComponent = ({ item }) => {
  return (
    <div className="card">
      <p className="id">{item.id}</p>

      <div className="avatar">
        <i className="fas fa-user-circle"></i>
      </div>
      <div className="info">
        <h4>{item.title}</h4>
        <p className="tag">
          <i className="fas fa-circle"></i>
          {item.tag}
        </p>
      </div>
    </div>
  );
};

export default CardComponent;
