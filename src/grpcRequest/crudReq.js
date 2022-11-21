import { grpcServiceServer } from "../grpcClient/service-client-factory";

export const getStudents = (req) => {
  return new Promise((resolve, reject) => {
    grpcServiceServer.getStudent(req, {}, (err, res) => {
        if (resolve) {
            const data = res.getStudentList(); 
           resolve(data)
        } else {
          reject("error");
        }
    });
  
  });
};

export const insertaStudent = (req) => {
  grpcServiceServer.insertStudent(req, {}, (err, res) => {
    let data = {};
    data = {
      first_name: res.getFirstName(),
      last_name: res.getLastName(),
      roll_number: res.getRollNumber(),
      email: res.getEmail(),
      faculty: res.getFaculty(),
      id: res.getId(),
    };
    console.log("student fetched", data);
  });
};

export const deleteStudent = (req) => {
  grpcServiceServer.deleteStudent(req, {}, (err, res) => {
    let message = "";
    data = res.getMessage();

    console.log(data);
  });
};
