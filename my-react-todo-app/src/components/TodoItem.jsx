import React from "react";
export default function TodoItem({ todo }) {
  //const { todo } = props;
  //receives todo data from the parent component (TodoItem) through props(destructured)
  return (
    <div style={{ fontSize: "20px", color: "Blue", margin: "20px 30px" }}>
      {todo}
    </div>
  );
}
