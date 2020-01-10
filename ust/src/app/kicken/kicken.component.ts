import { Component, OnInit } from '@angular/core';

export interface Kicken {
  date: string;
  money: number;
}

const KICKEN_DATA: Kicken[] = [
  {date: 'Hydrogen', money: 1.0079},
  {date: 'Helium', money: 4.0026},
  {date: 'Lithium', money: 6.941},
  {date: 'Beryllium', money: 9.0122},

];

@Component({
  selector: 'app-kicken',
  templateUrl: './kicken.component.html',
  styleUrls: ['./kicken.component.css']
})
export class KickenComponent implements OnInit {

  displayedColumns: string[] = ['date', 'money'];
  dataSource = KICKEN_DATA;

  constructor() { }

  ngOnInit() {
  }

}
