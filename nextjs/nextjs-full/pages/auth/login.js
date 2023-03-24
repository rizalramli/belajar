import Cookie from "js-cookie";
import React, {useState,useEffect} from "react";
import Router from "next/router";
import { unauthPage } from "@/middleware/authorizationPage";

export async function getServerSideProps(ctx){
    await unauthPage(ctx)
    return { props: {} };
}

export default function Login(){
    const [fields,setFields] = useState({
        email: '',
        password: ''
    })

    const [status,setStatus] = useState('normal');

    async function loginHandler(e){
        e.preventDefault();
        
        setStatus('loading');

        const loginReq = await fetch('/api/auth/login',{
            method: 'POST',
            body: JSON.stringify(fields),
            headers: {
                'Content-Type' : 'application/json'
            }
        }); 

        if(!loginReq.ok) return setStatus('error ' + loginReq.status)

        const loginRes = await loginReq.json();

        setStatus('success');

        Cookie.set('token',loginRes.token);
    
        Router.push('/posts');
    }

    function fieldHandler(e){
        const name = e.target.getAttribute('name'); 
        setFields({
            ...fields,
            [name]: e.target.value  
        });
    }
    
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginHandler.bind(this)}>
                <input name="email" type="text" placeholder="Email" onChange={fieldHandler.bind(this)} /><br/>
                <input name="password" type="password" placeholder="Password" onChange={fieldHandler.bind(this)} />
                <br/>
                <button type="submit">
                    Login
                </button>

                <div>Output: {status}</div>
            </form>
        </div>
    );
}