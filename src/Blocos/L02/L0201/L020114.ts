interface L020114 {
  "id": Number,
  "id_mailing": Number,
  "des_rel_segc": String,
  "qtd_rel_segc": String,
  "reservado_serasa": String,
}

const tratarL020114 = (bloco: any) => {
  // é assim que vem o bloco
  // [
  //   {
  //     L020114: [
  //       [Object], [Object],
  //       [Object], [Object],
  //       [Object], [Object],
  //       [Object]
  //     ]
  //   }
  // ]
  const data = bloco[0]['L020114']


  const tratadoL020114 = data.map((l: L020114) => {
    const {
      des_rel_segc,
      qtd_rel_segc,
      reservado_serasa
    } = l

    const FORNECEDORES = {
      DESCRIÇÃO_DO_PERÍODO_RELACIONAMENTO: des_rel_segc,
      QUANTIDADE_DE_FONTES_RELACIONAMENTO: qtd_rel_segc,
      ÁREA_RESERVADA: reservado_serasa
    }

    return FORNECEDORES
  })

  return tratadoL020114;

}

export default tratarL020114;
