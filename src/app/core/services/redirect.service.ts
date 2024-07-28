import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RedirectService {

    constructor(private router: Router) { }

    redirectTo(path: string): void {
        this.router.navigate([path]);
    }

    redirectToAndClearHistory(path: string): void {
        this.router.navigateByUrl(path, { replaceUrl: true }).then(() => {
            window.location.replace(path);
        });
    }
}
