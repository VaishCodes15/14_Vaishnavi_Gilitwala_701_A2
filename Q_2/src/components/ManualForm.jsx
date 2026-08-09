import { useState } from "react";


function ManualForm()
{

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [error, setError] = useState("");


    function handleSubmit(e)
    {

        e.preventDefault();


        if(name.trim() === "")
        {
            setError("Name is required");
            return;
        }


        if(email.trim() === "")
        {
            setError("Email is required");
            return;
        }


        if(!email.includes("@"))
        {
            setError("Enter valid email");
            return;
        }


        setError("");

        alert("Form submitted successfully");

    }


    return (

        <div>

            <h2>Manual Form Validation</h2>


            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                />


                <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />


                {error && (
                    <p className="text-danger">
                        {error}
                    </p>
                )}


                <button className="btn btn-primary">
                    Submit
                </button>

            </form>

        </div>

    );
}

export default ManualForm;