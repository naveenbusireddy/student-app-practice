import React, { useState } from "react";

const EditableRow = (editStudentData, editStudentNameHandler, editUniversityNameHandler, editEmailIdHandler, editPhoneNoHandler, editAddressHandler   ) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="studentName"
          required="required"
          placeholder="Enter Student Name"
          value={editStudentData.studentName}
          onChange={editStudentNameHandler}
        />
      </td>
      <td>
        <input
          type="text"
          name="university"
          required="required"
          placeholder="Enter University Name"
          value={editStudentData.university}
          onChange={editUniversityNameHandler}
        />
      </td>
      <td>
        <input
          type="email"
          name="emailId"
          placeholder="Enter an email Id"
          value={editStudentData.emailId}
          onChange={editEmailIdHandler}
        />
      </td>
      <td>
        <input
          type="number"
          name="phoneNo"
          required="required"
          placeholder="Enter a contact no"
          value={editStudentData.phoneNo}
          onChange={editPhoneNoHandler}
        />
      </td>
      <td>
        <input
          type="text"
          name="address"
          placeholder="Enter an address"
          value={editStudentData.address}
          onChange={editAddressHandler}
        />
      </td>
    </tr>
  );
};

export default EditableRow;
