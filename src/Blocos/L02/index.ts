import tratarL0201 from "./L0201";

const tratarL02 = (infoComercial: any) => {
  // console.log(infoComercial);
  const L0201 = infoComercial.filter((bloco:any) => ((Object.keys(bloco)[0]).includes('L0201')));
  const L0211 = infoComercial.filter((bloco:any) => ((Object.keys(bloco)[0]).includes('L0211')));
  const L0234 = infoComercial.filter((bloco:any) => ((Object.keys(bloco)[0]).includes('L0234')));

  // console.log(L0201);
  // console.log(L0211);
  // console.log(L0234);

  const teste = tratarL0201(L0201);
  // console.log(teste);


  return teste
}


export default tratarL02;
