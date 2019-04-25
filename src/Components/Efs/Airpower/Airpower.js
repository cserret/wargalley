import React, { Component } from 'react';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
import il2_squadron from "../../../images/efs/airpower/il2_squadron.jpg";
import hs129B from "../../../images/efs/airpower/hs129B.png";
import dogfight from "../../../images/efs/airpower/dogfight.jpg";
import aircombat_ex1 from "../../../images/efs/airpower/aircombat_ex1.gif";
import aircombat_ex2 from "../../../images/efs/airpower/aircombat_ex2.gif";
import aircombat_ex3 from "../../../images/efs/airpower/aircombat_ex3.gif";
import aircombat_ex4 from "../../../images/efs/airpower/aircombat_ex4.gif";
import sovietantiair from "../../../images/efs/airpower/sovietantiair.jpg";
import interdiction from "../../../images/efs/airpower/interdiction.jpg";
import cas from "../../../images/efs/airpower/cas.jpg";
import ju87 from "../../../images/efs/airpower/ju-87.gif";
import stuka from "../../../images/efs/airpower/stuka.jpg";
import bf109_counter from "../../../images/efs/airpower/bf109.gif";
import bf109 from "../../../images/efs/airpower/bf109.jpg";
import bf110_counter from "../../../images/efs/airpower/bf110.gif";
import bf110 from "../../../images/efs/airpower/bf110.jpg";
import db3_counter from "../../../images/efs/airpower/db3.gif";
import db3 from "../../../images/efs/airpower/db3.jpg";
import do17_counter from "../../../images/efs/airpower/do-17.gif";
import do17 from "../../../images/efs/airpower/pencil.jpg";
import he111_counter from "../../../images/efs/airpower/he-111.gif";
import he111 from "../../../images/efs/airpower/he-111.jpg";
import i16_counter from "../../../images/efs/airpower/i-16.gif";
import i16 from "../../../images/efs/airpower/i-16.jpg";
import i153_counter from "../../../images/efs/airpower/i-153.gif";
import i153 from "../../../images/efs/airpower/i-153.jpg";
import il2_counter from "../../../images/efs/airpower/il-2.gif";
import il2 from "../../../images/efs/airpower/il-2.jpg";
import ju88_counter from "../../../images/efs/airpower/ju-88.gif";
import ju88 from "../../../images/efs/airpower/ju-88.jpg";
import mig3_counter from "../../../images/efs/airpower/mig-3.gif";
import mig3 from "../../../images/efs/airpower/mig3.jpg";
import pe2_counter from "../../../images/efs/airpower/pe2.gif";
import pe2 from "../../../images/efs/airpower/pe-2.jpg";
import sb2_counter from "../../../images/efs/airpower/sb-2.gif";
import sb2 from "../../../images/efs/airpower/sb-2.jpg";
import su2_counter from "../../../images/efs/airpower/su-2.gif";
import su2 from "../../../images/efs/airpower/su-2.jpg";
import tb3_counter from "../../../images/efs/airpower/tb3.gif";
import tb3 from "../../../images/efs/airpower/tb3.jpg";
import yak1_counter from "../../../images/efs/airpower/yak-1.gif";
import yak1 from "../../../images/efs/airpower/yak-1.jpg";
import romanian_iar80 from "../../../images/efs/airpower/romanian_iar80.png";
import iar80 from "../../../images/efs/airpower/iar_80.png";
import romanian_potez63 from "../../../images/efs/airpower/romanian_potez63.png";
import potez631 from "../../../images/efs/airpower/potez631.jpg";
import romanian_pzl11 from "../../../images/efs/airpower/romanian_pzl11.png";
import pzl11 from "../../../images/efs/airpower/pzl11.jpg";
import romanian_pzl37 from "../../../images/efs/airpower/romanian_pzl37.png";
import pzl37 from "../../../images/efs/airpower/PZL-37.jpg";
import romanian_sm79 from "../../../images/efs/airpower/romanian_sm79.png";
import sm79 from "../../../images/efs/airpower/SM_79.jpg";

import './Airpower.scss';

class Airpower extends Component {

    state = {
        contextDrawnEN: false,
        contextDrawnFR: false
    }

    componentDidMount = () => {
        console.log('this.props: ', this.props);
        this.drawCanvas(this.props.language);
    }

    componentWillReceiveProps = (props) => {
        console.log('componentWillReceiveProps: ', props);
        this.drawCanvas(props.languag);
    }


    drawCanvas = (language) => {
        var canvasDiv;
        var canvas;
        var ctx;
        var canvasAirDiv;
        var canvasAir;
       
        if (language === 'en' && this.state.contextDrawnEN === false) {
            canvasDiv = document.getElementById('unit_info');
            canvas = document.createElement('canvas');
            canvas.setAttribute('width', 800);
            canvas.setAttribute('height', 340);
            canvas.setAttribute('id', 'canvas');
            canvasDiv.appendChild(canvas);

            ctx = canvas.getContext("2d");

            ctx.strokeStyle = "#df4b26";
            ctx.lineJoin = "round";
            ctx.lineWidth = 5;
            ctx.lineCap = "round";

            ctx.beginPath();
            ctx.moveTo(200, 102);
            ctx.lineTo(310, 102);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(214, 225);
            ctx.lineTo(310, 198);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(214, 225);
            ctx.lineTo(310, 198);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(469, 105);
            ctx.lineTo(590, 105);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(414, 228);
            ctx.lineTo(414, 278);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(472, 191);
            ctx.lineTo(529, 231);
            ctx.stroke();


            canvasAirDiv = document.getElementById('air_combat_determination_container');
            canvasAir = document.createElement('canvas');
            canvasAir.setAttribute('width', 1100);
            canvasAir.setAttribute('height', 450);
            canvasAir.setAttribute('id', 'canvasAir');
            canvasAirDiv.appendChild(canvasAir);

            ctx = canvasAir.getContext("2d");

            ctx.strokeStyle = "#000000";
            ctx.lineJoin = "round";
            ctx.lineWidth = 2;

            ctx.beginPath();
            ctx.moveTo(600, 102);
            ctx.lineTo(600, 402);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(140, 142);
            ctx.lineTo(1060, 142);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(140, 142);
            ctx.lineTo(140, 359);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(370, 142);
            ctx.lineTo(370, 359);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(830, 142);
            ctx.lineTo(830, 359);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(1060, 142);
            ctx.lineTo(1060, 359);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(140, 358);
            ctx.lineTo(1060, 359);
            ctx.stroke();

            this.setState({contextDrawnEN: true});
        }






        if (language === 'fr' && this.state.contextDrawnEN === false) {
            canvasDiv = document.getElementById('unit_info_fr');
            canvas = document.createElement('canvas');
            canvas.setAttribute('width', 800);
            canvas.setAttribute('height', 340);
            canvas.setAttribute('id', 'canvas');
            canvasDiv.appendChild(canvas);

            ctx = canvas.getContext("2d");

            ctx.strokeStyle = "#df4b26";
            ctx.lineJoin = "round";
            ctx.lineWidth = 5;
            ctx.lineCap = "round";

            ctx.beginPath();
            ctx.moveTo(215, 102);
            ctx.lineTo(310, 102);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(270, 225);
            ctx.lineTo(310, 198);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(469, 105);
            ctx.lineTo(610, 105);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(414, 228);
            ctx.lineTo(414, 278);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(472, 191);
            ctx.lineTo(529, 231);
            ctx.stroke();


            canvasAirDiv = document.getElementById('air_combat_determination_container_fr');
            canvasAir = document.createElement('canvas');
            canvasAir.setAttribute('width', 1100);
            canvasAir.setAttribute('height', 450);
            canvasAir.setAttribute('id', 'canvasAir');
            canvasAirDiv.appendChild(canvasAir);

            ctx = canvasAir.getContext("2d");

            ctx.strokeStyle = "#000000";
            ctx.lineJoin = "round";
            ctx.lineWidth = 2;

            ctx.beginPath();
            ctx.moveTo(600, 102);
            ctx.lineTo(600, 402);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(140, 142);
            ctx.lineTo(1060, 142);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(140, 142);
            ctx.lineTo(140, 359);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(370, 142);
            ctx.lineTo(370, 359);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(830, 142);
            ctx.lineTo(830, 359);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(1060, 142);
            ctx.lineTo(1060, 359);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(140, 358);
            ctx.lineTo(1060, 359);
            ctx.stroke();

            this.setState({contextDrawnFR: true});
        }







    }

    render = () => {
        return (
            <div className="content">
                <span className={this.props.language === 'en' ? '' : 'block-hidden'}>
                    <div className="content-title">
                        <div>AIRPOWER</div>
                        <div></div>
                    </div>

                    <div className="generic-flex-space-around airpower">
                        <img src={il2_squadron} alt="il-2 squadron" />
                    </div>
                    <div className="spacer1rem" />
                    <p>
                        Airpower is abstracted in the EFS system. There are no airfields. Airpower is allocated per map according to the scenario allotment. Each player gets "air units" that are differentiated by the predominant plane model in that group of planes the counter represents. They are also marked with the predominant type of plane they are, either Fighter (F), Fighter-Bomber (FB), or Bomber (B). For air units to actually go on the map to do something, they need to be in a "ready" state. There are four states an air unit can be in : "Destroyed", "Damaged", "Flown", and "Ready". Generally you try to get your air units up into the Ready box so that they can fly onto the map and do missions.
                </p>
                    <p>
                        The missions your air units can participate in are Interdiction (German only) or Combat Air Support. Planes can also do combat against each other, although this isn't strictly termed a "mission", more like an "accident on the way to do a mission", or "guess who I ran into on my way to the mission". There are no Combat Air Patrol or Bombardment missions in standard EFS (although there are some special bombardment rules available for AGN that I don't cover here). The Air Combat Table is a simple ratio table. For example a German Bf109 with a combat rating of 3 going up against a Pe-2 with a rating of 2 will roll on the +1 column. If the Pe-2 can fire back, it will be on the -1 column.
                </p>
                    <p>
                        Note that there are "advanced" air rules available. This page does not cover those, it only gives an overview of the standard EFS air rules.
                </p>
                    <div className="spacer1_5rem" />
                    <div id="unit_info" className="unit-info">
                        <div className="title">AIRCRAFT UNIT INFORMATION</div>
                        <img src={hs129B} alt="airunit counter info" />
                        <div className="model">AIRCRAFT<br />MODEL</div>
                        <div className="rating">AIR COMBAT<br />RATING</div>
                        <div className="type">TYPE<br />B = BOMBER<br />F = FIGHTER</div>
                        <div className="close">CLOSE AIR SUPPORT</div>
                        <div className="interdiction">INTERDICTION</div>
                    </div>

                    <div className="spacer1_5rem" />
                    <p>
                        Air units do not have steps. They may get damaged, or get eliminated due to combat or flak. Since each air unit counter represents 40-80 planes each, it isn't practical to track single airplane losses. What is represented when an air unit is damaged or destroyed is really the attrition air units suffer through a series of missions. Replacements or reinforcements of air units do not come often for either side. They may come in on the setup chart during later turns in a scenario, or, for the Soviets, they may get an air replacement through a good roll on the Replacements table.
                </p><p>
                        In EFS the Germans have what can be considered "Air Superiority". They can pretty much do any mission they want, while the Soviets have to be careful. If the Soviet player is aggressive and eager to go "toe to toe" with German fighters every turn, the Soviet Airforce will be extinct by the middle of the scenario. But the Soviet should not be so timid as to never "go to air" for fear of losing air units. The correct path is somewhere in the middle. Often enough so the German player never gets too confident and sends bombers out without fighter cover, and to get the German player to always hold back aircraft to counter any Soviet combats. Note that the Soviet sometimes gets to replace lost air units through the Replacement Table, while the German doesn't, so a air unit loss isn't "as bad" to the Soviet as it is to the German. Once a German player loses, say, a valuable Ju-88 - thats it! Its gone for the rest of the game. Its customary for the German player to sink into his seat and mumble a German curse when this happens. The air combat table is a simple ratio table that favors of course the higher columns, but even at -3 the Soviet can get a good result.
                </p>

                    <div className="spacer1_5rem" />
                    <div className="subheader-normal">Air Missions</div>
                    <p>
                        Each air unit that is in the Ready box can do 1 mission in a turn. German units can do Interdiction and Combat Air Support (CAS). Soviets can do CAS only. A maximum of three air units may participate in a single CAS or Interdiction mission, and a single hex can only be the target of one Interdiction mission or a CAS mission (per player) per phase. There can be "two" CAS missions to the same hex, provided its a German CAS Mission and a Soviet CAS Mission. There are no range considerations (except for some scenarios with special rules). Air units sent on a "Mission" may end up foregoing the mission to do air combat. Typically a German player will send one or two bombers for CAS with a fighter or two to provide "cover" for the bombers in case enemy fighters show up. If no enemy fighters show up, then the fighter, if it has a CAS rating, can participate with the bombers in the CAS mission.
                </p>
                    <p>
                        A <span className="blue-bold">Interdiction Mission</span> is an attempt by the German player to increase movement costs for the Soviet player in a hex and its surrounding 6 hexes, and to decrease the command points of Soviet Headquarters.
                </p>
                    <p>
                        A <span className="blue-bold">CAS Mission</span> is an attempt to provide favorable die roll modifiers to a ground combat. Both sides may attempt CAS Missions to any hex that has a Declared Combat marker on it. Of course both players may decide to do CAS on the same hex (which happens often).
                </p>
                    <p>
                        The Soviet player can oppose German Interdiction missions by sending fighters to the Interdiction Mission hex in hopes of causing air-to-air combat.
                </p>
                    <p>
                        A player may do "CAS" with the only real purpose of provoking air-to-air combat. This can happen if, for example, the Soviet player sends two MiG-3 units (with no CAS ratings) on a CAS Mission solely to oppose the enemy's CAS Mission to the same hex. And since you're allowed up to three air units on a mission, you can send a mix of fighters and bombers - the bombers to do CAS and the fighters to provoke (or defend against) air-to-air combat.
                </p>
                    <p>
                        The phasing player always places air units face down on mission hexes first. Then the non-phasing player can make a decision to send CAS missions or oppose Interdiction Missions. In the case of Interdiction Missions, the Soviet player can only send air units to the mission hex declared by the German player in an attempt to do air-to-air combat. In the case of CAS, the non-phasing player can send units to any hex with a Declared Combat marker on it (which may or may not have enemy planes doing CAS on it too). If you only want to attempt air-to-air combat to try to get the enemy to abort on CAS, then you could just send fighters to Declared Combat hexes with an enemy CAS Mission on it - basically a CAS Mission with no bombs.
                </p>

                    <div className="spacer2rem" />
                    <div className="subheader-image stalin">
                        <div>Air Combat</div>
                        <img src={dogfight} alt="dogfight" />
                    </div>
                    <div className="spacer1rem" />
                    <p>
                        When players send air units to the same hex, air combat may occur. The phasing player rolls on the Air Initiative Table to find out if there is air-to-air combat, and if so then which side gets the "initiative". When the players are ready, both sides turn over the air units from their hidden sides to their info sides. Then the players must decide which air units are "Mission" units, and which will conduct air-to-air combat - the so-called "firing" units. Bomber "B" air units MUST be "Mission" units. Fighter "F" and Fighter-Bomber "FB" air units can be freely assigned as "Mission" units or "Firing" units. <span className="b">The phasing player always makes the decision first</span>. Units that become "firing" units basically abort on whatever mission they may have been planning, and become capable of firing upon enemy planes. Air units that remain Mission units cannot fire back during air-to-air combat, but may be fired upon by enemy firing units.
                </p>

                    <div id="air_combat_determination_container" className="air-combat-determination-container">
                        <div id="air_combat_determination" className="air-combat-determination">
                            <div className="title">Air Combat Determination</div>
                            <div className="roll-on">Roll on Air Initiative Table</div>
                            <div className="row">
                                <div className="air-gray-box">Axis Local<br />Tactical Advantage</div>
                                <div className="air-gray-box">Axis<br />Initiative</div>
                                <div className="air-white-box">No<br />Air Combat</div>
                                <div className="air-orange-box">Soviet<br />Initiative</div>
                                <div className="air-orange-box">Soviet Local<br />Tactical Advantage</div>
                            </div>
                            <div className="row">
                                <div className="air-gray-box">Axis<br />Free Attack</div>
                                <div className="air-empty-box"> </div>
                                <div className="air-empty-box"> </div>
                                <div className="air-empty-box"> </div>
                                <div className="air-orange-box">Soviet<br />Free Attack</div>
                            </div>
                            <div className="end-box">
                                Surviving firing units go to Flown boxes.<br />
                                AA Fire is conducted against surviving mission units, if AA Fire is available.<br />
                                Surviving mission units conduct their mission.
                    </div>
                        </div>
                    </div>

                    <div className="pdiv">
                        <div className="air-explanations">
                            <div>No Air Combat:</div>
                            <div><ol>
                                <li>All Firing air units return to Flown box.</li>
                                <li>Mission units continue</li>
                            </ol>
                            </div>
                        </div>

                        <div className="air-explanations">
                            <div>Initiative or Local Tactical Advantage:</div>
                            <div><ol>
                                <li>Player who has the Initiative or Local Tactical advantage selects which friendly air units attack which enemy air units. All enemy firing units must be engaged by a friendly firing unit before attacking any mission units. If there are any left over friendly firing units, they can gang up on any enemy air units. Air units that are attacked by more than one air unit can only fire back at the first one.
                                </li>

                            </ol>
                            </div>
                        </div>

                        <div className="air-explanations">
                            <div>Axis/Soviet Free Attack:</div>
                            <div><ol>
                                <li>Free Attack player fires again with their aircraft which are still active, if there are defending aircraft that are still active.</li>
                                <li>Defending player does not fire back</li>
                            </ol>
                            </div>
                        </div>
                    </div>

                    <div className="subheader-normal">Air sequence example</div>
                    <div className="pdiv">
                        <div className="air-combat-example">
                            <div>
                                <p>
                                    It is the Soviet turn, and the Soviet player has flown a CAS mission to a Declared Combat hex.
                            </p><p>
                                    The Soviet player has sent two bombers and a fighter on this mission.
                            </p><p>
                                    The German player decides to send a CAS mission also to the same Declared Combat hex.
                        </p><p>
                                    The German player has sent two fighters.
                            </p>
                            </div>
                            <div>
                                <img src={aircombat_ex1} alt="air combat example 1" />
                            </div>
                        </div>
                    </div>


                    <div className="pdiv">
                        <div className="air-combat-example">
                            <div>
                                <p>

                                    The Soviet decides to make the I-153 a "firing" unit, and the two bombers have to be "mission" units. ("B" types always have to be declared "mission" units).
                            </p><p>
                                    The German decides to make both his units "firing" units.
                            </p><p>
                                    The Soviet player rolls on the Air Initiative Table.
                        </p><p>
                                    The German player has the initiative, so the German gets to assign who fights who. The Bf109 is assigned to attack the I-153 firing unit (firing units must be attacked before mission units). The Bf110 is assigned to attack the IL-2 bomber.
                            </p>
                            </div>
                            <div>
                                <img src={aircombat_ex2} alt="air combat example 2" />
                            </div>
                        </div>
                    </div>


                    <div className="pdiv">
                        <div className="air-combat-example">
                            <div>
                                <p>

                                    The first combat the German player decides to do is the one between the Bf109 and the I-153. The Bf109 has an Air Rating of 4. The I-153 has an Air Rating of 1. The German rolls on the +3 column of the Air Combat Table. The roll is a 4 - the I-153 is Destroyed. The I-153 gets to fire back (air combat is simultaneous). The Soviet player rolls on the -3 column. The I-153 gets lucky and rolls a 1 - the Bf109 is Aborted.
                            </p><p>
                                    Now the German player goes to the next combat. The Bf110 has an Air Rating of 2. The IL-2 has a Air Rating of 1. The German rolls on the +1 column. The roll is a 5 - the IL-2 is Aborted. The IL-2 cannot fire back as it is a "Mission" unit.
                            </p><p>
                                    The Bf109 goes back to the Axis Flown Box. The I-153 goes to the Soviet Destroyed Box. The IL-2 goes back to the Soviet Flown Box.
                        </p>
                            </div>
                            <div>
                                <img src={aircombat_ex3} alt="air combat example 3" />
                            </div>
                        </div>
                    </div>


                    <div className="pdiv">
                        <div className="air-combat-example">
                            <div>
                                <p>

                                    If the Air Initiative roll had only been Axis Initiative, then the Bf110 would also go back to the Axis Flown Box. However, the result was Axis Initiative, Axis Local Tactical Advantage. So the Bf110, since it did not get hit by any result on the Air Combat Table in the first round, can now continue on and attack another enemy air unit. So the Bf110 now attacks the SB-2. The SB-2 cannot fire back, regardless if it is a Mission or Firing unit.
                            </p><p>
                                    If after this attack the SB-2 survives the attack with no result, then it can continue on with its mission. The Bf110 goes back to the Axis Flown Box after this second round regardless of what the result is.
                            </p>
                            </div>
                            <div>
                                <img src={aircombat_ex4} alt="air combat example 4" />
                            </div>
                        </div>
                    </div>




                    <div className="spacer3rem" />
                    <div className="subheader-image antiair">
                        <div>AA Fire</div>
                        <img src={sovietantiair} alt="Soviet anti-air" />
                    </div>
                    <div className="spacer1rem" />
                    <p>
                        Surviving Mission Units have to survive AA Fire (sometimes called the inaccurate, but shorter, term "Flak") before they can accomplish their mission. AA Fire can occur if there are qualifying enemy ground units in either the hex the Mission Units are doing their mission on, or in any of the 6 surrounding hexes. Both Axis and Soviets can fire AA Fire in either player turn.
                </p>

                    <div className="pdiv">
                        To qualify for AA Fire -
                <div className="spacer0_5rem" />
                        <div className="subheader-normal">
                            Axis:
                </div>
                        <ul className="ul-no-top-bottom">
                            <li>Any Axis ground units, except cavalry units and non-AA units with a No Zoc band (a yellow band across the top of the counter).</li>
                        </ul>
                        <div className="spacer0_5rem" />
                        <div className="subheader-normal no-top">
                            Soviet:
                </div>
                        <ul className="ul-no-top-bottom">
                            <li>All Soviet divisions except cavalry. Even divisions with step losses still qualify.</li>
                            <li>All Headquarters, activated or not.</li>
                            <li>AA units</li>
                            <li>Naval units, except flotillas.</li>
                        </ul>
                    </div>
                    <p>
                        If a player qualifies for firing AA Fire, then the player gets ONE shot at each Mission Unit (regardless of the number of qualifying AA Fire units). Note the important drms on the AA Fire Table. Air Units that get a result, even if it is only an Abort, fail to do their mission.
                </p>



                    <div className="spacer3rem" />
                    <div className="subheader-image antiair">
                        <div>Interdiction</div>
                        <img src={interdiction} alt="Interdiction" />
                    </div>
                    <div className="spacer1rem" />
                    <p>
                        A successful Interdiction Mission causes the target hex and the surrounding 6 hexes to become affected by Interdiction. Place an Interdiction Marker on the hex. Interdiction can be level 1 or level 2, depending on how many Interdiction hits came through on the mission. No more than 2 interdiction points can affect a hex. Interdiction does not cause step losses in EFS, but rather models the nuisance effects of interdiction. Interdiction forces the enemy to be more cautious in movement, and interferes with the ability of Soviet Headquarters to operate normally.
                </p>

                    <div className="gray-box">
                        <p className="subsubheader">Interdiction Effects</p>
                        <ul>
                            <li>Each interdicted hex costs flotillas 4 movement points.</li>
                            <li>No Air Transport can begin or end in a interdiction hex.</li>
                            <li>Each interdicted hex costs 12 rail movement points.</li>
                            <li>Soviet HQs have thir command value reduced by the interdiction level. (Note - they can walk out of the interdiction zone during the movement phase).</li>
                            <li>Only armored trains can begin rail movement in a Interdiction Hex.</li>
                            <li>Interdiction hexes do not affect normal movement, except that Strategic Movement cannot begin or pass through an interdiction hex.</li>
                            <li>Interdiction does not affect Combat.</li>
                        </ul>
                    </div>

                    <div className="spacer3rem" />
                    <div className="subheader-image antiair">
                        <div>Close Air Support (CAS)</div>
                        <img src={cas} alt="cas" />
                    </div>
                    <div className="spacer1rem" />
                    <p>
                        Successful CAS missions contribute their total CAS rating to the combat drms. If both players have successful CAS missions on a combat, then figure the net CAS result. Note that while Soviets are restricted in how many artillery units can participate in a combat, there is no restriction on how many Soviet air units can contribute in a CAS mission, other than the maximum 3 air unit limit on a mission in a hex. Also remember that the maximum drms that can be applied to a combat are +3 or -3. CAS values are not affected by terrain or weather.
                    </p>

                    <div className="pdiv">
                        <div className="subheader">Axis Aircraft in EFS</div>

                        <div className="generic-flex-space-start">
                            <img className="aircraft-counter" src={ju87} alt="ju-87" />
                            <div>
                                <div>Junkers Ju-87 "Stuka"</div>

                                The Stuka divebomber was probably the most distinctive airplane used during WW2. A heavily armoured two-seater, the plane was slow and lacked maneuverability, making it vulnerable to enemy fighters, but it was a very accurate bomber. There were various versions developed of this popular aircraft throughout the war. A very effective bomber when there were no enemy fighters around to attack it, which was often the case on the Eastern Front in 1941.
                            </div>
                            <img src={stuka} alt="Stuka" />
                        </div>


                        <div className="generic-flex-space-start dornier">
                            <img className="aircraft-counter" src={do17_counter} alt="Dornier 17Z" />
                            <div>
                                <div>Dornier 17Z "Pencil"</div>

                                Originally designed as a passenger/mail aircraft, the Luftwaffe selected it as a fast light bomber. Before the war the Do-17 was fast enough to outfly most fighters, but then newer fighters that appeared by 1940 could catch it. It suffered terribly in the Battle of Britain. Production of the Do-17 series ended in 1940, but the planes continued in service throughout the war.
                        </div>
                            <img src={do17} alt="Dornier 17Z" />
                        </div>



                        <div className="generic-flex-space-start heinkel">
                            <img className="aircraft-counter" src={he111_counter} alt="he 111" />
                            <div>
                                <div>Heinkel He 111</div>

                                Originally a twin-engine passenger aircraft, a powered up version was made for the Luftwaffe. It performed well in the Spanish Civil War, and entered WW2 as the main Luftwaffe bomber. It did poorly in the Battle of Britain, and the designers, handicapped by engine limitations, could not sufficiently improve on it. The Ju-88, a superior bomber, then started to roll off the production lines in significant numbers and production of the He 111 fell off.
                            </div>
                            <img src={he111} alt="Heinkel He 111" />
                        </div>





                        <div className="generic-flex-space-start">
                            <img className="aircraft-counter" src={ju88_counter} alt="Junkers Ju-88" />
                            <div>
                                <div>Junkers Ju-88</div>

                                The designers of this advanced twin-engine fast bomber included two American engineers, who were hired to help with advanced structural techniques. It was chosen for development by the Luftwaffe in 1935 as an advanced fast bomber, but due to poor project management was not produced in significant numbers until 1940. It was an excellent aircraft, fast, easy to fly and manueverable, but was cramped inside for the crew. It could carry a relatively heavy bomb load, with bombs carried internally and attached under the wings. Various versions were produced throughout the war, including night-fighter versions.
                            </div>
                            <img src={ju88} alt="Junkers Ju-88" />
                        </div>


                        <div className="generic-flex-space-start messerschmitt">
                            <img className="aircraft-counter" src={bf110_counter} alt="Messerschmitt Bf 110" />
                            <div>
                                <div>Messerschmitt Bf 110</div>
                                A heavy twin-engined plane, used variously as a fighter, night-fighter, fighter-bomber, bomber-interceptor, and escort fighter. Although not exceptional as a fighter, it's size and power enabled it to have impressive armament, including oblique firing cannons able to aim at targets above it.
                              </div>
                            <img src={bf110} alt="Messerschmitt Bf 110" />
                        </div>





                        <div className="generic-flex-space-start messerschmitt109">
                            <img className="aircraft-counter" src={bf109_counter} alt="Messerschmitt Bf 109" />
                            <div>
                                <div>Messerschmitt Bf 109</div>
                                The main Luftwaffe fighter, the Bf 109 exhibited excellent speed and manueverability. Seeing combat in the Spanish Civil War, the popular 109 was continously improved, with the model "E" starting mass production in 1939, and about 2000 were in operation in 1940. The only other fighter that could successfully engage the 109 on more or less equal terms was the British Spitfire. Soviet fighters fared poorly against the 109.
                              </div>
                            <img src={bf109} alt="Messerschmitt Bf 109" />
                        </div>
                    </div>

                    <div className="pdiv">
                        <div className="subheader">Soviet Aircraft in EFS</div>

                        <div className="generic-flex-space-start soviet sb2">
                            <img className="aircraft-counter" src={sb2_counter} alt="Tupolev SB-2 Katiuska" />
                            <div>
                                <div>Tupolev SB-2 Katiuska "Little Katie"</div>

                                Entering service in 1936, this twin-engine medium bomber was obsolete by 1940. Short ranged and capable only of small bomb loads, they were easily shot down and needed fighter escorts to survive missions. It has the dubious distinction of being the most shot down plane of WW2.
                            </div>
                            <img src={sb2} alt="Tupolev SB-2 Katiuska" />
                        </div>


                        <div className="generic-flex-space-start soviet">
                            <img className="aircraft-counter" src={tb3_counter} alt="Tupolev TB-3" />
                            <div>
                                <div>Tupolev TB-3</div>

                                The large four engine TB-3 started service in 1932. There were many versions and experimental prototypes developed, probably driven by the Soviet government's desire to impress the world. It could carry a bomb load of 1000 kg. but only at a speed of 200 km/h. In 1941 it was used in desperation as a bomber, and many were shot down. It proved to be a big fat easy target for enemy fighters, and the surviving planes were eventually transferred over to transport and paradrop duties.
                            </div>
                            <img src={tb3} alt="Tupolev TB-3" />
                        </div>



                        <div className="generic-flex-space-start soviet">
                            <img className="aircraft-counter" src={db3_counter} alt="Ilyushin DB-3" />
                            <div>
                                <div>Ilyushin DB-3 "Bob"</div>

                                1500 of these twin engine bombers were constructed between 1936-1939. Its construction, using tubes and U-beams, required significant amounts of labor. A good bomber for the 1930s, it was a useful workhorse, if not particularly outstanding, in 1941. In 1942 an improved model using more modern construction techniques and less labor was designated the IL-4.
                            </div>
                            <img src={db3} alt="Ilyushin DB-3" />
                        </div>

                        <div className="generic-flex-space-start soviet">
                            <img className="aircraft-counter" src={su2_counter} alt="Sukhoi SU-2" />
                            <div>
                                <div>Sukhoi SU-2</div>

                                The SU-2 entered service in 1940 as a light bomber, after a tumultuous series of design changes. Even during its main production period of 1940-41, changes continued to be applied to the aircraft, including various engines and armament layouts. It was built out of a combination of metal and wood. The plane suffered badly against German fighters, and production was halted in 1942. About 900 of the planes had been built.
                            </div>
                            <img src={su2} alt="Sukhoi SU-2" />
                        </div>


                        <div className="generic-flex-space-start soviet">
                            <img className="aircraft-counter" src={pe2_counter} alt="Petlyakov Pe-2" />
                            <div>
                                <div>Petlyakov Pe-2</div>
                                A fast twin-engine bomber, the Germans often had difficulty catching up with this plane. Pilots of the Pe-2 found the plane a bit tricky to control, but once they became used to it they could give the German 109s a hard time. The Soviets, recognizing the worth of the Pe-2, put in extra effort to train Pe-2 pilots, including making a two-seater training version to help keep new pilots from crashing.
                            </div>
                            <img src={pe2} alt="Petlyakov Pe-2" />
                        </div>

                        <div className="generic-flex-space-start soviet">
                            <img className="aircraft-counter" src={il2_counter} alt="Ilyushin-2 Shturmovik" />
                            <div>
                                <div>Ilyushin-2 Shturmovik</div>
                                The Ilyushin-2 Shturmovik ground-attack aircraft was one of the best aircraft designs of the war. Designed in 1938, it entered production in 1941. It was well armed with twin 7.62 machineguns, 8 rockets under the wings, and bombs in the bomb bays, and given exclusive access to the best aircraft engine produced by the Soviets (killing off the MiG-3 production lines, which needed that engine). It was well armored and sustained damage well. After the shock of German invasion, Stalin issued urgent orders to immediately ramp up production of the IL-2.
                            </div>
                            <img src={il2} alt="Ilyushin-2 Shturmovik" />
                        </div>

                        <div className="generic-flex-space-start soviet">
                            <img className="aircraft-counter" src={i16_counter} alt="Polikarpov I-16 Ishak" />
                            <div>
                                <div>Polikarpov I-16 Ishak "Rata"</div>
                                Aircraft designers Dmitri Grigorovich and Nikolai Nikolayevich Polikarpov labored in prison to develop a new Soviet fighter in 1933. The result, a very short plane with alarmingly dangerous stability problems, proved to be a very capable fighter with a well trained pilot. By 1941 it was the main Soviet fighter. It was no match for the Bf109, but because of the efficiency of production of this plane in 1941 and the desperate need for fighters, production continued into the war, with over 8000 made. Due to the structural strength of the Rata, pilots began using the Rata for ramming German planes, a tactic the Germans found very disconcerting.
                            </div>
                            <img src={i16} alt="Polikarpov I-16 Ishak" />
                        </div>

                        <div className="generic-flex-space-start soviet">
                            <img className="aircraft-counter" src={i153_counter} alt="Polikarpov I-153 Chiaka" />
                            <div>
                                <div>Polikarpov I-153 Chiaka "Seagull"</div>
                                Developed in 1933, this bi-plane was very manueverable and actually quite fast for a bi-plane, and improved in a 1939 Chiaka version. But it had limited ceiling, and the pilot had a very limited view. The age of the monoplane had come and the bi-plane lost its standing as a viable fighter. Production was discontinued at the end of 1940.
                            </div>
                            <img src={i153} alt="Polikarpov I-153 Chiaka" />
                        </div>


                        <div className="generic-flex-space-start soviet">
                            <img className="aircraft-counter" src={yak1_counter} alt="Yak-1" />
                            <div>
                                <div>Yak-1</div>
                                With an emphasis on simplicity, the small and nimble Yak-1 suffered from light armament. Early versions that were produced in 1940 had various problems, but the plane was constantly improved and in 1941 it was fitted with a better engine and modified weaponry. The best pilots were assigned to Yaks, who were able to make the most out of the performance of the little plane with a single machine gun. Although it could carry bombs under the wings, it usually didn't since its performance was poor with the added weight.
                            </div>
                            <img src={yak1} alt="Yak-1" />
                        </div>


                        <div className="generic-flex-space-start soviet">
                            <img className="aircraft-counter" src={mig3_counter} alt="MiG-3" />
                            <div>
                                <div>MiG-3 (Mikoyan-Gurevich)</div>
                                German Bf109 pilots were shocked when they ran into the new MiG-3 fighter in 1941. Powered by an inline engine, the MiG-3 was very comparable to the Bf109. At lower altitudes and slower speeds, the Bf109 held the edge in manueverability, but at higher altitudes and higher speeds the situation reversed, and the MiG-3 became the superior fighter. However, the air war in the East was primarily a low altitude affair since most air missions revolved around ground support, and the Bf109 maintained a favorable kill ratio against the MiG-3. In late 1941, Stalin killed the MiG-3 production effort by ordering that the advanced engine used by the MiG-3 be diverted 100% to the IL-2 bomber. Attempts to use a radial engine for the MiG-3 were not successful.
                            </div>
                            <img src={mig3} alt="MiG-3" />
                        </div>

                    </div>



                    <div className="pdiv">
                        <div className="subheader">Romanian Aircraft in EFS</div>

                        <div className="generic-flex-space-start romanian iar80">
                            <img className="aircraft-counter" src={romanian_iar80} alt="IAR-80" />
                            <div>
                                <div>IAR-80</div>
                                In 1930 the Romanian government issued specifications for a new fighter. The Industria Aeronautică Română (IAR) provided their prototypes,
                                but lost the competition to the Polish PZL P.11. However, the IAR continued working on their prototypes, and demonstrated the IAR-80 Fighter to the government
                                in 1939. Its performance was impressive enough to garner a contract for 100 IAR-80s in December 1939, soon followed by a contracts for many more over the 
                                following years for a total of 346. The plane used a 14 cylinder radial piston engine and was armed with four 7.92mm FN machine guns in the wings.
                                A Luftwaffe pilot who test flew the IAR-80 concluded that, while not as manueverable as the German BF-109E, it was nevertheless an adequate fighter.

                                </div>
                            <img src={iar80} alt="IAR-80" />
                        </div>


                        <div className="generic-flex-space-start romanian potez63">
                            <img className="aircraft-counter" src={romanian_potez63} alt="Potez 63" />
                            <div>
                                <div>Potez 63</div>
                                    Potez 63 was the overall designation for a series of aircraft designed by the Potez company in France, although in 1936 the company was absorbed
                                    into the National Aircraft Construction Company of the North (SNCAN). These twin engined planes were made for fighter, bomber, and reconnaissance roles.
                                    These planes had a resemblance to the
                                    German BF-110, but lacked performance. However manueverability was good and this enabled pilots to often survive dogfights. 
                                    The Potez aircraft were obsolete by the start
                                    of the war, but were purchased by many countries in Europe including France, Germany, Hungary, Italy, Poland, Switzerland, Yugoslavia, and Romania.
                                </div>
                            <img src={potez631} alt="Potez 63" />
                        </div>



                        <div className="generic-flex-space-start romanian pzl11">
                            <img className="aircraft-counter" src={romanian_pzl11} alt="PZL P.11" />
                            <div>
                                <div>PZL P.11</div>
                                The Warsaw based PZL aircraft manufacture designed in the late 1920s, and production of the P.11 Figher began in 1931. It was very advanced at the time, as it used
                                an all-metal structure and skin. It had two 7.92mm machine guns mounted on the sides of the fuselage. The engine was mounted on rubber 
                                vibration absorbers and 
                                the undercarriage and tail skid were mounted on pneumatic shock absorbers. Using a single "gull" wing that was highly aerodynamically efficient, it soon became 
                                popularized as the "Polish Wing" or the "Puławski wing" (after the designer). Later models added another pair of machineguns fixed onto the wings.
                                 Romania was an eager buyer of these planes, and the IAR started
                                their own production line under license, calling their version the IAR P.11f, using the IAR's own 9Krse engine.
                                Performance of the plane in dogfights was surprising good, despite being outclassed by modern fighters in most aspects. 
                                It was claimed that its manuverability was limited only by the ability of the pilot to resist g-forces. In the Polish campaign, the P.11 
                                proved to be a tough opponent for the German fighters, and although the P.11 suffered severe losses, they took down many German fighters with them. 
                             </div>
                            <img src={pzl11} alt="PZL P.11" />
                        </div>

                        <div className="generic-flex-space-start romanian pzl37">
                            <img className="aircraft-counter" src={romanian_pzl37} alt="PZL.37 Łoś" />
                            <div>
                                <div>PZL.37 "Łoś"</div>
                                The Polish PZL.37 Łoś (Moose) made a splash in 1936 as the best medium bomber ever designed at the time. It was slightly narrower than other
                                medium bombers, but because of this was faster and easier to handle, and gained a reputation of being very reliable. It could carry a
                                relatively heavy bomb load - but the bombs had to be of a specialized shape in order to fit. The fuselage of the plane
                                was aerodynamically designed to add lift - one of the first plane designs to do so. Its retractable wide wheel carriage, 
                                with doubled wheels, allowed it to take off and land on rough air strips or even fields and meadows. It had 3 machineguns that provided adequate protection. 
                                Many countries put in orders for the PZL.37, but Romania was the main purchaser, equipping two squadrons with the plane. 
                                By 1941 the much admired "Łoś" was still adequate as a bomber, but by then there were better medium bomber designs.
                                </div>
                            <img src={pzl37} alt="PZL.37 (Łoś)" />
                        </div>


                        <div className="generic-flex-space-start romanian sm79">
                            <img className="aircraft-counter" src={romanian_sm79} alt="SM-79" />
                            <div>
                                <div>SM-79 "Sparviero"</div>
                                The Savoia-Marchetti SM.79 Sparviero (Italian for sparrowhawk) was a 3 engined medium bomber, well liked by crews who nicknamed it the
                                "il gobbo maledetto" ("the damned hunchback") due to its distinctive rounded canopy. Originally designed as a fast 8 passenger plane, it was adapted in 1034 to become a medium bomber.
                                Although it was a mixed wood/metal tube construction, the "Sparrowhawk" broke many speed records, reaching 460 km/h (286 mph) at 3,790 m (12,430 ft), with the excellent range of 1600 miles. 
                                Italy's fascist government was very proud of the plane and took every effort to promote it in competitions. 
                                First used in combat in the Spanish Civil War, it would fly without fighter escort, since no enemy fighter could match its speed at that time.
                                Over 1000 of these planes were made, mostly for the Italian and Romanian airforces. The plane was rugged and durable, and later in the war was modified to be an effective torpedo-bomber.
                            
                                </div>
                            <img src={sm79} alt="SM-79" />
                        </div>

                    </div>    






















                </span>





















                <span className={this.props.language === 'fr' ? '' : 'block-hidden'}>
                    <div className="content-title">
                        <div>AVIATION</div>
                        <div></div>
                    </div>

                    <div className="generic-flex-space-around airpower">
                        <img src={il2_squadron} alt="il-2 squadron" />
                    </div>
                    <div className="spacer1rem" />
                    <p>
                        Les forces aèriennes sont reprèsentèes de faèons abstraites dans le système EFS. Elles sont allouèes par cartes en fonction des donnèes fournies par le scènario. Chaque joueur obtient des " unitès aèriennes " qui sont diffèrencièes par le modèle principal utilisè dans l'unitè dècrite telle les chasseurs (F), les chasseurs-bombardiers (FB) et les bombardiers (B). Pour qu'elles puissent agir sur la carte, elles doivent ètre en ètat de voler (Ready). Il existe quatre ètats pour une unitè aèrienne : Dètruite (Destroyed), Endommagèe (Damaged), A Volè (Flown) et Prète (Ready). Gènèralement, les joueurs doivent essayer d'avoir leur unitès dans la case Prète pour qu'elles puissent voler sur la carte et rèaliser leur mission.
                </p>
                    <p>
                        Les missions auxquelles les unitès peuvent participer sont l'Interdiction (Allemand seulement) ou le Support aèrien au Combat . Les avions peuvent aussi l'un contre l'autre , bien qu'il ne s'agisse pas rèellement d'une mission mais plutèt d'un accident de parcours durant une mission. Il n'y a pas de missions de Supèrioritè Aèrienne ni de bombardement dans les règles standard (bien que celles-ci soient traitèes dans des règles spèciales pour AGN dèveloppèes plus bas). Le combat aèrien est une simple table de ratio. Par exemple un Messerschmitt Bf109 avec un niveau 3 de combat rencontre un Petlyako Pe-2 avec un niveau 2, le joueur allemand lancer ale dè en utilisant la colonne +1 et le russe ripostera sur la colonne -1.
                </p>

                    <div className="spacer1_5rem" />
                    <div id="unit_info_fr" className="unit-info">
                        <div className="title">INFORMATION SUR LES UNITES</div>
                        <img src={hs129B} alt="airunit counter info" />
                        <div className="model">MODÈLE<br />D'AÉRONEF</div>
                        <div className="rating">CLASSEMENT DE<br />COMBAT AÉRIEN</div>
                        <div className="type">TYPE<br />B = BOMBARDIER<br />F = DE CHASSE</div>
                        <div className="close">SUPPORT EN<br />AIR PROCHE</div>
                        <div className="interdiction">INTERDICTION</div>
                    </div>



                    <div className="spacer1_5rem" />
                    <p>
                    Les unitès aèriennes n'ont pas de pas de pertes. Elles peuvent ètre endommagèes ou ètre èliminèes suite è un combat ou un tir de DCA. Ainsi comme chaque pion reprèsente environ 40 è 80 avions, cela n'aurait pas ètè pratique de reprèsenter les niveaux de pertes individuellement pour chaque pion. Ce qui est reprèsentè lorsqu'une unitè est endommagèe ou dètruite, est en rèalitè le niveau d'attrition et d'efficience qu'une aèrienne conserve après une sèrie de missions. Les renforts ou les remplacements ne sont pas lègion et ce pour aucun des camps jouès. Ils sont prèvus dans les tableaux de scenarii ou arrivent, pour le russe, suite è un bon lancè de dès sur la Table des remplacements.              
                </p><p>
                Dans EFS, les allemands ont, ce qu'on peut considèrer comme une 'Supèrioritè Aèrienne '. Ils peuvent aisèment faire les missions qu'ils souhaitent pendant que les russes doivent rester prudent. Si le joueur Russe est agressif et est prèt è rendre coup pour coup avec les chasseurs de l'Axe, on risque d'assister è l'extinction des Ailes Rouges dès le milieu du scènario. Mais le joueur russe ne doit pas ètre frileux au point de ne jamais faire intervenir son aviation par peur des pertes. L'attitude correcte doit se trouver entre ces deux attitudes. Bien souvent le joueur Allemand ne doit jamais ètre trop confiant en envoyant des bombardiers seuls au combat, il doit toujours garder une rèserve pour contrer le Russe sur un combat. Il est important de noter que le russe reèoit des renforts aèriens de temps en temps alors que l'allemand jamais. Perdre des pions n'est pas un trop grande catastrophe pour le russe alors que l'allemand perdra toujours des èlèments de valeur. Quand l'allemand perd un excellent Ju-88, il le perd pour le reste de la partie ! Il est courant de voir l'allemand disparaètre dans son siège et maugrèer lorsque ce genre d'èvènement arrive. La table des combats aèriens est une simple table de ratio qui favorise, bien entendu, les plus hautes valeurs mais mème è -3 le joueur soviétique peut faire des bon rèsultats.               
                </p>

                    <div className="spacer1_5rem" />
                    <div className="subheader-normal">Missions Aèriennes</div>
                    <p>
                    Chaque unitè prèsent dans le cadre Prèt (Ready) peut rèaliser une mission durant le tour. Les unitès allemandes peuvent rèaliser des Interdictions et des Appuis au sol (AaS Combat Air Support CAS), les soviétique peuvent seulement faire que des AaS. Un maximum de trois unitès aèriennes peuvent participer è un AaS ou une mission d'interdiction et un hexagone ne peut ètre la cible que de un AaS ou une Interdiction par phase (par joueur) Il peut y avoir deux missions d'AaS dans le mème hexagone : un russe et un allemand simultanèment. Il n'existe pas de considèrations concernant la portèe des missions aèriennes sauf indications contraires dans le livret de scènario et règles spèciales). Une unitè aèrienne envoyèe en sur un Mission peut ètre obligèe de suspendre son action pour se battre durant un combat aèrien. C'est typiquement le cas lorsque le joueur allemand envoie un ou deux bombardiers escortès par un ou deux chasseurs et se voie opposer des chasseurs ennemis. Dans le cas oè la chasse adverse ne se montre pas les avions d'escorte s'ils possèdent une capacitè d'appuis, peuvent participer è la mission d'AaS avec les bombardiers.                 
                </p>
                    <p>
                    Une <span className="blue-bold">Mission d'Interdiction</span> est une tentative d'augmentation du coèt des mouvements pour le joueur soviétique sur un hexagone ainsi que les 6 l'entourant, et aussi de dècroètre les points de commandement des QG russes. 

                </p>
                    <p>
                    Une <span className="blue-bold">Mission d'AaS</span> est une tentative pour se procurer un modificateur aux dès favorable lors d'un combat terrestre. Chaque camp peut tenter une Mission d' AaS sur un hexagone avec un marqueur Combat Dèclarè (Declared Combat). Bien sur chaque camp peut dècider de lancer un AaS sur un mème hexagone et cela arrive souvent.
                </p>
                    <p>
                    Le joueur soviétique peut s'opposer è une Mission d'Interdiction par l'envoi de chasseurs vers l'hexagone cible en espèrant provoquer un combat aèrien.
                </p>
                    <p>
                    Un joueur peut lancer une Mission d'AaS dans le seul but de provoquer un combat aèrien. C'est ce qui peut arriver si, par exemple, le joueur soviétique envoie deux pions Mig-3 (sans potentiel d'AaS) sur une Mission d'AaS pour s'opposer è la mème mission dèclanchèe par le joueur allemand. Et du fait que vous ètes autorisè è engager jusqu'è trois unitès, vous pouvez envoyer un mèlange de chasseurs et de bombardiers - les bombardiers pour soutenir vos troupes au sol et les chasseurs pour provoquer (ou pour vous dèfendre) durant le combat aèrien.
                </p>
                    <p>
                    Le joueur actif place toujours en premier ses pions face retournèe sur l'hexagone cible. Le joueur inactif peut alors prendre la dècision d'envoyer de rèaliser des missions d'AaS ou de s'opposer aux missions d'interdiction. Dan ce dernier cas, le joueur soviétique peut seulement envoyer des unitès aèriennes sur l'hexagone interdit par l'Allemand en tentant un combat aèrien. Dans le cas de mission d'AaS, le joueur inactif peut envoyer des unitès sur n'importe quel hexagone comportant un marqueur " Combat Dèclarè " (qu'il y ait ou non une mission d'AaS du joueur actif). Si vous voulez tenter un combat aèrien pour essayer d'obtenir l'abandon de la mission d'AaS de votre adversaire, vous pouvez envoyer uniquement des chasseurs sur l'hexagone oè il y a un marqueur " Combat Dèclarè " en quelque sorte vous rèalisez une mission d'AaS sans bombes. 

                </p>

                    <div className="spacer2rem" />
                    <div className="subheader-image stalin">
                        <div>Combat Aèrien</div>
                        <img src={dogfight} alt="dogfight" />
                    </div>
                    <div className="spacer1rem" />
                    <p>
                    Quand les joueurs envoient des unitès aèriennes dans le mème hexagone, un combat aèrien se produit. Le joueur actif lance les dès en consultant la Table d'Initiative Aèrienne (Air Initiative Table) pour dèterminer si un combat a bien lieu et quel camp obtient l'initiative. Quand les joueurs sont prèts, les deux camps retournent sur leur face visible leurs pions aèriens. Les joueurs doivent alors dècider quelles unitès sont en mission et quelles unitès vont participer aux combats de suprèmatie aèrienne (celles-ci sont appelèes unitès de couverture " firing units ". Les bombardiers " B " sont obligatoirement en mission. Les chasseurs (" F ") et les chasseurs-bombardiers (" FB ") peuvent ètre assignè librement è l'une ou l'autre des tèches (couverture ou mission). Le joueur actif dècide en premier comment ses avions vont ètre affecter. Les unitès en qui passent en couverture, sont virtuellement sorties du cadre mission et deviennent opèrationnelles pour combattre les avions ennemis. Les unitès qui restent attachèes è une mission ne peuvent pas riposter mais peuvent ètre prises pour cibles par les avions ennemis.  
                </p>

                    <div id="air_combat_determination_container_fr" className="air-combat-determination-container">
                        <div id="air_combat_determination" className="air-combat-determination">
                            <div className="title">Dètermination des Combat Aèriens</div>
                            <div className="roll-on">Lancè de dè sur la Table d'Initiative Aèrienne</div>
                            <div className="row">
                                <div className="air-gray-box">Avantage Tactique<br />Local - l'Axe</div>
                                <div className="air-gray-box">Initiative<br />pour l'Axe</div>
                                <div className="air-white-box">Pas de<br />Combat</div>
                                <div className="air-orange-box">Initiative<br />Soviétique</div>
                                <div className="air-orange-box">Avantage Tactique<br/>Local - Soviétique</div>
                            </div>
                            <div className="row">
                                <div className="air-gray-box">Attaque Gratuite<br/>pour l'Axe</div>
                                <div className="air-empty-box"> </div>
                                <div className="air-empty-box"> </div>
                                <div className="air-empty-box"> </div>
                                <div className="air-orange-box">Attaque Gratuite<br />pour le Soviétique</div>
                            </div>
                            <div className="end-box-fr">
                            Les unitès survivantes qui ont conduit les combats de suprèmatie, vont dans la case "A Volè".<br/> 
                            Les tirs de DCA sont conduits contre les unitès survivantes en mission, si bien sur de la DCA est prèsent dans l'hexagone.<br/>
                            Les unitès survivantes rèalisent leurs missions.

                    </div>
                        </div>
                    </div>

                    <div className="pdiv">
                        <div className="air-explanations">
                            <div>Pas de Combat aèrien:</div>
                            <div><ol>
                                <li>Toute les unitès de couverture retournent dans la case "A Volè".</li>
                                <li>Les unitès en mission poursuivent celle-ci.</li>
                            </ol>
                            </div>
                        </div>

                        <div className="air-explanations">
                            <div>Initiative or Avantage Local Tactique:</div>
                            <div><ol>
                                <li>Le joueur qui a l'Initiative ou l'avantage Tactique Local (aTL or Local Tactical advantage) choisi parmi ses unitès lesquelles attaquent l'ennemi. Toutes les unitès ennemies qui combattent doivent ètre engagèes par des unitès amies en couverture avant de s'attaquer aux unitès en Mission. S'il reste des unitès ennemies en surplus, elles peuvent attaquer n'importe quel type d'unitès amies. Les unitès attaquèes par plus d'un adversaire ne peuvent riposter que contre une seule unitè ennemie.
                                </li>

                            </ol>
                            </div>
                        </div>

                        <div className="air-explanations">
                            <div>l'Axe/Soviétique Attaque Gratuite:</div>
                            <div><ol>
                                <li>Si un joueur a un aTL, il obtient un round d'attaque gratuit. Si le joueur, a encore des unitès de couverture dans la bataille, ensuite il peut choisir librement de nouvelles cibles et essayer des les toucher. Les unitès ennemies ne peuvent riposter durant ce round.</li>
                                <li>Les unitès ennemies ne peuvent riposter durant ce round.</li>
                            </ol>
                            </div>
                        </div>
                    </div>

                    <div className="subheader-normal">Exemple de sèquence aèrienne</div>
                    <div className="pdiv">
                        <div className="air-combat-example">
                            <div>
                                <p>
                                C'est le tour du joueur soviétique, il a dècidè d'une mission d'AaS sur un hexagone contenant un marqueur Combat Dèclarè
                            </p><p>
                            Le joueur soviétique a envoyè deux bombardiers et un chasseur sur cette mission.
                            </p><p>
                            Le joueur allemand dècide d'envoyer en mission d'AaS sur le mème hexagone de combat terrestre.
                        </p><p>
                        Le joueur allemand a envoyè deux chasseurs.
                            </p>
                            </div>
                            <div>
                                <img src={aircombat_ex1} alt="air combat example 1" />
                            </div>
                        </div>
                    </div>


                    <div className="pdiv">
                        <div className="air-combat-example">
                            <div>
                                <p>

                                Le jouer Soviétique dècide d'utiliser le I-153 comme escorte pour les deux pions bombardiers qui sont dèclarès comme unitès aèrienne en mission.                          
                          
                          
                            </p><p>
                            Le joueur allemand dècide d'affecter ses deux unitès en suprèmatie aèrienne.
                            </p><p>
                            Le jouer Soviétique lancè de dè sur la table d'initiative. 
                        </p><p>
                        L'Allemand qui a l'initiative, dècide donc d'engager le I-153 avec le Bf109 (les unitès de couverture et d'escorte doivent ètre attaquèes avant celles en mission). Le Bf110 lui, est affectè è l'attaque du IL-2.
                            </p>
                            </div>
                            <div>
                                <img src={aircombat_ex2} alt="air combat example 2" />
                            </div>
                        </div>
                    </div>


                    <div className="pdiv">
                        <div className="air-combat-example">
                            <div>
                                <p>

                                Le premier combat est rèsolu entre le Bf109 et le I-153. Le Bf109 a une qualitè de 4. Le I-153 a une qualitè de 1. L'allemand lance le dè dans la colonne +3 de la table de combat aèrien, il fait 4 le I-153 est dètruit. Le I-153 riposte (le combat a lieu simultanèment). Le joueur russe lance le dè dans la colonne -3 de la table et est ce coup-ci chanceux puisqu'il obtient un 1 et repousse le Bf109.
                            </p><p>
                            Maintenant le joueur allemand passe au combat suivant. Le Bf110 a une qualitè de 2. Le IL-2 a une qualitè de 1, le joueur allemand lance donc le dè dans la colonne +1 et le russe -1. Le joueur allemand obtient un 5 et repousse le IL-2, le joueur russe ne lance pas de dès (et ne riposte) car son unitè est en mission d'AaS. 
                            </p><p>
                            Le Bf109 retourne dans la case A Volè. Le I-153 va dans la case Dètruit. LeIL-2 retourne dans la case A Volè.
                        </p>
                            </div>
                            <div>
                                <img src={aircombat_ex3} alt="air combat example 3" />
                            </div>
                        </div>
                    </div>


                    <div className="pdiv">
                        <div className="air-combat-example">
                            <div>
                                <p>

                                Si le lancè de dè sur la table d'initiative avait seulement donnè un avantage tactique pour l'Axe, le Bf 110 serait retournè dans la Case A Volè. Mais comme l'Axe dispose d'un ATL et comme le Bf110 n'a pas a ètè affectè par un rèsultat durant le round prècèdent, il peut encore attaquer le SB-2 sans que celui-ci puisse riposter (qu'il soit affectè en mission d'AaS ou de couverture).
                            </p><p>
                            Si après cette attaque le SB-2 survit, il peut continuer sa mission et le Bf110 retourne dans la case A Volè quelque soit le rèsultat.
                            </p>
                            </div>
                            <div>
                                <img src={aircombat_ex4} alt="air combat example 4" />
                            </div>
                        </div>
                    </div>




                    <div className="spacer3rem" />
                    <div className="subheader-image antiair">
                        <div>Tir de DCA</div>
                        <img src={sovietantiair} alt="Soviet anti-air" />
                    </div>
                    <div className="spacer1rem" />
                    <p>
                    Les unitès qui ont survècu aux interceptions, doivent, pour continuer leur mission, encore survivre è la DCA (souvent remplacè par le terme, pourtant inappropriè, de FlaK) ! Le tir de DCA a lieu è chaque fois qu'une unitè dèsignèe comme ayant des capacitè anti-aèrienne est sur l'hexagone cible de la mission ou sur un des 6 hexagone l'entourant. Chaque camp peut utiliser sa DCA dans tous tours de jeu (ami ou ennemi). 
                </p>

                    <div className="pdiv">
                    Pour ètre capable de faire feu avec de la DCA, il faut -
                <div className="spacer0_5rem" />
                        <div className="subheader-normal">
                            l'Axe:
                </div>
                        <ul className="ul-no-top-bottom">
                            <li>N'importe quelle unitè terrestre avec des capacitès DCA fsauf les unitès de cavalerie et les unitès non DCA avec une bande bande jaune impliquant l'absence de ZoC.</li>
                        </ul>
                        <div className="spacer0_5rem" />
                        <div className="subheader-normal no-top">
                        Soviétique:
                </div>
                        <ul className="ul-no-top-bottom">
                            <li>Toutes les divisions excèptèes celle de cavalerie.</li>
                            <li>Tous les QG activès ou non.</li>
                            <li>Les unitès de DCA.</li>
                            <li>Les unitès navales sauf les flotilles.</li>
                        </ul>
                    </div>
                    <p>
                    Si le joueur a des unitès qualifièes pour un tir de DCA, il lance UN dè sur la table de DCA pour chaque unitè en mission (sans tenir compte du nombre d'unitès de DCA prèsentes). Attention de bien prendre en compte tous les modificateurs pour le lancè. Les unitès subissant un rèsultat nègatif (mème si celui-ci n'est que Repoussè) èchouent è conduire leur mission.                
                </p>



                    <div className="spacer3rem" />
                    <div className="subheader-image antiair">
                        <div>Effets de l' Interdiction</div>
                        <img src={interdiction} alt="Interdiction" />
                    </div>
                    <div className="spacer1rem" />
                    <p>
                    Une mission d'interdiction rèussie affecte l'hexagone cible et les 6 hexagones l'entourant. Placer un marqueur interdiction sur cet hexagone. L'interdiction peut ètre de niveau 1 ou 2, ceci dèpend du nombre de d'interdiction rèussies durant la mission. Pas plus de deux points d'interdiction peuvent affecter un hexagone. L'Interdiction ne provoque pas de pertes dans EFS, mais plutèt des nuisances. Elle oblige les joueurs è rèaliser des mouvements plus prudents et elle interfère dans la capacitè d'action des QG russes.           
                </p>

                    <div className="gray-box">
                        <p className="subsubheader">Effets de l'Interdiction</p>
                        <ul>
                            <li>Chaque hexagone de rivière coète 4 point de mouvement aux flottilles.</li>
                            <li>Aucun transport aèrien ne peut commencer ou finir sur un hexagone interdit.</li>
                            <li>Chaque hexagone de voies ferrèes coète 12 point pour ètre traversè par un mouvement ferroviaire.</li>
                            <li>Les QG soviétique ont leur valeur de commandement rèduite de 1 (NB il peuvent quitter la zone interdite durant le mouvement).</li>
                            <li>Seul les trains blindès peuvent commencer leur mouvement dans un hexagone interdit.</li>
                            <li>L'Interdiction ne gène pas le mouvement excèptè le mouvement stratègique qui ne peut dèbuter, passer ou finir dans un hexagone interdit.</li>
                            <li>L'Interdiction n'affecte pas le combat.</li>
                        </ul>
                    </div>

                    <div className="spacer3rem" />
                    <div className="subheader-image antiair">
                        <div>Effets de l'Appui au Sol (CAS)</div>
                        <img src={cas} alt="cas" />
                    </div>
                    <div className="spacer1rem" />
                    <p>
                    Les Missions d'AaS ajoute le total de capacitè de bombardement aux modificateurs de dè. Si les deux joueurs ont des missions d'AaS qui ont rèussi, on applique le diffèrentiel. Deux choses è noter il n'existe pas de contrainte sur le nombre d'avions participant au calcul suite è une mission autre que les trois unitès maximum participantes et le modificateur maximum est de -3/+3 (les AaS ne sont pas affectès ni par le terrain ni par le temps). 
                    </p>

                    <div className="pdiv">
                        <div className="subheader">Les avions de l'Axe dans EFS</div>

                        <div className="generic-flex-space-start">
                            <img className="aircraft-counter" src={ju87} alt="ju-87" />
                            <div>
                                <div>Junkers Ju-87 "Stuka"</div>

                                Le bombardier de piquer Stuka ètait probablement l'avion le plus reconnaissable du conflit. Ce bi place fortement blindè manquè de vitesse et de manoeuvrabilitè, ce qui le rendait vulnèrable face aux chasseurs ennemis mais il n'en ètait pas moins très efficace. Les diffèrentes versions dèveloppèes durant le conflit de cet avion très populaire, lui permirent d'obtenir des rèsultats excellents tant qu'il n'y avait pas d'avions ennemis è l'horizon comme c'ètait souvent le cas durant l'ètè 1941 sur le front de l'est. 
                            </div>
                            <img src={stuka} alt="Stuka" />
                        </div>


                        <div className="generic-flex-space-start dornier">
                            <img className="aircraft-counter" src={do17_counter} alt="Dornier 17Z" />
                            <div>
                                <div>Dornier 17Z "Pinceau"</div>

                                Originellement crèè pour l'aviation commerciale, le Do17Z fut retenu par la LuftWaffe comme bombardier lèger rapide. Avant la guerre sa vitesse lui permettait d'èchapper è la plupart des chasseurs en activitè (parfois en rèalisant de spectaculaire piquer retourner NdT) mais les nouveaux chasseurs apparus è partir de 1940 pouvaient l'intercepter. Ainsi il souffrit de pertes ènormes durant la Bataille d'Angleterre ce qui mis un terme è sa production en sèrie sans toutefois interrompre dèfinitivement ses ètats de services qui durèrent jusqu'è la fin de la guerre.
                        </div>
                            <img src={do17} alt="Dornier 17Z" />
                        </div>



                        <div className="generic-flex-space-start heinkel">
                            <img className="aircraft-counter" src={he111_counter} alt="he 111" />
                            <div>
                                <div>Heinkel He 111</div>

                                Originellement ce bimoteur commercial fut amèliorè pour servir dans la LuftWaffe. Ses bonnes performances durant la guerres civile en Espagne, en firent le principal bombardier mis en ligne au dèbut du conflit. Il ne se comporta moins bien durant la Bataille d'Angleterre, et ses crèateurs furent handicapès par l'impossibilitè d'amèliorer ses performances motrices, ne purent le renforcer. L'apparition du Ju-88, qui lui ètait supèrieur en tant que bombardier, ralentit la production jusqu'è l'arrèt complet de celle-ci.	

                            </div>
                            <img src={he111} alt="Heinkel He 111" />
                        </div>





                        <div className="generic-flex-space-start">
                            <img className="aircraft-counter" src={ju88_counter} alt="Junkers Ju-88" />
                            <div>
                                <div>Junkers Ju-88</div>

                                Les concepteurs de ce bimoteur très incluaient deux ingènieurs amèricains, qui aidèrent è la conception de techniques structurelles innovantes. Il fut sèlectionnè par la Luftwaffe en 1935 pour ètre developer comme un bombardier rapide avancè, mais en raison de la pauvre gestion de projet, il n'a pas ètè produit dans des quantitès significatives avant 1940. C'ètait un avion excellent, rapide, facile de voler et manoeuvrable, mais un peu ètroit pour l'èquipage. Il pouvait porter une charge de bombe relativement lourde, avec des bombes en soutes et sous les ailes. Des versions diverses ont ètè produites au cours de la guerre, y compris des versions de lutteur de nuit (d'avion de chasse de nuit èquipè de radar).
                            </div>
                            <img src={ju88} alt="Junkers Ju-88" />
                        </div>


                        <div className="generic-flex-space-start messerschmitt">
                            <img className="aircraft-counter" src={bf110_counter} alt="Messerschmitt Bf 110" />
                            <div>
                                <div>Messerschmitt Bf 110</div>
                                Ce puissant biplace, fut utilisè indiffèremment comme chasseur, intercepteur de nuit, chasseur-bombardier et chasseur d'escorte. Bien qu'il ne fèt pas un chasseur exceptionnel, sa taille et sa puissance lui permettait d'avoir un armement impressionnant incluant des canons è tir obliques capable d'atteindre des cibles par le dessous.
                              </div>
                            <img src={bf110} alt="Messerschmitt Bf 110" />
                        </div>





                        <div className="generic-flex-space-start messerschmitt109">
                            <img className="aircraft-counter" src={bf109_counter} alt="Messerschmitt Bf 109" />
                            <div>
                                <div>Messerschmitt Bf 109</div>
                                Le principal chasseur de la LuftWaffe, le Bf109 possèdait d'excellentes capacitès de manoeuvre et une très bonne vitesse. Apparu au combat durant la guerre d'Espagne, ce chasseur très populaire fut continuellement amèliorè, avec le model E (surnommè Emil) la production de masse dèbuta en 1939, et près de 2000 d'entres eux ètaient en service durant les opèrations de 1940. Les appareils capables de tenir la comparaison en terme de manoeuvrabilitè et de vitesse mais pas en termes d'armements, ètaient les Spitfire anglais. Les chasseurs soviétiques ne pouvaient pas grand choses face aux 109. 
                              </div>
                            <img src={bf109} alt="Messerschmitt Bf 109" />
                        </div>
                    </div>

                    <div className="pdiv">
                        <div className="subheader">Les avions soviétiques dans EFS</div>

                        <div className="generic-flex-space-start soviet sb2">
                            <img className="aircraft-counter" src={sb2_counter} alt="Tupolev SB-2 Katiuska" />
                            <div>
                                <div>Tupolev SB-2 Katiuska "Petite Katya"</div>

                                Entrè en service en 1936, ce bombardier moyen bimoteur ètait obsolète en 1940. Ayant un faible rayon d'action et ne pouvant emporter que des petites bombes, ils ètaient facilement descendus et nècessitès une escorte pour avoir un chance de survivre è leur mission. Il possède le triste record d'avion le plus abattu du conflit.
                            </div>
                            <img src={sb2} alt="Tupolev SB-2 Katiuska" />
                        </div>


                        <div className="generic-flex-space-start soviet">
                            <img className="aircraft-counter" src={tb3_counter} alt="Tupolev TB-3" />
                            <div>
                                <div>Tupolev TB-3</div>

                                Ce grand quadrimoteur commenèa son service en 1932. Il existait diffèrentes versions et prototypes expèrimentaux, son dèveloppement ètait appuyè par le gouvernement soviétique dèsireux d'impressionner le monde. Il pouvait transporter une tonne de bombes mais avec une vitesse de 200 km/h seulement. En 1941, il fut utilisè en dèsespoir de cause comme bombardier et un grand nombre fut abattu. Il ètait une trop grande cible pour tous les chasseurs ennemis et les survivants furent transfèrès è des taches de transport ou de ravitaillement par air.
                            </div>
                            <img src={tb3} alt="Tupolev TB-3" />
                        </div>



                        <div className="generic-flex-space-start soviet">
                            <img className="aircraft-counter" src={db3_counter} alt="Ilyushin DB-3" />
                            <div>
                                <div>Ilyushin DB-3 "Bob"</div>

                                1500 des ces bombardiers bimoteur furent construit entre 1936 et 1939. Sa construction utilisant des tubes, demandèe des grandes capacitès techniques. Bon bombardier durent les annèes 30, c'ètait le cheval de trait des Ailes Rouges sans ètre particulièrement exceptionnel en 1941. En 1942 un modèle amèliorè utilisant des techniques plus modernes de constructions et moins de travail, fut appelè IL-4.
                            </div>
                            <img src={db3} alt="Ilyushin DB-3" />
                        </div>

                        <div className="generic-flex-space-start soviet">
                            <img className="aircraft-counter" src={su2_counter} alt="Sukhoi SU-2" />
                            <div>
                                <div>Sukhoi SU-2</div>

                                Le SU-2 est entrè en service en 1940 en tant que bombardier lèger, après une tumultueuse sèrie de changements de conception. Mème pendant sa principale pèriode de production en 1940-41, des changements ont continuè d'ètre appliquès è l'avion, y compris diverses disposition de moteurs et d'armement. Il ètait construit en mètal et en bois. L'avion rèsistait mal aux chasseurs Allemands et sa production fut arrètèe en 1942. Environ 900 appareils ont ètè construits.
                            </div>
                            <img src={su2} alt="Sukhoi SU-2" />
                        </div>


                        <div className="generic-flex-space-start soviet">
                            <img className="aircraft-counter" src={pe2_counter} alt="Petlyakov Pe-2" />
                            <div>
                                <div>Petlyakov Pe-2</div>
                                En tant que bombardier bimoteur très rapide, les Allemands èprouvaient de grandes difficultès pour prendre le dessus avec cet appareil. Les pilotes du Pe-2 trouvaient cet appareil un peu difficile è contrèler, mais dès qu'il ètait entre des mains expertes, il donnait du fil è retorde mème au 109. Les soviétiques reconnaissant les difficultès è piloter le Pe-2, mirent en èuvre un programme d'entraènement supplèmentaire pour les pilotes, incluant la crèation d'une version biplace d'apprentissage pour aider les pilotes novices è survivre aux atterrissages forcès. 
                            </div>
                            <img src={pe2} alt="Petlyakov Pe-2" />
                        </div>

                        <div className="generic-flex-space-start soviet">
                            <img className="aircraft-counter" src={il2_counter} alt="Ilyushin-2 Shturmovik" />
                            <div>
                                <div>Ilyushin-2 Shturmovik</div>
                                L'avion d'attaque au sol Ilyushin-2 Sturmovik fut un des meilleurs avions crèes durant le conflit. Mis au point en 1938, il entra en production en 1941. Il ètait bien armè avec des mitrailleuses jumelles de 7.62mm, 8 rockets sous les ailes et des bombes en soutes le tout propulsè par les meilleurs moteurs de la production soviétique (on interrompit la production de Mig-3, pour permettre l'approvisionnement en moteur du Il-2). Il ètait fortement blindè et pouvait ainsi supporter de nombreux dommages. Après le choc de l'invasion Staline donna des ordres urgents pour rendre prioritaire la production de cet appareil.
                            </div>
                            <img src={il2} alt="Ilyushin-2 Shturmovik" />
                        </div>

                        <div className="generic-flex-space-start soviet">
                            <img className="aircraft-counter" src={i16_counter} alt="Polikarpov I-16 Ishak" />
                            <div>
                                <div>Polikarpov I-16 Ishak "Rata"</div>
                                Les ingènieurs Dmitri Grigorovich and Nikolai Nikolayevich Polikarpov, travaillèrent en prison au dèveloppement d'un nouveau chasseur soviétique en 1933. Le rèsultat, un avion court avec une stabilitè plus qu'inquiètante, devint un bon chasseur avec un bon pilote. En 1941, il ètait le principal avion de chasse mis en èuvre par les Ailes Rouges. Bien qu'il n'ait eu aucune chance contre les 109, la production continua jusqu'è 8000 exemplaires pour compenser le manque d'autres types de chasseur accentuè par les besoins jamais satisfait en avions. Du fait de la soliditè de la superstructure du Rata, les pilotes commencèrent è utiliser des tactiques d'abordages qui laissèrent perplexes les pilotes allemands.
                            </div>
                            <img src={i16} alt="Polikarpov I-16 Ishak" />
                        </div>

                        <div className="generic-flex-space-start soviet">
                            <img className="aircraft-counter" src={i153_counter} alt="Polikarpov I-153 Chiaka" />
                            <div>
                                <div>Polikarpov I-153 Chiaka "Algue"</div>
                                Dèveloppè en 1933, ce biplan ètait très manoeuvrable et rapide pour ce type d'appareil, amèliorè dans sa version Chiaka de 1939. Mais sa cellule ètait trop petite et la vision du pilote faible. L'ège des monoplans ètait arrivè et ce biplan perdit toute chance de comme chasseur viable au combat. La production fut suspendu è la fin de l'annèe 1940.
                            </div>
                            <img src={i153} alt="Polikarpov I-153 Chiaka" />
                        </div>


                        <div className="generic-flex-space-start soviet">
                            <img className="aircraft-counter" src={yak1_counter} alt="Yak-1" />
                            <div>
                                <div>Yak-1</div>
                                L'èloge de la simplicitè, le petit et performant Yak-1 souffrait d'un armement trop lèger. Les premières versions qui furent produites en 1940, avaient diffèrents problèmes, mais l'avion fut constamment amèliorè et en 1941, il fut construit avec un meilleur moteur et des armes plus puissantes. Les meilleurs pilotes ètaient affectès aux Yak, qui ètait alors capable d'aller aux bouts des possibilitès de ce petit avion armè d'une seule mitrailleuse. Bien qu'il put transporter un chargement de bombes sous les ailes, cette solution ètait rarement utilisèe car elle diminuer trop fortement ses performances.
                            </div>
                            <img src={yak1} alt="Yak-1" />
                        </div>


                        <div className="generic-flex-space-start soviet">
                            <img className="aircraft-counter" src={mig3_counter} alt="MiG-3" />
                            <div>
                                <div>MiG-3 (Mikoyan-Gurevich)</div>
                                Les pilotes deBf109 furent choquès de voir apparaètre les nouveaux MiG-3 en 1941. Propulsè par un moteur linèaire, les MiG-3 ètait très proche du Bf-109. A basse altitude et basse vitesse, le Bf-109 lui ètait supèrieur en manoeuvrabilitè, mais è haute altitude et è haute vitesse, la situation ètait renversèe et le MiG-3 ètait supèrieur au Bf109. Cependant sur le front de l'est, les combats aèriens ètaient avant tout une affaire règlèe è basse altitude au plus près des troupes terrestres et les 109 purent maintenir un bon ratio pertes / ennemis abattus face aux MiG-3. A la fin 1941, Staline tua la production de MiG-3, en ordonnant que les moteurs modernes soient affectès en totalitè aux Il-2. La tentative d'èquiper le MiG-3 d'un moteur radial se solda par un èchec.
                            </div>
                            <img src={mig3} alt="MiG-3" />
                        </div>

                    </div>





                    <div className="pdiv">
                        <div className="subheader">Romanian Aircraft in EFS</div>

                        <div className="generic-flex-space-start romanian iar80">
                            <img className="aircraft-counter" src={romanian_iar80} alt="IAR-80" />
                            <div>
                                <div>IAR-80</div>
                                En 1930, le gouvernement roumain a publié un cahier des charges pour un nouveau chasseur. L’Industria Aeronautică Română (IAR) a fourni ses prototypes,
                                mais a perdu la concurrence à la Pologne PZL P.11. Cependant, le RAI a continué à travailler sur leurs prototypes et a présenté au gouvernement le chasseur IAR-80
                                en 1939. Sa performance est suffisamment impressionnante pour décrocher un contrat pour 100 IAR-80 en décembre 1939, suivi de près par un contrat pour de nombreux autres
                                années suivantes pour un total de 346. L'avion utilisait un moteur à piston radial de 14 cylindres et était armé de quatre mitrailleuses FN de 7,92 mm dans les ailes.
                                Un pilote de la Luftwaffe qui pilotait l’IAR-80 a conclu que, même s’il n’était pas aussi maniable que le BF-109E allemand, c’était quand même un avion de chasse adéquat.

                                </div>
                            <img src={iar80} alt="IAR-80" />
                        </div>


                        <div className="generic-flex-space-start romanian potez63">
                            <img className="aircraft-counter" src={romanian_potez63} alt="Potez 63" />
                            <div>
                                <div>Potez 63</div>
                                Potez 63 désignait globalement une série d’aéronefs conçus par la société Potez en France, bien qu’en 1936 la société fût absorbée.
                                    dans la Société nationale de construction d’aéronefs du Nord (SNCAN). Ces avions bimoteurs ont été conçus pour les rôles de chasseur, de bombardier et de reconnaissance.
                                    Ces avions avaient une ressemblance avec le
                                    BF-110 allemand, mais manquait de performance. Cependant, la manœuvrabilité était bonne et cela permettait aux pilotes de souvent survivre à des combats aériens.
                                    L'avion Potez était obsolète au début
                                    de la guerre, mais ont été achetés par de nombreux pays d’Europe, notamment la France, l’Allemagne, la Hongrie, l’Italie, la Pologne, la Suisse, la Yougoslavie et la Roumanie.
                                </div>
                            <img src={potez631} alt="Potez 63" />
                        </div>



                        <div className="generic-flex-space-start romanian pzl11">
                            <img className="aircraft-counter" src={romanian_pzl11} alt="PZL P.11" />
                            <div>
                                <div>PZL P.11</div>
                                La construction d’avions PZL basée à Varsovie a été conçue à la fin des années 20 et la production du P.11 Figher a commencé en 1931. Elle était très avancée à l’époque car elle utilisait
                                une structure et une peau entièrement métalliques. Il avait deux mitrailleuses de 7,92 mm montées sur les côtés du fuselage. Le moteur était monté sur du caoutchouc
                                absorbeurs de vibrations et
                                le train d'atterrissage et le patin de queue ont été montés sur des amortisseurs pneumatiques. En utilisant une seule aile "mouette" hautement aérodynamiquement efficace, elle est rapidement devenue
                                popularisé comme "l'aile polonaise" ou "l'aile Puławski" (d'après le concepteur). Les modèles ultérieurs ont ajouté une autre paire de mitrailleuses fixées sur les ailes.
                                 La Roumanie était un acheteur enthousiaste de ces avions, et le RAI a commencé
                                leur propre chaîne de production sous licence, appelant leur version l’IAR P.11f, utilisant le propre moteur 9Krse de l’IRA.
                                Les performances de l'avion en combat aérien étaient étonnamment bonnes, bien qu'elles soient surclassées par les chasseurs modernes dans la plupart des aspects.
                                Il a été affirmé que sa manœuvrabilité n’était limitée que par la capacité du pilote à résister aux forces centrifuges. Dans la campagne polonaise, le P.11
                                s'est avéré être un adversaire difficile pour les combattants allemands, et bien que le P.11 ait subi de lourdes pertes, ils ont abattu de nombreux combattants allemands avec eux. 
                             </div>
                            <img src={pzl11} alt="PZL P.11" />
                        </div>

                        <div className="generic-flex-space-start romanian pzl37">
                            <img className="aircraft-counter" src={romanian_pzl37} alt="PZL.37 Łoś" />
                            <div>
                                <div>PZL.37 "Łoś"</div>
                                Le polonais PZL.37 Łoś (élan) a fait sensation en 1936 en tant que meilleur bombardier moyen jamais conçu à l’époque. Il était légèrement plus étroit que les autres
                                bombardiers moyens, mais à cause de cela était plus rapide et plus facile à manipuler, et a acquis la réputation d'être très fiable. Il pourrait porter un
                                bombe relativement lourde - mais les bombes devaient avoir une forme spéciale pour pouvoir être placées. Le fuselage de l'avion
                                a été conçu aérodynamiquement pour ajouter de la portance - l’un des premiers modèles d’avions à le faire. Son large tablier rétractable,
                                avec des roues doubles, lui a permis de décoller et d'atterrir sur des pistes rugueuses ou même des champs et des prairies. Il avait 3 mitrailleuses qui fournissaient une protection adéquate.
                                De nombreux pays ont passé des commandes pour le PZL.37, mais la Roumanie était le principal acheteur, équipant l'avion de deux escadrons.
                                En 1941, le bien-aimé "Łoś" était toujours suffisant en tant que bombardier, mais à cette époque, il existait de meilleures conceptions de bombardiers moyens.
                                </div>
                            <img src={pzl37} alt="PZL.37 (Łoś)" />
                        </div>


                        <div className="generic-flex-space-start romanian sm79">
                            <img className="aircraft-counter" src={romanian_sm79} alt="SM-79" />
                            <div>
                                <div>SM-79 "Sparviero"</div>
                                Le Savoia-Marchetti SM.79 Sparviero (italien pour Sparrowhawk) était un bombardier moyen à moteur 3, bien aimé des équipages qui l'ont surnommé le
                                "il gobbo maledetto" ("le maudit bossu") en raison de son auvent arrondi distinctif. Conçu à l'origine comme un avion rapide à 8 passagers, il a été adapté en 1034 pour devenir un bombardier moyen.
                                Bien qu’il s’agisse d’une construction mixte à tubes de bois et de métal, le «Sparrowhawk» a battu de nombreux records de vitesse, atteignant 460 km / h (286 mph) à 3790 m (1230 pieds), avec une excellente autonomie de 1600 milles.
                                Le gouvernement fasciste italien était très fier de l'avion et n'a ménagé aucun effort pour en faire la promotion lors des compétitions.
                                D'abord utilisé au combat dans la guerre civile espagnole, il volerait sans escorte de chasse, car aucun chasseur ennemi ne pouvait égaler sa vitesse à cette époque.
                                Plus de 1000 de ces avions ont été construits, principalement pour les forces aériennes italiennes et roumaines. L'avion était robuste et durable, et plus tard dans la guerre a été modifié pour devenir un bombardier torpille efficace.
                            
                                </div>
                            <img src={sm79} alt="SM-79" />
                        </div>

                    </div>  






                </span>





                <ScrollToTopOnMount />



            </div>
        );
    }
}

export default Airpower;