import tratarL0401 from "./L0401";
import tratarL0402 from "./L0402";
import tratarL0403 from "./L0403";
import tratarL0404 from "./L0404";
import tratarL0406 from "./L0406";
import tratarL0409 from "./L0409";

const tratarL04 = (infoComercial: any) => {
  // console.log(infoComercial);
  const L0401 = infoComercial.filter((bloco:any) => ((Object.keys(bloco)[0]).includes('L0401')));
  const L0402 = infoComercial.filter((bloco:any) => ((Object.keys(bloco)[0]).includes('L0402')));
  const L0403 = infoComercial.filter((bloco:any) => ((Object.keys(bloco)[0]).includes('L0403')));
  const L0404 = infoComercial.filter((bloco:any) => ((Object.keys(bloco)[0]).includes('L0404')));
  const L0406 = infoComercial.filter((bloco:any) => ((Object.keys(bloco)[0]).includes('L0406')));
  const L0409 = infoComercial.filter((bloco:any) => ((Object.keys(bloco)[0]).includes('L0409')));

  const tratadoL0401 = tratarL0401(L0401);
  const tratadoL0402 = tratarL0402(L0402);
  const tratadoL0403 = tratarL0403(L0403);
  const tratadoL0404 = tratarL0404(L0404);
  const tratadoL0406 = tratarL0406(L0406);
  const tratadoL0409 = tratarL0409(L0409);

  return {
    L0401: tratadoL0401,
    L0402: tratadoL0402,
    L0403: tratadoL0403,
    L0404: tratadoL0404,
    L0406: tratadoL0406,
    L0409: tratadoL0409,
  };
}


export default tratarL04;
