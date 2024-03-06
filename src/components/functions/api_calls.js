import axios from "axios";


    export const userLogin = async (data) => {

        const url = "http://localhost:5000/users/login";
    
        const response = await axios.post(url, data);
        localStorage.setItem('user', JSON.stringify(response.data));
        return response.data
    
      };



      export const createUser = async (data) => {

           
          const url = "http://localhost:5000/users/register";
          const response = await axios.post(url, data);
          return response.data
          
        };




        export const fetchTransactions =  async () => {

            const url = "http://localhost:5000/transaction/get/by/group-or-search";
            const response = await axios.get(url)
            return response.data 

        }


        export const getCurrentBalance =  async () => {

            const user = JSON.parse(localStorage.getItem('user')) || { _id : "3687dghhasbdhg36y5t381etbgagdjagbsdhsbvg"};
            const url = `http://localhost:5000/finances/get/${user._id}`;
            const response = await axios.get(url)
            return response.data 

        }



    




