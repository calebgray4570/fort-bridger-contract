import { Component, AfterViewInit, HostBinding } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { fromEvent } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
  pairwise,
  share,
  throttleTime
} from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

type VisibilityState = 'visable' | 'hiddenSmall' | 'hidden';
type Direction = 'up' | 'down';

@Component({
  selector: 'app-wrapper',
  templateUrl: './app-wrapper.component.html',
  styleUrls: ['./app-wrapper.component.scss'],
  animations: [
    trigger('toggle', [
      state(
        'hidden',
        style({ opacity: 1, transform: 'translateY(-70%)' })
      ),
      state(
        'hiddenSmall',
        style({opacity: 1, transform: 'translateY(-45%)' })
      ),
      state(
        'visable',
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
      transition('* => *', animate('200ms ease-in'))
    ])
  ]
})
export class AppWrapperComponent implements AfterViewInit {
  public imgShow = true;
  public headerToggle: VisibilityState = 'visable';
  public directionToggle: Direction;
  private isVisible = true;

  constructor(public auth: AuthService) {}

  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    window.pageYOffset <= 50 ? this.imgShow = true : this.imgShow = false;
    window.pageYOffset <= 50 ? this.isVisible = true : this.isVisible = false;
    return this.isVisible && window.pageYOffset <= 50 ? this.headerToggle = 'visable' : 
           !this.isVisible  && window.innerWidth <= 1100 ? this.headerToggle = 'hiddenSmall' : 
           this.headerToggle = 'hidden';
  }

  ngAfterViewInit() {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? 'up' : 'down')),
      distinctUntilChanged(),
      share()
    );

    const goingUp$ = scroll$.pipe(
      filter(direction => direction === 'up')
    );

    const goingDown$ = scroll$.pipe(
      filter(direction => direction === 'down')
    );

    goingUp$.subscribe();
    goingDown$.subscribe();
  }
}