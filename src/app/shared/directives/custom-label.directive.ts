import { Directive, ElementRef, Input, input, OnInit } from '@angular/core';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';

  @Input() set color( value: string ) {
    console.log({Color: value});
    this._color = value;
    this.setStyle();
  }

  constructor( private el: ElementRef<HTMLElement>) {
    console.log('constructor de la directiva');
    console.log(el);

    this.htmlElement = el;

    this.htmlElement.nativeElement.innerHTML = 'hola mundo';
  }

  ngOnInit(): void {
    console.log('Directiva - NgOnInit');
  }

  setStyle( ): void {
    if ( !this.htmlElement) return;

    this.htmlElement!.nativeElement.style.color = this._color;
  }

}
