import tratarL040101 from "./L040101";

const tratarL0401 = (blocosL0401: any) => {
  // console.log(blocosL0401);
  const filtrados = filtrarL0401(blocosL0401);
  const {
    L040101,
    L040102,
  } = filtrados;

  const tratadoL040101 = tratarL040101(L040101);
  // const tratadoL040102 = tratarL040102(L040102);


  const tratadoL0401 = {
    L040101: tratadoL040101,
  //   L040102: tratadoL040102,
  }

  return tratadoL0401;

}

const filtrarL0401 = (blocosL0401: any) => {
  const L040101 = blocosL0401.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L040101'));
  const L040102 = blocosL0401.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L040102'));

  return {
    L040101,
    L040102,
  }
}

export default tratarL0401;
