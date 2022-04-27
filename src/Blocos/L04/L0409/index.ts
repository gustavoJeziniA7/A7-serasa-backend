import tratarL040901 from "./L040901";

const tratarL0409 = (blocosL0409: any) => {
  // console.log(blocosL0409);
  const filtrados = filtrarL0409(blocosL0409);
  const {
    L040901,
  } = filtrados;

  const tratadoL040901 = tratarL040901(L040901);


  const tratadoL0409 = {
    L040901: tratadoL040901,
  }

  // return tratadoL0409;
  return tratadoL0409;

}

const filtrarL0409 = (blocosL0409: any) => {
  const L040901 = blocosL0409.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L040901'));

  return {
    L040901,
  }
}

export default tratarL0409;
