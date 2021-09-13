import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-template-driven-from',
  templateUrl: './template-driven-from.component.html',
  styleUrls: ['./template-driven-from.component.scss']
})
export class TemplateDrivenFromComponent implements OnInit {
  public name='';
  constructor(private common :CommonService) { }

  ngOnInit(): void {
  }

  public submitFrom ():void{
    console.log('submitFrom'+ this.name);
    this.common.submitData(this.name);
  }
}
