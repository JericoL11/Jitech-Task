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
  scheduleForm: FormGroup;

//main defaultvalues
  readonly defaultValues = {
    _id: null,
    schedName: '',
    description: '',
    mealBreak: '',
    flexMeal: '',
    monitorLate: '',
    grace: 0,
    requestable: '',
    
    restDaySunday: false,
    restDayMonday: false,
    restDayTuesday: false,
    restDayWednesday: false,
    restDayThursday: false,
    restDayFriday: false,
    restDaySaturday: false,
    
    inSunday: '10:00',
    inMonday: '08:00',
    inTuesday: '08:00',
    inWednesday: '08:00',
    inThursday: '08:00',
    inFriday: '08:00',
    inSaturday: '08:00',
    
    inPTISunday: false,
    inPTIMonday: false,
    inPTITuesday: false,
    inPTIWednesday: false,
    inPTIThursday: false,
    inPTIFriday: false,
    inPTISaturday: false,
    
    mealOutSunday: '02:00',
    mealOutMonday: '02:00',
    mealOutTuesday: '02:00',
    mealOutWednesday: '02:00',
    mealOutThursday: '02:00',
    mealOutFriday: '02:00',
    mealOutSaturday: '02:00',
    
    nextDayMealOutSunday: false,
    nextDayMealOutMonday: false,
    nextDayMealOutTuesday: false,
    nextDayMealOutWednesday: false,
    nextDayMealOutThursday: false,
    nextDayMealOutFriday: false,
    nextDayMealOutSaturday: false,
    
    mealInSunday: '01:00',
    mealInMonday: '01:00',
    mealInTuesday: '01:00',
    mealInWednesday: '01:00',
    mealInThursday: '01:00',
    mealInFriday: '01:00',
    mealInSaturday: '01:00',
    
    nextDayMealInSunday: false,
    nextDayMealInMonday: false,
    nextDayMealInTuesday: false,
    nextDayMealInWednesday: false,
    nextDayMealInThursday: false,
    nextDayMealInFriday: false,
    nextDayMealInSaturday: false,
    
    outSunday: '05:00',
    outMonday: '05:00',
    outTuesday: '05:00',
    outWednesday: '05:00',
    outThursday: '05:00',
    outFriday: '05:00',
    outSaturday: '05:00',
    
    nextDayOutSunday: false,
    nextDayOutMonday: false,
    nextDayOutTuesday: false,
    nextDayOutWednesday: false,
    nextDayOutThursday: false,
    nextDayOutFriday: false,
    nextDayOutSaturday: false,
    
    totalHrsSunday: '8',
    totalHrsMonday: '8',
    totalHrsTuesday: '8',
    totalHrsWednesday: '8',
    totalHrsThursday: '8',
    totalHrsFriday: '8',
    totalHrsSaturday: '8',
  };
  
  constructor(private fb:FormBuilder,private http: HttpClient ) { 

  //MAIN FORM (copy the model add and past it inside here)
  this.scheduleForm = this.fb.group({
    _id: [null],
    schedName: ['', Validators.required],
    description: ['', Validators.required],
    mealBreak: ['', Validators.required],
    flexMeal: ['', Validators.required],
    monitorLate: ['', Validators.required],
    grace: ['', [Validators.required, Validators.min(0)]],
    requestable: ['', Validators.required],
  
    restDaySunday: [this.defaultValues.restDaySunday],
    restDayMonday: [this.defaultValues.restDayMonday],
    restDayTuesday: [this.defaultValues.restDayTuesday],
    restDayWednesday: [this.defaultValues.restDayWednesday],
    restDayThursday: [this.defaultValues.restDaySunday],
    restDayFriday: [this.defaultValues.restDayFriday],
    restDaySaturday: [this.defaultValues.restDaySaturday],
  
    inSunday: [this.defaultValues.inSunday],
    inMonday: [this.defaultValues.inMonday],
    inTuesday: [this.defaultValues.inTuesday],
    inWednesday: [this.defaultValues.inWednesday],
    inThursday: [this.defaultValues.inThursday],
    inFriday: [this.defaultValues.inFriday],
    inSaturday: [this.defaultValues.inSaturday],
  
    inPTISunday: [this.defaultValues.inPTISunday],
    inPTIMonday: [this.defaultValues.inPTIMonday],
    inPTITuesday: [this.defaultValues.inPTITuesday],
    inPTIWednesday: [this.defaultValues.inPTIWednesday],
    inPTIThursday: [this.defaultValues.inPTIThursday],
    inPTIFriday: [this.defaultValues.inPTIFriday],
    inPTISaturday: [this.defaultValues.inPTISaturday],
  
    mealOutSunday: [this.defaultValues.mealOutSunday],
    mealOutMonday: [this.defaultValues.mealOutMonday],
    mealOutTuesday: [this.defaultValues.mealOutTuesday],
    mealOutWednesday: [this.defaultValues.mealOutWednesday],
    mealOutThursday: [this.defaultValues.mealOutThursday],
    mealOutFriday: [this.defaultValues.mealOutFriday],
    mealOutSaturday: [this.defaultValues.mealOutSaturday],
  
    nextDayMealOutSunday: [this.defaultValues.nextDayMealOutSunday],
    nextDayMealOutMonday: [this.defaultValues.nextDayMealOutMonday],
    nextDayMealOutTuesday: [this.defaultValues.nextDayMealOutTuesday],
    nextDayMealOutWednesday: [this.defaultValues.nextDayMealOutWednesday],
    nextDayMealOutThursday: [this.defaultValues.nextDayMealOutThursday],
    nextDayMealOutFriday: [this.defaultValues.nextDayMealOutFriday],
    nextDayMealOutSaturday: [this.defaultValues.nextDayMealOutSaturday],
  
    mealInSunday: [this.defaultValues.mealInSunday],
    mealInMonday: [this.defaultValues.mealInMonday],
    mealInTuesday: [this.defaultValues.mealInTuesday],
    mealInWednesday: [this.defaultValues.mealInWednesday],
    mealInThursday: [this.defaultValues.mealInThursday],
    mealInFriday: [this.defaultValues.mealInFriday],
    mealInSaturday: [this.defaultValues.mealInSaturday],
  
    nextDayMealInSunday: [this.defaultValues.nextDayMealInSunday],
    nextDayMealInMonday: [this.defaultValues.nextDayMealInMonday],
    nextDayMealInTuesday: [this.defaultValues.nextDayMealInTuesday],
    nextDayMealInWednesday: [this.defaultValues.nextDayMealInWednesday],
    nextDayMealInThursday: [this.defaultValues.nextDayMealInThursday],
    nextDayMealInFriday: [this.defaultValues.nextDayMealInFriday],
    nextDayMealInSaturday: [this.defaultValues.nextDayMealInSaturday],
  
    outSunday: [this.defaultValues.outSunday],
    outMonday: [this.defaultValues.outMonday],
    outTuesday: [this.defaultValues.outTuesday],
    outWednesday: [this.defaultValues.outWednesday],
    outThursday: [this.defaultValues.outThursday],
    outFriday: [this.defaultValues.outFriday],
    outSaturday: [this.defaultValues.outSaturday],
  
    nextDayOutSunday: [this.defaultValues.nextDayOutSunday],
    nextDayOutMonday: [this.defaultValues.nextDayOutMonday],
    nextDayOutTuesday: [this.defaultValues.nextDayOutTuesday],
    nextDayOutWednesday: [this.defaultValues.nextDayOutWednesday],
    nextDayOutThursday: [this.defaultValues.nextDayOutThursday],
    nextDayOutFriday: [this.defaultValues.nextDayOutFriday],
    nextDayOutSaturday: [this.defaultValues.nextDayOutSaturday],
  
    totalHrsSunday: [this.defaultValues.totalHrsSunday],
    totalHrsMonday: [this.defaultValues.totalHrsMonday],
    totalHrsTuesday: [this.defaultValues.totalHrsTuesday],
    totalHrsWednesday: [this.defaultValues.totalHrsWednesday],
    totalHrsThursday: [this.defaultValues.totalHrsThursday],
    totalHrsFriday: [this.defaultValues.totalHrsFriday],
    totalHrsSaturday: [this.defaultValues.totalHrsSaturday],
  });
  }

  resetForm(): void {
    this.scheduleForm.reset(this.defaultValues); // Only resets the values, keeping validators intact
  }
  

  fetchScheduleList(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.baseUrl);
  }

  createSchedule(schedule: any): Observable<any>{
    return this.http.post(this.baseUrl, schedule)
  };

  updateSchedule(id: string, schedule: any) {
    return this.http.put(`${this.baseUrl}/${id}`, schedule); 
  }
  
  deleteSchedule(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
