import { NavbarItem } from '../../shared/interfaces/navbar-item';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss']
})
export class NavbarItemComponent implements OnInit {
  @Input() title: string;
  @Input() icon: string;
  @Input() link: string;
  @Input() subitems: Array<NavbarItem>;
  @Input() isSubitem: boolean;

  constructor() {}

  ngOnInit() {}
}
