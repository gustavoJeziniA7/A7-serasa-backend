interface L020103 {
  "id": Number,
  "id_mailing": Number,
  "des_rel": String,
  "qtd_rel": String,
  "reservado_serasa": String,
}

const tratarL020103 = (bloco: any) => {
  // é assim que vem o bloco
  // [
  //   {
  //     L020103: [
  //       [Object], [Object],
  //       [Object], [Object],
  //       [Object], [Object],
  //       [Object]
  //     ]
  //   }
  // ]
  const data = bloco[0]['L020103']
  
  const tratadoL020103 = data.map((l: L020103) => {
    const {
      des_rel,
      qtd_rel,
      reservado_serasa
    } = l

    return {
      des_rel,
      qtd_rel,
      reservado_serasa
    }
  })

  return tratadoL020103;
  
}

export default tratarL020103;