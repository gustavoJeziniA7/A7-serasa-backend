import tratarL020102 from "./L020102";
import tratarL020103 from "./L020103";

const tratarL0201 = (blocosL0201: any) => {
  // console.log(blocosL0201);
  const filtrados = filtrarL0201(blocosL0201);
  const {
    L020100,
    L020101,
    L020102,
    L020103,
    L020113,
    L020114
  } = filtrados;

  // tratarL020102(L020102)
  const tratadoL020103 = tratarL020103(L020103)
  
  return tratadoL020103;
  
}

const filtrarL0201 = (blocosL0201: any) => {
  const L020100 = blocosL0201.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L020100'));
  const L020101 = blocosL0201.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L020101'));
  const L020102 = blocosL0201.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L020102'));
  const L020103 = blocosL0201.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L020103'));
  const L020113 = blocosL0201.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L020113'));
  const L020114 = blocosL0201.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L020114'));

  return {
    L020100,
    L020101,
    L020102,
    L020103,
    L020113,
    L020114
  }
}

export default tratarL0201;