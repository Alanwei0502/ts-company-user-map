// 通常我們要 export 一個 class，會將此檔案名以大寫開頭
import { faker } from '@faker-js/faker';

// 在 TS 社群有人建議少用 export default，因為容易困惑哪些要用大括號引入哪些又不用。
// export default 'red';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.fullName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
