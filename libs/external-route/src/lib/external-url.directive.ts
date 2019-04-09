import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';
import { Router } from '@angular/router';
import { defaultConfig } from './default-config';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'a:not([routerLink])'
})
export class ExternalUrlDirective {
  constructor(private elementRef: ElementRef, private router: Router) {}

  @HostBinding('rel')
  @Input()
  relationship = defaultConfig.documentRelationship;

  @HostBinding('target')
  @Input()
  target = defaultConfig.documentTarget;

  @HostListener('click', ['$event'])
  clicked(event: Event) {
    event.preventDefault();

    const url = this.elementRef.nativeElement.href;

    if (!url) {
      return;
    }

    this.router.navigate(
      [
        `/external-route`,
        {
          externalUrl: url,
          target: this.target
        }
      ],
      {
        skipLocationChange: true
      }
    );
  }
}
