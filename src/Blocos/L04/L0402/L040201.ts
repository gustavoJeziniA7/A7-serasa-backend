interface L040201 {
  "id": Number,
  "id_mailing": Number,
  "grafia": String
}


const tratarL040201 = (bloco: any) => {
  const data = bloco[0]['L040201']
  const dadoTratado = data.map((l: L040201) => {
    const {
      grafia
    } = l;

    const APONTAMENTOS = {
      GRAFIAS: grafia
    }

    return APONTAMENTOS;
  })

  return (dadoTratado);


}

export default tratarL040201;
