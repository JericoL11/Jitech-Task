import { Component, ViewChild } from '@angular/core';
import { ScheduleService } from '../shared/schedule.service';
import { Schedule } from '../shared/schedule.model';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddModalComponent } from '../add-modal/add-modal.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent{

  // ScheduleList : Schedule[] = []; ///ready to store data from db
  displayedColumns: string[] = ['name', 'description', 'mealBreak', 'flexMeal', 'monitorLate', 'actions'];
  dataSource = new MatTableDataSource<Schedule>(); //for filtering

  //modal
  selectedSchedule: any = null; // Holds the schedule to edit
  isEdit: boolean = false; // Tracks add or edit mode

//sorting
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    // Connect paginator and sort to the dataSource
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  
//inject schedule service class
constructor(public service:ScheduleService, private http: HttpClient){}

ngOnInit(){
  this.loadSchedules();
}

applyFilter(event: Event): void {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase(); // Apply filter
}

loadSchedules(): void {
  this.service.fetchScheduleList().subscribe({
    next: (data) => {
      this.dataSource.data = data;
      console.log('Fetched schedules:', this.dataSource.data);
    },
    error: (error) => {
      console.error('Error fetching schedules:', error);
    },
  });
}

deleteSchedule(id: string) {
  if (confirm('Are you sure you want to delete this schedule?')) {
    this.service.deleteSchedule(id).subscribe(() => {
      this.loadSchedules(); // Refresh the list after deletion
    });
  }
}

//Modal Options
openAddModal(): void {
  this.isEdit = false;
  this.selectedSchedule = null;
   // Reset the form with default values
   this.service.resetForm();
}

openEditModal(schedule: any): void {
  this.isEdit = true;
  this.selectedSchedule = schedule;
  this.service.scheduleForm.patchValue(schedule);


}

}
