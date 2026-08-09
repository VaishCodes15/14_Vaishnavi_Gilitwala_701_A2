import employees from "../data/employees.json";


function Employees()
{

    return (

        <div>

            <h2>Employee List</h2>


            <table className="table table-bordered">

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Name</th>

                        <th>Department</th>

                        <th>Salary</th>

                    </tr>

                </thead>


                <tbody>

                    {employees.map((employee) => (

                        <tr key={employee.id}>

                            <td>{employee.id}</td>

                            <td>{employee.name}</td>

                            <td>{employee.department}</td>

                            <td>{employee.salary}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );
}

export default Employees;