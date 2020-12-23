import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {project} from '../../../../Shared/Models/project'
import {ProjectService} from '../../../../Shared/Services/project.service'
import { StackholdersService } from '../../../../Shared/Services/stackholders.service';
import { stackholder } from "../../../../Shared/Models/stackeholder";
@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit {

  projects:project[]
  stackholders:stackholder[]
  displayModal: boolean;
  displayModal2: boolean;
  loading: boolean;

  constructor(private projectService:ProjectService,private stackholderService:StackholdersService) { }

  ngOnInit() {
      // this.projects = []
      this.projectService.GetAllProjects().subscribe(projects=>{
        this.projects= projects
        console.log(this.projects)
        this.loading = false;
      })
      this.stackholderService.GetAllStackholders().subscribe(stackholders=>{
        this.stackholders=stackholders
        console.log(stackholders)
        this.loading = false;
      })
  }
  showAllProjectDetails(projectID:number){
    console.log(projectID)
  }
   showModalDialog() {
        this.displayModal = true;
    }


}
