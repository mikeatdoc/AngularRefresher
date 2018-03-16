import { Component, OnInit } from "@angular/core";

import { EmployeeService } from "../services/employee.service";




@Component({
  selector: "timecard",
  templateUrl: "./timecard.component.html",
  styleUrls: ["./timecard.component.css"]
})
export class TimeCardComponent implements OnInit {
  title = "Time card";
  _employeeService: EmployeeService
  constructor(private employeeService: EmployeeService) { 

    this._employeeService= employeeService;
  }

  ee = '44';

  ngOnInit() {
    this.ee = this._employeeService.GetEmployee();
  }
}
