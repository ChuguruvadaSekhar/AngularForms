import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import { User } from '../User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userForm: FormGroup;
  roles: Array<string> = [
    'Guest',
    'Admin',
    'Owner',
    'Operator'
  ];

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      roles: [''],
      notes: ['']
    });
   }

  ngOnInit() {
  }

}
