import { useState, useRef } from "react";

function StateRef()
{

    const [name, setName] = useState("");

    const inputRef = useRef();


    function focusInput()
    {
        inputRef.current.focus();
    }


    return (

        <div>

            <h2>useState and useRef</h2>


            <input
                ref={inputRef}
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={name}
                onChange={(e) =>
                    setName(e.target.value)
                }
            />


            <p className="mt-3">
                Name: {name}
            </p>


            <button
                className="btn btn-primary"
                onClick={focusInput}
            >
                Focus Input
            </button>

        </div>

    );
}

export default StateRef;