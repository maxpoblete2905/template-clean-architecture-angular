import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-event-calendar',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './event-calendar.component.html',
    styleUrl: './event-calendar.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventCalendarComponent { }
