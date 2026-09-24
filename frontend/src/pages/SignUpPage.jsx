import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// Add Signup and Login Forms

// Create the UI for the signup and login components. 
// You can use frontend/src/pages/AddJobPage as a reference for creating the forms.
// Ensure the forms collect these required fields (e.g., name, email, password, etc). 
// Other fields are defined in the user model below.
// Note that the logic can be added later, once the backend team completes iteration 3.
// Update Navigation Bar

// Update the navigation bar in frontend/src/components/NavBar to include links 
// to the signup and login components.


const AddUserPage = ({ addUserSubmit }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, SetAge] = useState("");

    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();

        const newUser = {
            name,
            email,
            password,
            age
        };

        addUserSubmit(newUser);
        toast.success('User Added Successfully');
        return navigate('/'); ///////////////where we return!!!!????
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
                        id='title'
                        name='title'
                        className='border rounded w-full py-2 px-3 mb-2'
                        placeholder='eg. Beautiful Apartment In Miami'
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold mb-2'>
                        Email
                    </label>
                    <input
                        type='text'
                        id='title'
                        name='title'
                        className='border rounded w-full py-2 px-3 mb-2'
                        placeholder='eg. Beautiful Apartment In Miami'
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold mb-2'>
                        Password
                    </label>
                    <input
                        type='text'
                        id='title'
                        name='title'
                        className='border rounded w-full py-2 px-3 mb-2'
                        placeholder='eg. Beautiful Apartment In Miami'
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold mb-2'>
                        Password
                    </label>
                    <input
                        type='text'
                        id='title'
                        name='title'
                        className='border rounded w-full py-2 px-3 mb-2'
                        placeholder='eg. Beautiful Apartment In Miami'
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
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