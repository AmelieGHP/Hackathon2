import React from "react";
import Chart from "@components/Chart";
import Header from "@components/Header";
import Presentation from "@components/Presentation";
import ListUser from "@components/ListUser";
import List from "@components/list";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="dashboard">
        <Presentation />
        <div className="stat">
          <List />
          <Chart />
          <ListUser />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
