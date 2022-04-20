const separaBlocos = (blocos:any) => {
  const infoCadastral = blocos.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L01'));
  const infoComercial = blocos.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L02'));
  const infoConsultas = blocos.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L03'));
  const infoApontamentos = blocos.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L04'));
  const tudo = {infoCadastral, infoComercial, infoConsultas, infoApontamentos};

  return tudo;
}

export default separaBlocos;
