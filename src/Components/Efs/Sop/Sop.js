import React from 'react';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
import BsrLink from "../BsrLink/BsrLink";
import './Sop.scss';

const Sop = (props) => {
    let text = [
            { first: "", second: 'AXIS', third: 'SOVIET', both: '' },
            { first: "1", second: "WEATHER PHASE", third: "" },
            { first: "2", second: "REPLACEMENTS", third: "REPLACEMENTS", both: "REPLACEMENTS" },
            { first: "3", second: "REINFORCEMENT / WITHDRAWAL", third: "REINFORCEMENT / WITHDRAWAL", both: '' },
            { first: "4", second: "AIR PHASE", third: "AIR PHASE", both: '' },
            { first: "5", second: "NAVAL READINESS", third: "NAVAL READINESS", both: '' },
            { first: "6", second: "SUPPLY STATUS", third: "SUPPLY STATUS", both: '' },
            { first: "7", second: "AXIS MOVEMENT", third: "", both: '' },
            { first: "8", second: "AXIS ATTACK DECLARATIONS", third: "", both: '' },
            { first: "9", second: "", third: "SOVIET REACTION", both: '' },
            { first: "10", second: "AXIS COMBAT", third: "", both: '' },
            { first: "11", second: "AXIS MOTORIZED MOVEMENT", third: "", both: '' },
            { first: "12", second: "AXIS ENGINEERING", third: "", both: '' },
            { first: "13", second: "", third: "SOVIET MOTORIZED MOVEMENT", both: '' },
            { first: "14", second: "", third: "SOVIET ATTACK DECLARATIONS", both: '' },
            { first: "15", second: "AXIS REACTION", third: "", both: '' },
            { first: "16", second: "", third: "SOVIET COMBAT", both: '' },
            { first: "17", second: "", third: "SOVIET MOVEMENT", both: '' },
            { first: "18", second: "", third: "SOVIET ENGINEERING", both: '' },
            { first: "19", second: "", third: "SOVIET SURRENDER PHASE", both: '' },
            { first: "20", second: "RECOVERY PHASE", third: "RECOVERY PHASE", both: '' },
            { first: "21", second: "VICTORY DETERMINATION PHASE", third: "", both: '' },
            { first: "22", second: "ADMINISTRATIVE SEGMENT", third: "ADMINISTRATIVE SEGMENT", both: '' }
        ];
    


    let chart = text.map(function (row, index) {
        let firstClass = 'first';
        let secondClass = 'second';
        let thirdClass = 'third';
        let bothClass = 'both';
        if (index === 0) {
            firstClass += ' ind';
            secondClass += ' ind';
            thirdClass += ' ind';
        }
        if (row['first'] === '' && index > 0) {
            firstClass += ' empty';
        }
        if (row['second'] === '') {
            secondClass += ' empty';
        }
        if (row['third'] === '') {
            thirdClass += ' empty';
        }

        return (
            <React.Fragment key={index}>
                <div  className={firstClass}>{row['first']}</div>
                <div  className={secondClass}>{row['second']}</div>
                <div  className={thirdClass}>{row['third']}</div>
                <div  className="line" />
            </React.Fragment>
        );
    });

    return (
        <div className="content">

            <div className="content-title">
                <div>SEQUENCE OF PLAY</div>
                <div></div>
            </div>



            <div className="chart-container">
                <div className="flex3column">

                    {chart}

                </div>
            </div>
            <ScrollToTopOnMount />
        </div>
    );
}

export default Sop;