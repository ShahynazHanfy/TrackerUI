import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { employee } from 'src/Shared/Models/employee';
import { client } from 'src/Shared/Models/client';
import { organization } from 'src/Shared/Models/organization';
import { OrganizationService } from 'src/Shared/Services/organization.service';
import { ClientService } from 'src/Shared/Services/client.service';
import { EmployeeService } from 'src/Shared/Services/employee.service';
import { MessageService } from 'primeng/api';
import { ProjectService } from 'src/Shared/Services/project.service';
import { Router } from '@angular/router';

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

  constructor(private projectService:ProjectService, private organizationService:OrganizationService,
    private clientService:ClientService,private employeeService:EmployeeService
    ,private messageService: MessageService,private router: Router) {
      this.projectObj={id:0,projectName:"",projectCode:"",projectTypeName:"",cost:0,projectPeriod:0,planndedStartDate:new Date()
      ,actualStartDate:new Date(),planndedEndDate:new Date(),actualEndDate:new Date(),description:"",organizationId:0 ,employeeId:0,clientId:0}
     }

  ngOnInit(): void {
    this.organizationService.GetAllOrganizations().subscribe(
      res=>{this.lstOrganizations=res},
      err=>console.log(err)
    )
    this.clientService.GetAllClients().subscribe(
      res=>{this.lstClients=res},
      err=>console.log(err)
    )
    this.employeeService.GetAllEmployees().subscribe(
      res=>{this.lstEmployees=res},
      err=>console.log(err)
    )


  }
  AddProject() {
    // this.projectObj.organizationId = Number(this.projectObj.organizationId);
    // this.projectObj.clientId = Number(this.projectObj.clientId);
    // this.projectObj.employeeId = Number(this.projectObj.employeeId);
    console.log("organizationId",this.projectObj.organizationId);
    this.projectService.AddProject(this.projectObj).subscribe(
      (res) => { console.log(this.projectObj),this.router.navigate(['/tabs']); },
      err => console.log(err),
    );
  }
}
