/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlantListComponent } from './plant-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PlantService } from '../plant.service';
import { Plant } from '../plant';
import { faker } from '@faker-js/faker';

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PlantListComponent],
      providers: [PlantService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 3; i++) {
      const plant = new Plant(
        i,
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        12,
        faker.lorem.sentence(),
        faker.lorem.sentence()
      );
      component.plants.push(plant);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 <tr clas=table-tr> elements', () => {
    fixture.detectChanges();
    console.log(By.css('tr.table-tr'));
    expect(debug.queryAll(By.css('tr.table-tr'))).toHaveSize(3);
  });

  it('should have titles header in table', () => {
    const plant = component.plants;
    fixture.detectChanges();
    expect(debug.queryAll(By.css('th.table-th'))).toHaveSize(4);
    const headerTitleTable = ['#', 'Nombre común', 'Tipo', 'Clima'];

    debug.queryAll(By.css('th.table-th')).forEach((selector, i) => {
      expect(selector.nativeElement.textContent).toContain(headerTitleTable[i]);
    });
  });
});
