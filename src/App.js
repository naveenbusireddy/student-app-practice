
import { useState } from 'react';
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
        <form>
          
        </form>
    </div>
  );
}

export default App;
