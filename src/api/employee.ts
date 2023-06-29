import { db, auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  doc,
  setDoc,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { type Employee } from "../types";

const creatAccount = (email: string, password: any) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        resolve(userCredential.user);
      })
      .catch((error) => reject(error));
  });
};

export const addEmployee = (dataForm: any): Promise<Array<Employee>> => {
  return new Promise<Array<Employee>>((resolve, reject) => {
    creatAccount(dataForm.email, dataForm.password).then((user: any) => {
      const employee: Employee | any = {
        uid: user.uid,
        name: dataForm.name,
        user_name: dataForm.user_name,
      };

      setDoc(doc(db, "employees", user.uid), employee)
        .then(() => {
          resolve(employee);
        })
        .catch((error) => reject(error));
    });
  });
};

export const getEmployees = (): Promise<Array<Employee>> => {
  return new Promise<Array<Employee>>((resolve, reject) => {
    getDocs(collection(db, "employees"))
      .then((response) => {
        const docSnapshots = response.docs;
        let result: Array<Employee | any> = [];
        for (let snapShot of docSnapshots) {
          const doc = snapShot.data();
          result.push(doc);
        }
        resolve(result);
      })
      .catch((error: any) => {
        console.log(error);
        reject(error);
      });
  });
};

export const getEmployeeInfo = (uid: any): Promise<Array<Employee>> => {
  const q = query(collection(db, "employees"), where("uid", "==", uid));
  return new Promise<Array<Employee>>((resolve, reject) => {
    getDocs(q)
      .then((response) => {
        const docSnapshots = response.docs;
        let result: Array<Employee | any> = [];
        for (let snapShot of docSnapshots) {
          const doc: any = snapShot.data();
          result.push(doc);
        }
        resolve(result[0]);
      })
      .catch((error: any) => {
        console.log(error);
        reject(error);
      });
  });
};
