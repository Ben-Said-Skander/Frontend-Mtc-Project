import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "../../components/Teacher Sidebar/Sidebar";
import HomeDash from "./HomeDash";
import Chart from "./Chart";
import Tableau from "./Tableau";
import DoughnutChart from "./DoughnutChart";
import ProgressCard from "./ProgressCard";
export default function TeacherDashboard() {
  return (
    <div className="container-fluid bg-white min-vh-100">
      <div className="row">
        <div className="col-4 col-md-2 vh-100 position-fixed">
          <Sidebar />
        </div>
      </div>
      <div className="row">
        <div className="col-4 col-md-2"></div>
        <div className="col">
          <HomeDash />
        </div>
      </div>
      <div className="row">
        <div className="col-4 col-md-2"></div>
        <div className="col-7">
          <Tableau />
        </div>
        <div className="col-3">
          <DoughnutChart />
        </div>
      </div>
      <div className="row">
        <div className="col-4 col-md-2"></div>

        <div className="col-4">
          <ProgressCard />
        </div>
        <div className="col-6">
          <Chart />
        </div>
      </div>
    </div>
  );
}
