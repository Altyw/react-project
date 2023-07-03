import React from "react";
import "./SectionItem.css";

const SectionItem = ({ id, name, last, age }) => {
  //   console.log(id, name, last, age);
  return (
    <table>
      <tr>
        <td>{name}</td>
        <td>{age}</td>
        <td>{last}</td>
        <td>{id}</td>
      </tr>
    </table>
  );
};

export default SectionItem;
