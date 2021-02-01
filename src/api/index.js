
import { SubmissionError } from 'redux-form';

export const  apiGet = (url,id = '') => () => fetch(`${url}/${id}`).then(v => v.json()).then(
    r => {
    if(r && r.error) {
        return Promise.reject(r)
    }
    return r
});

export const apiPut = (url, id, dataObj) => () => 
    fetch(`${url}/${id}.json`, {
        method: 'PUT',
        body: JSON.stringify(dataObj),
        headers: new Headers({'Content-type' : 'application/json'})
    }).then(v => v.json())
    .then(r => {
        if(r && r.error) {
            return Promise.reject(r)
        }
        return r
    });

export const apiPost = (url, dataObj) => () => 
fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify(dataObj),
    headers: new Headers({'Content-type' : 'application/json'})
}).then(v => v.json())
.then(r => {
    if(r && r.error) {
        throw new SubmissionError({email : ' *Hubo un error de autenticacion'})
    }
    return r
});

export const apiDelete = (url, id) => () => 
fetch(`${url}/${id}.json`, {
    method: 'DELETE',
    headers: new Headers({'Content-type' : 'application/json'})
}).then(v => v.json())
.then(r => {
    if(r && r.error) {
        return Promise.reject(r)
    }
    return id
});