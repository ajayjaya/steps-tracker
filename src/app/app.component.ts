import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  posts = [
    {
      id: 1,
      title: "Reusable Component"
    },
    {
      id: 2,
      title: "Blog"
    },
    {
      id: 3,
      title: "Case study"
    },
    {
      id: 4,
      title: "Certification"
    }
  ]
}
