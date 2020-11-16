//ERROR HANDLING
const errorHandling = (error) =>{
    if(!error.response || !error.response.data ) {
        return {status: 500, message:"Ocorreu um erro no servidor, por favor tente novamente."}
    }
    if(error.response.data.status === 401){
       return  {status: 401, message:"Você não tem autorização para acessar esses dados"}
    }

    const _errors = error.response.data.errors;
    if(_errors && typeof _errors === "string") return {status: 400, message: error.response.data.errors}
    
    let msg = `Error: Preencha corretamente ${_errors.length > 1 ? "os" : "o"} campos de `;
    _errors.forEach((item, idx) => {
        const field = item.field[item.field.length - 1]
        msg += `${field}${(_errors.length === idx + 1) ? "." : ","} `
    })
    return {status: 400, message: msg}
}

export default errorHandling