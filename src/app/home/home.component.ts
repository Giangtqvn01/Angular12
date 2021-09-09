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
  public traiCay2 =[{ten : 'Táo', gia:12 , haGia:false},{ten : 'Quýt', gia:-13,haGia:true}];
  public vietNamData=[{city:"Tỉnh/Thành phố",district:["Quận/Huyện"]},{city:"Hà Nội", district:["Hà Đông"]},
  {city:"Tuyên Quang", district:["Thành phố Tuyên Quang"]}
  ];
  public district:string[]=["Quận/Huyện"];

  constructor() { }

  public ngOnInit(): void {
    console.log(this.traiCay);
  }

  public resetName() : void{
    console.log('resetName');
    this.name='';
  }
  public changeCity(event:any):void{
    const city = event.target.value;
    if(!city){
      return;
    }
    // const search = this.vietNamData.filter(data => data.city === city);
    // console.log("search", search);
    // if(search && search.length >0){
    //   this.district = search[0].district;
    // }

    this.district = this.vietNamData.find(data => data.city === city)?.district || [];
  }
}
