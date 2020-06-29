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
  isCertOpen: boolean = false;

  toggleBar(isCertOpen: boolean) {
    this.isCertOpen = isCertOpen;
    isCertOpen ? this.openBar() : this.closeBar();
  }

  openBar() {
    this.modal.nativeElement.style.display = 'block';
    this.modalContent.nativeElement.style.transform = 'translateX(0)';
  }

  closeBar() {
    this.isCertOpen = false;
    this.modal.nativeElement.style.display = 'none';
    this.modalContent.nativeElement.style.transform = 'translateX(300px)';
  }
}
