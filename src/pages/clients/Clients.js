import React, { useEffect } from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudentAction } from "../../redux/students/studentAction";
import { Col, Row, Table } from "react-bootstrap";

function Clients() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllStudentAction());
  }, []);

  const studentList = useSelector((state) => state.students.studentList);
  return (
    <AdminLayout>
      <Row className="m-2">
        <Col>
          <h1> Students</h1>
          <hr></hr>
        </Col>
      </Row>
      <div className="m-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((student, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{student.fName}</td>
                  <td>{student.phone}</td>
                  <td>{student.email}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </AdminLayout>
  );
}

export default Clients;
