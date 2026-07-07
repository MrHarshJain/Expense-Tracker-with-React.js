import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {

  return (
    <div>
      <Chart chartExpenses={props.chartExpenses}/>
    </div>
  );
};

export default ExpensesChart;