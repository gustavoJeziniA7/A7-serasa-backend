const filtrarL02 = (infoComercial: any) => {
  // console.log(infoComercial);
  const L0201 = infoComercial.filter((bloco:any) => ((Object.keys(bloco)[0]).includes('L0201')));
  const L0211 = infoComercial.filter((bloco:any) => ((Object.keys(bloco)[0]).includes('L0211')));
  const L0234 = infoComercial.filter((bloco:any) => ((Object.keys(bloco)[0]).includes('L0234')));

  // console.log(L0201);
  // console.log(L0211);
  // console.log(L0234);

  return {L0201, L0211, L0234}
}

// const blabla= [
//               'L020100',
//               'L020101',
//               'L020102',
//               'L020103',
//               'L020113',
//               'L020114',


//               'L021105',
//               'L021106',
//               'L021107',
//               'L021108',
//               'L021115',
//               'L021116',
//               'L021117',
//               'L021125',
//               'L021126',
//               'L021127',


//               'L023405']

export default filtrarL02;
