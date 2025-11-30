import { Injectable } from '@angular/core';
import { RsvpGuest, RsvpHousehold, RsvpInfo } from '@models/rsvp-info.model';
import { INVITED_GUESTS } from 'app/data/secret-cache';

@Injectable({
  providedIn: 'root',
})
export class HouseholdService {
  private household?: RsvpHousehold;

  constructor() { }

  public getRsvpInfo = (): RsvpInfo | undefined => {
    const code = localStorage.getItem('invitationCode');
    if (!code) return undefined;

    this.household = this.getHouseholdByCode(code);

    return {
      household: this.household,
      guests: this.household.names.map(name => { return { name } as RsvpGuest }),
    }
  };

  private getHouseholdByCode = (code: string): RsvpHousehold => INVITED_GUESTS.find(household => household.id === code)!;
}
