import { Service, MongooseServiceOptions } from 'feathers-mongoose';
import { Application } from '../../declarations';
import axios from 'axios';
import separaBlocos from '../../Blocos';
import filtrarL02 from '../../Blocos/L02';

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
    const { data } = await fetchTeste();
    const { data: blocos } = data;

    // Separa pelo L(XX)
    const blocosSeparados = separaBlocos(blocos);
    console.log(blocosSeparados);

    const {
      infoCadastral,
      infoComercial,
      infoConsultas,
      infoApontamentos
    } = blocosSeparados;

    const teste = blocosSeparados.infoCadastral.find((bloco: any) => (Object.keys(bloco)[0]) === 'L010000');
    // console.log(teste);

    const filtradoL02 = filtrarL02(infoComercial)


    return filtradoL02;
  }
}
