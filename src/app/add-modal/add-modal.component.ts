import { Component } from '@angular/core';
import { ScheduleService } from '../shared/schedule.service';  
import { Schedule } from '../shared/schedule.model';
declare var bootstrap: any; // Declare Bootstrap as a global variable

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent {
  constructor(public service:ScheduleService,) { }

  onSubmit() {
    console.log('Form Values:', this.service.scheduleForm.value); // Debugging: Check form values
    if (this.service.scheduleForm.valid) {
      const newSchedule = this.service.scheduleForm.value;
      console.log('Submitting:', newSchedule); // Additional Debugging

      this.service.createSchedule(newSchedule).subscribe({
        next: (response) => {
          console.log('Schedule created successfully:', response);
          alert('Schedule saved successfully!');
          this.closeModal(); // Close the modal after success
        },
        error: (error) => {
          console.error('Error creating schedule:', error);
          alert('Failed to save schedule. Please try again.');
        }
      });
    } else {
      alert('Form is invalid. Please fill all required fields.');
    }
  }

  closeModal() {
    const modal = document.getElementById('scheduleModal'); // Get modal element by ID
    if (modal) {
      const modalInstance = bootstrap.Modal.getInstance(modal); // Use Bootstrap global object
      modalInstance?.hide(); // Close the modal if an instance exists
    }
  }

}
