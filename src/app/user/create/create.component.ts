import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../services/http.service';

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
    private formBuilder: FormBuilder,
    private httpService: HttpService
  ) {
    this._formGroup = this.formBuilder.group({
      fullName: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  saveUser() {
    this.httpService.addUser(this._formGroup.controls.fullName.value).subscribe(
      (response) => {
        alert(response);
      },
      (err) => {
        alert(err);
      }
    );
  }

}
