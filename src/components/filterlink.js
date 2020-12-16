import React from 'react';

const filterLink = ({activeFilter, onClickFilter, actionType, children}) => {

    if(activeFilter === actionType) {
        return children
    }
    return (
        <a href="/" 
            onClick={(e) => {
                e.preventDefault();
                onClickFilter(actionType); }} >

            {children}

        </a>
    )
}

export default filterLink
