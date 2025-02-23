import { useContext, useRef, useState } from 'react';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../components/Layout';

function MyAccount() {
  const { account, setAccount } = useContext(ShoppingCartContext);
  const [isEditing, setIsEditing] = useState(false);
  const form = useRef(null);

  const handleUpdateAccount = () => {
    const formData = new FormData(form.current);
    const updatedAccount = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    // Guardar en localStorage y actualizar el contexto global
    localStorage.setItem('account', JSON.stringify(updatedAccount));
    setAccount(updatedAccount);
    setIsEditing(false);
  };

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-full max-w-4xl mx-auto mt-8 mb-6'>
        <h1 className="text-3xl font-semibold text-gray-800">My Account</h1>
      </div>
      <div className="w-96 mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200">
        {!isEditing ? (
          <div className="space-y-4">
            <p><span className="font-semibold">Name:</span> {account?.name || "N/A"}</p>
            <p><span className="font-semibold">Email:</span> {account?.email || "N/A"}</p>
            <p><span className="font-semibold">Password:</span> ******</p>
            <button 
              className="bg-black text-white w-full py-2 mt-4 rounded-lg hover:bg-gray-800 transition-all"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          </div>
        ) : (
          <form ref={form} className="flex flex-col space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-800" htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                defaultValue={account?.name}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800" htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                defaultValue={account?.email}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800" htmlFor="password">New Password</label>
              <input 
                type="password" 
                id="password"
                name="password"
                placeholder="********"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>
            <button 
              type="button"
              className="bg-black text-white w-full py-2 mt-4 rounded-lg hover:bg-gray-800 transition-all"
              onClick={handleUpdateAccount}
            >
              Save Changes
            </button>
            <button 
              type="button"
              className="bg-gray-700 text-white w-full py-2 mt-2 rounded-lg hover:bg-gray-600 transition-all"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </form>
        )}
      </div>
    </Layout>
  );
}

export default MyAccount;