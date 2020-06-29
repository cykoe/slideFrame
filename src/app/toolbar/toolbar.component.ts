import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  @Input() isCertOpen: boolean = false;
  @Output() toggle: EventEmitter<any> = new EventEmitter();

  constructor() {}

  toggleIframe(): void {
    this.toggle.emit(!this.isCertOpen);
  }

  ngOnInit(): void {}
}
