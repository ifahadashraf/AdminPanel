import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  _formGroup: FormGroup;

  public userModel: {
    fullName: string
  };

  constructor(
    private formBuilder: FormBuilder
  ) {
    this._formGroup = this.formBuilder.group({
      fullname: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  saveUser() {
    console.log('YAAYYY');
  }

}
