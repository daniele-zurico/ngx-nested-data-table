import {Component} from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  data: any[] = [];

  constructor() {
    for (let i = 0; i < 5; i++) {
      const user = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        details: [],
      };

      for (let j = 0; j < 2; j++) {
        const details = {
          street: faker.address.streetAddress(),
          zipCode: faker.address.zipCode(),
          city: faker.address.city(),
        };
        user.details.push(details);
      }

      this.data.push(user);
    }
  }
}

