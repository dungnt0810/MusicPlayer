import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'auth-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  title: string;
  icon = 'keyboard_arrow_right';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // tslint:disable-next-line: no-string-literal
    const currPage = this.route.snapshot.data['animation']['value'];
    this.title = currPage === 'signup' ? 'login' : 'signup';
    this.icon = currPage === 'signup' ? 'keyboard_arrow_left' : this.icon;
  }
}
