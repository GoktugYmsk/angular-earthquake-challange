import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  earthquakes: any[] = [];

  constructor(private http: HttpClient) {
    this.getEarthquakeCities();
  }

  getEarthquakeCities() {
    this.http.get<any>('https://api.orhanaydogdu.com.tr/deprem/kandilli/live')
      .subscribe(response => {
        this.earthquakes = response.result;
        console.log(this.earthquakes);
      });
  }

}

