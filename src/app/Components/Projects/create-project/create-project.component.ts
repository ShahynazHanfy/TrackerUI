import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
projectObj:any;
lstClients:any;
lstOrganizations:any;
lstEmployees:any;

  constructor() { }

  ngOnInit(): void {
    this.projectObj={id:0,projectName:"",projectCode:"",type:"",cost:0,projectPeriod:0,planndedStartDate:new Date()
    ,actualStartDate:new Date(),planndedEndDate:new Date(),actualEndDate:new Date(),description:"",organizationId:0 ,employeeId:0,clientId:0}

  }
}
