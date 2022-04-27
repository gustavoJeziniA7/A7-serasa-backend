import { Service, MongooseServiceOptions } from 'feathers-mongoose';
import { Application } from '../../declarations';
import axios from 'axios';
import separaBlocos from '../../Blocos';
import filtrarL02 from '../../Blocos/L02';
import tratarDados from '../../Blocos';

const fetchTeste = async () => {
  const url = 'http://10.0.0.111:5000/layout/api/serasacnpjjson/bd/47209986000178'

  return await axios.get(url);
}

export class Testando extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<MongooseServiceOptions>, app: Application) {
    super(options);
  }

  async create(body: any) {
    try {
      const { data } = await fetchTeste();
      const { data: blocos } = data;
      // const { data: blocos } = dataHardCoded;

      const dadosSerasa = tratarDados(blocos);


      return dadosSerasa;

    } catch (error) {
      console.log(error);

    }
}
}
