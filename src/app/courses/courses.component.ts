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

  //Injicerar CoursesService
  constructor(private courseService: CoursesService) {}

  //Metoder

  //Metod som laddar kurser från service vid initiering
  ngOnInit() {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.searchedCourses = courses;
    });
  }

  //Filtrerar kurser baserat på söksträng
  applySearch(): void {
    this.searchedCourses = this.courses.filter((course) =>
      course.code.toLowerCase().includes(this.searchValue.toLowerCase()) ||
      course.coursename.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }

  //Sorterar kurser baserat på vald egenskap
  sortData(property: keyof Course): void {
    this.searchedCourses = this.searchedCourses.sort((a, b) => {
      if (a[property] > b[property]) {
        return 1;
      } else if (a[property] < b[property]) {
        return -1;
      }
      return 0;
    });
  }
}
