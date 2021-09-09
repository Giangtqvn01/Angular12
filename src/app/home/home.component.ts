import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public  name ='Huy nguyễn';
  public age = 15;
  public traiCay =['Táo', "Cam"];
  public traiCay2 =[{ten : 'Táo', gia:12 , haGia:false},{ten : 'Quýt', gia:-13,haGia:true}]

  constructor() { }

  public ngOnInit(): void {
    console.log(this.traiCay);
  }

  public resetName() : void{
    console.log('resetName');
    this.name='';
  }
}
