import tratarL040201 from "./L040201";
import tratarL040202 from "./L040202";

const tratarL0402 = (blocosL0402: any) => {
  const filtrados = filtrarL0402(blocosL0402);
  const {
    L040201,
    L040202,
  } = filtrados;

  const tratadoL040201 = tratarL040201(L040201);
  const tratadoL040202 = tratarL040202(L040202);


  const tratadoL0402 = {
    L040201: tratadoL040201,
    L040202: tratadoL040202,
  }

  return tratadoL0402;

}

const filtrarL0402 = (blocosL0402: any) => {
  const L040201 = blocosL0402.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L040201'));
  const L040202 = blocosL0402.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L040202'));

  return {
    L040201,
    L040202,
  }
}

export default tratarL0402;
