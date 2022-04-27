import tratarL02 from "./L02";
import tratarL03 from "./L03";
import tratarL04 from "./L04";

const separaBlocos = (blocos:any) => {
  const infoCadastral = blocos.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L01'));
  const infoComercial = blocos.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L02'));
  const infoConsultas = blocos.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L03'));
  const infoApontamentos = blocos.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L04'));
  const tudo = {infoCadastral, infoComercial, infoConsultas, infoApontamentos};

  return tudo;
}

const tratarDados = (blocos: any) => {
  const blocosSeparados = separaBlocos(blocos);
  const {
    infoCadastral,
    infoComercial,
    infoConsultas,
    infoApontamentos
  } = blocosSeparados;

  const L02 = tratarL02(infoComercial)
  const L03 = tratarL03(infoConsultas)
  const L04 = tratarL04(infoApontamentos)

  return {L02, L03, L04};
}

export default tratarDados;
