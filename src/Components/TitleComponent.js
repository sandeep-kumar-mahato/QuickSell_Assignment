import React from "react";
import "./style.css";

const TitleComponent = ({ getStatusIcon, group, cardCount, name }) => {
  const priorityIcons = {
    Urgent: <i className="fas fa-exclamation-triangle"></i>,
    High: <i className="fas fa-exclamation-circle"></i>,
    Medium: <i className="fas fa-circle"></i>,
    Low: <i className="fas fa-dot-circle"></i>,
    "No priority": <i className="fas fa-minus-circle"></i>,
    Unknown: null,
  };
  const priorityIcon = priorityIcons[group] || null;

  return (
    <h2 className="title">
      {name !== "" ? <span>{name}</span> : <div></div>}
      {getStatusIcon(group)}
      {priorityIcon}
      {group} <span className="card-count">{cardCount}</span>
      <div className="icons">
        <i className="fas fa-plus"></i>
        <i className="fas fa-ellipsis-h"></i>
      </div>
    </h2>
  );
};

export default TitleComponent;
