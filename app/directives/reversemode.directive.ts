import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appReversemode]'
})
export class ReversemodeDirective {

  constructor(element: ElementRef) {
    console.log(element);
    element.nativeElement.className="fliphoriz";
  }

}
