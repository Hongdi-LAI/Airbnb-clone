import React, { useState } from 'react';
import './Search.css';
// main style file
import "react-date-range/dist/styles.css";
// theme css file
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from 'react-date-range';
import PeopleIcon from '@material-ui/icons/People';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

// Date Picker Component
function Search() {

    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    // selected date highlight
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    }; 

    // whenever select a rang of dates, 
    // set the start date to the start of the selection 
    // and the end date to the end of the selection
    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className = "search">
            <DateRangePicker 
            ranges = {[selectionRange]}
            onChange = {handleSelect}
            />
            <div className = "search__guestNumber">
                <h2>
                    Number of guests
                </h2>
                <PeopleIcon className = "search__guestIcon"/>
                <input min={0} defaultValue = {2} type = "number"/>
            </div>
            <Button
            onClick = {()=>history.push('/search')}
            >Search Airbnb</Button>
        </div>
    )
}

export default Search
