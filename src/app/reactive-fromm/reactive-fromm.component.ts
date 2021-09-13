import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-reactive-fromm',
  templateUrl: './reactive-fromm.component.html',
  styleUrls: ['./reactive-fromm.component.scss']
})
export class ReactiveFrommComponent implements OnInit {
  // public formData: FormGroup = new FormGroup({
  //   name : new FormControl(''),
  //   age : new FormControl('')
  // });
  public formData = this.formBuider.group({
    name:['',Validators.required],
    age:['', Validators.required]
  });
  constructor(private common: CommonService, private formBuider: FormBuilder) { }

  ngOnInit(): void {
  }

  public onSubmit():void {
    // console.log("submit form: name = ",this.formData.value);
    this.common.submitData(this.formData.value);
  }
}
