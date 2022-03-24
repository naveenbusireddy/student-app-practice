
import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';

const studentStaticData = [
  {
    id: "s1",
    studentName: "Student-1",
    university: "ABC University",
    emailId: "student-1@hotmail.com",
    phoneNo: 9876543210,
    address: "Bangalore-68",
  },
  {
    id: "s2",
    studentName: "Student-2",
    university: "DEF University",
    emailId: "student-1@hotmail.com",
    phoneNo: 8765432109,
    address: "Bangalore-88",
  },
  {
    id: "s3",
    studentName: "Student-3",
    university: "GHI University",
    emailId: "student-3@hotmail.com",
    phoneNo: 7654321098,
    address: "Bangalore-78",
  },
  {
    id: "s4",
    studentName: "Student-4",
    university: "XYZ University",
    emailId: "student-4@hotmail.com",
    phoneNo: 9865327410,
    address: "Bangalore-01",
  }
];

function App() {
  const [studentList, setStudentList] = useState(studentStaticData);

  const [enteredStudentName, setEnteredStudentName] = useState('');
  const [enteredUniversityName, setEnteredUniversityName] = useState('');
  const [enteredEmailId, setEnteredEmailId] = useState('');
  const [enteredPhoneNo, setEnteredPhoneNo] = useState('');
  const [enteredAddress, setEnteredAddress] = useState('');

  const StudentNameChangeHandler = (event) => {
    setEnteredStudentName(event.target.value);
  }
  const universityChangeHandler = (event) => {
    setEnteredUniversityName(event.target.value);
  }
  const emailChangeHandler = (event) => {
    setEnteredEmailId(event.target.value);
  }
  const phoneNoChangeHandler = (event) => {
    setEnteredPhoneNo(event.target.value);
  }
  const addressChangeHandler = (event) => {
    setEnteredAddress(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const studentData = {
      studentName: enteredStudentName,
      university: enteredUniversityName,
      emailId: enteredEmailId,
      phoneNo: enteredPhoneNo,
      address: enteredAddress
    };

    setEnteredStudentName('');
    setEnteredUniversityName('');
    setEnteredPhoneNo('');
    setEnteredEmailId('');
    setEnteredAddress('');
    
    const newStudentData = [...studentList, studentData];
    setStudentList(newStudentData);

    // setStudentList((prevStudent) => {
    //   return [event, ...prevStudent];
    // });
    console.log(studentData);
  };

  return (
    <div className="app-container">
      React-Student App-Practice
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>University Name</th>
              <th>Email Id</th>
              <th>Phone Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((event) => (
              <tr>  
              <td>{event.studentName}</td>
              <td>{event.university}</td>
              <td>{event.emailId}</td>
              <td>{event.phoneNo}</td>
              <td>{event.address}</td>
            </tr>
            ))
            }
          </tbody>          
        </table>
        <h2>Add New Student</h2>
        <form onSubmit={submitHandler}>
        <div>
          <label>Student Name:</label>
          <input
            type="text"
            name="studentName"
            required="required"
            placeholder="Enter Student Name"            
            value={enteredStudentName}
            onChange={StudentNameChangeHandler}
          />
        </div>
        <div>
          <label>University Name:</label>
          <input
            type="text"
            name='university'
            required='required'
            placeholder="Enter University Name"            
            value={enteredUniversityName}
            onChange={universityChangeHandler}
          />
        </div>
        <div>
          <label>Email Id:</label>
          <input
            type="email"
            name='emailId'
            placeholder="Enter an email Id"            
            value={enteredEmailId}
            onChange={emailChangeHandler}
          />
        </div>
        <div>
          <label>Phone No:</label>
          <input
            type="number"
            name='phoneNo'
            required='required'
            placeholder="Enter a contact no"            
            value={enteredPhoneNo}
            onChange={phoneNoChangeHandler}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name='address'
            placeholder="Enter an address"            
            value={enteredAddress}
            onChange={addressChangeHandler}
          />
        </div>
        <button type='submit'>Add Student</button>
        </form>
    </div>
  );
}

export default App;
