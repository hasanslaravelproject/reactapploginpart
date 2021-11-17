import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getPassword_Resets = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllPassword_Resets(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchPassword_Resets(pageNo+1,pageSize,search);
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


const addPassword_Resets = (data) => {
return api.post(`/password_resets`,data)
}
const updatePassword_Resets = (email,data) => {
return api.put(`/password_resets/${email}`,data)
}
const getAllPassword_Resets = (page,paginator) => {
return api.get(`/password_resets/?page=${page}&paginator=${paginator}`)
}
const getOnePassword_Resets = (email) => {
return api.get(`/password_resets/${email}`)
}
const searchPassword_Resets = (page,paginator,searchKey) => {
return api.get(`/password_resets/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deletePassword_Resets = (email) => {
return api.delete(`/password_resets/${email}`)
}
export {getPassword_Resets,addPassword_Resets,updatePassword_Resets,getAllPassword_Resets,getOnePassword_Resets,searchPassword_Resets,deletePassword_Resets}


