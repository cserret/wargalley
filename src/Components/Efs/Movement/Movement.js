import React from 'react';
import c1 from "../../../images/efs/movement/c1.jpg";
import c3 from "../../../images/efs/movement/c3.jpg";
import c7 from "../../../images/efs/movement/c7.jpg";
import c8 from "../../../images/efs/movement/c8.jpg";
import c10 from "../../../images/efs/movement/c10.jpg";
import c12 from "../../../images/efs/movement/c12.jpg";
import german_bridge from "../../../images/efs/movement/german_bridge.gif";
import infiltration_movement_example from "../../../images/efs/movement/infiltration_movement_example.jpg";
import german_superheavy from "../../../images/efs/movement/german_superheavy.jpg";
import L760 from "../../../images/efs/movement/L-760.jpg";
import motorway from "../../../images/efs/movement/motorway.jpg";
import roadsigns from "../../../images/efs/movement/roadsigns.jpg";
import soviet_cavalry from "../../../images/efs/movement/soviet_cavalry.jpg";
import right_arrow from "../../../images/efs/right_arrow.png";

import './Movement.scss';

const Movement = (props) => {
    return (
        <div className="content">

            <div className="content-title">
                <div className={props.language === 'en' ? '' : 'block-hidden'}>MOVEMENT</div>
                <div className={props.language === 'fr' ? '' : 'block-hidden'}>MOUVEMENT</div>
                <div className={props.language === 'ru' ? '' : 'block-hidden'}>ДВИЖЕНИЕ</div>
                <div></div>
            </div>

            <div className="generic-flex-space-around road-signs">
                <img src={roadsigns} alt="road signs" />
            </div>
            <div className="spacer1rem" />

            <span className={props.language === 'en' ? '' : 'block-hidden'}>
                <p>
                    The movement rules form the core of the EFS system. There are various kinds of movement, and there are different phases in which movement can occur. Ground units are typically either non-motorized (foot or horse drawn) or motorized. But color coding on the movement factors of the counters can specify finer distinctions within these two types.
                    </p><p>
                    These are the movement phases in EFS:
                    </p>



                <div className="gray-box">
                    <p className="subsubheader">Movement phases</p>
                    <ul>
                        <li><span className="slight-bold">Regular Movement</span> - All (practically all) units get to move.</li>
                        <li><span className="slight-bold">Motorized Movement</span> - Only motorized units (non-orange movement factor) units move. The Soviets can sometimes get a non-motorized unit to move here.</li>
                        <li><span className="slight-bold">Reaction Movement</span> - Motorized units that are not in ZOC (and for the Soviets - in range of an operating HQ) can respond to and join nearby combats.</li>
                    </ul>
                </div>

                <div className="spacer1rem" />
                <p>
                    and the specific movement types in EFS:
                    </p>

                <div className="gray-box">
                    <p className="subsubheader">Movement rate color codes:</p>
                    <ul>
                        <li><span className="slight-bold">Non-boxed white movement factor</span> - Non-motorized.</li>
                        <li><span className="slight-bold">Red box around movement factor</span> - Motorized.</li>
                        <li><span className="slight-bold">Green movement factor</span> - Super Heavy artillery.</li>
                        <li><span className="slight-bold">Yellow movement factor</span> - Infiltration capable.</li>
                        <li><span className="slight-bold">Gray movement factor</span> - Rail movement only.</li>
                        <li><span className="slight-bold">Orange movement factor</span> - Motorized but only moves in Regular Movement phase.</li>
                        <li><span className="slight-bold">Blue movement factor</span> - Naval movement only.</li>
                    </ul>
                </div>

                <div className="generic-flex-space-around unit-examples">

                    <div className="unit-example">
                        <img src={c7} alt="non-motorized" />
                        <div>NOT-MOTORIZED</div>
                        <div>Movement factor is non-boxed and white</div>
                    </div>

                    <div className="unit-example">
                        <img src={c1} alt="motorized" />
                        <div>MOTORIZED</div>
                        <div>Movement factor in red box</div>
                    </div>

                    <div className="unit-example">
                        <img src={c8} alt="infiltration" />
                        <div>INFILTRATION</div>
                        <div>Movement factor is yellow</div>
                    </div>

                    <div className="unit-example">
                        <img src={c12} alt="motorized movement phase" />
                        <div>MOTORIZED - MOVEMENT PHASE</div>
                        <div>Movement factor is orange</div>
                    </div>

                    <div className="unit-example">
                        <img src={c10} alt="rail" />
                        <div>RAIL</div>
                        <div>Movement factor is gray</div>
                    </div>


                    <div className="unit-example">
                        <img src={c3} alt="naval" />
                        <div>NAVAL</div>
                        <div>Movement factor is blue</div>
                    </div>

                </div>

                <div className="movement-phases">
                    <div class="axis">
                        <div>The order of phases for the Axis player is:</div>
                        <div className="phases">
                            <div>Regular Movement</div>
                            <img src={right_arrow} alt="right arrow"/>
                            <div>Combat</div>
                            <img src={right_arrow} alt="right arrow"/>
                            <div>Motorized Movement</div>
                        </div>
                    </div>
                    <div class="soviet">
                        <div>The order of phases for the Soviet player is:</div>
                        <div className="phases">
                            <div>Motorized Movement</div>
                            <img src={right_arrow} alt="right arrow"/>
                            <div>Combat</div>
                            <img src={right_arrow} alt="right arrow"/>
                            <div>Regular Movement</div>
                        </div>
                    </div>
                </div>

            </span>















            <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                <p>
                    Les règles de mouvement forment le coeur du système EFS. Il existe diffèrentes sortes de mouvements, et le mouvement peut se produire lors de diffèrentes phases. Les unitès terrestres sont soit non-motorisèes (è pieds ou avec des transports hippomobiles) soit motorisèes. Mais un code de couleurs sur les pions peut dèfinir certaines spècificitès dans ces deux types.
                </p><p>
                    Voici les phases de mouvement dans EFS:
                </p>

                    <div className="gray-box">
                        <p className="subsubheader">Phases de Mouvement</p>
                        <ul>
                            <li><span className="slight-bold">Mouvement Règulier</span> - Toutes les unitès (ou presque toutes) peuvent bouger.</li>
                            <li><span className="slight-bold">Mouvement Motorisè</span> - Seules les unitès motorisèes (avec un facteur de mouvement qui n'est pas orange) peuvent bouger. Les Soviétiques peuvent parfois dèplacer des unitès non motorisèes è ce moment lè.</li>
                            <li><span className="slight-bold">Mouvement de Rèaction</span> - Les unitès motorisèes ne se trouvant pas dans une ZDC ennemie (et pour les Soviétiques - è portèe d'un QG opèrationnel) peuvent rèagir et se joindre è un combat è proximitè.</li>
                        </ul>
                    </div>

                <div className="spacer1rem" />
                <p>
                et les types de mouvements spècifiques dans EFS:
                    </p>

                <div className="gray-box">
                    <p className="subsubheader">Codes de couleurs pour le mouvement:</p>
                    <ul>
                        <li><span className="slight-bold">Facteur de mouvement blanc non encadrè</span> - Non motorisè.</li>
                        <li><span className="slight-bold">Case rouge autour du facteur de mouvement</span> - Motorisè.</li>
                        <li><span className="slight-bold">Facteur de mouvement vert</span> - Artillerie Super Lourde.</li>
                        <li><span className="slight-bold">Facteur de mouvement jaune</span> - Capable d'infiltration.</li>
                        <li><span className="slight-bold">Facteur de mouvement gris</span> - Mouvement ferroviaire uniquement.</li>
                        <li><span className="slight-bold">Facteur de mouvement orange</span> - Motorisè, mais ne peut bouger que pendant la Phase de Mouvement Règulier.</li>
                        <li><span className="slight-bold">Facteur de mouvement bleu</span> - Mouvement naval uniquement.</li>
                    </ul>
                </div>

                <div className="generic-flex-space-around unit-examples">

                    <div className="unit-example">
                        <img src={c7} alt="NON-MOTORISE" />
                        <div>NON-MOTORISE</div>
                        <div>FM blanc non encadrè</div>
                    </div>

                    <div className="unit-example">
                        <img src={c1} alt="MOTORISE" />
                        <div>MOTORISE</div>
                        <div>FM dans une case rougevvv</div>
                    </div>

                    <div className="unit-example">
                        <img src={c8} alt="INFILTRATION" />
                        <div>INFILTRATION</div>
                        <div>FM jaune</div>
                    </div>

                    <div className="unit-example">
                        <img src={c12} alt="PHASE DE MOUVEMENT MOTORISE" />
                        <div>PHASE DE MOUVEMENT MOTORISE</div>
                        <div>FM orange</div>
                    </div>

                    <div className="unit-example">
                        <img src={c10} alt="rail" />
                        <div>RAIL</div>
                        <div>FM gris</div>
                    </div>


                    <div className="unit-example">
                        <img src={c3} alt="naval" />
                        <div>NAVAL</div>
                        <div>FM bleu</div>
                    </div>

                </div>

</span>
         



        </div>
    );
}

export default Movement;