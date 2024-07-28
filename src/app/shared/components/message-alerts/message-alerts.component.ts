import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MessageStatus } from '@shared/interface';

@Component({
  selector: 'shared-message-alerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-alerts.component.html',
  styleUrl: './message-alerts.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class MessageAlertsComponent {
  @Input() messageStatus: MessageStatus = {
    class: 'error',
    message: '',
    showMessage: false,
  };
}
