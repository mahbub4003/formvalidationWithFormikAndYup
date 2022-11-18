import React from 'react';


const MorData = ({des,toggle}) => {
    return (
        <div>
            { toggle && <p>{ des }</p> }
        </div>
    );
};

export default MorData;