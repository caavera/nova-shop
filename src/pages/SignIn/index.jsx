import { useContext, useState, useRef } from 'react';
import { ShoppingCartContext } from '../../Context';
import { Link, Navigate } from 'react-router';
import Layout from '../../components/Layout';

function SignIn() {
  const { 
      account,
      setAccount,
      setSignOut
  } = useContext(ShoppingCartContext);
  const [view, setView] = useState('user-info');
  const [redirect, setRedirect] = useState(false);
  const form = useRef(null);

  // Obtener datos de localStorage
  const accountLocalStorage = localStorage.getItem('account');
  const parsedAccount = JSON.parse(accountLocalStorage);

  // Verificar si el usuario tiene una cuenta
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
  const noAccountInLocalState = account ? Object.keys(account).length === 0 : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const handleSignIn = () => {
    localStorage.setItem('sign-out', JSON.stringify(false));
    setSignOut(false);
    setRedirect(true);  // Cambia el estado para activar la redirección
  };

  const createAnAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    };

    // Guardar en localStorage
    localStorage.setItem('account', JSON.stringify(data));
    setAccount(data);

    // Iniciar sesión después de crear cuenta
    handleSignIn();
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  const renderLogIn = () => (
    <div className='flex flex-col w-80'>
      <p>
        <span className='font-light text-sm'>Email: </span>
        <span>{parsedAccount?.email}</span>
      </p>
      <p>
        <span className='font-light text-sm'>Password: </span>
        <span>{parsedAccount?.password}</span>
      </p>
      <button 
        className='bg-black disabled:bg-black/30 text-white rounded-lg w-full py-3 mt-4 mb-2'
        onClick={handleSignIn}
        disabled={!hasUserAnAccount}  
      >
        Log In
      </button>
      <div className='text-center'>
        <a className='font-light text-xs underline underline-offset-4' href="/">Forgot my password</a>
      </div>
      <button 
        className='border border-black disabled:text-black/30 disabled:border-black/30 rounded-lg mt-6 py-3'
        onClick={() => setView('create-user-info')}
        disabled={hasUserAnAccount}  
      >
        Sign Up
      </button>
    </div>
  );

  const renderCreateUserInfo = () => (
    <form ref={form} className='flex flex-col gap-4 w-80'>
      <div className='flex flex-col gap-1'>
        <label htmlFor="name" className='text-sm font-medium text-gray-800'>Your name:</label>
        <input 
          type="text" 
          id='name'
          name='name' 
          defaultValue={parsedAccount?.name}
          placeholder='Peter'
          className='w-full rounded-lg border border-black px-4 py-2 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-black'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="email" className='text-sm font-medium text-gray-800'>Your email:</label>
        <input 
          type="email"
          id='email'
          name='email'
          defaultValue={parsedAccount?.email}
          placeholder='hello@world.com'
          className='w-full rounded-lg border border-black px-4 py-2 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-black'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="password" className='text-sm font-medium text-gray-800'>Your password:</label>
        <input 
          type="password" 
          id='password'
          name='password' 
          defaultValue={parsedAccount?.password}
          placeholder='*******'
          className='w-full rounded-lg border border-black px-4 py-2 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-black'
        />
      </div>
      <button 
        className='bg-black text-white w-full rounded-lg py-3 mt-4 hover:bg-gray-900 transition-all'
        onClick={createAnAccount}
      >
        Create
      </button>
    </form>
  );

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-full max-w-4xl mx-auto mt-8 mb-6'>
        <h1 className="text-3xl font-semibold text-gray-800">Welcome</h1>
      </div>
      {view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn()}
    </Layout> 
  );
}

export default SignIn;