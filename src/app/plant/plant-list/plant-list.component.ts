import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css'],
})
export class PlantListComponent implements OnInit {
  constructor(private plantService: PlantService) {}

  public plants: Array<Plant> = [];
  public totalInteriorPlants: number = 0;
  public totalExteriorPlants: number = 0;

  getPlantsList() {
    this.plantService.getPlants().subscribe((plants) => {
      this.plants = plants;
      this.totalExteriorPlants = plants.filter(
        (x) => x.tipo === 'Exterior'
      ).length;
      this.totalInteriorPlants = plants.filter(
        (x) => x.tipo === 'Interior'
      ).length;
    });
  }

  ngOnInit() {
    this.getPlantsList();

  }
}
