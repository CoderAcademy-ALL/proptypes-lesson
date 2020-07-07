import React from 'react';
import PropTypes from 'prop-types'; 


function Instructors(props) {
    const {instructor, handleClick} = props
    return (
        <div>
            <p>Welcome to the course, your instructor will be {instructor}</p>
            <button onClick={handleClick} >Change Instructor </button>
        </div>
    )
}

Instructors.propTypes = {
    instructor: PropTypes.oneOf(["Bianca", "Janel", "Jario", "Micheal", "Alex"]),
    handleClick: PropTypes.func
}

export default Instructors;
