import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';

  tableData = [];

  ngOnInit() {
    for (let i = 0; i < 1000; i++) {
      this.tableData.push({
        name: `Name ${i}`,
        id: i
      });
    }
    console.log(this.tableData[96]);
  }
}
