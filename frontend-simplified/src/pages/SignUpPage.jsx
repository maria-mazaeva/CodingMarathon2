import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddUserPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, SetPhoneNumber] = useState("");
    const [gender, setGender] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [street, setStreet] =useState("");
    const [city, setCity] =useState("");
    const [zipCode, setZipCode] =useState("");
    const navigate = useNavigate();

    // const addUser = (newUser) => {
    //     try {
    //         const res = await fetch("/api/users", {
    //             method: "POST",
    //             headers: {
    //             "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(newUser),
    //         });
    //         if (!res.ok) {
    //             throw new Error("Failed to add user");
    //     }
    //     } catch (error) {
    //         console.error(error);
    //         toast.error("An error occurred while adding the user.");
    //         return false;
    //     }
    //     return true;
    //     };


    const submitForm = async (e) => {
        e.preventDefault();


        const addUser = async (newUser) => {
            try { 
                const res = await fetch("/signup", {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newUser),
                });
                if (!res.ok) {
                    throw new Error("Failed to add user");
            }
            } catch (error) {
                console.error(error);
                toast.error("An error occurred while adding the user.");
                return false;
            }
            return true;
        };

 
        const newUser = {
            name,
            email,
            password,
            phoneNumber,
            gender,
            dateOfBirth,
            adress: {
                street: street,
                city: city,
                zipCode: zipCode
            }
        };

        addUser(newUser);
        // localStorage.setItem("user", JSON.stringify(newUser));
        toast.success('User Added Successfully');
        return navigate('/');
    };

    return (
        <section className='bg-indigo-50'>
            <div className='container m-auto max-w-2xl py-24'>
            <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
                <form onSubmit={submitForm}>
                <h2 className='text-3xl text-center font-semibold mb-6'>Add User</h2>
                
                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold mb-2'>
                        Name
                    </label> 
                    <input
                        type='text'
                        id='name'
                        name='name'
                        className='border rounded w-full py-2 px-3 mb-2'
                        placeholder='add name'
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold mb-2'>
                        Email
                    </label>
                    <input
                        type='text'
                        id='email'
                        name='email'
                        className='border rounded w-full py-2 px-3 mb-2'
                        placeholder='add email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold mb-2'>
                        Password
                    </label>
                    <input
                        type='text'
                        id='password'
                        name='password'
                        className='border rounded w-full py-2 px-3 mb-2'
                        placeholder='add password'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold mb-2'>
                        Phone number
                    </label>
                    <input
                        type='text'
                        id='phone_number'
                        name='phoneNumber'
                        className='border rounded w-full py-2 px-3 mb-2'
                        placeholder='add number'
                        required
                        value={phoneNumber}
                        onChange={(e) => SetPhoneNumber(e.target.value)}
                    />
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold mb-2'>
                        Gender
                    </label>
                    <select
                        type='text'
                        id='gender'
                        name='gender'
                        className='border rounded w-full py-2 px-3 mb-2'
                        placeholder='choose gender'
                        required
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}>

                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                    </select>
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold mb-2'>
                        Date of birth
                    </label>
                    <input
                        type='Date'
                        id='dateOfBirth'
                        name='dateOfBirth'
                        className='border rounded w-full py-2 px-3 mb-2'
                        placeholder='add date of birth'
                        required
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                </div>

                <h3 className='text-2xl mb-5'>Adress</h3>

                <div className='mb-4'>
                    <label
                        htmlFor='street'
                        className='block text-gray-700 font-bold mb-2'
                    >
                        Street
                    </label>
                    <input
                        type='text'
                        id='street'
                        name='street'
                        className='border rounded w-full py-2 px-3'
                        placeholder='street'
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                    />
                </div>

                <div className='mb-4'>
                    <label
                        htmlFor='city'
                        className='block text-gray-700 font-bold mb-2'
                    >
                        City
                    </label>
                    <input
                        type='text'
                        id='city'
                        name='city'
                        className='border rounded w-full py-2 px-3'
                        placeholder='add city'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>

                <div className='mb-4'>
                    <label
                        htmlFor='zipCode'
                        className='block text-gray-700 font-bold mb-2'
                    >
                        ZipCode
                    </label>
                    <input
                        type='text'
                        id='zipCode'
                        name='zipCode'
                        className='border rounded w-full py-2 px-3'
                        placeholder='add zipCode'
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                </div>

                
                <div>
                    <button
                        className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                        type='submit'>
                        Add User
                    </button>
                </div>

                </form>
            </div>
            </div>
        
        </section>
    );
};

export default AddUserPage;
