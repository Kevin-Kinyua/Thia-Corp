import { Component, OnInit } from '@angular/core';
import {FormControl,  FormGroupDirective, NgForm, Validators} from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
    // Validators.phone
  ]);

  constructor() { }

  ngOnInit(): void {
  }

}
