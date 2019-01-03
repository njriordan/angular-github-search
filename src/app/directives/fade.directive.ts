import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[appFade]'
})
export class FadeDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'opacity', '.6');
    renderer.setStyle(el.nativeElement, 'transition', '.4s opacity');
  }

  @HostListener('mouseover') mouseover() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
  }

  @HostListener('mouseout') mouseout() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '.6');
  }

}
