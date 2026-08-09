function Student({ name })
{
    return (
        <li>{name}</li>
    );
}


function Card({ children })
{
    return (

        <div className="card p-3 mt-3">

            {children}

        </div>

    );
}


function Concepts()
{

    const isLoggedIn = true;

    const students = [
        "Vaishnavi",
        "Rahul",
        "Priya"
    ];


    return (

        <div>

            <h2>React Concepts</h2>


            {/* Conditional Rendering */}

            <h4>1. Conditional Rendering</h4>

            {isLoggedIn
                ? <p>Welcome User</p>
                : <p>Please Login</p>
            }


            {/* List */}

            <h4>2. List</h4>

            <ul>

                {students.map((student, index) => (

                    <Student
                        key={index}
                        name={student}
                    />

                ))}

            </ul>


            {/* Nested Component + Children */}

            <h4>3. Nested Component and Children</h4>

            <Card>

                <h5>Student Card</h5>

                <p>
                    This content is passed using children.
                </p>

            </Card>

        </div>

    );
}

export default Concepts;