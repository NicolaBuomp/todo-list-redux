import React from 'react';
import FooterLink from './filterlink';

export default function todoFooter({filterTodo, activeFilter}) {
    // console.log(dispatch);
    return (
        <div className="footer">
            <FooterLink activeFilter={activeFilter} onClickFilter = {filterTodo} actionType='All' >
                All
            </FooterLink>

            <FooterLink activeFilter={activeFilter} onClickFilter = {filterTodo} actionType='To do' >
                To do
            </FooterLink>

            <FooterLink activeFilter={activeFilter} onClickFilter = {filterTodo} actionType='Completed' >
                Completed
            </FooterLink>

        </div>
    );
}