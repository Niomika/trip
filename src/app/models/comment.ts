export interface Comment{
  id: string;
  user_id: string;
  trip_id: string;
  name: string;
  comment: string;
  //rating: number; opcjonalne ale wtedy bys miała rating ogarniety
  //tak samo jak userów tez do bazy
}
