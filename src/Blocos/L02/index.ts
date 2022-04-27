import tratarL0201 from "./L0201";
import tratarL0211 from "./L0211";

const tratarL02 = (infoComercial: any) => {
  // console.log(infoComercial);
  const L0201 = infoComercial.filter((bloco:any) => ((Object.keys(bloco)[0]).includes('L0201')));
  const L0211 = infoComercial.filter((bloco:any) => ((Object.keys(bloco)[0]).includes('L0211')));
  const L0234 = infoComercial.filter((bloco:any) => ((Object.keys(bloco)[0]).includes('L0234')));

  // console.log(L0201);
  // console.log(L0211);
  // console.log(L0234);

  const tratadoL0201 = tratarL0201(L0201);
  const tratadoL0211 = tratarL0211(L0211);


  return {L0201: tratadoL0201, L0211: tratadoL0211};
}


export default tratarL02;
