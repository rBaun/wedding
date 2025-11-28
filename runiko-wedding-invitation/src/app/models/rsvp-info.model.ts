export interface RsvpInfo {
  household: RsvpHousehold;
  guests: RsvpGuest[];
}

export interface RsvpHousehold {
  id: string;
  names: string[];
}

export interface RsvpGuest {
  name: string;
  isAttending?: boolean;
  notes?: string;
}