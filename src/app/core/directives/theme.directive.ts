import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { AppConfigService } from '../services/app-config.service';

@Directive({
  selector: '[appTheme]',
})
export class ThemeDirective {
  constructor(
    private configService: AppConfigService,
    private el: ElementRef,
    private renderer2: Renderer2
  ) {
    this.configService.themes$.subscribe(([previewTheme, currentTheme]) => {
      // console.log(previewTheme, currentTheme);
      this.renderer2.removeClass(this.el.nativeElement, previewTheme);
      this.renderer2.addClass(this.el.nativeElement, currentTheme);
    });
  }
}
