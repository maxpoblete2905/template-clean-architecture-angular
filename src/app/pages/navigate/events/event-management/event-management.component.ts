import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-event-management',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './event-management.component.html',
    styleUrl: './event-management.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventManagementComponent { }
