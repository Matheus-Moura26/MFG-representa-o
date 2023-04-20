import {React,  useState } from "react";
import "./login.css";
import { IoMdMail } from "react-icons/io"
import { FaLock } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai";
import { BiUser } from "react-icons/bi";

import { Link } from 'react-router-dom';

function LoginPage() {
    
    /* const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');

    registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    })

    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    }) */

    const [active, setActive] = useState(false);

    return (
        <div className='loginPageContent'>
            <div className={active? 'wrapper active' : 'wrapper'}>
                <span className="icon-Close"><AiOutlineClose/></span>
                <div className="form-box login">
                    <h2>login</h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon"><IoMdMail /></span>
                            <input type="email" required />
                            <label>E-mail</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><FaLock /></span>
                            <input type="password" required />
                            <label>Senha</label>
                        </div>
                        <div className="remember-forgot">
                            <label ><input type="checkbox" /> Remember-me</label>
                            <Link >Forgot password?</Link>
                        </div>
                        <button type='submit' className='btn'>login</button>
                        <div className="login-register">
                            <p>Não tem uma conta?<Link className='register-link' onClick={() => setActive(!active)}>Regisre-se</Link></p>
                        </div>
                    </form>
                </div>

                <div className="form-box register">
                    <h2>Registre-se</h2>
                    <form action="#">
                    <div className="input-box">
                            <span className="icon"><BiUser /></span>
                            <input type="text" required />
                            <label>Nome</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><IoMdMail /></span>
                            <input type="email" required />
                            <label>E-mail</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><FaLock /></span>
                            <input type="password" required />
                            <label>Senha</label>
                        </div>
                        <div className="remember-forgot">
                            <label ><input type="checkbox" /> Eu concordo com os termos e condições</label>
                        </div>
                        <button type='submit' className='btn'>Registrar</button>
                        <div className="login-register">
                            <p>Já tem uma conta?<Link className='login-link' onClick={() => setActive(!active)}>Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default LoginPage;