export class Trip {
  id: number;
  name: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  price: number;
  freePlaces: number;
  limit: number;
  description: string;
  photo: string;
  rating: number;

  // tu zrób konstruktor PLZ xD
}

export const TRIPS: Trip[] = [
  { id: 1, name: 'Green Korcula', destination: 'Croatia', startDate: new Date('22/08/2020'), endDate: new Date('31/08/2020'), price: 1500, freePlaces:5, limit: 5, description: 'Trip to Craotian green island', photo: '/img/korcula.jpg', rating: 0},
  { id: 2, name: 'Magic Makarska', destination: 'Croatia', startDate: new Date('22/08/2020'), endDate: new Date('31/08/2020'), price: 2500,freePlaces:3, limit: 3, description: 'Trip to Riviera Makarska', photo: '/img/makarska.jpg', rating: 0},
  { id: 3, name: 'Green Korcula', destination: 'Croatia', startDate: new Date('22/08/2020'), endDate: new Date('31/08/2020'), price: 2700,freePlaces:25, limit: 25, description: 'Trip to Craotian green island', photo: '/img/korcula.jpg', rating: 0},
  { id: 4, name: 'Magic Makarska', destination: 'Croatia', startDate: new Date('22/08/2020'), endDate: new Date('31/08/2020'), price: 2500,freePlaces:60, limit: 60, description: 'Trip to Riviera Makarska', photo: '/img/makarska.jpg', rating: 0},
  { id: 5, name: 'Green Korcula', destination: 'Croatia', startDate: new Date('22/08/2020'), endDate: new Date('31/08/2020'), price: 2500,freePlaces:60, limit: 60, description: 'Trip to Craotian green island', photo: '/img/korcula.jpg', rating: 0},
  { id: 6, name: 'Magic Makarska', destination: 'Croatia', startDate: new Date('22/08/2020'), endDate: new Date('31/08/2020'), price: 2500,freePlaces:15, limit: 15, description: 'Trip to Riviera Makarska', photo: '/img/makarska.jpg', rating: 0},
  { id: 7, name: 'Green Korcula', destination: 'Croatia', startDate: new Date('22/08/2020'), endDate: new Date('31/08/2020'), price: 2500,freePlaces:60, limit: 60, description: 'Trip to Craotian green island', photo: '/img/korcula.jpg', rating: 0},
  { id: 8, name: 'Magic Makarska', destination: 'Croatia', startDate: new Date('22/08/2020'), endDate: new Date('31/08/2020'), price: 2500,freePlaces:60, limit: 60, description: 'Trip to Riviera Makarska', photo: '/img/makarska.jpg', rating: 0},

];

