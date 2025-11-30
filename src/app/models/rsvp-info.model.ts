export interface RsvpInfo {
  household: RsvpHousehold;
  guests: RsvpGuest[];
}

export interface RsvpHousehold {
  id: string;
  names: string[];
  allowPlusOne?: boolean;
}

export interface RsvpGuest {
  name: string;
  isAttending?: boolean;
  notes?: string;
  dietaryPreference?: 'vegan' | 'vegetarian' | 'pescetarian' | null;
  plusOne?: boolean;
}