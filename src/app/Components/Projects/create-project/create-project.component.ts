import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { employee } from 'src/Shared/Models/employee';
import { client } from 'src/Shared/Models/client';
import { organization } from 'src/Shared/Models/organization';
import { OrganizationService } from 'src/Shared/Services/organization.service';
import { ClientService } from 'src/Shared/Services/client.service';
import { EmployeeService } from 'src/Shared/Services/employee.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
projectObj:any;
lstClients:client[];
lstOrganizations:organization[];
OrganizationObj:organization;
lstEmployees:employee[];
EmployeeObj:employee;

  constructor(private organizationService:OrganizationService,private clientService:ClientService,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.projectObj={id:0,projectName:"",projectCode:"",type:"",cost:0,projectPeriod:0,planndedStartDate:new Date()
    ,actualStartDate:new Date(),planndedEndDate:new Date(),actualEndDate:new Date(),description:"",organizationId:0 ,employeeId:0,clientId:0}

    this.organizationService.GetAllOrganizations().subscribe(
      res=>{this.lstOrganizations=res},
      err=>console.log(err)
    )
    this.clientService.GetAllClients().subscribe(
      res=>{this.lstClients=res,console.log("clients",res)},
      err=>console.log(err)
    )
    this.employeeService.GetAllEmployees().subscribe(
      res=>{this.lstEmployees=res},
      err=>console.log(err)
    )
  }
}
