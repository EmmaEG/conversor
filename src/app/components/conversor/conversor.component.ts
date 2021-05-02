import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  public dolar: number = 0;
  public yen: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
