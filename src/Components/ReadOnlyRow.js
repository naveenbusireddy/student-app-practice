import React from "react";

const ReadOnlyRow = ({student, editStudentHandler}) => {
  return (      
    <tr>
      <td>{student.id}</td>
      <td>{student.studentName}</td>
      <td>{student.university}</td>
      <td>{student.emailId}</td>
      <td>{student.phoneNo}</td>
      <td>{student.address}</td>
      <td>
        <button type="button" 
        onClick={(event) => editClickHandler(event, student)}>Edit</button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
