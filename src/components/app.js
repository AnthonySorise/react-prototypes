import React from 'react';
import Table from './table'

const students = [
    {
        name: 'Alan',
        course: 'Astronomy',
        grade: '95'
    },
    {
        name: 'Bob',
        course: 'Biology',
        grade: '85'
    },
    {
        name: 'Chuck',
        course: 'Chemistry',
        grade: '75'
    },
];

const App = () => {
    return(
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
};
export default App;