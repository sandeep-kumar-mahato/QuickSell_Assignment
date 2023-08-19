import React, { useState, useEffect } from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import "./App.css";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupingOption, setGroupingOption] = useState("status");
  const [sortingOption, setSortingOption] = useState("priority");

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => {
        setTickets(data.tickets);
        setUsers(data.users); // Assuming you also fetch users
      });
  }, []);

  return (
    <div className="App">
      <Navbar
        onGroupingChange={setGroupingOption}
        onSortingChange={setSortingOption}
      />
      <Home
        tickets={tickets}
        users={users}
        groupingOption={groupingOption}
        sortingOption={sortingOption}
        onGroupingChange={setGroupingOption}
        onSortingChange={setSortingOption}
      />
    </div>
  );
};

export default App;
