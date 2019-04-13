import React from 'react';
import t34_in_snow from "../../../images/t34_in_snow.png";
import './Supply.scss';

const Supply = (props) => {
    return (
        <div className="content">

            <div className="content-title">
                <div className={props.language === 'en' ? '' : 'block-hidden'}>SUPPLY</div>
                <div className={props.language === 'fr' ? '' : 'block-hidden'}>SUPPLY fr</div>
                <div className={props.language === 'ru' ? '' : 'block-hidden'}>SUPPLY ru</div>
                <div></div>
            </div>

        </div>
    );
}

export default Supply;