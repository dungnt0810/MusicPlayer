import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../shared/services/scroll-service/scroll.service';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss'],
})
export class StreamComponent implements OnInit {
  title = 'Music Player';

  constructor(private scrollService: ScrollService) {}

  updateScroll(element: HTMLElement) {
    const position = element.getBoundingClientRect().top - element.offsetTop;
    this.scrollService.updateScrollPosition(position);
  }

  ngOnInit(): void {}
}
