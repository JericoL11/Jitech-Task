import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Schedule } from './schedule.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  readonly baseUrl = 'http://localhost:3000/schedules/';
  ScheduleList : Schedule[] = []; ///ready to store data from db
  scheduleForm: FormGroup;

  constructor(private fb:FormBuilder,private http: HttpClient ) { 

  //MAIN FORM (copy the model add and past it inside here)
  this.scheduleForm = this.fb.group({
    schedName: ['', Validators.required],
    description: ['', Validators.required],
    mealBreak: ['', Validators.required],
    flexMeal: ['', Validators.required],
    monitorLate: ['', Validators.required],
    grace: ['', [Validators.required, Validators.min(0)]],
    requestable: ['', Validators.required],
  
    restDaySunday: [false],
    restDayMonday: [false],
    restDayTuesday: [false],
    restDayWednesday: [false],
    restDayThursday: [false],
    restDayFriday: [false],
    restDaySaturday: [false],
  
    inSunday: ['10:00', Validators.required],
    inMonday: ['08:00', Validators.required],
    inTuesday: ['08:00', Validators.required],
    inWednesday: ['08:00', Validators.required],
    inThursday: ['08:00', Validators.required],
    inFriday: ['08:00', Validators.required],
    inSaturday: ['08:00', Validators.required],
  
    inPTISunday: [false],
    inPTIMonday: [false],
    inPTITuesday: [false],
    inPTIWednesday: [false],
    inPTIThursday: [false],
    inPTIFriday: [false],
    inPTISaturday: [false],
  
    mealOutSunday: ['02:00', Validators.required],
    mealOutMonday: ['02:00', Validators.required],
    mealOutTuesday: ['02:00', Validators.required],
    mealOutWednesday: ['02:00', Validators.required],
    mealOutThursday: ['02:00', Validators.required],
    mealOutFriday: ['02:00', Validators.required],
    mealOutSaturday: ['02:00', Validators.required],
  
    nextDayMealOutSunday: [false],
    nextDayMealOutMonday: [false],
    nextDayMealOutTuesday: [false],
    nextDayMealOutWednesday: [false],
    nextDayMealOutThursday: [false],
    nextDayMealOutFriday: [false],
    nextDayMealOutSaturday: [false],
  
    mealInSunday: ['01:00', Validators.required],
    mealInMonday: ['01:00', Validators.required],
    mealInTuesday: ['01:00', Validators.required],
    mealInWednesday: ['01:00', Validators.required],
    mealInThursday: ['01:00', Validators.required],
    mealInFriday: ['01:00', Validators.required],
    mealInSaturday: ['01:00', Validators.required],
  
    nextDayMealInSunday: [false],
    nextDayMealInMonday: [false],
    nextDayMealInTuesday: [false],
    nextDayMealInWednesday: [false],
    nextDayMealInThursday: [false],
    nextDayMealInFriday: [false],
    nextDayMealInSaturday: [false],
  
    outSunday: ['05:00', Validators.required],
    outMonday: ['05:00', Validators.required],
    outTuesday: ['05:00', Validators.required],
    outWednesday: ['05:00', Validators.required],
    outThursday: ['05:00', Validators.required],
    outFriday: ['05:00', Validators.required],
    outSaturday: ['05:00', Validators.required],
  
    nextDayOutSunday: [false],
    nextDayOutMonday: [false],
    nextDayOutTuesday: [false],
    nextDayOutWednesday: [false],
    nextDayOutThursday: [false],
    nextDayOutFriday: [false],
    nextDayOutSaturday: [false],
  
    totalHrsSunday: ['7', Validators.required],
    totalHrsMonday: ['8', Validators.required],
    totalHrsTuesday: ['8', Validators.required],
    totalHrsWednesday: ['8', Validators.required],
    totalHrsThursday: ['8', Validators.required],
    totalHrsFriday: ['8', Validators.required],
    totalHrsSaturday: ['8', Validators.required],
  });
  
  }

  fetchScheduleList(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.baseUrl);
}

  createSchedule(schedule: any): Observable<any>{
    return this.http.post(this.baseUrl, schedule)
  };

  deleteSchedule(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
