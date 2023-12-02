import React from 'react';
import '../StyleComponent/SortOptions.css';
const SortOptions = ({ onSort }) => {
    const options = ['Stars', 'Watchers Count', 'Score', 'Name', 'Created At', 'Updated At'];

    return (
        <select className="select" onChange={(e) => onSort(e.target.value)}>
            {options.map((option, index) => (
                <option key={index} value={option.toLowerCase().replace(' ', '_')}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default SortOptions;
