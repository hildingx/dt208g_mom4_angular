# DT208G - Moment 3 - Angular II

Alexander Hilding

## Konstruktion
Projektet initierades med Angular CLI. En komponent skapandes `CoursesComponent` som är ansvarig för att visa kursdata i tabellform.
Ett interface `Course` skapades för att typsäkra data. En service `CoursesService` skapades för att hantera datahämtning från extern källa via Angulars `HttpClient`. Denna service använder Observables för att hantera asynkron datahämtning.
Metoder skrevs i klassen i `CoursesComponent` för att ladda kurser från service vid initiering samt filtrera och sortera kurser.

## Funktion
Webbapplikationen syftar till att hantera och visa kursinformation för ett utbildningsprogram. Kursinformationen kan filtreras och sorteras.
Applikationen är byggd med Angular och använder bland annat Angulars `HttpClient`-modul för att utföra HTTP GET-anrop till ett RESTful API.

## Angular
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.4.