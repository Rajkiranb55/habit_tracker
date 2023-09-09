import React from "react";
import { useDispatch } from "react-redux";
import { addHabitStatus } from "../actions";

const ActionButton = (props) => {
  const { habit } = props;
  const dispatch = useDispatch();

  const handleNoStatus = () => {
    const obj = {
      id: habit.id,
      doneStatus: "",
    };
    dispatch(addHabitStatus(obj));
  };

  const handleDoneStatus = () => {
    const obj = {
      id: habit.id,
      doneStatus: "done",
    };
    dispatch(addHabitStatus(obj));
  };

  const handleNotDoneStatus = () => {
    const obj = {
      id: habit.id,
      doneStatus: "notdone",
    };
    dispatch(addHabitStatus(obj));
  };

  return (
    <div className="habitCardAction">
      {habit.doneStatus === "" && (
        <span className="habitCardCheckIcon">
          <i className="fa-regular fa-square" onClick={handleDoneStatus}></i>
        </span>
      )}

      {habit.doneStatus === "done" && (
        <span className="habitCardCheckIcon">
          <i
            className="fa-solid fa-square-check"
            onClick={handleNotDoneStatus}
          ></i>
        </span>
      )}

      {habit.doneStatus === "notdone" && (
        <span className="habitCardCrossIcon">
          <i class="fa-solid fa-square-xmark" onClick={handleNoStatus}></i>
        </span>
      )}
    </div>
  );
};

export default ActionButton;
