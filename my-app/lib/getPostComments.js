import axios from 'axios';

export const getPostComments = async(id) => { 
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    return data;
 }