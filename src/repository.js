import React from 'react'
import axios from 'axios';
import i18n from 'i18next'
import { Redirect } from "react-router-dom";
//import jwtDecode from "jwt-decode";
import {address} from './components/utils/address'


//const BASE_URL =  'https://reqres.in/api/login'
const tokenKey = 'x-access-token';
const user_email ='user_email';

export function login(data) 

{
     return axios.post(`${address()}users/authenticate`, {
         userName: data.email,
         password: data.password 

          })
    .then(response => {
            localStorage.setItem(tokenKey, response.data.token);
            localStorage.setItem(user_email,response.data.email)
            localStorage.setItem('tokenExpired', Date.now() + 1 * 60 * 60 * 1000);
            return response.data
         
        })
    
    .catch(err => Promise.reject(err));
    //.catch(err => console.log(err));
}
    
    
   
    /*registration new user*/
    export function register(data) {

        console.log(data)
        return axios.post(`${address()}users/member/signUp`,
        data
        )
             
        .then(response => {
        
        return response.data
        })
            .catch(err =>Promise.reject(err));
        }
        /**verfication code for  first registration  */

        export function email_verify(data) 

        {

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

             return axios.post(`${address()}password-forgot`,null,{ params: {
                email:data.email
              }})
            .then(response =>{
                 return response.data
                        })
            
            .catch(err => Promise.reject(err));
        }
        /** verify code step (2) from forgot password  */
        /**step (3) entering new password and confirm it */

        export function resetPassword(data) 

        {
             return axios.post(`${address()}password-reset`,null, 
                {params:
                    {
                    token:data.token,
                    password:data.password
                    }
                    
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
        export function submit_volunteer_data(data) 
        {
            let token = localStorage.getItem(tokenKey)
            console.log(token)
            return axios.post(`${address()}members`, data,{ 
                headers:{ 
                            "Authorization":`Bearer ${token}`
                        }})
                 
            .then(response => {
            
            return response.data
            })
                .catch(err =>Promise.reject(err));

        }



        
      
    
    
   