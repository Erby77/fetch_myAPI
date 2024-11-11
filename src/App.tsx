import { useState } from "react";
import EmployeeCard from "./components/EmployeeCard";
import "./App.css";

function App() {
	const sampleEmployee = {
		name: { first: "", last: "" },
		email: "",
		picture: { medium: "" },
	};
	const [employee, setEmployee] = useState(sampleEmployee);
	const getEmployee = () => {
		// remplacement par mon api local
		fetch("http://localhost:3310/api/employees")
			.then((response) => response.json())
			.then((data) => {
				setEmployee(data.results[0]);
			});
	};

	return (
		<>
			<EmployeeCard employee={employee} />
			<button type="button" onClick={getEmployee}>
				Get employee
			</button>
		</>
	);
}

export default App;
