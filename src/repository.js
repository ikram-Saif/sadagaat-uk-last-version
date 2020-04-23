import React from 'react'
import axios from 'axios';
import i18n from 'i18next'
import { Redirect } from "react-router-dom";
//import jwtDecode from "jwt-decode";
import {address} from './components/utils/address'


//const BASE_URL =  'https://reqres.in/api/login'
const tokenKey = 'x-access-token';
const new_user_email ='new_user_email';
const user_id = 'user_id'
const id = localStorage.getItem(user_id)

export function login(data) 

{
     return axios.post(`${address()}users/authenticate`, {
         userName: data.email,
         password: data.password 

          })
    .then(response => {
            localStorage.setItem(tokenKey, data.email);
            localStorage.setItem(user_id,response.data.id)
            //localStorage.setItem(tokenKey, Date.now() + 2 * 60 * 60 * 1000);
            return response.data
         
        })
    
    .catch(err => Promise.reject(err));
    //.catch(err => console.log(err));
}
    
    
   
    /*registration new user*/
    export function register(data) {

        console.log(data)
        return axios.post(`${address()}users/member/signUp`,
        /* {
         
            userName:data.userName,
            password: data.password,
            firstName:data.firstName,
            lastName:data.lastName,
            phoneNumber:data.phoneNumber,
            gender:data.gender,
            dateOfBirth:data.dateOfBirth   
            
        }*/
        data
        )
             
        .then(response => {
        
        return response.data
        })
            .catch(err =>Promise.reject(err));
            //.catch(localStorage.setItem('x-access-token', 'authintication fail'))*/

        }
        /**verfication code for  first registration  */

        export function email_verify(data) 

        {
          const email = localStorage.getItem(new_user_email)
           // alert(data.code + email)

             return axios.post(`${address()}user/verifyUser`, {
                 //userName: email,
                 code: data.code 
        
                  })
            .then( response =>{ return response.data
                
            
                        })
            
            .catch(err => Promise.reject(err));
        }
        /** forget password  step (1) send user email  and save it in local storage*/
        export function forgotPassword(data) 

        {
          const email = localStorage.setItem(new_user_email , data.email)

            //  return axios.post(`${address()}`, {
            //      email: email,
        
            //       })
            // .then( response =>{
            //      return response.data
            //             })
            
            // .catch(err => Promise.reject(err));
        }
        /** verify code step (2) from forgot password  */
        /**step (3) entering new password and confirm it */

        export function resetPassword(data) 

        {
             return axios.post(`${address()}`, {
                 userName: data.email,
                 password: data.password 
                 })
            .then(response => {
                    
                    return response.data
                })
            
            .catch(err => Promise.reject(err));
            //.catch(err => console.log(err));
        }     


   
   export function isAuthenticated()
   {
        return localStorage.getItem(tokenKey) 
       
       
    }
    export function logout() {
        localStorage.removeItem(tokenKey);
        window.location='/login'
      }

      export function get_volunteer_profile()
       {

        return axios.get(`${address()}members/`)
        .then(response => response.data)

            .catch(err => Promise.reject(err));
 

        }
        export function submit_volunteer_data(data) {
            console.log(data)
    
            return axios.post(`${address()}members`, data)
                 
            .then(response => {
            
            return response.data
            })
                .catch(err =>Promise.reject(err));
        }



        
      
    
    
   