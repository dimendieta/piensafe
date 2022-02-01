const urlCrud = 'http://localhost:3001';


const getListUsuarios = async () => {
    const response = await fetch(`${urlCrud}/university`);    
    const data = await response.json();
    console.log(data)
    return  data;
}


const findByIdUsuarios = async (usuariosid) => {
    const response = await fetch(`${urlCrud}/university/${usuariosid}`);  
    const data = await response.json();     
    return  data;
}

const createUsuarios = async (universidad) => {
    console.log(universidad);
    const resp = await fetch(`${urlCrud}/university`, {
        method: 'POST',
        body: JSON.stringify(universidad),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

const updateUsuarios = async (universidad) => {
  
    const resp = await fetch(`${urlCrud}/university`, {
        method: 'PUT',
        body: JSON.stringify(universidad),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}


export {
    getListUsuarios,
    findByIdUsuarios,
    createUsuarios,
    updateUsuarios
}