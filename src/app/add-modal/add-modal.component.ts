import { Component } from '@angular/core';
import { ScheduleService } from '../shared/schedule.service';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent {

  constructor(public service:ScheduleService) { }

  onSubmit(){
    console.log(this.service.scheduleForm.value);
  }
}
