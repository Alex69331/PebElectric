import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galerie',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './galerie.component.html',
  styleUrl: './galerie.component.css',
})
export class GalerieComponent {
  images: string[] = [
    'assets/images/428169953_386220254017865_3818236487884664421_n.jpg',
    'assets/images/428236695_386220337351190_3732057403894843402_n.jpg',
    'assets/images/428252171_386222764017614_4457044386136165963_n.jpg',
    'assets/images/428320308_386222710684286_8496546808665973820_n.jpg',
    'assets/images/428194526_386220247351199_1663001196983602116_n.jpg',
    'assets/images/428354867_386222700684287_3291095363986996276_n.jpg',
    'assets/images/429473594_391543253485565_2825946370389356433_n.jpg',
    'assets/images/428615833_391553663484524_8022685856334657499_n.jpg',
    'assets/images/429481522_391543240152233_2998044498557282723_n.jpg',
    'assets/images/429492710_391543423485548_7953363568527680892_n.jpg',
    'assets/images/429532068_391543470152210_653742744980629630_n.jpg',
    'assets/images/429544473_391543433485547_8191664713846331857_n.jpg',
    'assets/images/429514319_391543166818907_1473133194278356217_n.jpg',
    'assets/images/429482959_391553876817836_948570636708401145_n.jpg',
    'assets/images/proiect.jpg',
  ];

  selectedImageIndex: number | null = null;

  openImage(index: number): void {
    this.selectedImageIndex = index;
  }
  closeImage(): void {
    this.selectedImageIndex = null;
  }

  prevImage(event: MouseEvent): void {
    event.stopPropagation();
    if (this.selectedImageIndex !== null && this.selectedImageIndex > 0) {
      this.selectedImageIndex--;
    }
  }
  nextImage(event: MouseEvent): void {
    event.stopPropagation();
    if (
      this.selectedImageIndex !== null &&
      this.selectedImageIndex < this.images.length - 1
    ) {
      this.selectedImageIndex++;
    }
  }
}
