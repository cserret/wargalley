import React, { Component } from 'react';
import il2_squadron from "../../../images/efs/airpower/il2_squadron.jpg";
import hs129B from "../../../images/efs/airpower/hs129B.png";
import dogfight from "../../../images/efs/airpower/dogfight.jpg";
import './Airpower.scss';

class Airpower extends Component {

    componentDidMount = () => {
        
        
            var canvasDiv = document.getElementById('unit_info');
            var canvas = document.createElement('canvas');
            canvas.setAttribute('width', 800);
            canvas.setAttribute('height', 340);
            canvas.setAttribute('id', 'canvas');
            canvasDiv.appendChild(canvas);
    
            var ctx = canvas.getContext("2d");
    
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

            
            var canvasAirDiv = document.getElementById('air_combat_determination_container');
            var canvasAir = document.createElement('canvas');
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
                <div className="spacer1_5rem"/>
                <div id="unit_info" className="unit-info">
                <div className="title">AIRCRAFT UNIT INFORMATION</div>
                <img src={hs129B} alt="airunit counter info"/>
                <div className="model">AIRCRAFT<br/>MODEL</div>
                <div className="rating">AIR COMBAT<br/>RATING</div>
                <div className="type">TYPE<br/>B = BOMBER<br/>F = FIGHTER</div>
                <div className="close">CLOSE AIR SUPPORT</div>
                <div className="interdiction">INTERDICTION</div>
                </div>

                <div className="spacer1_5rem"/>
                <p>
                Air units do not have steps. They may get damaged, or get eliminated due to combat or flak. Since each air unit counter represents 40-80 planes each, it isn't practical to track single airplane losses. What is represented when an air unit is damaged or destroyed is really the attrition air units suffer through a series of missions. Replacements or reinforcements of air units do not come often for either side. They may come in on the setup chart during later turns in a scenario, or, for the Soviets, they may get an air replacement through a good roll on the Replacements table. 
                </p><p>
                In EFS the Germans have what can be considered "Air Superiority". They can pretty much do any mission they want, while the Soviets have to be careful. If the Soviet player is aggressive and eager to go "toe to toe" with German fighters every turn, the Soviet Airforce will be extinct by the middle of the scenario. But the Soviet should not be so timid as to never "go to air" for fear of losing air units. The correct path is somewhere in the middle. Often enough so the German player never gets too confident and sends bombers out without fighter cover, and to get the German player to always hold back aircraft to counter any Soviet combats. Note that the Soviet sometimes gets to replace lost air units through the Replacement Table, while the German doesn't, so a air unit loss isn't "as bad" to the Soviet as it is to the German. Once a German player loses, say, a valuable Ju-88 - thats it! Its gone for the rest of the game. Its customary for the German player to sink into his seat and mumble a German curse when this happens. The air combat table is a simple ratio table that favors of course the higher columns, but even at -3 the Soviet can get a good result. 
                </p>

                <div className="spacer1_5rem"/>
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
                        <div className="air-orange-box">Soviet<br/>Initiative</div>
                        <div className="air-orange-box">Soviet Local<br/>Tactical Advantage</div>
                    </div>
                    <div className="row">
                        <div className="air-gray-box">Axis<br />Free Attack</div>
                        <div className="air-empty-box"> </div>
                        <div className="air-empty-box"> </div>
                        <div className="air-empty-box"> </div>
                        <div className="air-orange-box">Soviet<br/>Free Attack</div>
                    </div>
                    <div className="end-box">
                        Surviving firing units go to Flown boxes.<br/>
                        AA Fire is conducted against surviving mission units, if AA Fire is available.<br/>
                        Surviving mission units conduct their mission.
                    </div>
                </div>
                </div>




            </span>
        </div>
    );
    }
}

export default Airpower;