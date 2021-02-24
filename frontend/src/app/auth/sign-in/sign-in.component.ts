import { Component, OnInit } from '@angular/core';
import {FormControl,  FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  constructor() { }

  ngOnInit(): void {
  }

}
