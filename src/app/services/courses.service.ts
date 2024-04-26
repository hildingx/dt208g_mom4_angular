import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//Hanterar datahämtning och logik för kursinformation.
export class CoursesService {
  //Egenskaper
  url: string = "https://webbutveckling.miun.se/files/ramschema_ht23.json";

  //Injicerar HttpClient för HTTP-anrop
  constructor(private http: HttpClient) { }

  //Metoder
  //Hämtar och returnerar en lista av kurser från servern
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }
}
