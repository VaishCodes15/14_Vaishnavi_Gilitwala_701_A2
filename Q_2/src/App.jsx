import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import FunctionComponent from "./components/FunctionComponent";
import Concepts from "./components/Concepts";
import Counter from "./components/Counter";
import StateRef from "./components/StateRef";
import DigitalClock from "./components/DigitalClock";
import ManualForm from "./components/ManualForm";
import LibraryForm from "./components/LibraryForm";
import Employees from "./components/Employees";
import Students from "./components/Students";


function App()
{
    return (

        <BrowserRouter>

            {/* Navigation Bar */}

            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">

                <div className="container">

                    <Link
                        className="navbar-brand"
                        to="/"
                    >
                        React Assignment
                    </Link>


                    <div className="navbar-nav">

                        <Link className="nav-link" to="/function">
                            Function
                        </Link>

                        <Link className="nav-link" to="/concepts">
                            Concepts
                        </Link>

                        <Link className="nav-link" to="/counter">
                            Counter
                        </Link>

                        <Link className="nav-link" to="/state-ref">
                            State/Ref
                        </Link>

                        <Link className="nav-link" to="/clock">
                            Clock
                        </Link>

                        <Link className="nav-link" to="/manual-form">
                            Manual Form
                        </Link>

                        <Link className="nav-link" to="/library-form">
                            Library Form
                        </Link>

                        <Link className="nav-link" to="/employees">
                            Employees
                        </Link>

                        <Link className="nav-link" to="/students">
                            Students
                        </Link>

                    </div>

                </div>

            </nav>


            {/* Routes */}

            <div className="container mt-4">

                <Routes>

                    <Route
                        path="/"
                        element={
                            <h1>Welcome to React Assignment</h1>
                        }
                    />

                    <Route
                        path="/function"
                        element={<FunctionComponent />}
                    />

                    <Route
                        path="/concepts"
                        element={<Concepts />}
                    />

                    <Route
                        path="/counter"
                        element={<Counter />}
                    />

                    <Route
                        path="/state-ref"
                        element={<StateRef />}
                    />

                    <Route
                        path="/clock"
                        element={<DigitalClock />}
                    />

                    <Route
                        path="/manual-form"
                        element={<ManualForm />}
                    />

                    <Route
                        path="/library-form"
                        element={<LibraryForm />}
                    />

                    <Route
                        path="/employees"
                        element={<Employees />}
                    />

                    <Route
                        path="/students"
                        element={<Students />}
                    />

                </Routes>

            </div>

        </BrowserRouter>

    );
}

export default App;