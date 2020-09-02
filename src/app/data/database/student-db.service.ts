import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Student } from './student';
 
@Injectable({
  providedIn: 'root'
})
export class StudentService {
 
  private dbPath = '/students';
 
  studentsRef: AngularFireList<Student> = null;
 
  constructor(private db: AngularFireDatabase) {
    this.studentsRef = db.list(this.dbPath);
  }
 
//   createStudent(customer: Student): void {
//     this.studentsRef.push(customer);
//   }
 
//   updateStudent(key: string, value: any): Promise<void> {
//     return this.studentsRef.update(key, value);
//   }
 
//   deleteStudent(key: string): Promise<void> {
//     return this.studentsRef.remove(key);
//   }
 
  getStudentsList(): AngularFireList<Student> {
    return this.studentsRef;
  }
 
//   deleteAll(): Promise<void> {
//     return this.studentsRef.remove();
//   }
}