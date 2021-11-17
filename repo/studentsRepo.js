import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getStudents = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllStudents(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchStudents(pageNo+1,pageSize,search);
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


const addStudents = (data) => {
return api.post(`/students`,data)
}
const updateStudents = (id,data) => {
return api.put(`/students/${id}`,data)
}
const getAllStudents = (page,paginator) => {
return api.get(`/students/?page=${page}&paginator=${paginator}`)
}
const getOneStudents = (id) => {
return api.get(`/students/${id}`)
}
const searchStudents = (page,paginator,searchKey) => {
return api.get(`/students/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteStudents = (id) => {
return api.delete(`/students/${id}`)
}
export {getStudents,addStudents,updateStudents,getAllStudents,getOneStudents,searchStudents,deleteStudents}


