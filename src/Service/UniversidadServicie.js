const urlCrud = 'http://localhost:3001';

const getListUniversidad = async () => {
    const response = await fetch(`${urlCrud}/universidad`);    
    const data = await response.json();
    console.log(data)
    return  data;
}

const createUniversidad = async (universidadU) => {
    console.log(universidadU);
    const resp = await fetch(`${urlCrud}/universidad`, {
        method: 'POST',
        body: JSON.stringify(universidadU),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}


export {
    getListUniversidad,
    createUniversidad
}