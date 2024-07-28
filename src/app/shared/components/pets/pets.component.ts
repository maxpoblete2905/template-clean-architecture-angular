import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsComponent {}
