# ChrisDropdown

`chris_dropdown` is a custom React component for creating dropdown menus. It allows you to easily create and customize dropdowns in your React applications.

## Installation

To install `chris_dropdown`, you can use npm or yarn:

```
npm install chris_dropdown

or


yarn add chris_dropdown
```

## Usage

To use `ChrisDropdown` in your React application, you'll need to import it and then use it in your JSX code. Here's an example of how to do this:

```jsx
import { useState } from 'react';

import './App.css';
import ChrisDropdown from "./lib/components/ChrisDropdown";

const MyComponent = () => {
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
            <p>Selected value from the child component Dropdown <br/> displayed in the parent component App</p>
            <h3> {department} </h3>
        </div>
    );
};
```

In this example, we're using the `ChrisDropdown` component to create a dropdown menu with three options. We're also keeping track of the currently selected value using the `useState` hook, and updating it when the user selects a different option from the dropdown.

## Props

`ChrisDropdown` accepts the following props:

- `options`: An array of objects representing the options in the dropdown. Each object should have a `value` and a `label` property.
- `handleSelect`: A callback function that is called when the user selects a different option from the dropdown. The function is passed the selected value as its first argument.


## License

`ChrisDropdown` is licensed under the MIT license.

I hope this README file helps you understand how to use the `Dropdown` component in your React applications.