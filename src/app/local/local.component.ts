import {Component, OnInit} from '@angular/core';
import {LocalService} from "../service/Local.service";
import {Local} from "../model/Local";

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit{
locals : Local [] = [];
  constructor(private localService: LocalService) {
  }
  ngOnInit() {
    this.localService.findAllLocal().subscribe((data:Local[])=>{
this.locals=data;
    })
  }
  delete(id : number){
    if (confirm("Are you sure")){
      this.localService.delete(id).subscribe(()=>{
        this.ngOnInit()
      })
    }
  }


}
