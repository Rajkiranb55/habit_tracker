import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addHabit } from "../actions";
import HabitCard from "./HabitCard";
const Homepage = () => {
  const [inputData, setInputData] = useState("");
  const habits = useSelector((state) => state.habitsReducer);
  console.log(habits);
  const dispatch = useDispatch();

  const handleAddHabit = () => {
    dispatch(addHabit(inputData));
    setInputData("");
  };
  return (
    <div>
      <div className="addHabit">
        <input
          type="text"
          placeholder="Add Habit..."
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
        />

        <i class="fa fa-plus" aria-hidden="true" onClick={handleAddHabit}></i>
      </div>
      <div className="listHabit">
        {habits.list.map((habit) => (
          <HabitCard habit={habit} key={habit.id} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
