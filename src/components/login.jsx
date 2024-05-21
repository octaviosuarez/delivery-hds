import React, { useState, useEffect } from 'react';
import { login } from '../api/api';
import { Input, Button, Image, Link } from "@nextui-org/react";
import logo from '../assets/logo.jpeg';

const Login = ({ setLogin,toast }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log('login');
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            login(email, password).then((res) => {
                console.log(res);
                if (res.message === "Usuario logueado exitosamente") {
                    setLogin(true);
                    localStorage.setItem('token', res.token);
                    toast.success(res.message);
                } else {
                    toast.error(res.message);
                }
            }).catch((err) => {
                console.log(err);
            });
        } catch {
            setError('Failed to log in');
        }
        // setLoading(false);
    };

    return (
        <div className="flex flex-col w-96 justify-center items-center gap-5 bg-[#F5F5F5] p-10 rounded-xl shadow-xl">
            <Image src={logo} width={200} height={200} radius='full' />
            <p className="text-2xl text-start font-semibold text-black">Login</p>
            <Input type="email" variant={"underlined"} label="Ingrese su email" onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" variant={"underlined"} label="Ingrese clave" onChange={(e) => setPassword(e.target.value)} />
            <Button color="primary" onClick={handleLogin}>
                Ingresar
            </Button>
            <Link href="#" color="warning" className='text-sm'>¿Has olvidado la contraseña?</Link>
        </div>
    );
};

export default Login;
