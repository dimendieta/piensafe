const urlCrud = 'http://localhost:3001';

const getListUniversidad = async () => {
    const response = await fetch(`${urlCrud}/university`);    
    const data = await response.json();
    console.log(data)
    return  data;
}

const createUniversidad = async (university) => {
    console.log(university);
    const resp = await fetch(`${urlCrud}/university`, {
        method: 'POST',
        body: JSON.stringify(university),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

const findByIdUniversidad = async (docenteId) => {
    const response = await fetch(`${urlCrud}/university/${docenteId}`);  
    const data = await response.json();     
    return  data;
}



export {
    getListUniversidad,
    createUniversidad,
    findByIdUniversidad
   
   
}