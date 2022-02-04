import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


export default function Login() {

    const { register, handleSubmit, watch, formState:{ errors } } = useForm();
    const [ passwordVerificate, setPasswordVerification ] = useState('');
    const onSubmit = data => {
        console.log(data)
        setPasswordVerification( data.password ); 
    };

    console.log( watch("example") ); //watch input value by passing the name of it

    return(
        /* "handleSumbit" will validate your inputs before invoking "onSumbit" */
        <section className="form-container container">
            <h1 > LOGIN </h1>
            <form className="form-control form-login" onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group">
                    <label htmlFor=""> Email </label>
                    <input className="form-control"  placeholder="Enter email" {...register("email", { required: true, maxLength: 20 })} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Password </label>
                    {
                        passwordVerificate !== '' ? <a href='/generate-diagram' className='link-dark'> Forgot you password? </a> : <span></span> 
                    }
                    
                    <input type='password' className="form-control"  placeholder="Enter password" {...register("password", { pattern: /^[A-Za-z]+$/i })} />
                </div>
            
                {/* <label htmlFor=""> Phone </label>
                <input type="number" {...register("age", { min: 18, max: 99 })} /> */}

                {errors.exampleRequired && <span>This field is required</span>}
                <span> Don't have an account? <a href="/register" className="link-primary" > Register now  </a> </span>
                
                <input type="submit" className="btn btn-outline-primary" value='submit' />
            
            </form>
            
        </section>
    )


}
