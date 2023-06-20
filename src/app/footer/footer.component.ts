import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  handleRefreshClick(): void {
    location.reload();
  }

  handleMagnifyingClick(): void {
  }

  boot(): void {
  }
}
