import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ScheduleService } from '../shared/schedule.service';  
import { ScheduleComponent } from '../schedule/schedule.component';


declare var bootstrap: any; // Declare Bootstrap as a global variable

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {

  @Input() schedule: any = null; // Passed from parent for editing
  @Input() isEdit: boolean = false; // To determine mode (add/edit)
  @Output() onSave = new EventEmitter<void>(); // Notify parent about save

  constructor(public service:ScheduleService, public sched:ScheduleComponent) { }
  
  ngOnInit(): void {
    if (this.isEdit && this.schedule) {
      // Populate the form with the existing schedule data
      this.service.scheduleForm.patchValue(this.schedule);
    } else {
      // Reset the form for a new schedule by default
      this.sched.loadSchedules();
    }
  }
  onSubmit(): void {
    
    if (this.service.scheduleForm.valid) {
      const formValues = this.service.scheduleForm.value;

      if (this.isEdit) {
        this.service.updateSchedule(this.schedule._id, formValues).subscribe({
          next: () => {
            alert('Schedule updated successfully!');
            this.onSave.emit(); // Notify parent to refresh the list
            this.closeModal();
          },
          error: (error) => {
            console.error('Update failed:', error);
            alert('Failed to update the schedule. Please try again.');
          },
        });
      } else {
        this.service.createSchedule(formValues).subscribe({
          next: () => {
            alert('Schedule added successfully!');
            this.onSave.emit(); // Notify parent to refresh the list
            this.closeModal();
          },
          error: (error) => {
            console.error('Creation failed:', error);
            alert('Failed to add the schedule. Please try again.');
          },
        });
      }
      
    } else {
      alert('Form is invalid. Please fill all required fields.');
    }
  }

  closeModal(): void {
    const modal = document.getElementById('scheduleModal');
    if (modal) {
      const modalInstance = bootstrap.Modal.getInstance(modal);
      modalInstance?.hide();
    }
     this.sched.loadSchedules();
  }
}
