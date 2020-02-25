import { Component, OnInit } from '@angular/core';
import { Department } from '../model/department.model'

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departments: Department[] = [
    {id: 1, name: 'HelpDesk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'Admin'},
    {id: 4, name: 'IT'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
