import { toast } from 'react-toastify';

// Funções genéricas
export const updateArray = async (response, arrayMethod) => {
  if(response.status === 200){
    response.json()
  .then(async function (data){
    arrayMethod(data);
  })
  }
}

export const setToken = (headers) =>{
  headers.append('Authorization',localStorage.getItem('accessToken'))
}

export const setXUserId = (headers) =>{
  headers.append('X-User-ID',localStorage.getItem('id'))
}

export const setContentType = (headers) =>{
  headers.append("Content-Type", "application/json");
}

export const setAcessControl = (headers) =>{
  headers.append("Access-Control-Allow-Origin","true");
}

export const setUserData = (url, method, headers) =>{
  let userData = fetch(url,{
    method: method,
    headers: headers
  })
  .then(response => response)
  .catch(function(err){return (err)});

  return userData;
}

export const callGetMethod = (url) => {
  let myHeaders = new Headers();
  setContentType(myHeaders);
  setToken(myHeaders);
  setXUserId(myHeaders);

  let userData = setUserData(url, 'GET', myHeaders);

  return userData
}

export const login = (email, senha)=>{
  let url = 'https://assets.univesp.br/hokage/auth/signin';

  let body = {
    "email":email,
    "senha":senha
  }

  let myHeaders = new Headers();
  setContentType(myHeaders);
  setAcessControl(myHeaders)

  let authData = fetch(url,{
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(body)}
    ).then((response) => {
      if(response.ok){
        return response.json()
      }}).then((jsondata) => {
            localStorage.setItem('accessToken','Bearer ' + jsondata.accessToken);
            localStorage.setItem('id', jsondata.id);
            localStorage.setItem('userName', jsondata.username);
            localStorage.setItem('email', jsondata.email);
            localStorage.setItem('role', jsondata.roles[0]);
          }).catch(function(err) {
              toast.error("seus dados estão incorretos.");
              return (err)
            });

}

export const signup = (nome, email, senha, equipe)=>{

  let url = 'https://assets.univesp.br/hokage/auth/signup';

  let body = {
    "nome": nome,
    "foto": "avatar",
    "email": email,
    "senha": senha,
    "equipe": equipe
  }

  let myHeaders = new Headers();
  setContentType(myHeaders);
  setAcessControl(myHeaders)

  // eslint-disable-next-line no-unused-vars
  let authData = fetch(url,{
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(body)
    }).then((response) => {
        if(response.ok){
          return response.json()
        }}).then((jsondata) => {
            localStorage.setItem('message', + jsondata.message);
            toast.success("Usuário cadastrado com sucesso!");
            }).catch(function(err) {
              toast.error("erro ao cadastrar usuário.");
              return (err)
              });

}

export const updateUsuario = (id, nome, foto, email, senha, equipe)=>{

  let url = 'https://assets.univesp.br/hokage/usuarios';

  let body = {
    "id": id,
    "nome": nome,
    "foto": foto,
    "email": email,
    "senha": senha,
    "equipe": equipe
  }

  let myHeaders = new Headers();
  setContentType(myHeaders);
  setToken(myHeaders);
  setXUserId(myHeaders);

 // eslint-disable-next-line no-unused-vars
  let authData = fetch(url,{
    method: 'PUT',
    headers: myHeaders,
    body: JSON.stringify(body)
    }).then((response) => {
        if(response.ok){
          return response.json()
        }}).then((jsondata) => {
            localStorage.setItem('message', + jsondata.message);
            toast.success("Usuário atualizado com sucesso!");
            }).catch(function(err) {
              toast.error("erro ao atualizar usuário.");
              return (err)
              });

}
