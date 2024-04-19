import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigation = useNavigate();

    const urllogin = "http://localhost:4000/api/login";
    const urlregistes = "http://localhost:4000/api/register";
    const [showRegister, setShowRegister] = useState(false);
    //Login
    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");

    //register
    const [username, setUsername] = useState("");
    const [emailRegister, setEmailRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");

    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(urllogin, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: emailLogin,
                    password: passwordLogin,
                }),
            });
            if (response.status === 200) {
                // Redirigir a la página de inicio después de iniciar sesión exitosamente
                navigation("/home");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const register = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(urlregistes, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    email: emailRegister,
                    password: passwordRegister,
                }),
            });
            if (response.status === 200) {
                // Redirigir a la página de inicio después de iniciar sesión exitosamente
                navigation("/home");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleToggleForm = () => {
        setShowRegister(!showRegister);
    };
    return (
        <>
            <div className="w-screen h-screen bg-[url('./assets/fondo.jpg')] bg-no-repeat bg-cover flex items-center justify-center">
                {/* Form */}
                <div
                    className={`bg-[#f9f9f971] flex flex-col items-center w-[20%] h-[35%] max-md:w-full max-md:mx-10 max-md:h-[40%] rounded-lg ${!showRegister ? "block" : "hidden"
                        }`}
                >
                    <h2 className="py-5 mt-3 font-mono text-2xl">Iniciar sesión</h2>
                    <form onSubmit={login} className="block">
                        <div>
                            <input
                                type="email"
                                className="block border-none rounded-lg w-96 max-md:w-[90%] max-md:mx-3 h-12 mb-20"
                                name="email"
                                id="email"
                                placeholder="Bruno@gmail.com"
                                value={emailLogin}
                                onChange={(e) => setEmailLogin(e.target.value)}
                            />
                            <input
                                type="password"
                                className="block border-none rounded-lg w-96 h-12 max-md:w-[90%] max-md:mx-3"
                                name="password"
                                id="password"
                                placeholder="Contraseña"
                                value={passwordLogin}
                                onChange={(e) => setPasswordLogin(e.target.value)}
                            />
                            <div className="flex justify-between mx-5 my-6">
                                <button
                                    type="submit"
                                    className="bg-[#449d83] px-3 py-3 rounded-xl text-white hover:bg-[#3b6c5e]"
                                >
                                    Iniciar sesión
                                </button>
                                <button
                                    type="button"
                                    className="bg-[#3a4692] px-3 py-3 rounded-xl text-white hover:bg-[#322f63]"
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
                    className={`bg-[#f9f9f971] flex flex-col items-center w-[20%] h-[40%] rounded-lg max-md:w-full max-md:mx-10 max-md:h-[54%] ${showRegister ? "block" : "hidden"
                        }`}
                >
                    <h2 className="py-5 mt-3 font-mono text-2xl">Registrarse</h2>
                    <form onSubmit={register} className="block">
                        <div>
                            <input
                                type="text"
                                className="block border-2 border-gray-300 rounded-lg w-96 h-12 mb-16 max-md:w-[90%] max-md:mx-3 p-3"
                                name="username"
                                id="username"
                                placeholder="Bruno díaz"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <input
                                type="email"
                                className="block border-2 border-gray-300 rounded-lg w-96 h-12 mb-16 max-md:w-[90%] max-md:mx-3 p-3"
                                name="email"
                                id="email"
                                placeholder="Bruno@gmail.com"
                                value={emailRegister}
                                onChange={(e) => setEmailRegister(e.target.value)}
                            />
                            <input
                                type="password"
                                className="block border-2 border-gray-300 rounded-lg w-96 h-12 max-md:w-[90%] max-md:mx-3 p-3"
                                name="password"
                                id="password"
                                placeholder="Contraseña"
                                value={passwordRegister}
                                onChange={(e) => setPasswordRegister(e.target.value)}
                            />
                            <div className="flex justify-between mx-5 my-6 max-md:block">
                                <button
                                    type="submit"
                                    className="bg-[#449d83] px-3 py-3 rounded-xl text-white hover:bg-[#3b6c5e] transition-colors duration-200 ease-in-out"
                                >
                                    Registrarse
                                </button>
                                <button
                                    type="button"
                                    className="bg-[#3a4692] px-3 py-3 rounded-xl text-white hover:bg-[#322f63]"
                                    onClick={handleToggleForm}
                                >
                                    Iniciar sesión
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
