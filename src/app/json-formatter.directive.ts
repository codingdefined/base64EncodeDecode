import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import JSONFormatter from 'json-formatter-js';

@Directive({
  selector: 'json-formatter',
  standalone: true
})
export class JsonFormatterDirective implements OnChanges {
  @Input() json: any;
  constructor(private elRef: ElementRef) { }

  ngOnChanges() {
    if (this.json) {
      const formatter = new JSONFormatter(JSON.parse(this.json));
      this.elRef.nativeElement.appendChild(formatter.render());
    }
  }
}