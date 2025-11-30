import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RsvpGuest } from '@models/rsvp-info.model';
import { Observable } from 'rxjs';

export interface GoogleWriteResponse {
  status: string;
  message: string;
}

export interface GoogleReadResponse {
  status: string;
  message?: string;
  found?: string[];
  notFound?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetsService {

  constructor(private http: HttpClient) { }

  public write = (guests: RsvpGuest[]): Observable<GoogleWriteResponse> => {
    const url = '/api/sheets';
    return this.http.post<GoogleWriteResponse>(url, { guests: guests });
  }

  public read = (names: string[]): Observable<GoogleReadResponse> => {
    const url = `/api/sheets?names=${encodeURIComponent(names.join(','))}`;
    return this.http.get<GoogleReadResponse>(url);
  }
}
