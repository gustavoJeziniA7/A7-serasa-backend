import tratarL030101 from "./L030101";
import tratarL030102 from "./L030102";

const tratarL0301 = (blocosL0301: any) => {
  // console.log(blocosL0301);
  const filtrados = filtrarL0301(blocosL0301);
  const {
    L030101,
    L030102,
    L030103,
  } = filtrados;

  const tratadoL030101 = tratarL030101(L030101);
  const tratadoL030102 = tratarL030102(L030102);
  // const tratadoL030103 = tratarL030103(L030103);


  const tratadoL0301 = {
    L030101: tratadoL030101,
    L030102: tratadoL030102,
  //   L030103: tratadoL030103,
  //   L030114: tratadoL030114
  }

  // return tratadoL0301;
  return tratadoL0301;

}

const filtrarL0301 = (blocosL0301: any) => {
  const L030101 = blocosL0301.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L030101'));
  const L030102 = blocosL0301.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L030102'));
  const L030103 = blocosL0301.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L030103'));

  return {
    L030101,
    L030102,
    L030103,
  }
}

export default tratarL0301;
