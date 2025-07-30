import React from 'react';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
//import BsrLink from "../BsrLink/BsrLink";
import german_aircraft_big from "../../../images/efs/overview/german_bf109_120.png";
import german_artillery_big from "../../../images/efs/overview/german_artillery_120.png";
import german_infantry_division from "../../../images/efs/overview/german_infantry_120.png";
import italian_infantry_division from "../../../images/efs/overview/italian_infantry_120.png";
import map_sample from "../../../images/efs/overview/map_sample.jpg";
import romanian_infantry_div from "../../../images/efs/overview/romanian_infantry_120.png";
import slovak_infantry_div from "../../../images/efs/overview/slovak_infantry_120.png";
import soviet_aircraft_big from "../../../images/efs/overview/soviet_air_I_152_120.png";
import soviet_artillery from "../../../images/efs/overview/soviet_artillery_120.png";
import soviet_hq from "../../../images/efs/overview/soviet_hq_120.png";
import soviet_infantry_division from "../../../images/efs/overview/soviet_infantry_div_120.png";
import soviet_truck_120 from "../../../images/efs/overview/soviet_truck_120.png";
import soviet_dump_120 from "../../../images/efs/overview/soviet_dump_120.png";
import german_truck_120 from "../../../images/efs/overview/german_truck_120.png";
import german_dump_120 from "../../../images/efs/overview/german_dump_120.png";
import german_panzer_division_120 from "../../../images/efs/overview/panzer_division.png";
import german_mech_division_120 from "../../../images/efs/overview/german_mech_division_120.jpg";

import './Overview.scss';

const Overview = (props) => {
    return (
        <div className="content">

            <div className="content-title">
                <div>OVERVIEW</div>
                <div></div>
            </div>

            <div>
                <span>
                    The East Front Series game system simulates warfare on the Eastern Front, 1941.
                    <div className="spacer0_5rem" />
                    Units represented as counters are divisions, brigades, regiments, companies, batteries, and groups of planes.
                    <div className="spacer0_5rem" />
                    The map scale is 5 miles to the hex. A turn represents 2 days.
                    <div className="spacer0_5rem" />
                    The sequence of play is assymetrical, meaning the Axis order of phases during a turn is different than the Soviet order of phases.
                    <div className="spacer0_5rem" />
                    Specifically the Axis player gets to move all its units then do combat, the normal "wargame" order of things.
                    <div className="spacer0_5rem" />
                    But for the Soviets, they move their motorized units, with a very limited ability to move a few non-motorized units with their motorized units,
                    before doing combat. This causes the Soviet abilities to wage war to be handicapped, and neatly inserts the command control problems the Soviets
                    experienced into the game, without the need for artificial "dummy" rules for the Soviets (other than Mandated Attacks, but that was Stalin's fault).
                    <div className="spacer0_5rem" />
                    The Soviets in 1941 had so much difficulty in coordinating their armor
                    with their infantry in attacks that often the armor went into the attack without infantry support, and Soviet units involved in a desperate
                    defence would get no reserves sent to them, even when ample troops were nearby sitting idle.
                    <div className="spacer0_5rem" />
                    The rigid Soviet command structure meant that directives from above
                    were to be obeyed, despite the realities on the ground.
                    <div className="spacer0_5rem" />
                    The Germans, of course, were indoctrinated through their military training to take
                    initiative all the way down the command chain, and as a result they had great flexibility in battle, along with excellent coordination between the various elements of
                    their armed forces.
                </span>
            </div>

            <span className="spacer1rem" />
            <div className="side-by-side-comment-box">
            <div>
                <div className="title_img_comment_box">
                    <div className="title">GERMAN PANZER DIVISION</div>
                    <div className="image">&nbsp;<img src={german_panzer_division_120} alt="German panzer division" /></div>
                    <div className="comment">

                        A typical German panzer division, in this game system, consists of one<br />
                        panzer regiment, two motorized infantry regiments, and a recon battalion.

                    </div>
                </div>
            </div>
            <div>
                <div className="title_img_comment_box">
                    <div className="title">GERMAN MECH DIVISION</div>
                    <div className="image">&nbsp;<img src={german_mech_division_120} alt="German mech division" /></div>
                    <div className="comment">

                        A typical German mech division, consists<br/> 
                        of two mechanized regiments.

                    </div>
                </div>
            </div>
            </div>
            <span className="spacer1rem" />
            <div>
                <span>
                    In this game system, the panzer division is king. Often a panzer division gets the dual combat benefits of "divisional integrity" and "combined arms",
                    which makes them very combat effective. Add into the mix engineers and air support, and panzer divisions can pretty much chew into any defense
                    the Soviets can put up.
                    <div className="spacer0_5rem" />
                    But the main problem for the Axis player is that there are not enough panzer divisions, and with the lack of time the
                    Axis has to accomplish their objectives, combined with the problems of getting enough Attack Supply to the front, the Axis player is often
                    forced to put his/her precious panzer divisions into dangerous situations.
                    <div className="spacer0_5rem" />
                    How well the Axis player balances the need for victory points with risk to
                    his panzer divisions and other units is what gives this game system its excitement level.
                    <div className="spacer0_5rem" />
                    The Soviet player will need to strategically trade space for time, and come up with ways to slow down the German onslaught, while striking
                    back when the Axis player get careless or leave an important position weakly defended.
                    The Axis player may have more powerful and capable units, but they have far less units
                    that the Soviet player does, which means the Axis lines will be thin in spots.
                </span>
            </div>

            <div>
                <div className="comment-boxes">
                    <div>
                        <div className="title_img_comment_box">
                            <div className="title">SOVIET INFANTRY DIVISION</div>
                            <div className="image"><img src={soviet_infantry_division} alt="Soviet infantry division" /></div>
                            <div className="comment">
                                A Soviet infantry division varies in strength.<br />
                                This one has an attack strength of 3 (first number) and<br />
                                defense of 4 (second number). They have 2 or 3 steps.
                            </div>
                        </div>
                    </div><div>

                        <div className="title_img_comment_box">
                            <div className="title">GERMAN INFANTRY DIVISION</div>
                            <div className="image"><img src={german_infantry_division} alt="German infantry division" /></div>
                            <div className="comment">
                                A German infantry division varies in strength.<br />
                                This one has an attack strength of 7 and<br />
                                defense of 9. They have 4 steps.
                            </div>
                        </div>
                    </div><div>
                        <div className="title_img_comment_box">
                            <div className="title">ITALIAN INFANTRY DIVISION</div>
                            <div className="image"><img src={italian_infantry_division} alt="Italian infantry division" /></div>
                            <div className="comment">
                                This Italian infantry division has an attack<br />
                                strength of 4 and defense of 5. It has 2 steps.
                            </div>
                        </div>
                    </div>
                </div>



                <div className="comment-boxes">
                    <div>
                        <div className="title_img_comment_box">
                            <div className="title">SLOVAK INFANTRY DIVISION</div>
                            <div className="image"><img src={slovak_infantry_div} alt="Slovak infantry division" /></div>
                            <div className="comment">
                                This Slovakian infantry division has an attack<br />
                                strength of 3 and defense of 4. It has 2 steps.
                            </div>
                        </div>
                    </div><div>
                        <div className="title_img_comment_box">
                            <div className="title">ROMANIAN INFANTRY DIVISION</div>
                            <div className="image"><img src={romanian_infantry_div} alt="Romanian infantry division" /></div>
                            <div className="comment">
                                This Rumanian infantry division has an attack<br />
                                strength of 4 and defense of 5. It has 3 steps.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <span>
                    All around, the German military units are superior to the Soviet units. The German infantry divisions are reliable and strong, with many steps. The German motorized divisions complement the limited German panzer divisions and can often take the "hits" in battle, protecting the strength of the panzer divisions. German aircraft are superior to the Soviet aircraft, and usually can force the Soviet bombers to abort their attempts at ground combat support. German allies have generally weaker units, on par with their Soviet counterparts.
                </span>
            </div>

            <span className="spacer2rem" />

            <div>
                <div className="title_img_comment_box">
                    <div className="title">SOVIET HEADQUARTERS</div>
                    <div className="image"><img src={soviet_hq} alt="Soviet Headquarters" /></div>
                    <div className="comment">
                        This Soviet headquarters has a command level<br />
                        of 1 (green number). They vary from 0 to 3.
                    </div>
                </div>
            </div>
            <span className="spacer1rem" />
            <div>
                <span>
                    Only the Soviets have "headquarter units", and these are required to get non-motorized units to "activate" during the
                    Soviet motorized phase, they can issue "orders", and have a limited ability to move reserves into battles. These headquarters
                    can be attacked by Axis ground combat units, they can be bombed by Axis aircraft, and they can cause problems for the Soviets
                    if they become "non-operational". The Axis do not have headquarter units in the game. The Axis command capability is so effective
                    that all Axis units are always considered to be in "command control", and therefore the Soviets do not have the capability
                    to attack the Axis command infrastructure in this game system.
                </span>
            </div>

            <div>
                <div className="comment-boxes">
                    <div>
                        <div className="title_img_comment_box">
                            <div className="title">SOVIET AIRCRAFT UNIT</div>
                            <div className="image"><img src={soviet_aircraft_big} alt="Soviet aircraft unit" /></div>
                            <div className="comment">
                                This is a Soviet Polikarpov I-153 fighter. It has<br />
                                a air-to-air combat strength of 1, no combat<br />
                                support strength, and interdiction value of 1.
                            </div>
                        </div>

                    </div><div>
                        <div className="title_img_comment_box">
                            <div className="title">GERMAN AIRCRAFT UNIT</div>
                            <div className="image"><img src={german_aircraft_big} alt="German aircraft unit" /></div>
                            <div className="comment">
                                This is a German Messerschmitt Bf109 Fighter. It has<br />
                                a air-to-air combat strength of 3, no ground combat<br />
                                support strength, and an interdiction strength of 1.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <span>
                    The airpower system in EFS is abstracted. The priority of the simulation is on ground combat. There are no airfields,
                    aircraft availability is determined by the scenario allotment. Generally, aircraft that are in the "ready box" can be used
                    anywhere on the map. Simple combat routines handle air-to-air combat. Aircraft can be aborted from their missions, or damaged
                    or destroyed. Usually air combat and flak is not too deadly, but occassionally a plane will go down in flames (usually a
                    Soviet aircraft unit). Missions that aircraft can perform are air-to-air combat, ground support and interdiction. Each aircraft
                    counter represents fourty to eighty planes, or a few squadrons each.
                </span>
            </div>

            <div>
                <div className="comment-boxes">
                    <div>
                        <div className="title_img_comment_box">
                            <div className="title">SOVIET ARTILLERY UNIT</div>
                            <div className="image"><img src={soviet_artillery} alt="Soviet artillery unit" /></div>
                            <div className="comment">
                                This is a Soviet artillery unit. This one has a<br />
                                range of 2 (smaller number upper left in red)<br />
                                bombardment strength of 3, and defense of 1.
                            </div>
                        </div>

                    </div><div>
                        <div className="title_img_comment_box">
                            <div className="title">GERMAN ARTILLERY UNIT</div>
                            <div className="image"><img src={german_artillery_big} alt="German artillery unit" /></div>
                            <div className="comment">
                                This is a German artillery regiment. This one has<br /> a range of
                                two and a bombardment strength of three.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <span>
                    Artillery in EFS is very important. It gives added strength to attacks, and can stiffen the defense. The Axis is more
                    adept in their coordination of artillery in combat, and can throw in support from up to four in range artillery to an attack
                    or defense. The Soviets suffer from poor coordination with their artillery, and usually only one in range artillery unit
                    can throw in its support. Both the Axis and Soviets have a good assortment of artillery, including rail guns, rockets, and
                    naval guns, with varying strengths and ranges. In EFS artillery is only used with ground combat, they do not do any "bombardment"
                    on their own.

                </span>
            </div>







            <div>
                <div className="comment-boxes">
                    <div>
                        <div className="title_img_comment_box">
                            <div className="title">AXIS ATTACK<br />SUPPLY UNITS</div>
                            <div className="image-by-image">
                                <div className="image"><img src={german_truck_120} alt="German attack supply unit" /></div>
                                <div className="image"><img src={german_dump_120} alt="German supply dump unit" /></div>
                            </div>
                            <div className="comment">
                                Axis trucked Attack Supply unit<br />
                                and Attack Supply Dump unit.
                            </div>
                        </div>

                    </div><div>
                        <div className="title_img_comment_box">
                            <div className="title">SOVIET ATTACK<br />SUPPLY UNITS</div>
                            <div className="image-by-image">
                                <div className="image"><img src={soviet_truck_120} alt="Soviet attack supply unit" /></div>
                                <div className="image"><img src={soviet_dump_120} alt="Soviet supply dump unit" /></div>
                            </div>
                            <div className="comment">
                                Soviet trucked Attack Supply unit<br />
                                and Attack Supply Dump unit.<br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <span>
                    There are two types of supply in EFS. General supply is done by tracing to a Lines of Communication route (LOC). General supply denotes things such as food and fuel. Units that are out of General Supply suffer from reduced movement and other penalties. Attack Supply is a different kind of supply. It is used during combat. Attack Supply is represented by supply counters on the map. Attack Supply is needed to allow combat capable units to attack at their optimum performance level (there is no Defensive Combat Supply in this system). One Attack Supply point is typically used to "supply" a combat in the game. To attack without Attack Supply usually means the attacker is taking risks. The Axis player will find that he will often have to attack without Attack Supply, and this will be the major reason for Axis combat losses in the game.

                </span>
            </div>

            <span className="spacer2rem" />
            <div className="clipart">
                <img src={map_sample} alt="map sample" />
            </div>

            <div className="padded">
                    There are several types of terrain in EFS. Terrain is important for determining movement 
                    costs and for combat effects.
            </div>
            <div className="padded">
                    The movement costs and restrictions change for different weather conditions and different unit types. 
               </div>
               <div className="padded">     
                    Weather can be clear, mud, lingering mud, frost, snow, and lingering snow, with the possibility of storms thrown in.
            </div>

            <ScrollToTopOnMount />

        </div>
    );
}

export default Overview;