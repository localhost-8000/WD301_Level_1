import { PaginationParams } from "./types/commonTypes";
import { Field, FormData } from "./types/formTypes";

const API_BASE_URL = "https://tsapi.coronasafe.live/api/";

type RequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export const request = async (endpoint: string, method: RequestMethod = "GET", data: any = {}) => {
    let url, body;
    if(method === "GET") {
        const requestParams = data ? `?${Object.keys(data).map(key => `${key}=${data[key]}`).join("&")}` : "";
        url = `${API_BASE_URL}${endpoint}${requestParams}`;
        body = null;
    } else {
        url = `${API_BASE_URL}${endpoint}`;
        body = data ? JSON.stringify(data) : null;
    }

    const token = localStorage.getItem("token");
    const auth = token ? `Token ${localStorage.getItem("token")}` : "";

    const response = await fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json",
            Authorization: auth 
        },
        body
    });

    if(response.ok) {
        if(method === "DELETE") return "true";

        const json = await response.json();
        return json;
    } else {
        const errorJson = await response.json();
        throw Error(errorJson);
    }
}

export const login = (username: string, password: string) => {
    return request('auth-token/', 'POST', {username, password});
}

export const me = () => {
    return request('users/me/', 'GET', {});
}

export const createForm = (form: FormData) => {
    return request('forms/', 'POST', form);
}

export const listForms = (pageParams: PaginationParams) => {
    return request('forms/', 'GET', pageParams);
}

export const getFormData = (formId: number) => {
    return request(`forms/${formId}/`, 'GET', {});
}

export const updateFormData = (formId: number, formData: FormData) => {
    return request(`forms/${formId}/`, 'PUT', formData);
}

export const getFormFields = (formId: number) => {
    return request(`forms/${formId}/fields/`, 'GET', {});
}

export const addField = (formId: number, field: Field) => {
    return request(`forms/${formId}/fields/`, 'POST', field);
}

export const updateField = (formId: number, fieldId: number, field: Field) => {
    return request(`forms/${formId}/fields/${fieldId}/`, 'PUT', field);
}

export const removeField = (formId: number, fieldId: number) => {
    return request(`forms/${formId}/fields/${fieldId}/`, 'DELETE', {});
}