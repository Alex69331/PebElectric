import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-despre-noi',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './despre-noi.component.html',
  styleUrl: './despre-noi.component.css',
})
export class DespreNoiComponent {}
