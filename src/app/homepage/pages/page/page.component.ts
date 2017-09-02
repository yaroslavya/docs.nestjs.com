declare var Prism;
import { ChangeDetectorRef, ElementRef, AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'app-base-page',
  template: ``,
})
export class BasePageComponent implements AfterViewChecked {
  private isHljsInitialized = false;

  constructor(
    private readonly cd: ChangeDetectorRef,
    private readonly el: ElementRef) {}

  ngAfterViewChecked() {
    this.initHljs();
  }

  private initHljs() {
    if (this.isHljsInitialized) {
      return;
    }
    const tags = this.el.nativeElement.querySelectorAll('code');
    [].forEach.call(tags, (code: HTMLElement) => {
        if (code.className) {
          Prism.highlightElement(code);
          this.isHljsInitialized = true;
        }
      }
    );
    this.cd.markForCheck();
  }
}