import tratarL040601 from "./L040601";

const tratarL0406 = (blocosL0406: any) => {
  // console.log(blocosL0406);
  const filtrados = filtrarL0406(blocosL0406);
  const {
    L040601,
  } = filtrados;

  const tratadoL040601 = tratarL040601(L040601);


  const tratadoL0406 = {
    L040601: tratadoL040601,
  }

  return tratadoL0406;

}

const filtrarL0406 = (blocosL0406: any) => {
  const L040601 = blocosL0406.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L040601'));

  return {
    L040601,
  }
}

export default tratarL0406;
