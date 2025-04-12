import React, { useState } from 'react'
import { assets } from '../assets/assets'

//Input fields for address
const InputField = ({type,placeholder,name,handleChange,address})=>(
    <input className='w-full px-2 py-2.5 break-2 border border-gray-500/20 rounded 
    outline-none text-gray-500 focus:border-primary transition'
    type={type} 
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value={address[name]}    
    required
    />
)

const AddAddress = () => {
    
    const [address, setAddress] = useState({
        firstname: '',
        lastname: '',
        email:'',
        street:'',
        city:'',
        state:'',
        zipcode:'',
        country:'',
        phone:'',
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setAddress((prevAddress) => ({
            ...AddAddress,
            [name]: value,
    }))
    console.log(address); 
}
    
    const onSubmitHandler = async (e) =>{
        e.preventDefault()
    }

  return (
    <div className='mt-16 pb-16'>
        <p className='text-2xl md:text-3xl text-gray-500'> 
            ADD SHIPPIMG <span className='font-semibold text-primary'>ADDRESS</span> </p>
            <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
                <div className='flex-1 max-w-md'>
                    <form onSubmit={onSubmitHandler} className='space-y-3 mt-6 text-sm'>
                        <div className='grid grid-cols-2 gap-4'>
                            <InputField  handleChange={handleChange} address={address} name='firstname' type='text'
                            placeholder="First Name"/>
                             <InputField  handleChange={handleChange} address={address} name='lastname' type='text'
                            placeholder="Last Name"/>
                        </div>
                        <InputField  handleChange={handleChange} address={address} name='email' type='email'
                            placeholder="Email Address"/>    
                        <InputField  handleChange={handleChange} address={address} name='street' type='text'
                            placeholder="Street"/>
                        <div className='grid grid-cols-2 gap-4'>
                            <InputField  handleChange={handleChange} address={address} name='city' type='text'
                            placeholder="city"/>
                             <InputField  handleChange={handleChange} address={address} name='state' type='text'
                            placeholder="state"/>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <InputField  handleChange={handleChange} address={address} name='zipcode' type='number'
                            placeholder="zipcode"/>
                             <InputField  handleChange={handleChange} address={address} name='country' type='text'
                            placeholder="country"/>
                        </div>
                        <InputField  handleChange={handleChange} address={address} name='phone' type='number'
                            placeholder="phone"/>
                        <button type='submit' className='bg-primary hover:bg-indigo-600 transition-all
                         text-white w-full py-2 rounded-md cursor-pointer'>  SAVE ADDRESS </button> 

                    </form>
                </div>
                <img  className='md:mr-16 mb-16 md:mt-0' src={assets.add_address_iamge} alt='ADD ADRESS'/>

            </div>
      
    </div>
  )
}

export default AddAddress
