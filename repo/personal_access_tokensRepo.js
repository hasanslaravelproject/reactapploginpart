import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getPersonal_Access_Tokens = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllPersonal_Access_Tokens(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchPersonal_Access_Tokens(pageNo+1,pageSize,search);
        } catch(err) {
            return {
                data:[],
                total:0
            }
        }
    }
    if (
    res &&
    res.data &&
    res.data.data &&
    res.data.data.data &&
    res.data.data.data.length > 0) {
    return res.data.data;
    } else {
        return {
            data:[],
            total:0
        }
    }
}


const addPersonal_Access_Tokens = (data) => {
return api.post(`/personal_access_tokens`,data)
}
const updatePersonal_Access_Tokens = (id,data) => {
return api.put(`/personal_access_tokens/${id}`,data)
}
const getAllPersonal_Access_Tokens = (page,paginator) => {
return api.get(`/personal_access_tokens/?page=${page}&paginator=${paginator}`)
}
const getOnePersonal_Access_Tokens = (id) => {
return api.get(`/personal_access_tokens/${id}`)
}
const searchPersonal_Access_Tokens = (page,paginator,searchKey) => {
return api.get(`/personal_access_tokens/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deletePersonal_Access_Tokens = (id) => {
return api.delete(`/personal_access_tokens/${id}`)
}
export {getPersonal_Access_Tokens,addPersonal_Access_Tokens,updatePersonal_Access_Tokens,getAllPersonal_Access_Tokens,getOnePersonal_Access_Tokens,searchPersonal_Access_Tokens,deletePersonal_Access_Tokens}


