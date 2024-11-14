import React from "react";
export default function TodoItem({ todo }) {
  //const { todo } = props;
  //receives todo data from the parent component (TodoItem) through props(destructured)
  return <li>{todo}</li>;
}
