import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LogInPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const logIn = async (logIn) => {
        try {
            const res = await fetch(`http://localhost:4000/api/users/login`, {
                method: "POST", 
                body: JSON.stringify(userData),
                headers: {
                    "Content-Type": "application/json",
                    },
            })
            if (!res.ok) {
                throw new Error("Failed to log in")
            }
        } catch (error) {
            console.error(error)
            toast.error("An error occurred during the login")
            return false
        }
        return true
        };

        const userData = {
            email,
            password,
        };

    const submitForm  = async (e) => {
        e.preventDefault()

        logIn(userData)
        toast.success("Logged in Successfully")
        return navigate("/jobs")
    };

    return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Log In</h2>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border rounded w-full py-2 px-3"
                placeholder="Your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border rounded w-full py-2 px-3"
                placeholder="Passsword"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    )
};
export default LogInPage;