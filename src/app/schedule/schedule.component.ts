import { Component } from '@angular/core';
import { ScheduleService } from '../shared/schedule.service';
import { Schedule } from '../shared/schedule.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent{

  readonly baseUrl = 'http://localhost:3000/schedules/';

  ScheduleList : Schedule[] = []; ///ready to store data from db
  
//inject schedule service class
constructor(public service:ScheduleService, private http: HttpClient){}

ngOnInit(){

}
fetchScheduleList(){
  this.http.get(this.baseUrl)
  .subscribe(data => {
this.ScheduleList = data as Schedule[];
  });
}

}
