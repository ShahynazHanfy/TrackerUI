import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
// import {PharmacyService} from '../../services/pharmacy.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private routee: Router) { }
  pharmacyName:string
  pharmacyType:string

  pharmacyID:Number
  ngOnInit() {
  this.pharmacyID=Number(localStorage.getItem("pharmacyLoggedInID"))
  // this.pharmacyService.getPharmacyById(this.pharmacyID).subscribe(e=>{
  //   this.pharmacyName = e.name
  //   this.pharmacyType = e.pharmacyType
  //   console.log(this.pharmacyType)
  // })

  }
}
