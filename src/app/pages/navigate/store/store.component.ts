import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-store',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './store.component.html',
    styleUrl: './store.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreComponent { }
