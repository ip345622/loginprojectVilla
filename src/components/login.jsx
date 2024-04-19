import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Login() {
    const navigation = useNavigate();

    const urllogin = "http://192.168.65.103:4000/api/login";
    const urlregistes = "http://192.168.65.103:4000/api/register";
    const [showRegister, setShowRegister] = useState(false);
    //Login
    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        if(emailLogin.trim().length > 0 && passwordLogin.trim().length > 0){
            await axios.post(urllogin, {
                email: emailLogin,
                password: passwordLogin
            })
            .then( response => {
                toast.success('Sesion iniciada de manera exitosa');
                navigation("/home");
            })
            .catch(error => {
                toast.error('No se ha podido iniciar sesion');
            })
        } else {
            toast.error('Por favor rellene todos los campos');
        }
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        if(username.trim().length > 0 && emailRegister.trim().length > 0 && passwordRegister.trim().length > 0){
            await axios.post(urlregistes, {
                username: username,
                email: emailRegister,
                password: passwordRegister,
            })
            .then( response => {
                toast.success('Cuenta registrada de manera exitosa');
                navigation("/home");
            })
            .catch(error => {
                toast.error('No se ha podido registrar cuenta');
                console.log(error)
            })
        } else {
            toast.error('Por favor rellene todos los campos');
        }
    }

    //register
    const [username, setUsername] = useState("");
    const [emailRegister, setEmailRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");

    const handleToggleForm = () => {
        setShowRegister(!showRegister);
    };
    return (
        <>
            <div className="w-screen h-screen bg-[url('./assets/fondo.jpg')] bg-no-repeat bg-cover flex flex-wrap justify-center">
                <div className='bg-zinc-800 w-full h-[12vh] self-start flex flex-wrap justify-between  items-center px-[2vw] font-semibold text-white border-b-2 text-lg'>
                    <div className='flex flex-wrap'>
                        <img src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg" className='w-[2vw] mx-[.5vw]'></img>
                        <span className=''>MineDuino</span>
                    </div>
                    <ul className='font-normal flex gap-[2vw]'>
                        <li>
                            <a href="">
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Acerca de nosotros
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Form */}
                <div
                    className={`bg-[#f9f9f991] flex flex-wrap flex-col items-center w-[30%] h-[45%] max-md:w-full max-md:h-[40%] rounded-lg ${!showRegister ? "block" : "hidden"}`}>
                    <h2 className="py-5 mt-3 font-mono text-2xl">Iniciar sesión</h2>
                    <form onSubmit={handleLogin} className="">
                        <div className=" flex flex-wrap justify-center items-center gap-[3vh] py-[2vh]">
                            <input
                                type="email"
                                className="px-[.5vw] py-[.2vh] rounded-sm w-[70%]"
                                name="email"
                                id="email"
                                placeholder="Bruno@gmail.com"
                                value={emailLogin}
                                onChange={(e) => setEmailLogin(e.target.value)}
                            />
                            <input
                                type="password"
                                className="px-[.5vw] py-[.2vh] rounded-sm w-[70%]"
                                name="password"
                                id="password"
                                placeholder="Contraseña"
                                value={passwordLogin}
                                onChange={(e) => setPasswordLogin(e.target.value)}
                            />
                            <div className="flex flex-wrap w-[70%] justify-around">
                                <button
                                    type="submit"
                                    className="bg-[#449d83] rounded-sm text-white px-[1vw] py-[.3vh] hover:bg-[#3b6c5e] transition-colors duration-200 ease-in-out"
                                >
                                    Iniciar sesión
                                </button>
                                <button
                                    type="button"
                                    className="bg-[#5666cc] rounded-sm text-white px-[1vw] py-[.3vh] hover:bg-[#3a4692] transition-colors duration-200 ease-in-out"
                                    onClick={handleToggleForm}
                                >
                                    Registrarse
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* Registrarse */}
                <div
                    className={`bg-[#f9f9f991] flex flex-col flex-wrap justify-center items-center w-[30%] h-[45%] gap- rounded-lg max-md:w-full max-md:mx-10 max-md:h-[54%] ${showRegister ? "block" : "hidden"
                        }`}
                >
                    <h2 className="py-5 mt-3 font-mono text-2xl">Registrarse</h2>
                    <form onSubmit={handleRegister} className="">
                        <div className="flex flex-wrap justify-center items-center gap-[3vh] py-[2vh]">
                            <input
                                type="text"
                                className="px-[.5vw] py-[.2vh] rounded-sm w-[70%]"
                                name="username"
                                id="username"
                                placeholder="Bruno díaz"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <input
                                type="email"
                                className="px-[.5vw] py-[.2vh] rounded-sm w-[70%]"
                                name="email"
                                id="email"
                                placeholder="Bruno@gmail.com"
                                value={emailRegister}
                                onChange={(e) => setEmailRegister(e.target.value)}
                            />
                            <input
                                type="password"
                                className="px-[.5vw] py-[.2vh] rounded-sm w-[70%]"
                                name="password"
                                id="password"
                                placeholder="Contraseña"
                                value={passwordRegister}
                                onChange={(e) => setPasswordRegister(e.target.value)}
                            />
                            <div className="flex flex-wrap w-[70%] justify-around">
                            <button
                                    type="button"
                                    className="bg-[#5666cc] rounded-sm text-white px-[1vw] py-[.3vh] hover:bg-[#3a4692] transition-colors duration-200 ease-in-out"
                                    onClick={handleToggleForm}
                                >
                                    Regresar
                                </button>
                                <button
                                    type="submit"
                                    className="bg-[#449d83] rounded-sm text-white px-[1vw] py-[.3vh] hover:bg-[#3b6c5e] transition-colors duration-200 ease-in-out"
                                >
                                    Registrarse
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
