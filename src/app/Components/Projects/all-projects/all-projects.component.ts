import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {project} from '../../../../Shared/Models/project'
import {ProjectService} from '../../../../Shared/Services/project.service'
@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit {

projects:project[]
  displayModal: boolean;
  displayModal2: boolean;

  constructor(private projectService:ProjectService) { }

  ngOnInit() {
      // this.projects = []
      this.projectService.GetAllProjects().subscribe(projects=>{
        this.projects= projects
        console.log(this.projects)
      })
  }
  showAllProjectDetails(projectID:number){
    console.log(projectID)
  }
   showModalDialog() {
        this.displayModal = true;
    }


}
