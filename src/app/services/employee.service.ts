import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable()
export class EmployeeService {

  constructor() { }

GetEmployee() : number {
  return 343;
}
//  GetEmployee : Employee {
//    Employee e = new Employee();

//    e.FirstName = "bob";

//    return e;
//    }

}