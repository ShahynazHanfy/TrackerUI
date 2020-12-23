import {stackholder} from '../Models/stackeholder'
export class project {
     id:number;
     projectName:string       
     projectCode:string       
     type:string              
     cost:number              
     projectPeriod :number
     clientName:string
     clientMobil:string
     organizationName:string
     projectTypeName:string    
     planndedStartDate:Date 
     actualStartDate:Date   
     planndedEndDate:Date   
     actualEndDate:Date     
     description:string       
     organizationId:number                       
     employeeId:number                                           
     clientId:number  
    listOfStackholders:stackholder[] ///Extra to show stackholders for each project

  }