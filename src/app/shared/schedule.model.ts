//this can be use for display data from db to view

export class Schedule {
    
  name: string = '';
  description: string = '';
  mealBreak: string = '';
  flexMeal: string = '';
  monitorLate: string = '';
  grace: string = '';
  requestable: string = '';

  restDaySunday: boolean = false;
  restDayMonday: boolean = false;
  restDayTuesday: boolean = false;
  restDayWednesday: boolean = false;
  restDayThursday: boolean = false;
  restDayFriday: boolean = false;
  restDaySaturday: boolean = false;

  inSunday: string = '' ;
  inMonday: string = '';
  inTuesday: string = '';
  inWednesday: string = '';
  inThursday: string = '' ;
  inFriday: string = '';
  inSaturday: string = '';

  inPTISunday: boolean = false;
  inPTIMonday: boolean = false;
  inPTITuesday: boolean = false;
  inPTIWednesday: boolean = false;
  inPTIThursday: boolean = false;
  inPTIFriday: boolean = false;
  inPTISaturday: boolean = false;

  mealOutSunday: string = '' ;
  mealOutMonday: string = '';
  mealOutTuesday: string = '';
  mealOutWednesday: string = '';
  mealOutThursday: string = '';
  mealOutFriday: string = '';
  mealOutSaturday: string = ''

  nextDayMealOutSunday: boolean = false;
  nextDayMealOutMonday: boolean = false;
  nextDayMealOutTuesday: boolean = false;
  nextDayMealOutWednesday: boolean = false;
  nextDayMealOutThursday: boolean = false;
  nextDayMealOutFriday: boolean = false;
  nextDayMealOutSaturday: boolean = false;
  

  mealInSunday: string = '';
  mealInMonday: string = '';
  mealInTuesday: string = '';
  mealInWednesday: string = '';
  mealInThursday: string = '';
  mealInFriday: string = '';
  mealInSaturday: string = '';

  nextDayMealInSunday: boolean = false;
  nextDayMealInMonday: boolean = false;
  nextDayMealInTuesday: boolean = false;
  nextDayMealInWednesday: boolean = false;
  nextDayMealInThursday: boolean = false;
  nextDayMealInFriday: boolean = false;
  nextDayMealInSaturday: boolean = false;
  

  outSunday: string = '' ;
  outMonday: string = '' ;
  outTuesday: string = '';
  outWednesday: string = '';
  outThursday: string = '' ;
  outFriday: string = '';
  outSaturday: string = '';

  nextDayOutSunday: boolean = false;
  nextDayOutMonday: boolean = false;
  nextDayOutTuesday: boolean = false;
  nextDayOutWednesday: boolean = false;
  nextDayOutThursday: boolean = false;
  nextDayOutFriday: boolean = false;
  nextDayOutSaturday: boolean = false;
  

  totalHrsSunday: string = '';
  totalHrsMonday: string = '';
  totalHrsTuesday: string = '';
  totalHrsWednesday: string = '';
  totalHrsThursday: string = '';
  totalHrsFriday: string = '';
  totalHrsSaturday: string = '';
}
