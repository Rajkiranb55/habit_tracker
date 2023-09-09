import React from "react";
import { useSelector, useDispatch } from "react-redux";

import WeeklyCard from "./WeeklyCard";

const Weekly = () => {
  const habits = useSelector((state) => state.habitsReducer);
  console.log(habits);

  return (
    <div className="container">
      <h1>Weekly Status</h1>
      {habits.list.map((habit, index) => (
        <WeeklyCard habit={habit} key={index} />
      ))}
    </div>
  );
};

export default Weekly;
