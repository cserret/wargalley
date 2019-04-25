import React, { Component } from 'react';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
import headquarters from "../../../images/efs/hq/headquarters.jpg";
import soviet_headquarters_front from "../../../images/efs/hq/soviet_headquarters_front.png";
import soviet_headquarters_back from "../../../images/efs/hq/soviet_headquarters_back.png";
import './Headquarters.scss';


export default class Headquarters extends Component {

    state = {
        contextDrawnEN: false,
        contextDrawnFR: false
    }

    componentDidMount = () => {
        this.drawCanvas(this.props.language);
    }

    componentWillReceiveProps = (props) => {
        this.drawCanvas(props.language);
    }


    drawCanvas = (language) => {
        var canvasDiv;
        var canvas;
        var ctx;
        if( language === 'en' ) {
            canvasDiv = document.getElementById('hq_info_container');
        }
        if( language === 'fr' ) {
            canvasDiv = document.getElementById('hq_info_container_fr');
        }
        canvas = document.createElement('canvas');
        canvas.setAttribute('width', 850);
        canvas.setAttribute('height', 240);
        canvas.setAttribute('id', 'canvas');
        canvasDiv.appendChild(canvas);

        ctx = canvas.getContext("2d");

        ctx.strokeStyle = "#df4b26";
        ctx.lineJoin = "round";
        ctx.lineWidth = 5;
        ctx.lineCap = "round";

        ctx.beginPath();
        ctx.moveTo(190, 72);
        ctx.lineTo(220, 72);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(572, 72);
        ctx.lineTo(600, 72);
        ctx.stroke();
        

        
    }

    render = () => {
        return (
            <div className="content">
                <div className={this.props.language === 'en' ? '' : 'block-hidden'}>
                    <div className="content-title">
                        <div className={this.props.language === 'en' ? '' : 'block-hidden'}>HEADQUARTERS</div>
                        <div></div>
                    </div>
                    <div className="top-image">
                        <img src={headquarters} alt="headquarters" />
                        <div>Headquarters of the Western Front, Autumn 1941. Left to right - Lieutenant General Vasily Sokolovsky, Chief of Staff Nikolay Bulganin, Army General Gerogy Zhukov.</div>
                    </div>
                    <div className="spacer1rem" />
                    <div className="pdiv">
                        Only the Soviet player has Headquarters. The Soviet player is hindered by an inefficient Command structure, and the Headquarter rules simulate these difficulties. The Soviet HQ's "Command range" is 4 hexes. This range is traced without regard to terrain, weather, or Axis units. The Command Value of a headquarters is used, separately, for 3 things. It represents:
                    <ul className="ul-no-top">
                            <li>The number of non-motorized units which it can activate. The HQ's cannot activate itself or any other HQ's.</li>
                            <li>The number of motorized units it can move in Reaction movement.</li>
                            <li>The number of No Retreat and Additional Retreat orders it can issue.</li>
                        </ul>
                        <div className="special1">The HQ's Command Value can be reduced by enemy air interdiction.</div>
                    </div>
                    <div id="hq_info_container" className="hq-info-container">
                        <div className="title">SOVIET HEADQUARTERS INFORMATION</div>
                        <div className="operational-side">Operational side</div>
                        <div className="non-operational-side">Non-operational side</div>
                        <div className="command-value">COMMAND<br />VALUE</div>
                        <div className="recovery-value">RECOVERY<br />VALUE</div>
                        <div className="hq-info">
                            <img src={soviet_headquarters_front} alt="Soviet headquarters front" />
                            <img src={soviet_headquarters_back} alt="Soviet headquarters back" />
                        </div>
                    </div>


                    <div className="spacer2rem" />
                    <div className="subheader-normal">Unit Activation</div>
                    <p>
                        Operational Soviet Headquarters can "activate" non-motorized (including orange MA and green MA units) units to move in the Soviet Motorized Movement Phase. The units must be within Command range of the HQ's. The units that are activated can move up to their full movement allowance. They can engage in combat following the Motorized Movement Phase. To activate a unit, the HQ's must "pay" one of its Command points. One Command point per unit, regardless of size. Operational HQ's can activate one in-range Guards unit at no Command point cost.
</p>
                    <div className="subheader-normal">Orders</div>
                    <p>
                        Soviet HQ's can issue, at the cost of a Command point per Defender Hex, a No Retreat order or a Additional Retreat order, to any Defender Hexes within its Command range. Soviet HQ's can also issue orders to attacking Soviet units.
</p>

                    <div className="subheader-normal">Non-operational Headquarters (Non-op HQ's)</div>
                    <p>
                        When Soviet Headquarters enter the game as a reinforcement, they are in a non-op state. In some scenarios the Soviet player may start out with a non-op HQ's on the map. Non-op HQ's cause various problems. Any unit that is in range of a non-op headquarters "loses" contact with any in range operational HQ's. Non-Op headquarters can move normally.
</p>



                    <div className="gray-box">
                        <p className="subsubheader">Non-op HQ's effects</p>
                        <ul>
                            <li>Units within Command range of a non-op HQ's cannot be activated for movement in the Motorized phase.</li>
                            <li>Units within Command range of a non-op HQ's cannot do Reaction movement.</li>
                            <li>No new regular Strongpoints can be built within Command range of a non-op HQ's. ("E" type Strongpoints are not affected).</li>
                            <li>Bridge units cannot be placed within Command range of a non-op HQ's. If present within the Command range of a non-op HQ's, they cannot be moved.</li>
                            <li>Soviet air units cannot contribute CAS benefits to any Defender Hexes within Command range of a non-op Soviet HQ's.</li>
                            <li>The Maximum number of Soviet artillery units that can contribute to a combat is kept to 1 in any Defender Hex within Command range of a non-op Soviet HQ's.</li>
                            <li>NKVD units that are within Command range of a non-op HQ's cannot issue No Retreat orders when in towns, cities, or major cities.</li>
                            <li>Non-op HQ's prohibit activation of any Guards units in its Command range.</li>
                            <li>Non-op HQ's cause movement restrictions for units that start a movement phase, Motorized or Regular, within command range of the non-op HQ's. The maximum number of units that can move is one less than the Recovery value of the non-op HQ's. (If the recovery value is 3, a maximum of two units can move in each movement phase). Units that start outside of the Command range of a non-op HQ's can freely move into its range without restriction.</li>
                        </ul>
                    </div>

                    <div className="spacer2rem" />
                    <div className="subheader-normal">Activating Headquarters</div>
                    <p>
                        Non-op HQ's can become operational HQ's by rolling their recovery value or less during the Game Turn Interphase. The Soviet player can also opt to "disband" a non-op HQ's during the Game Turn Interphase. A max of one non-op HQ's per Game Turn Interphase can be disbanded and taken off the map and put into the Cadre Box. This gives the Axis player +2 VPs. Non-op HQ's in the Cadre Box can stay there until they successfully roll their recovery value before being brought onto the map.
                </p>
                    <div className="spacer0_5rem" />
                    <div className="subheader-normal">Other Headquarters rules</div>
                    <div className="pdiv">
                        <ul class="ul-no-top">
                            <li>Lost HQ's units cost VPs. See the victory point schedule for the scenario.</li>
                            <li>HQ's that are forced to retreat through a vacant hex in Axis ZOC gets flipped to its non-op side.</li>
                            <li>HQ's get their Command value reduced by any Zone of Interdiction value it is in.</li>
                            <li>HQ's have 0 stacking cost, except when moving by rail or air or sea, when it is 1.</li>
                            <li>HQ's that are overrun become non-op.</li>
                            <li>HQ's that are under a garrison marker can still operate as a HQ - except it can't move until released.</li>
                        </ul>
                    </div>

                    <div className="subheader-normal">Comments on Headquarters</div>
                    <p>
                        New players to EFS often fail to recognize how important Soviet HQ's units are. As the Soviet player, you should always pay the upmost attention to keeping them safe, and evacuating them by rail or air if they become endangered of being cut off. The proper place for HQ's is a few hexes behind the "front line". You should always try to keep them on a road or rail in case they need to vamoose out real quick. You should also, at least with the better HQ's, keep a AA unit with them to discourage Axis air interdiction. 
                        </p><p>
                        You should strive to keep as much of your front line under Command range of a HQ's, although it's often not possible to cover it all. Probably the most important function the Soviet HQ's provides is the ability to move motorized units in the Reaction phase, so you usually want some motorized units near the Soviet HQ's so they can be used in this way. Soviet HQ's enable more than one Soviet artillery to participate in a combat if they are stacked with the HQ's, which may be useful when trying to defend a crucial area, even though this forces you to place them very near the front line (hint - this is a good job for those poor 1 Command point HQ's). Try to minimize the possibility of your HQ's being overrun by stacking them with a combat unit, or keeping a "defense in depth", or at least some road-bumps, in front of them. HQ's are "bait" for German panzer divisions, and a good German player will always try to hit HQ's whenever possible. Keep non-op HQ's AWAY from your front line, they are dangerous. Non-op HQ's can move normally so they should never be on the front line screwing things up.
                     </p>


                </div>











                <div className={this.props.language === 'fr' ? '' : 'block-hidden'}>
                    <div className="content-title">
                        <div className={this.props.language === 'fr' ? '' : 'block-hidden'}>QUARTIERS GÉNÉRAL</div>
                        <div></div>
                    </div>
                    <div className="top-image">
                        <img src={headquarters} alt="headquarters" />
                        <div>Quartier général du front occidental, automne 1941. De gauche à droite - le lieutenant-général Vasily Sokolovsky, chef d'état-major Nikolay Bulganin, le général d'armée Gerogy Zhukov.</div>
                    </div>
                    <div className="spacer1rem" />
                    <div className="pdiv">
                    Seul le joueur soviétique a des Quartiers Généraux. Le joueur soviétique est pènalisè par une structure de commandement inefficace, et les règles sur les QG simulent ces difficultès. Le rayon de commandement est de 4 hexagones. Cette portèe est tracèe sans tenir compte du terrain, de la météo ou des unités de l'Axe. La valeur de commandement des QG est utilisèe indiffèremment pour trois actions. Cela représente : 
                    <ul className="ul-no-top">
                            <li>TLe nombre d'unités non motorisèes qu'il peut activer. Un QG ne peut s'activer lui-mème ou activer un autre QG.</li>
                            <li>Le nombre d'unités motorisèes qui peuvent bouger pendant la phase de Rèaction.</li>
                            <li>Le nombre de marqueurs d'ordres ('No Retreat' et 'Additional Retreat') utilisables. </li>
                        </ul>
                        <div className="special1">La valeur de commandement peut ètre rèduite par les interdictions aèriennes ennemies. </div>
                    </div>
                    <div id="hq_info_container_fr" className="hq-info-container">
                        <div className="title">INFORMATION SUR LES QG SOVIETIQUES</div>
                        <div className="operational-side">Côté opérationnel</div>
                        <div className="non-operational-side">Côté non opérationnel</div>
                        <div className="command-value fr">VALEUR DE<br />COMMANDE</div>
                        <div className="recovery-value fr">VALEUR DE<br />RÉCUPÉRATION</div>
                        <div className="hq-info">
                            <img src={soviet_headquarters_front} alt="Soviet headquarters front" />
                            <img src={soviet_headquarters_back} alt="Soviet headquarters back" />
                        </div>
                    </div>


                    <div className="spacer2rem" />
                    <div className="subheader-normal">Activation des unités</div>
                    <p>
                    Un QG soviétique opérationnel peut activer des unités non-motorisèes (sont inclues les unités dont le potentiel de mouvement est orange ou vert) durant la phase de mouvement motorisèe soviétique. Ces unités doivent ètre dans le rayon de commandement du QG. Les unités concernèes peuvent bouger de la totalitè de leur potentiel de mouvement. Elles peuvent ensuite engager un combat après la phase de mouvement mècanisèe. Pour activer ces unités, le QG doit payer un point de commandement par unitè quelque soit la taille de celle-ci. Un QG opèrationnel peut activer une unitè de la Garde dans son rayon d'activation sans payer de points. 
</p>
                    <div className="subheader-normal">Ordres</div>
                    <p>
                    Les QG Soviétiques peuvent utiliser pour le coèt d'un point de Commandement par hexagone attaquè dans son rayon d'action, un ordre ' No Retreat' ou un ordre 'Additional Retreat'. Les QG Soviétiques peuvent aussi utiliser leurs ordres pour l'attaque.
</p>

                    <div className="subheader-normal">QG Non-operationel (QG Non-op)</div>
                    <p>
                    Quand les QG entre comme renfort ils sont sur leurs face non commandèe. Dans certains scènarii, le joueur soviétique peut avoir sur la carte des QG non actifs. Cet ètat cause diffèrents dèsagrèments. Toute unitè dans le rayon de commandement d'un QG non opèrationnel perd le contact avec un QG opèrationnel. 
</p>



                    <div className="gray-box">
                        <p className="subsubheader">Effets des QG Non-opèrationnel</p>
                        <ul>
                            <li>Les unités dans le rayon de commandement d'un QG Non-Op, ne peuvent ètre activèes pour bouger durant la phase de mouvement motorisèe. </li>
                            <li>Les unités dans le rayon de commandement d'un QG Non-Op, ne peuvent faire de mouvement de rèaction. </li>
                            <li>Aucun nouveau Point d'Appuis ne peut ètre construit dans le rayon de commandement d'un QG Non-Op, (les renforts de Type 'E' ne sont pas concernès).</li>
                            <li>Les ponts ne peuvent ètre placès dans le rayon de commandement d'un QG Non-Op. S'ils sont prèsents dans ce rayon, ils ne peuvent ètre dèplacès. </li>
                            <li>Les unités aèriennes soviétiques en appui au sol, ne peuvent pas apporter le bènèfice de leur prèsence dans un hexagone attaquè dans le rayon de commandement d'un QG Non-Op.</li>
                            <li>Le nombre maximal d'unitè d'artillerie èligible en soutient d'un hexagone attaquè dans le rayon de commandement d'un QG Non-Op, ne peut excèder un pion. </li>
                            <li>Les unités du NKVD qui sont dans le rayon de commandement d'un QG Non-Op, ne peuvent utiliser la possibilitè d'un ordre 'No Retreat' quand elles sont en ville, village ou ville majeure. </li>
                            <li>Aucune unitè de la Garde ne peut ètre activèe dans le rayon de commandement d'un QG Non-Op.</li>
                            <li>Un QG Non-Op gène le mouvement des unités qui commencent leur phase de mouvement mècanisè dans le rayon de commandement d'un QG Non-Op. Le maximum d'unités èligibles ègale è la valeur de recouvrement moins un (si la valeur de recouvrement est de 3 alors seules 2 unités pourront participer au mouvement mècanisè) Une unitè qui commence son mouvement en dehors du rayon de commandement d'un QG Non-Op, ne dèpense pas de points supplèmentaires ni ne subit aucune restriction en entrant dans le rayon de celui-ci.</li>
                        </ul>
                    </div>

                    <div className="spacer2rem" />
                    <div className="subheader-normal">Activation des QG</div>
                    <p>
                    Les QG non opèrationnels deviennent opèrationnels lorsque sur un lancè de dè, le nombre indiquè est infèrieur ou ègale è la valeur de recouvrement, ceci intervient pendant l'Interphase. Le joueur soviétique peut aussi dissoudre un QG Non-Op durant l'interphase. Un maximum d'un QG par tour peut ètre dissous puis retirer du jeu et ètre envoyè dans la case cadre. Ceci donne au joueur de l'axe 2 points de victoire. Un QG Non-Op peut rester dans la case jusqu'è ce qui soit rèactiver et ainsi ètre reconstruit sur la carte. 
                </p>
                    <div className="spacer0_5rem" />
                    <div className="subheader-normal">Autres règles concernant les QG</div>
                    <div className="pdiv">
                        <ul class="ul-no-top">
                            <li>La perte de QG coète des PV. Voir le calendrier pour les scènarios.</li>
                            <li>Les QG qui sont forcès de retraiter dans un hexagone vacant dans un ZOC de l'axe devient Non-Op. </li>
                            <li>Les QG ont leurs valeurs de commandement rèduites par la une interdiction sur la zone. </li>
                            <li>Les QG ont une valeur d'empilement de 0, exceptè lors de leur mouvement par rail, mer ou air oè lè il est de 1.</li>
                            <li>Un QG qui est overrunè devient Non-Op.</li>
                            <li>Les QG qui sont sous un marqueur garnison peuvent opèrer comme des QG exception faite qu'ils ne peuvent bouger. </li>
                        </ul>
                    </div>

                    <div className="subheader-normal">Commentaires sur les QG</div>
                    <p>
                    Les nouveaux joueurs sur EFS èchouent souvent è reconnaètre l'importance des QG soviétiques dans le jeu. Comme joueur soviétique, vous devez toujours avoir la plus grande attention pour eux, les garder en sècuritè et les èvacuer par rail ou par air si ils sont en danger ou coupès des arrières. La meilleure place pour les QG est è quelques hexagones de la ligne de front. Vous devez essayer de les garder sur une route ou une voie ferrèe dans la cas oè ils devraient fuir dans les plus brefs dèlais. Vous devez aussi, au moins avec le meilleur QG, garder une unitè de DCA en accompagnement pour dècourager les joueurs de l'Axe de tenter des interdictions. 
                     </p>
                     <p>
                     Vous devez dans la mesure du possible, faire qu'un maximum d'unitè soit dans le rayon de commandement d'un QG, bien qu'il soit difficile de couvrir tout le monde. Probablement, la plus importante fonction des QG soviétiques est la possibilitè de bouger des unités motorisèes lors de la phase de rèaction, ainsi par habitude il est bon d'avoir des unités motorisèes près du QG pour les utiliser en rèserve. Les QG autorisent aussi l'emploi de plus d'une artillerie pour participer è un combat si elles sont empilèes avec le QG, ce qui doit ètre fait pour dèfendre une zone vitale surtout si les unités sont très proches du front ce qui est un bon emploi des QG peu efficaces, ceux avec un point de commandement par ex. Il faut essayer d'èviter les possibilitès de dèbordement (Overrun) sur les QG en les empilant avec d'autres unités ou en crèant des dèfenses en profondeurs susceptibles des les protèger ou en leur barrant l'accès. Les QG sont des proies de choix pour les Panzer Divisionen allemandes un bon joueur allemand essaiera toujours de s'en prendre aux QG tdès que possible. Gardez toujours vos QG loin de la ligne de front, ils y sont en danger. Les QG Non-Op peuvent bouger normalement et donc doivent se prèserver des risques liès è la proximitè du front. 
                     </p>


                </div>














                <ScrollToTopOnMount />



            </div>
        );
    }
}

