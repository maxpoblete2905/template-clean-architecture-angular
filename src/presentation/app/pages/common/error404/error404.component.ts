import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-error404',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './error404.component.html',
    styleUrl: './error404.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Error404Component { }
