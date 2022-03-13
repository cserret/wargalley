import React from 'react';
import './BsrLink.scss';


const BsrLink = ({page, rule}) => {

    return (
        <a className="bsr-link" target="_blank" rel="noopener noreferrer" href={`https://gmtwebsiteassets.s3.us-west-2.amazonaws.com/bagc/Barb-AGC_StandardRules_Final_Lo-Res.pdf#page=${page}`}>
            <span className="bsr-link-title">BSR2</span> 
            <span className="bsr-link-rule">{rule}</span>
        </a>
    ) 

}

export default BsrLink;