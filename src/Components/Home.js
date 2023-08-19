import React from "react";
import TitleComponent from "./TitleComponent";
import CardComponent from "./CardComponent";
import "./style.css";

const Home = ({ tickets, groupingOption, sortingOption, users }) => {
  const groupTickets = () => {
    const groupedTickets = {};

    for (const ticket of tickets) {
      let groupKey = "";

      if (groupingOption === "status") {
        groupKey = ticket.status;
      } else if (groupingOption === "user") {
        groupKey = ticket.userId;
      } else if (groupingOption === "priority") {
        groupKey = getPriorityLabel(ticket.priority);
      }

      if (!groupedTickets[groupKey]) {
        groupedTickets[groupKey] = [];
      }

      groupedTickets[groupKey].push(ticket);
    }

    return groupedTickets;
  };

  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 4:
        return "Urgent";
      case 3:
        return "High";
      case 2:
        return "Medium";
      case 1:
        return "Low";
      case 0:
        return "No priority";
      default:
        return "Unknown";
    }
  };

  const sortItems = (itemsToSort) => {
    return itemsToSort.slice().sort((a, b) => {
      if (sortingOption === "priority") {
        return b.priority - a.priority;
      } else if (sortingOption === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  };

  const sortedGroupedItems = {};
  const groupedItems = groupTickets(tickets);
  for (const groupKey in groupedItems) {
    sortedGroupedItems[groupKey] = sortItems(groupedItems[groupKey]);
  }

  const getStatusIcon = (status) => {
    if (status === "Todo") {
      return <i className="far fa-circle"></i>;
    } else if (status === "In progress") {
      return <i className="fas fa-spinner"></i>;
    } else if (status === "Backlog") {
      return <i className="fas fa-exclamation-triangle"></i>;
    } else {
      return null;
    }
  };

  const findName = (group) => {
    for (let user in users) {
      if (users[user].id === group) {
        return users[user].name;
      }
    }
  };

  return (
    <div className="card-container">
      {Object.keys(sortedGroupedItems).map((group) => {
        let displayText;

        if (groupingOption === "status" || groupingOption === "priority") {
          displayText = group;
        } else if (groupingOption === "user") {
          displayText = findName(group);
        }

        return (
          <div key={group} className="status-section">
            <TitleComponent
              getStatusIcon={getStatusIcon}
              group={displayText}
              cardCount={sortedGroupedItems[group].length}
            />
            {sortedGroupedItems[group].map((item) => (
              <CardComponent key={item.id} item={item} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
