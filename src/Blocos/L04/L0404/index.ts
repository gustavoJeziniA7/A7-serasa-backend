import tratarL040401 from "./L040401";

const tratarL0404 = (blocosL0404: any) => {
  // console.log(blocosL0404);
  const filtrados = filtrarL0404(blocosL0404);
  const {
    L040401,
  } = filtrados;

  const tratadoL040401 = tratarL040401(L040401);


  const tratadoL0404 = {
    L040401: tratadoL040401,
  }

  // return tratadoL0404;
  return tratadoL0404;

}

const filtrarL0404 = (blocosL0404: any) => {
  const L040401 = blocosL0404.filter((bloco:any) => (Object.keys(bloco)[0]).includes('L040401'));

  return {
    L040401,
  }
}

export default tratarL0404;
