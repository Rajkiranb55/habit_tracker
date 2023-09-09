import React from "react";

const SingleDay = (props) => {
  const { day } = props;
  console.log(day);
  return (
    <div className="singleDate">
      <span> {day.day} </span> <span> </span>{" "}
    </div>
  );
};

export default SingleDay;
