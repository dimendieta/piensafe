const urlCrud = 'http://localhost:3001';


const getListTarea = async () => {
    const response = await fetch(`${urlCrud}/tarea`);    
    const data = await response.json();
    console.log(data)
    return  data;
}


const findByIdTarea = async (tareaid) => {
    const response = await fetch(`${urlCrud}/tarea/${tareaid}`);  
    const data = await response.json();     
    return  data;
}

const createTarea = async (universidad) => {
    console.log(universidad);
    const resp = await fetch(`${urlCrud}/tarea`, {
        method: 'POST',
        body: JSON.stringify(universidad),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

const updateTarea = async (universidad) => {
  
    const resp = await fetch(`${urlCrud}/tarea`, {
        method: 'PUT',
        body: JSON.stringify(universidad),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}


export {
    getListTarea,
    findByIdTarea,
    createTarea,
    updateTarea
}