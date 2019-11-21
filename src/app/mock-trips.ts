export class Trip {
  id: number;
  name: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  price: number;
  limit: number;
  description: string;
  photo: string;
}

export const TRIPS: Trip[] = [
  { id: 1, name: 'Green Korcula', destination: 'Croatia', startDate: new Date('22/08/2020'), endDate: new Date('31/08/2020'), price: 1500, limit: 5, description: 'Trip to Craotian green island', photo: '/img/korcula.jpg'},
  { id: 2, name: 'Magic Makarska', destination: 'Croatia', startDate: new Date('22/08/2020'), endDate: new Date('31/08/2020'), price: 2500, limit: 3, description: 'Trip to Riviera Makarska', photo: '/img/makarska.jpg'},
  { id: 3, name: 'Green Korcula', destination: 'Croatia', startDate: new Date('22/08/2020'), endDate: new Date('31/08/2020'), price: 2700, limit: 25, description: 'Trip to Craotian green island', photo: '/img/korcula.jpg'},
  { id: 4, name: 'Magic Makarska', destination: 'Croatia', startDate: new Date('22/08/2020'), endDate: new Date('31/08/2020'), price: 2500, limit: 60, description: 'Trip to Riviera Makarska', photo: '/img/makarska.jpg'},
  { id: 5, name: 'Green Korcula', destination: 'Croatia', startDate: new Date('22/08/2020'), endDate: new Date('31/08/2020'), price: 2500, limit: 60, description: 'Trip to Craotian green island', photo: '/img/korcula.jpg'},
  { id: 6, name: 'Magic Makarska', destination: 'Croatia', startDate: new Date('22/08/2020'), endDate: new Date('31/08/2020'), price: 2500, limit: 15, description: 'Trip to Riviera Makarska', photo: '/img/makarska.jpg'},
  { id: 7, name: 'Green Korcula', destination: 'Croatia', startDate: new Date('22/08/2020'), endDate: new Date('31/08/2020'), price: 2500, limit: 60, description: 'Trip to Craotian green island', photo: '/img/korcula.jpg'},
  { id: 8, name: 'Magic Makarska', destination: 'Croatia', startDate: new Date('22/08/2020'), endDate: new Date('31/08/2020'), price: 2500, limit: 60, description: 'Trip to Riviera Makarska', photo: '/img/makarska.jpg'},

];

