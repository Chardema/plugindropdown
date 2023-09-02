import { useState } from 'react';

import './App.css';
import ChrisDropdown from "./lib/components/ChrisDropdown";


function App() {

    const [department, setDepartment] = useState("Sales");

    const departments =[
        { value: 'Sales', label: 'Sales' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Engineering', label: 'Engineering' },
        { value: 'Human Resources', label: 'Human Resources' },
        { value: 'Legal', label: 'Legal' },
    ]

    const handleSelect = (selectVal)=>{
        setDepartment(selectVal)
    }
    return (
        <div className="App">
            <h1>Coucou</h1>
            <ChrisDropdown
                handleSelect={handleSelect}
                name="department"
                id="department"
                options={departments}
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>Valeur sélectionnée depuis le composant enfant Dropdown <br/> affichée dans le composant parent App</p>
            <h3> {department} </h3>
        </div>
    );
}

export default App;
