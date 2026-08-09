import { useForm } from "react-hook-form";


function LibraryForm()
{

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: "onChange"
    });


    function submitForm(data)
    {
        alert("Form submitted: " + data.name);
    }


    return (

        <div>

            <h2>Third Party Form Validation</h2>


            <form onSubmit={handleSubmit(submitForm)}>


                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Enter Name"

                    {...register("name", {
                        required: "Name is required",
                        minLength: {
                            value: 3,
                            message: "Minimum 3 characters"
                        }
                    })}
                />


                {errors.name && (

                    <p className="text-danger">
                        {errors.name.message}
                    </p>

                )}


                <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Enter Email"

                    {...register("email", {
                        required: "Email is required"
                    })}
                />


                {errors.email && (

                    <p className="text-danger">
                        {errors.email.message}
                    </p>

                )}


                <button className="btn btn-success">
                    Submit
                </button>

            </form>

        </div>

    );
}

export default LibraryForm;