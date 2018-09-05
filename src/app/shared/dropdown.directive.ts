import { Directive, OnInit,ElementRef, Renderer2, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen:boolean=false;

  @HostListener('click') toggleDrop(){
    this.isOpen=!this.isOpen;
  }

}
