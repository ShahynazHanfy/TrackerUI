import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { project } from '../Models/project'


@Injectable({
  providedIn: 'root'
})
export class ProjectTypeService {

  constructor(private httpClient: HttpClient) { }
  httpHeader = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Accept': '*/*'
    })
  };

  GetAllProjectTypes(): Observable<project[]> {
    return this.httpClient.get<project[]>(`${environment.project}`, this.httpHeader);
  }
  // AddProjectType(projectType): Observable<project[]> {
  //   return this.httpClient.post<project[]>(`${environment.project}`,project, this.httpHeader);
  // }
}