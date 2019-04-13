import React from 'react';
import t34_in_snow from "../../../images/t34_in_snow.png";
import './Sop.scss';

const Sop = (props) => {
    let text = [];

    if (props.language === 'en') {
        text = [
            { first: "", second: 'AXIS', third: 'SOVIET' },
            { first: "1", second: "WEATHER ROLL", third: "" },
            { first: "2", second: "SUPPLY", third: "SUPPLY" },
            { first: "3", second: "REPLACEMENTS", third: "REPLACEMENTS" },
            { first: "4", second: "REINFORCEMENT / WITHDRAWAL", third: "REINFORCEMENT / WITHDRAWAL" },
            { first: "5", second: "AIR READINESS", third: "AIR READINESS" },
            { first: "6", second: "AXIS AIR INTERDICTION", third: "" },
            { first: "7", second: "AXIS MOVEMENT", third: "" },
            { first: "8", second: "AXIS ATTACK DECLARATIONS", third: "" },
            { first: "9", second: "", third: "SOVIET REACTION" },
            { first: "10", second: "AXIS COMBAT", third: "" },
            { first: "11", second: "AXIS MOTORIZED MOVEMENT", third: "" },
            { first: "12", second: "AXIS ENGINEERING", third: "" },
            { first: "13", second: "", third: "SOVIET MOTORIZED MOVEMENT" },
            { first: "14", second: "", third: "SOVIET ATTACK DECLARATIONS" },
            { first: "15", second: "AXIS REACTION", third: "" },
            { first: "16", second: "", third: "SOVIET COMBAT" },
            { first: "17", second: "", third: "SOVIET MOVEMENT" },
            { first: "18", second: "", third: "SOVIET ENGINEERING" },
            { first: "19", second: "GAME TURN INTERPHASE", third: "GAME TURN INTERPHASE" }
        ];
    }
    if (props.language === 'fr') {
        text = [
            { first: "", second: 'ALLEMAND', third: 'RUSSE' },
            { first: "1", second: "MÉTÉO", third: "" },
            { first: "2", second: "RAVITAILLEMENT", third: "RAVITAILLEMENT" },
            { first: "3", second: "REMPLACEMENTS", third: "REMPLACEMENTS" },
            { first: "4", second: "RENFORTS / RETRAITS", third: "RENFORTS / RETRAITS" },
            { first: "5", second: "AÉRIENNES PRÉPARATION", third: "AÉRIENNES PRÉPARATION" },
            { first: "6", second: "L'AXE AÉRIENNES L'INTERDICTION", third: "" },
            { first: "7", second: "MOUVEMENT DE L'AXE", third: "" },
            { first: "8", second: "DÉCLARATIONS DES ATTAQUES DE L'AXE", third: "" },
            { first: "9", second: "", third: "RÉACTION SOVIÉTIQUE" },
            { first: "10", second: "COMBAT DE L'AXE", third: "" },
            { first: "11", second: "MOUVEMENT MOTORISÉ DE L'AXE", third: "" },
            { first: "12", second: "GÉNIE", third: "" },
            { first: "13", second: "", third: "MOUVEMENT MOTORISÉ SOVIÉTIQUE" },
            { first: "14", second: "", third: "DÉCLARATIONS DES ATTAQUES SOVIÉTIQUES" },
            { first: "15", second: "RÉACTION DE L'AXE", third: "" },
            { first: "16", second: "", third: "COMBAT SOVIÉTIQUE" },
            { first: "17", second: "", third: "OUVEMENT SOVIÉTIQUE" },
            { first: "18", second: "", third: "GÉNIE" },
            { first: "19", second: "INTERPHASE DE CHANGEMENT DE TOUR", third: "INTERPHASE DE CHANGEMENT DE TOUR" }
        ];
    }

    if (props.language === 'ru') {
        text = [
            { first: "", second: 'ГЕРМАНИЯ', third: 'РОССИЯ' },
            { first: "1", second: "Погода", third: "" },
            { first: "2", second: "ПОСТАВКА", third: "ПОСТАВКА" },
            { first: "3", second: "ЗАМЕНЫ", third: "ЗАМЕНЫ" },
            { first: "4", second: "ЗАМЕНА АРМАТУРА", third: "RENFORTS / RETRAITS" },
            { first: "5", second: "AÉRIENNES PRÉPARATION", third: "AÉRIENNES PRÉPARATION" },
            { first: "6", second: "L'AXE AÉRIENNES L'INTERDICTION", third: "" },
            { first: "7", second: "MOUVEMENT DE L'AXE", third: "" },
            { first: "8", second: "DÉCLARATIONS DES ATTAQUES DE L'AXE", third: "" },
            { first: "9", second: "", third: "RÉACTION SOVIÉTIQUE" },
            { first: "10", second: "COMBAT DE L'AXE", third: "" },
            { first: "11", second: "MOUVEMENT MOTORISÉ DE L'AXE", third: "" },
            { first: "12", second: "GÉNIE", third: "" },
            { first: "13", second: "", third: "MOUVEMENT MOTORISÉ SOVIÉTIQUE" },
            { first: "14", second: "", third: "DÉCLARATIONS DES ATTAQUES SOVIÉTIQUES" },
            { first: "15", second: "RÉACTION DE L'AXE", third: "" },
            { first: "16", second: "", third: "COMBAT SOVIÉTIQUE" },
            { first: "17", second: "", third: "OUVEMENT SOVIÉTIQUE" },
            { first: "18", second: "", third: "GÉNIE" },
            { first: "19", second: "INTERPHASE DE CHANGEMENT DE TOUR", third: "INTERPHASE DE CHANGEMENT DE TOUR" }
        ];
    }

    let chart = text.map(function (row, index) {
        let firstClass = 'first';
        let secondClass = 'second';
        let thirdClass = 'third';
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
            <React.Fragment>
                <div className={firstClass}>{row['first']}</div>
                <div className={secondClass}>{row['second']}</div>
                <div className={thirdClass}>{row['third']}</div>
                <div className="line" />
            </React.Fragment>
        );
    });

    return (
        <div className="content">

            <div className="content-title">
                <div className={props.language === 'en' ? '' : 'block-hidden'}>SEQUENCE OF PLAY</div>
                <div className={props.language === 'fr' ? '' : 'block-hidden'}>SEQUENCE DE JEU</div>
                <div className={props.language === 'ru' ? '' : 'block-hidden'}>Последовательность игры</div>
                <div></div>
            </div>



            <div className="chart-container">
                <div className="flex3column">

                    {chart}

                </div>
            </div>

        </div>
    );
}

export default Sop;