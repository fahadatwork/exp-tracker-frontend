 import { useQuery, useMutation } from "react-query";
import { userLogin, createUser, fetchTransactions, getCurrentBalance } from "./api_calls";


export function capitalizeFirstLetter(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
}


export function userQuery(){

    return useMutation({
      mutationFn : userLogin
    })

}


export function createuserQuery(){

   return useMutation({
     mutationFn : createUser
   })

}


export function getTransactions(){

   return useQuery({
      queryKey : ['transactions'],
      queryFn : fetchTransactions
 
   })
}


export function currentBlance(){


    return useQuery({
      queryKey : ['balance'],
      queryFn : getCurrentBalance

    }) 
}


