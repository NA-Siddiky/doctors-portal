import React from 'react';

const AppointmentsByDate = ({ appointments }) => {
    console.log(appointments);
    return (
        <div>
            <h1>AppointmentsByDate: {appointments.length}</h1>
            {
                appointments.map(app => <li li key={app._id}>{app.name}</li>)
            }
        </div >
    );
};

export default AppointmentsByDate;