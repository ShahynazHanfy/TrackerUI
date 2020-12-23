import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { project } from '../../../../Shared/Models/project'
import { ProjectService } from '../../../../Shared/Services/project.service'
import {StackholdersService} from '../../../../Shared/Services/stackholders.service'
import {stackholder} from '../../../../Shared/Models/stackeholder'
@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit {

  projects: project[]
  project1: project
  stackholders:stackholder[]
  displayModal: boolean;
  displayModal2: boolean;
  displayMaximizable: boolean;

  constructor(private projectService: ProjectService ,private stackholderService: StackholdersService) { }

  ngOnInit() {
    // this.projects = []
    this.projectService.GetAllProjects().subscribe(projects => {
      this.projects = projects
      console.log(this.projects)
    })
    this.project1 = {
      actualEndDate: new Date(), id: 0, organizationId: 0, projectPeriod: 0, type: '',clientMobil:'',clientName:'',organizationName:'',projectTypeName:'',
      planndedEndDate: new Date(), planndedStartDate: new Date(), projectCode: '',listOfStackholders:[],
      projectName: '', actualStartDate: new Date(), clientId: 0, cost: 0, description: '', employeeId: 0
    }
  }
  showAllProjectDetails(projectID: number) {
    console.log(projectID)
  }
  showModalDialog() {
    this.displayModal = true;
    //this.displayMaximizable = true;

  }
  showMaximizableDialog(Projectid: number) {
    console.log(Projectid)
    this.projects.forEach(element => {
      if (element.id == Projectid) {
        this.project1 = element
        console.log(this.project1)
      }
      this.stackholderService.GetAllStackholdersByProjectID(Projectid).subscribe(e=>{
        this.stackholders = e
      this.project1.listOfStackholders = this.stackholders
      console.log(this.stackholders)
      })
    });
    this.displayMaximizable = true;
  }

}
