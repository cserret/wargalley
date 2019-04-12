import React from 'react';
import './Footer.scss';

const Footer = (props) => {
    return (
        <div className="footer">
            <div>
                <span className={props.language === 'en' ? '' : 'block-hidden'}>
                East Front Series, EFS, Typhoon! The Drive on Moscow 1941, Barbarossa Army Group North, Barbarossa Army Group Center,
                </span>
                <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                East Front Series, EFS, Typhoon! The Drive on Moscow 1941, Barbarossa Army Group North, Barbarossa Army Group Center,
                </span>
                <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                Названия East Front Series, Barbarossa Army Group North, Barbarossa Army Group Center, 
                </span>
            </div>
            <div>
            <span className={props.language === 'en' ? '' : 'block-hidden'}>
                Barbarossa Army Group South, Barbarossa Kiev to Rostov 1941, Barbarossa Crimea 1941-42 are Trademarks of GMT Games, Hanford, CA.
                </span>
                <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                Barbarossa Army Group South, Barbarossa Kiev to Rostov 1941, Barbarossa Crimea 1941-42 sont des marques commerciales (TM)de GMT Games, Hanford, CA, Etats Unis.
                </span>
                <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                and Barbarossa Army Group South являются торговыми марками компании GMT Games из Хэнфорда, штат Калифорния.
                </span>
             </div>
        </div>
    );
}

export default Footer;