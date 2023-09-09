import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../actions";
import ActionButton from "./ActionButton";

const HabitCard = (props) => {
  const { habit } = props;
  var target = 5;
  var progress = 0;

  for (let i = 0; i < 6; i++) {
    if (habit.weekdays[i].doneStatus === "done") {
      progress++;
    }
  }
  const dispatch = useDispatch();

  const handleDeleteHabit = () => {
    dispatch(deleteHabit(habit.id));
  };

  return (
    <div className="habitCardContainer">
      <div className="habitCard">
        <div className="habitCardTitle">
          <div className="habitActionName">
            <span>
              <ActionButton habit={habit} />
            </span>
            <span className="cardName">{`:   ${habit.name}`}</span>
          </div>
          <div>
            <i className="fa-solid fa-trash" onClick={handleDeleteHabit}></i>
          </div>
        </div>

        <div className="weeklyProgress">
          <span>Target : {target} days / week</span>
          <span>
            Progress :{progress} / {target}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HabitCard;
