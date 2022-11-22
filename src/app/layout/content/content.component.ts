import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  totalData: any;

  constructor() { }

  ngOnInit(): void {
    this.totalData = [
      {
        title : "Java",
        innerData: [
          {
            avatarLink: "https://avatars0.githubusercontent.com/u/22736418?s=88&v=4",
            innerTitle: "Test Title",
            subTitle: "This is a subtitle",
            tagText: "Running",
            tagColor: "blue",
            contentPara1: "Ant Design interprets the color system into two levels: a system-level color system and a product-level color system.",
            contentPara2: "Ant Design's design team preferred to design with the HSB color model, which makes it easier for designers to have a clear psychological expectation of color when adjusting colors, as well as facilitate communication in teams."
          }
        ]
      }
    ]
  }

}
