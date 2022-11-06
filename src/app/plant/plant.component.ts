import { Component, OnInit } from '@angular/core';
import { Plant } from './plant';
import { PlantService } from './plant.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css'],
})
export class PlantComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
}
