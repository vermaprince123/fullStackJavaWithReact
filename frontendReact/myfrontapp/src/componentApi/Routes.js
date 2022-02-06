import axios from "axios";

const  postApi = (querParms)=>axios.post('http://localhost:8080/insert/data/intro', querParms);
 const  getApi = ()=>axios.get('http://localhost:8080/get/data/intro');
 const  deleteApi = (querParms)=>axios.delete(`http://localhost:8080/delete/data/${querParms}`);
 const  updateApi = (querParms,queryParms)=>axios.put(`http://localhost:8080/update/data/${querParms}`,queryParms);

export default{
    postApi,
    getApi,
    deleteApi,
    updateApi
}
