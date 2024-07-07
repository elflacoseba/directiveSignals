import { Component, computed, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css',
  host: {'collision-id': 'PropertiesPageComponent'},
})
export class PropertiesPageComponent {

  public user = signal<User>({
    id: 1,
    email: "george.buth@reqres.in",
    first_name: "George",
    last_name: "Buth",
    avatar: "https://reqres.in/img/faces/1-image.jpg"
  });

  public fullName = computed( () => `${ this.user().first_name} ${ this.user().last_name}` );

  public onFieldUpdated(field: keyof User, value: any): void {
    // this.user.set({
    //   ...this.user(),
    //   [field]: value,
    // });

    // this.user.update( current => ({
    //   ...current,
    //   [field]: value
    // }) );

    this.user.update( current => {

      switch(field) {
        case 'email':
          current.email = value;
          break;
        case 'avatar':
          current.avatar = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        case 'id':
          current.id = Number( value );
      }

      return current;
    } );
  }

}

