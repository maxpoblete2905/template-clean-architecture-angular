import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'app-info-dialog',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatDialogModule
    ],
    templateUrl: './infoDialog.component.html',
    styleUrl: './infoDialog.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoDialogComponent {

    constructor(public dialogRef: MatDialogRef<InfoDialogComponent>) { }

}
