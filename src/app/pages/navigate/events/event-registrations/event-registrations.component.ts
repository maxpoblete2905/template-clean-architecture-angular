import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-event-registrations',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './event-registrations.component.html',
    styleUrl: './event-registrations.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventRegistrationsComponent { }
