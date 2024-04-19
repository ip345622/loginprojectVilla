function Register() {
    return (
        <>
            <div className="w-screen h-screen bg-[url('./assets/fondo.jpg')] bg-no-repeat bg-cover flex items-center justify-center">
                {/* Form */}
                <div className="bg-[#f9f9f971] flex flex-col items-center  w-[20%] h-[40%] rounded-lg max-md:w-full max-md:mx-10 max-md:h-[54%]">
                    <h2 className="py-5 mt-3 font-mono text-2xl">Registrarse</h2>
                    <form action="" className="block">
                        <div>
                            <input
                                type="text"
                                className="block border-2 border-gray-300 rounded-lg w-96 h-12 mb-16 max-md:w-[90%] max-md:mx-3 p-3"
                                name="username"
                                id="username"
                                placeholder="Bruno díaz"
                            />
                            <input
                                type="email"
                                className="block border-2 border-gray-300 rounded-lg w-96 h-12 mb-16 max-md:w-[90%] max-md:mx-3 p-3"
                                name="email"
                                id="email"
                                placeholder="Bruno@gmail.com"
                            />
                            <input
                                type="password"
                                className="block border-2 border-gray-300 rounded-lg w-96 h-12 max-md:w-[90%] max-md:mx-3 p-3"
                                name="password"
                                id="password"
                                placeholder="Contraseña"
                            />
                            <div className="flex justify-between mx-5 my-6 max-md:block">
                                <button
                                    type="submit"
                                    className="bg-[#449d83] px-3 py-3 rounded-xl text-white hover:bg-[#3b6c5e] transition-colors duration-200 ease-in-out"
                                >
                                    Registrarse
                                </button>
                                <a
                                    href="/"
                                    className="px-3 py-3 rounded-xl text-xl font-bold text-[#313476] hover:text-[#25296d] transition-colors duration-200 ease-in-out"
                                >
                                    Iniciar sesión
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;
