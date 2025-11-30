
export interface VenueInfo {
  title: string;
  location: VenueLocation;
  event: VenueEvent[];
}

export interface VenueLocation {
  name: string;
  address: string;
}

export interface VenueEvent {
  label: string;
  startTime: string;
  endTime?: string;
}