import tratarL040301 from "./L040301";

const tratarL0403 = (blocosL0403: any) => {
  const filtrados = filtrarL0403(blocosL0403);
  const {
    L040301,
    L040302,
  } = filtrados;

  const tratadoL040301 = tratarL040301(L040301);
  // const tratadoL040302 = tratarL040302(L040302);


  const tratadoL0403 = {
    L040301: tratadoL040301,
    // L040302: tratadoL040302,
  }

  return tratadoL0403;

}

const filtrarL0403 = (blocosL0403: any) => {
  const L040301 = blocosL0403.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L040301'));
  const L040302 = blocosL0403.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L040302'));

  return {
    L040301,
    L040302,
  }
}

export default tratarL0403;
