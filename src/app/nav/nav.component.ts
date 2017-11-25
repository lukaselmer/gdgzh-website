import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'gw-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  static MAX_HEIGHT = 47;
  static MIN_HEIGHT = 30;
  height = NavComponent.MAX_HEIGHT;

  ngOnInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;
    const unrestrictedHeight = NavComponent.MAX_HEIGHT - scrollPosition;
    this.height = this.clamp(unrestrictedHeight, NavComponent.MIN_HEIGHT, NavComponent.MAX_HEIGHT);
  }

  private clamp(value: number, minValue: number, maxValue: number) {
    return Math.min(maxValue, Math.max(minValue, value));
  }
}
