import { useState } from "react";

import students from "../data/students.json";


function Students()
{

    const [search, setSearch] = useState("");

    const [semester, setSemester] = useState("");

    const [division, setDivision] = useState("");

    const [gender, setGender] = useState("");


    const filteredStudents = students.filter((student) => {

        return (

            student.firstname
                .toLowerCase()
                .includes(search.toLowerCase())

            &&

            (semester === "" ||
                student.semester === semester)

            &&

            (division === "" ||
                student.div === division)

            &&

            (gender === "" ||
                student.gender === gender)

        );

    });


    return (

        <div>

            <h2>Student List</h2>


            {/* Search */}

            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search by first name"

                value={search}

                onChange={(e) =>
                    setSearch(e.target.value)
                }
            />


            {/* Filters */}

            <div className="row mb-3">


                <div className="col">

                    <select
                        className="form-select"
                        value={semester}
                        onChange={(e) =>
                            setSemester(e.target.value)
                        }
                    >

                        <option value="">
                            All Semesters
                        </option>

                        <option value="5">Semester 5</option>

                        <option value="6">Semester 6</option>

                        <option value="7">Semester 7</option>

                    </select>

                </div>


                <div className="col">

                    <select
                        className="form-select"
                        value={division}
                        onChange={(e) =>
                            setDivision(e.target.value)
                        }
                    >

                        <option value="">
                            All Divisions
                        </option>

                        <option value="A">Division A</option>

                        <option value="B">Division B</option>

                    </select>

                </div>


                <div className="col">

                    <select
                        className="form-select"
                        value={gender}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    >

                        <option value="">
                            All Gender
                        </option>

                        <option value="Male">
                            Male
                        </option>

                        <option value="Female">
                            Female
                        </option>

                    </select>

                </div>

            </div>


            {/* Student Table */}

            <table className="table table-bordered">

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>First Name</th>

                        <th>Semester</th>

                        <th>Division</th>

                        <th>Gender</th>

                    </tr>

                </thead>


                <tbody>

                    {filteredStudents.map((student) => (

                        <tr key={student.id}>

                            <td>{student.id}</td>

                            <td>{student.firstname}</td>

                            <td>{student.semester}</td>

                            <td>{student.div}</td>

                            <td>{student.gender}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );
}

export default Students;