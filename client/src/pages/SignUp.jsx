
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
        
      }
      setLoading(false);
      if(res.ok) {
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
      
    }
  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit ={handleSubmit} className='flex flex-col gap-4'>
        <input type='text' placeholder='Username' 
        className = 'border p-3 rounded-lg' id='username' 
        onChange={handleChange}/>
        <input type='email' placeholder='Email' 
        className = 'border p-3 rounded-lg' id='email' 
        onChange={handleChange}/>
        <input type='password' placeholder='Password' 
        className = 'border p-3 rounded-lg' id='password' 
        onChange={handleChange}/>
        
        
      <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95
      disabled:opacity-80'> {loading ? 'Loading...' : 'Confirm Sign Up' }
      </button>
      </form>
      <div className = 'flex gap-2 mt-5'>
        <p>Have an accout?</p>
        <Link to={'/sign-in'}>
        <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
      
    </div>
  )
}
