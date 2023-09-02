import React, { useState } from "react";

const ChrisDropdown = ({ options, handleSelect }) => {
    const [selectedValue, setSelectedValue] = useState("");

    return (
        <select
            value={selectedValue}
            onChange={(e) => {
                handleSelect(e.target.value);
                setSelectedValue(e.target.value)
            }}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default ChrisDropdown;
