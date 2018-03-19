import { Injectable } from '@angular/core';
import { Employee } from '../shared/employee';

@Injectable()
export class EmployeeService {

  constructor() { }

GetEmployee2() : number {
  return 343;
}

GetEmployee() : Employee {
    let e = new Employee();

   e.FirstName = "bob";
   e.LastName = "barker";

   return e;
   }

}