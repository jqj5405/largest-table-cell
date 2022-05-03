import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private table = document.getElementsByTagName('table');
  private highest: number = 0;

  getHighest() {
    return this.highest;
  }

  ngOnInit() {
    this.cellCount();
  }

  cellCount() {
    for (let i = 0; i < this.table.length; i++) {
      const count = this.table[i].getElementsByTagName('td').length;
      console.log('table', i, ':', count);
      if (count > this.highest) {
        this.highest = count;
      }
    }
    console.log(this.highest);
  }
}
