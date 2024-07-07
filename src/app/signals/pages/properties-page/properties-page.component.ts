import { Component, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css',
  host: {'collision-id': 'PropertiesPageComponent'},
})
export class PropertiesPageComponent {

  public counter = signal(10);

  public user = signal<User>({
    id: 1,
    email: "george.buth@reqres.in",
    first_name: "George",
    last_name: "Buth",
    avatar: "https://reqres.in/img/faces/1-image.jpg"
  });

  public fullName = computed( () => `${ this.user().first_name} ${ this.user().last_name}` );

  public userChangedEffect = effect( () => {
    console.log( `${ this.user().first_name } - ${ this.counter() }` );
  } );

  public onFieldUpdated(field: keyof User, value: string) {
    // this.user.set({
    //   ...this.user(),
    //   [field]: value,
    // });

    // this.user.update( current => ({
    //   ...current,
    //   [field]: value
    // }) );

    this.user.update( (current) => {

      var newUser = {...current};

      switch(field) {
        case 'email':
          newUser.email = value;
          break;
        case 'avatar':
          newUser.avatar = value;
          break;
        case 'first_name':
          newUser.first_name = value;
          break;
        case 'last_name':
          newUser.last_name = value;
          break;
        case 'id':
          newUser.id = Number( value );
      }

      return newUser ;
    } );
  }

  public increaseBy( value: number ) {
    this.counter.update( current => current + value );
  }
}

