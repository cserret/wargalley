import React, { Component } from 'react';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
import BsrLink from "../BsrLink/BsrLink";
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
import il2_sturmovik from "../../../images/efs/airpower/il-2sturmovik.jpg";
import ju88_counter from "../../../images/efs/airpower/ju-88.gif";
import ju88 from "../../../images/efs/airpower/ju-88.jpg";
import mig3_counter from "../../../images/efs/airpower/mig-3.gif";
import mig3 from "../../../images/efs/airpower/mig3.jpg";
import pe2_counter from "../../../images/efs/airpower/pe2.gif";
import pe2 from "../../../images/efs/airpower/pe-2.jpg";
import sb2_counter from "../../../images/efs/airpower/sb-2.gif";
import sb2 from "../../../images/efs/airpower/sb-m103.jpg";
import su2_counter from "../../../images/efs/airpower/su-2.gif";
import su2 from "../../../images/efs/airpower/su-2.jpg";
import tb3_counter from "../../../images/efs/airpower/tb3.gif";
import tb3 from "../../../images/efs/airpower/tb3.jpg";
import yak1_counter from "../../../images/efs/airpower/yak-1.gif";
import yak1 from "../../../images/efs/airpower/yak-1.jpg";
import romanian_iar80 from "../../../images/efs/airpower/romanian_iar80.png";
import iar80 from "../../../images/efs/airpower/iar_80.jpg";
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
        this.drawCanvas(this.props.language);
    }

    componentWillReceiveProps = (props) => {
        this.drawCanvas(props.language);
    }


    drawCanvas = (language) => {
        var canvasDiv;
        var canvas;
        var ctx;
        var canvasAirDiv;
        var canvasAir;
       
        if (this.state.contextDrawnEN === false) {
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

    }

    render = () => {
        return (
            <div className="content">
                <span>
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
                        The missions your air units can participate in are Interdiction or Close Air Support (if they have an interdiction rating or a Close Air Support rating). Planes can also do combat against each other, although this isn't strictly termed a "mission", more like an "accident on the way to do a mission", or "guess who I ran into on my way to the mission". There are no Combat Air Patrol or Bombardment missions in standard EFS (although there are some special bombardment rules available for AGN that I don't cover here). The Air Combat Table is a simple ratio table. For example a German Bf109 with a combat rating of 3 going up against a Pe-2 with a rating of 2 will roll on the +1 column. If the Pe-2 can fire back, it will be on the -1 column.
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
                        In EFS the Germans tend to dominate in air operations. They can pretty much do any mission they want, while the Soviets have to be careful. If the Soviet player is aggressive and eager to go "toe to toe" with German fighters every turn, the Soviet Airforce will be extinct by the middle of the scenario. But the Soviet should not be so timid as to never "go to air" for fear of losing air units. The correct path is somewhere in the middle. Often enough so the German player never gets too confident and sends bombers out without fighter cover, and to get the German player to always hold back aircraft to counter any Soviet combats. Note that the Soviet sometimes gets to replace lost air units through the Replacement Table, while the German doesn't, so a air unit loss isn't "as bad" to the Soviet as it is to the German. Once a German player loses, say, a valuable Ju-88 - thats it! Its gone for the rest of the game. Its customary for the German player to sink into his seat and mumble a German curse when this happens. The air combat table is a simple ratio table that favors of course the higher columns, but even at -3 the Soviet can get a good result.
                </p>

                    <div className="spacer1_5rem" />
                    <div className="subheader-normal">Air Missions</div>
                    <p>
                        Each air unit that is in the Ready box can do 1 mission in a turn. Units with an Interdiction Rating and Close Air Support (CAS) can attempt to perform those missions. A maximum of three air units may participate in a single CAS or Interdiction mission, and a only a single hex can be the target of one Interdiction mission or a CAS mission (per player) per phase. There can be "two" CAS missions to the same hex, provided its a German CAS Mission and a Soviet CAS Mission. There are no range considerations (except for some scenarios with special rules). Air units sent on a "Mission" may end up being diverted from the mission to do air combat. Typically a German player will send one or two bombers for CAS with a fighter or two to provide "cover" for the bombers in case enemy fighters show up. If no enemy fighters show up, then the fighter, if it has a CAS rating, can participate with the bombers in the CAS mission.
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

                        <div className="generic-flex-space-start soviet il2">
                            <img className="aircraft-counter" src={il2_counter} alt="Ilyushin-2 Shturmovik" />
                            <div>
                                <div>Ilyushin-2 Shturmovik</div>
                                The Ilyushin-2 Shturmovik ground-attack aircraft was one of the best aircraft designs of the war. Designed in 1938, it entered production in 1941. It was well armed with twin 7.62 machineguns, 8 rockets under the wings, and bombs in the bomb bays, and given exclusive access to the best aircraft engine produced by the Soviets (killing off the MiG-3 production lines, which needed that engine). It was well armored and sustained damage well. After the shock of German invasion, Stalin issued urgent orders to immediately ramp up production of the IL-2.
                            </div>
                            <img src={il2_sturmovik} alt="Ilyushin-2 Shturmovik" />
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
                                In 1930 the Romanian government issued specifications for a new fighter. The Industria Aeronautică Română (IAR) factory provided their prototypes,
                                but lost in the competition to the Polish PZL P.11. However, the IAR continued working on their prototypes, and demonstrated the IAR-80 Fighter to the government
                                in 1939. Its performance was impressive enough to garner a contract for 100 IAR-80s in December 1939, soon followed by contracts for many more over the 
                                following years, for a total of 346 planes. The engine used was a 14 cylinder radial piston.  It was well armed with four 7.92mm FN machine guns in the wings.
                                A Luftwaffe pilot who test flew the IAR-80 concluded that, while not as manueverable as the German BF-109E, it was a respectable fighter.

                                </div>
                            <img src={iar80} alt="IAR-80" />
                        </div>


                        <div className="generic-flex-space-start romanian potez63">
                            <img className="aircraft-counter" src={romanian_potez63} alt="Potez 63" />
                            <div>
                                <div>Potez 63</div>
                                    Potez 63 was the overall designation for a series of aircraft designed by the Potez company in France. In 1936 the Potez company was absorbed
                                    into the National Aircraft Construction Company of the North (SNCAN). These twin engined planes were made for fighter, bomber, and reconnaissance roles.
                                    These planes had a resemblance to the
                                    German BF-110, but lacked its performance. However, manueverability was good and this helped pilots to survive dogfights. 
                                    The Potez aircraft were obsolete by the start
                                    of the war, but were in service in many countries in Europe, including France, Germany, Hungary, Italy, Poland, Switzerland, Yugoslavia, and Romania.
                                </div>
                            <img src={potez631} alt="Potez 63" />
                        </div>



                        <div className="generic-flex-space-start romanian pzl11">
                            <img className="aircraft-counter" src={romanian_pzl11} alt="PZL P.11" />
                            <div>
                                <div>PZL P.11</div>
                                The Warsaw based aircraft manufacturer "PZL" designed the P.11 in the late 1920s, and production began in 1931. It was very advanced at the time, as it used
                                an all-metal structure and skin. It had two 7.92mm machine guns mounted on the sides of the fuselage. The engine was mounted on rubber 
                                vibration absorbers and 
                                the undercarriage and tail skid were mounted on pneumatic shock absorbers. 
                                
                                Its distinctive "gull" wing was very aerodynamically efficient, and it became known as the "Polish Wing" or the "Puławski wing" (after the designer). 
                                Later models added another pair of machineguns fixed onto the wings.
                                Romania was an eager buyer of these planes, and the Romanian IAR factory started
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
                                medium bombers, and because of this was faster and easier to handle. It also gained a reputation of being very reliable. It could carry a
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
                                The Savoia-Marchetti SM.79 Sparviero (Italian for sparrowhawk) was a 3 engined medium bomber, well liked by crews who nicknamed it
                                "il gobbo maledetto" ("the damned hunchback") due to its distinctive rounded canopy. Originally designed as a fast 8 passenger plane, it was adapted in 1934 to become a medium bomber.
                                Although it was a mixed wood/metal tube construction, the "Sparrowhawk" broke many speed records, reaching 460 km/h (286 mph) at 3,790 m (12,430 ft), with the excellent range of 1600 miles. 
                                Italy's fascist government was very proud of the plane and took every effort to promote it in competitions. 
                                First used in combat in the Spanish Civil War, it would fly without fighter escort, since no enemy fighter could match its speed at that time.
                                Over 1000 of these planes were made, mostly for the Italian and Romanian airforces. The plane was rugged and durable, and later in the war was modified to be an effective torpedo-bomber.
                            
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