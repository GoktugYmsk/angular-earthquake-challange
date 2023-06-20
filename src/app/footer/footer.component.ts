
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  handleRefreshClick(): void {
    // Yenileme işlemlerini burada gerçekleştirin
  }

  handleMagnifyingClick(): void {
    // Filtreleme işlemlerini burada gerçekleştirin
  }

  boot(): void {
    // İstatistik işlemlerini burada gerçekleştirin
  }
}

