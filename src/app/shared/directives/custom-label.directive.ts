import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement?: ElementRef<HTMLElement>;

  constructor( private el: ElementRef<HTMLElement>) {
    console.log('constructor de la directiva');
    console.log(el);

    this.htmlElement = el;

    this.htmlElement.nativeElement.innerHTML = 'hola mundo';
  }

  ngOnInit(): void {
    console.log('Directiva - NgOnInit');
  }

}
