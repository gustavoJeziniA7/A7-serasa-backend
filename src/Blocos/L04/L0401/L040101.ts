interface L040101 {
  "id": Number,
  "id_mailing": Number,
  "qtdeocor": String,
  "ultocor": String,
  "data_pef": String,
  "titulo_pef": String,
  "aval_pef": String,
  "valor": String,
  "contra": String,
  "origem": String,
  "filial": String,
  "msgsubjudice": String,
  "praca_pef": String,
  "distr_pef": String,
  "vara_pef": String,
  "data_sub_pref": String,
  "proc_pef": String,
  "cdnatu_pef": String,
  "reservado_serasa": String,
  "msg_subjud": String,
  "qtdevalo": String
}


const tratarL040101 = (bloco: any) => {
  const data = bloco[0]['L040101']
  const dadoTratado = data.map((l: L040101) => {
    const {
      qtdeocor,
      ultocor,
      data_pef,
      titulo_pef,
      aval_pef,
      valor,
      contra,
      origem,
      filial,
      msgsubjudice,
      praca_pef,
      distr_pef,
      vara_pef,
      data_sub_pref,
      proc_pef,
      cdnatu_pef,
      reservado_serasa,
      msg_subjud,
      qtdevalo
    } = l;

    const APONTAMENTOS = {
      QUANTIDADE_PENDÊNCIAS_FINANCEIRAS: qtdeocor,
      QUANTIDADE_DA_ÚLTIMA_OCORRÊNCIA: ultocor,
      DATA_DA_OCORRÊNCIA: data_pef,
      TÍTULO_DA_OCORRÊNCIA: titulo_pef,
      AVALISTA: aval_pef,
      VALOR_DA_PENDÊNCIA: valor,
      CONTRATO: contra,
      ORIGEM_DA_PENDÊNCIA: origem,
      FILIAL_DA_OCORRÊNCIA: filial,
      SUBJUDICE__PRAÇA: praca_pef,
      SUBJUDICE__DISTRITO: distr_pef,
      SUBJUDICE__VARA: vara_pef,
      SUBJUDICE__DATA: data_sub_pref,
      SUBJUDICE__PROCESSO: proc_pef,
      CÓDIGO_DA_NATUREZA: cdnatu_pef,
      ÁREA_RESERVADA: reservado_serasa,
      MENSAGEM_SUBJUDICE: msg_subjud,
      VALOR_TOTAL_DE_PENDÊNCIA_FINANCEIRA: qtdevalo,
// MSGSUBJUDICE 32 C QUANDO NÃO EXISTIR A PRACA ESTA MENSAGEM FORMATADA É MOSTRADA EM
// SUBSTITUIÇÃO AOS CAMPOS ABAIXO PRACA-PEF, DISTR-PEF, VARA-PRO, DATA-PEF E
// PROC-PEF.
// CONFORME EXEMPLO: DIVIDA SUB JUDICE -

    }

    return APONTAMENTOS;
  })

  return (dadoTratado);


}

export default tratarL040101;
