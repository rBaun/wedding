import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RsvpHousehold } from '@models/rsvp-info.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HouseholdService {

  constructor(private http: HttpClient) { }

  public getHouseholdById = (id: string): Observable<RsvpHousehold> => {
    const url = '/api/guests'
    return this.http.post<RsvpHousehold>(url, { id }, {
      responseType:'json'
    });
  }
}
