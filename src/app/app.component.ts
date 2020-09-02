import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { StudentService } from "./data/database/student-db.service"
// import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  students: any;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudentsList();
  }
  
  getStudentsList() {
    this.studentService.getStudentsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(students => {
      this.students = students;
      console.log(students);
    });
  }
}



