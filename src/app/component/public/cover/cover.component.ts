import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  srcList = ['assets/images/cover book1.png', 'assets/images/cover book2.png', 'assets/images/cover book 3.png'];
  src: string;

  constructor() {
  }

  ngOnInit() {
    const i = 2;
    this.src = this.srcList[i];
    // timeInterval(() => {
    //   if (i === 0) {
    //     i = 2;
    //     return;
    //   } else if (i === 1) {
    //     i = 2;
    //   } else if (i === 2) {
    //     i = 0;
    //   }
    //   this.src = this.srcList[i];
    // }, 5000);

  }

}
