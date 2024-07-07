import { Component } from '@angular/core';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css',
  host: {'collision-id': 'PropertiesPageComponent'},
})
export class PropertiesPageComponent {

public onFieldUpdated(field: string, value: any): void {
    console.log(`El campo '${field}' se ha actualizado a ${value}`);
  }
}
