// src/app/svg-loader.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SvgLoaderService {
  constructor(private http: HttpClient) {}

  getSvg(url: string): Observable<string> {
    return this.http.get(url, { responseType: 'text' });
  }
}
