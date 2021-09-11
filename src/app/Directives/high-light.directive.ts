import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  @Input("appHighLight") appHighlight ='blue';
  constructor(private el: ElementRef) {
      console.log("HighLightDirective");
      // el.nativeElement.style.color = this.appHighlight;
   }
   ngOnInit():void{
     console.log("HighLightDirective", this.appHighlight);
     this.el.nativeElement.style.color = this.appHighlight;
   }
}
