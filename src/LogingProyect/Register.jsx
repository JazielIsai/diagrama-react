import React, { useState } from 'react';


export default function Register(){

    const [ passwordVerificate, setPasswordVerification ] = useState('');

    const onSubmit = (data) => {
        console.log(data);
        setPasswordVerification(data);
    }

    return(
        <section className="form-container container">
            <h1> Register </h1>

            <form className="form-control form-register" onSubmit={onSubmit} >
                
                <div className="form-group">
                    <label htmlFor="nameRegister" > Name </label>
                    <input type="text" name="name" id="nameRegister" placeholder="Full name" className="form-control" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="emailRegister" > E-mail </label>
                    <input type='email' name="email" id="emailRegister" placeholder="Type your email" className="form-control" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="passwordRegister-lab" > Lab </label>
                    <input type="password" name="password-lab" id="passwordRegister-lab" placeholder="Type your password" className="form-control" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="passwordRegister-personal" > Password </label>
                    <input type="password" name="password-personal" id="nameRegister" placeholder="Type your password" className="form-control" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="passwordRegister-confirm" > Confirm Password </label>
                    <input type="text"  id="passwordRegister-confirm" placeholder="Re-type your password" className="form-control" />
                </div>
                
                <div className="form-group">
                    <label> Your Prefer to ... </label>
                    <input type='radio' value='Desing WFs' placeholder="Desing WFs" />
                    <input type='radio' value = 'Execute WFs' />
                </div>

                <div className="form-group">
                    <span> Already have an account? <a href='/login' className='link-primary'> Log in </a> </span>
                </div>
                <input type= 'submit' value='Register' className='btn btn-outline-secondary' />

            </form>

        </section>
    )

}