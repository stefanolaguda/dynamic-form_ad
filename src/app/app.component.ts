import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  modelData = {
    firstname: {
      type: 'text',
      value: '',
      label: 'FirstName',
    },
    lastname: {
      type: 'text',
      value: '',
      label: 'LastName',
    },
    address: {
      type: 'text',
      value: '',
      label: 'Address',
    },
    age: {
      type: 'number',
      value: '',
      label: 'Age',
    },
    birthDay: {
      type: 'date',
      value: '',
      label: 'Birthday',
    },
    typeBussines: {
      label: 'Bussines Type',
      value: 'premium',
      type: 'radio',
      options: [
        {
          label: 'Enterprise',
          value: '1500',
        },
        {
          label: 'Home',
          value: '6',
        },
        {
          label: 'Personal',
          value: '1',
        },
      ],
    },
    newsletterIn: {
      label: 'Suscribe to newsletter',
      value: 'email',
      type: 'checkbox',
    },
    suscriptionType: {
      label: 'Suscription Type',
      value: 'premium',
      type: 'select',
      options: [
        {
          label: 'Pick one',
          value: '',
        },
        {
          label: 'Premium',
          value: 'premium',
        },
        {
          label: 'Basic',
          value: 'basic',
        },
      ],
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
