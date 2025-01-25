import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Schedule } from './schedule.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  readonly baseUrl = 'http://localhost:3000/schedules/';
  ScheduleList : Schedule[] = []; ///ready to store data from db

  constructor(private fb:FormBuilder,private http: HttpClient ) { }

  
  fetchScheduleList(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.baseUrl);
}

  deleteSchedule(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  //MAIN FORM (copy the model add and past it inside here)
  scheduleForm = this.fb.group({
    //no need to insert '_id' bcs it will be autog-generate in mongoDb
    name: ['Jane Belaniso'],
    description: [''],
    mealBreak: [''],
    flexMeal: [''],
    monitorLate: [''],
    grace: [''],
    requestable: [''],
  
    restDaySunday: [false],
    restDayMonday: [false],
    restDayTuesday: [false],
    restDayWednesday: [false],
    restDayThursday: [false],
    restDayFriday: [false],
    restDaySaturday: [false],
  
    inSunday: [''],
    inMonday: [''],
    inTuesday: [''],
    inWednesday: [''],
    inThursday: [''],
    inFriday: [''],
    inSaturday: [''],
  
    inPTISunday: [false],
    inPTIMonday: [false],
    inPTITuesday: [false],
    inPTIWednesday: [false],
    inPTIThursday: [false],
    inPTIFriday: [false],
    inPTISaturday: [false],
  
    mealOutSunday: [''],
    mealOutMonday: [''],
    mealOutTuesday: [''],
    mealOutWednesday: [''],
    mealOutThursday: [''],
    mealOutFriday: [''],
    mealOutSaturday: [''],
  
    nextDayMealOutSunday: [false],
    nextDayMealOutMonday: [false],
    nextDayMealOutTuesday: [false],
    nextDayMealOutWednesday: [false],
    nextDayMealOutThursday: [false],
    nextDayMealOutFriday: [false],
    nextDayMealOutSaturday: [false],
  
    mealInSunday: [''],
    mealInMonday: [''],
    mealInTuesday: [''],
    mealInWednesday: [''],
    mealInThursday: [''],
    mealInFriday: [''],
    mealInSaturday: [''],
  
    nextDayMealInSunday: [false],
    nextDayMealInMonday: [false],
    nextDayMealInTuesday: [false],
    nextDayMealInWednesday: [false],
    nextDayMealInThursday: [false],
    nextDayMealInFriday: [false],
    nextDayMealInSaturday: [false],
  
    outSunday: [''],
    outMonday: [''],
    outTuesday: [''],
    outWednesday: [''],
    outThursday: [''], 
    outFriday: [''],
    outSaturday: [''],
  
    nextDayOutSunday: [false],
    nextDayOutMonday: [false],
    nextDayOutTuesday: [false],
    nextDayOutWednesday: [false],
    nextDayOutThursday: [false],
    nextDayOutFriday: [false],
    nextDayOutSaturday: [false],
  
    totalHrsSunday: [''],
    totalHrsMonday: [''],
    totalHrsTuesday: [''],
    totalHrsWednesday: [''],
    totalHrsThursday: [''],
    totalHrsFriday: [''],
    totalHrsSaturday: [''],
  });
}
