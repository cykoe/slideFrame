import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('modal') modal: any;
  @ViewChild('modalContent') modalContent: any;
  title = 'slideIframe';

  openBar() {
    this.modal.nativeElement.style.display = 'block';
    this.modalContent.nativeElement.style.transform = 'translateX(0)';
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
    this.modalContent.nativeElement.style.transform = 'translateX(300px)';
  }
}
