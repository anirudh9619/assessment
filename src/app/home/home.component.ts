import { Component, OnInit } from '@angular/core';
import {ApicallService} from '.././service/apicall.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dat:any;
  ood=0;
  del=0;
  nfi=0;
  dex=0;
  int=0;
  stage:[];
  constructor(private apicall:ApicallService) {
     this.dat={   
    };
    
   }

  ngOnInit() {
    console.log("in init")
    this.apicall.getData().subscribe(
      data=>{
        this.dat=data;
        console.log(this.dat.data.length);
        for(let u of this.dat.data){
          if(u.current_status_code=="OOD"){
            
            this.ood=this.ood+1;
          }
          if(u.current_status_code=="DEL"){
            
            this.del=this.del+1;
          }
          if(u.current_status_code=="INT"){
            this.int=this.int+1;
          }
          if(u.current_status_code=="DEX"){
            this.dex=this.dex+1;
          }
          if(u.current_status_code=="NFI"){
            this.nfi=this.nfi+1;
          }
          this.stage=this.dat.data[0].scan;
        }
      }
    );
   
    
    
}
getStatus(id){

  for(let u of this.dat.data){
  if(id==u.awbno){
    this.stage=u.scan;
    break;
  }
}
}

}
