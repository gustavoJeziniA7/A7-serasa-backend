import tratarL021105 from "./L021105";
import tratarL021106 from "./L021106";
import tratarL021107 from "./L021107";
import tratarL021108 from "./L021108";
import tratarL021115 from "./L021115";
import tratarL021116 from "./L021116";
import tratarL021117 from "./L021117";
import tratarL021125 from "./L021125";
import tratarL021127 from "./L021127";

const tratarL0211 = (blocosL0211: any) => {
  // console.log(blocosL0211);
  const filtrados = filtrarL0211(blocosL0211);
  const {
    L021105,
    L021106,
    L021107,
    L021108,
    L021115,
    L021116,
    L021117,
    L021125,
    L021127
  } = filtrados;

  const tratadoL021105 = tratarL021105(L021105);
  const tratadoL021106 = tratarL021106(L021106);
  const tratadoL021107 = tratarL021107(L021107);
  const tratadoL021108 = tratarL021108(L021108);
  const tratadoL021115 = tratarL021115(L021115);
  const tratadoL021116 = tratarL021116(L021116);
  const tratadoL021117 = tratarL021117(L021117);
  const tratadoL021125 = tratarL021125(L021125);
  const tratadoL021127 = tratarL021127(L021127);

  const tratadoL0211 = {
    L021105: tratadoL021105,
    L021106: tratadoL021106,
    L021107: tratadoL021107,
    L021108: tratadoL021108,
    L021115: tratadoL021115,
    L021116: tratadoL021116,
    L021117: tratadoL021117,
    L021125: tratadoL021125,
    L021127: tratadoL021127,
  };

  return tratadoL0211;

}

const filtrarL0211 = (blocosL0211: any) => {
  const L021105 = blocosL0211.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L021105'));
  const L021106 = blocosL0211.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L021106'));
  const L021107 = blocosL0211.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L021107'));
  const L021108 = blocosL0211.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L021108'));
  const L021115 = blocosL0211.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L021115'));
  const L021116 = blocosL0211.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L021116'));
  const L021117 = blocosL0211.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L021117'));
  const L021125 = blocosL0211.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L021125'));
  const L021127 = blocosL0211.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L021127'));

  return {
    L021105,
    L021106,
    L021107,
    L021108,
    L021115,
    L021116,
    L021117,
    L021125,
    L021127
  }
}

export default tratarL0211;
