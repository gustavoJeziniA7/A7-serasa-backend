import tratarL0301 from "./L0301";

const tratarL03 = (infoComercial: any) => {
  // console.log(infoComercial);
  const L0301 = infoComercial.filter((bloco:any) => ((Object.keys(bloco)[0]).includes('L0301')));
  const L0302 = infoComercial.filter((bloco:any) => ((Object.keys(bloco)[0]).includes('L0302')));
  const L0303 = infoComercial.filter((bloco:any) => ((Object.keys(bloco)[0]).includes('L0303')));

  // console.log(L0301);
  // console.log(L0311);
  // console.log(L0334);

  const tratadoL0301 = tratarL0301(L0301);
  // const tratadoL0302 = tratarL0301(L0302);

  // const tratadoL0311 = tratarL0302(L0311);


  return {
    L0301: tratadoL0301,
    // L0302: tratadoL0302,
    // L0302: tratadoL0302
  };
}


export default tratarL03;
