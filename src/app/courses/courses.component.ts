import { Component } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})

export class CoursesComponent {
  //Egenskaper
  courses: Course[] = [];
  searchedCourses: Course[] = [];
  searchValue: string = "";

  constructor(private courseService: CoursesService) {}

  //Metoder
  ngOnInit() {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.searchedCourses = courses;
    });
  }

  applySearch(): void {
    this.searchedCourses = this.courses.filter((course) =>
      course.code.toLowerCase().includes(this.searchValue.toLowerCase())||
      course.coursename.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }
}