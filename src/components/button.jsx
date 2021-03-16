import React, { useState, useEffect } from 'react';


function Button ({title, buttonFunction}) {

    return (
        <div>
            <button onClick={buttonFunction}>    
                {title}
            </button>
        </div>
    )
}

export default Button