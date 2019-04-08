import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'a:not([routerLink])'
})
export class ExternalUrlDirective {
  constructor(private el: ElementRef, private router: Router) {}

  @HostBinding('rel')
  @Input()
  rel = 'noopener';

  @HostBinding('target')
  @Input()
  target = '_blank';

  @HostListener('click', ['$event'])
  clicked(event: Event) {
    const url = this.el.nativeElement.href;
    if (!url) {
      return;
    }

    this.router.navigate(
      [
        '/external-route',
        {
          externalUrl: url,
          target: this.target
        }
      ],
      {
        skipLocationChange: true
      }
    );

    event.preventDefault();
  }
}
