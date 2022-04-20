import { Service, MongooseServiceOptions } from 'feathers-mongoose';
import { Application } from '../../declarations';
import axios from 'axios';

const fetchTeste = async () => {
  const url = 'http://10.0.0.111:5000/layout/api/serasacnpjjson/bd/47209986000178'
  return await axios.get(url);
}

const separaBlocos = (blocos:any) => {
  const infoCadastral = blocos.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L01'));
  const infoComercial = blocos.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L02'));
  const infoConsultas = blocos.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L03'));
  const infoApontamentos = blocos.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L04'));
  const tudo = {infoCadastral, infoComercial, infoConsultas, infoApontamentos};

  return tudo;
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

    const teste = blocosSeparados.infoCadastral.find((bloco: any) => (Object.keys(bloco)[0]) === 'L010000');
    console.log(teste);


    return blocosSeparados;
  }
}
