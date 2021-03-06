import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';
import { Router } from '@angular/router';
import { defaultConfig } from './default-config';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'a:not([routerLink])'
})
export class ExternalUrlDirective implements AfterViewInit {
  constructor(
    private elementRef: ElementRef,
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) {}

  @HostBinding('rel')
  @Input()
  rel: string;

  @HostBinding('target')
  @Input()
  target: string;

  @HostListener('click', ['$event'])
  clicked(event: Event) {
    event.preventDefault();

    const url = this.elementRef.nativeElement.href;

    if (!url) {
      return;
    }

    this.router.navigate(
      [
        'external-route',
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

  ngAfterViewInit(): void {
    this.rel = this.rel || defaultConfig.documentRelationship;
    this.target = this.target || defaultConfig.documentTarget;
    this.changeDetector.detectChanges();
  }
}
