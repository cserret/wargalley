import React from 'react';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
import BsrLink from "../BsrLink/BsrLink";
import barrels from "../../../images/efs/supply/barrels.gif";
import general_supply_example1 from "../../../images/efs/supply/general_supply_example1.jpg";
import general_supply_example2 from "../../../images/efs/supply/general_supply_example2.jpg";
import general_supply_example3 from "../../../images/efs/supply/general_supply_example3.jpg";
import supplystrip from "../../../images/efs/supply/supplystrip.gif"
import germanrations_pic from "../../../images/efs/supply/germanrations_pic.jpg"
import sovietrations from "../../../images/efs/supply/sovietrations.jpg"
import './Supply.scss';


const Supply = (props) => {

    return (
        <div className="content">

            <div className="content-title">
                <div>SUPPLY</div>
                <div></div>
            </div>


            <div>
                <span>
                    There are two types of supply represented in the East Front Series. The first
                    is 
                    <div className="stand-out green">General Supply</div> 
                    and the other is called 
                    <div className="stand-out red">Attack Supply</div>
                    
                    For a military unit to be in "General Supply" means that the unit has a steady stream of goods that are needed daily by an army 
                    in the field - items such as
                    food, medical supplies, blankets, shoes, coats, fuels, grease and oils, etc etc.

                    "Attack Supply" represents a concentration of items that have been positioned near the attacking unit(s) when a major military operation is planned. 
                    Items such as
                    ammunition, shells, rockets, extra fuel, replacement vehicles and parts. Although military units usually carry with them quantities 
                    ammunition and other military supplies needed to perform in combat, for a 
                    planned attack where the unit(s) is needed to perform at full capacity, they will need a surplus of these items, 
                    because they can be expended at a very fast rate during combat. In this EFS game system, most units can attack without
                    being provided Attack Supply, but they will not perform at full capacity. Attacking without Attack Supply can cause
                    increased risk of losses, and also means that artillery support will probably not be provided.

                    Units need to be in General Supply to avoid various penalties, such as reduced mobility.
                    General Supply is not represented by counters on the map - instead it is an abstract mechanic where by a LOS is traced
                    out on the map, following roads, railroads, and a limited number of hexes "off road", that reaches to the units.

                   Attack Supply is represented on the map by
                    Attack Supply counters that you need to move to be near the units that are fighting and that need to consume the Attack Supply.

                </span>
            </div>





            <span className="spacer2rem" />

            <span>
                <div className="subheader-image">
                    <span>6.0</span>
                    <div>General Supply</div>
                    <img src={barrels} alt="general supply barrels" />
                </div>
                <div>
                    General Supply is delivered to units by tracing a path of contiguous hexes from a supply source to the hex a unit is in. The route may consist of 3 different types that can connect to each other:
                </div>
            </span>

            <div>
                <div className="gray-box">
                   <div className="subsubheader">General Supply Path types</div>
                    <ul>
                        <li>a Railroad Net</li>
                        <li>a Road Net</li>
                        <li>a Line of Communications (LOC)</li>
                    </ul>
                </div>
            </div>

            <span className="spacer1_5rem" />

            <span>
                <div>
                    A Railroad Net (for the Axis, all rail hexes used must be "converted") can bring supply to any units on that railroad, or deliver the supply to the start of a road net or LOC. The railroad can be of any length to a supply source (the ultimate supply source is usually a map edge hex). If the railroad enters a hex with a main road or motorway road also in it, then the supply can be extended along that road 21 hexes from the point where the railroad meets that road. A "Road Net" consists of a Main Road or a Motorway (not Minor Roads). If a unit is on that "supply" road, then it is in supply. But usually a unit won't be on the road. In that case a LOC needs to reach to the unit for it to be deemed in General Supply. The LOC can be up to 7 hexes. The path of General Supply cannot enter an enemy occupied hex, cannot go through a hex with an enemy zone of control (ZOC) unless there is also a friendly combat unit in the hex.
                </div>
                <div className="generic-flex-space-around rations">
                    <img src={germanrations_pic} alt="Germans eating rations" />
                    <img src={sovietrations} alt="Soviets eating rations" />
                </div>
                <div>
                    Supply sources are identified in the scenario instructions. Typically they are a map edge, or range of hexes on a map edge, or a port. The Soviets also get to use Major City Hexes as a source of General Supply.
                </div>
            </span>

            <div>
                <div className="gray-box">
                   <div className="subsubheader">The types of supply routes that can be traced and how they can connect:</div>
                    <ul>
                        <li>Supply source -> Railroad Net -> Road Net -> LOC</li>
                        <li>Supply source -> Railroad Net -> LOC</li>
                        <li>Supply source -> Road Net -> LOC</li>
                        <li>Supply source -> LOC</li>
                    </ul>
                </div>
            </div>

            <span className="spacer1rem" />
            <div>
                <span>
                    General Supply paths cannot go in any other combinations, such as LOC onto a Road Net, or Road Net onto a Railroad Net, or along a Road Net to a LOC then back to a Road Net, etc. Each path has to be <span className="italic">contiguous</span>.
                </span>

            </div>






            <div>
                <div className="gray-box">
                   <div className="subsubheader">Lengths of supply routes:</div>
                    <ul>
                        <li>Railroad - any distance (For Axis, all railroad hexes used must be "converted" railroad hexes).</li>
                        <li>Main Road (or Motorway) - 21 hexes (not movement points - count only hexes). In Mud or Snow/Arctic this is reduced to 15 hexes.</li>
                        <li>LOC - 7 hexes (not movement points, count only hexes). In Mud or Snow/Arctic this is reduced to 5 hexes.</li>
                        <li>LOC (additional restriction) - 5 hexes when tracing along a road or railroad in swamp hex during Dry weather.</li>
                        <li>LOC (additional restriction) - 5 hexes when tracing through a marsh hex during Dry weather.</li>
                        <li>LOC (additional restriction) - 5 hexes when tracing through a woods hex during Lingering Mud. If tracing along road or railroad in the woods hex, then this doesn't apply.</li>
                    </ul>
                </div>
            </div>

            <span className="spacer1rem" />
            <div>
                <span>

                    The Railroad used in a supply trace has to be contiguous hexes of the same (or connecting) railroad.<br />
                    The Main Road (or Motorway) used in a supply trace has to be contiguous hexes of the same main road.<br />
                    The 7 hexes overland (LOC) has to be contiguous hexes.<br />
                    No "hopping" over hexes is allowed. No leaving a road to go around some obstruction (like an enemy unit) and getting back on the road. Any obstruction on a main road or railroad terminates the use of that main road or railroad at the last hex before the obstruction. From there, the LOC goes out up to 7 hexes. A General Supply path can not cross non-frozen lake/inland sea hexsides or unbridged major river. A General Supply path cannot enter a swamp hex during Dry or Mud turns unless the path is along a road or railroad that goes through the hex. A LOC can go along a railroad into a swamp hex during Dry or Mud turns. A General Supply path cannot enter a hex with a undestroyed enemy strongpoint or across a non-destroyed fortified line hexside.
                </span>
            </div>





            <div>
                <div className="gray-box">
                   <div className="subsubheader">Summary of General Supply stoppers:</div>
                    <ul>
                        <li>Cannot go into a hex with an enemy unit in it.</li>
                        <li>Cannot go into a hex with an enemy ZOC in it, unless that hex also has a friendly combat unit in it.</li>
                        <li>Cannot go across a non-frozen lake/inland sea hexside.</li>
                        <li>Cannot go across an unbridged major river.</li>
                        <li>Cannot go into a swamp hex during Dry or Mud turns unless the supply can be traced along road or railroad that goes through the swamp hex(es).</li>
                        <li>Cannot go through an undestroyed enemy strongpoint (although it can go into it, supplying friendly units in it, but the path stops there).</li>
                        <li>Cannot go across undestroyed enemy fortified lines. (Friendly units on the "wrong" side of a fortified line, even if in the same hex as the fortified line, do not get supply through the fortified hexside).</li>

                    </ul>
                </div>
            </div>

            <span className="spacer2rem" />

            <div>
                <div className="two-column-flex example example1">
                    <div>
                        <div className="example-name">Example 1</div>
                        <div><img src={general_supply_example1} alt="general supply example 1" /></div>
                    </div>
                    <div>
                       <div className="minor">
                            In this example, the supply source for the Axis is marked "S", in the green circle in the lower left.
                        </div>
                       <div className="minor">
                            The supply on a main road can go up to 21 hexes on a dry weather turn. However, there is a Soviet unit sitting on the road. This stops the supply chain from going further up the road. A supply route can not exit a road then re-enter it further up. Note that Minor Roads (dotted lines) cannot be used in a Road Net. So the supply along the road terminates at the circle marked "A".
                        </div>
                       <div className="minor">
                            The German unit that is at the hex marked "A" is of course in supply. Now the supply can go "off road", otherwise called "LOC".
                        </div>
                       <div className="minor">
                            The LOC can go up to 7 hexes long on a dry turn. But it cannot enter enemy occupied hexes, or enter hexes where the enemy has a ZOC (although if you got a friendly unit there then supply can go through it). Therefore, the route shown is the shortest route possible to the other German units.
                        </div>
                       <div className="minor">
                            The German unit at the hex marked "5" is in supply. It is within 7 hexes of the supplied main road. The German panzer unit in the upper right part of the map, however, is too far away. It would have to move to at least the hex marked "7" to be in General Supply. Therefore, this unit is not in General Supply, and during the supply phase would be marked with the appropriate marker denoting it cannot draw General Supply.
                        </div>
                    </div>
                </div>
            </div>

            <span className="spacer2rem" />

            <div>
                <div className="two-column-flex example example2">
                    <div>
                        <div className="example-name">Example 2</div>
                        <div><img src={general_supply_example2} alt="general supply example 2" /></div>
                    </div>
                    <div>
                       <div className="minor">
                            In this example, the supply source for the Axis is marked "S", in the green circle in the lower left. The supply on a main road can go up to 21 hexes on a dry weather turn. However, there is a Soviet unit sitting on the road. This stops the supply chain from going further up the road at hex marked A. The German unit that is at the hex marked "A" is in supply.
                        </div>
                       <div className="minor">
                            Now the supply can go "off road", otherwise called "LOC". The LOC can go up to 7 hexes long on a dry turn. But it cannot enter enemy occupied hexes, or enter hexes where the enemy has a ZOC (although if you got a friendly unit there then supply can go through it). Therefore, the route shown is the shortest route possible to try to reach the unit across the river.
                        </div>
                       <div className="minor">
                            The LOC cannot be traced through the hex marked "B" - a enemy unit is exerting a ZOC on that hex. If a German unit *was* in hex "B", then supply could be traced through that hex. The LOC can not be traced through hex "C" for the same reason. Therefore, the LOC has to extend out as shown.
                        </div>
                       <div className="minor">
                            The LOC cannot go across a unbridged major river, and therefore cannot take the most direct route which would be to hex marked "D". General supply cannot go across a major river unless it is crossed by a bridge, minor or major road, or a railroad (it is assumed that any minor road, or major road, or railroad that crosses any kind of river means there is a bridge there). The LOC shown is the shortest possible to the German recon unit that is across the river. Unfortunately for that unit, the LOC ends one hex short. The German recon unit cannot draw General Supply. During the supply phase it would be marked with the appropriate marker denoting it cannot draw General Supply.
                        </div>
                    </div>
                </div>
            </div>

            <span className="spacer2rem" />

            <div>
                <div className="example example3">
                    <div>
                        <div className="example-name">Example 3</div>
                        <div className="example3"><img src={general_supply_example3} alt="general supply example 3" /></div>
                    </div>
                    <div className="row-text">
                        <span className="spacer1rem" />
                       <div className="minor">
                            In this example, the supply source is marked by hex "S". Since there is a converted Axis railroad that extends from "S" to hex "A", we can use the railroad to extend supply. Supply can extend along a railroad as far as the railroad goes.
                        </div>
                       <div className="minor">
                            In this case, the Axis have converted the railroad up to hex "A". So from hex "A" the supply goes off-road, and uses LOC to reach the more distant Axis units. The LOC reaches to the unit at hex "7", but cannot reach the German recon unit that is to the right of that.
                        </div>
                       <div className="minor">
                            All other German units are in General Supply, since they can easily reach the railroad by LOC.
                        </div>
                    </div>
                </div>
            </div>

            <span className="spacer2rem" />


            <span>

                <div className="subheader-rule">
                    <span>6.53</span>
                    <div>Use of Attack Supply as General Supply</div>
                </div>
                <div>
                    There is one more way for units to get General Supply, but it's something to be avoided unless you have a very good reason. You can use Attack Supply as a source of General Supply. Using a Attack Supply counter for General Supply uses up that Attack Supply, or 1 point of a Dump. This procedure gives General Supply to friendly units that can trace 5 hexes, under the same conditions as tracing a LOC, to the Attack Supply. The units are then considered in General Supply for 1 turn. Typically, only Soviet forces will use this tactic, since they are often cut off by the advancing Germans, and may have some friendly Attack Supply trapped with them. But you may find yourself, as the Axis player, forced to do this if for example a panzer division got cut off - or if you "planned" on a panzer division being cut off while involved in a deep thrust behind enemy lines.
                </div>
            </span>

            <span className="spacer1_5rem" />

            <span>

                <div className="subheader-rule">
                    <span>6.7</span>
                    <div>Effects of not being able to get General Supply</div>
                </div>

                <div>
                    Units that were in General Supply but are found to be unable to trace to General Supply are marked with a "Emergency Supply" marker. These units are still considered to be in General Supply. Units that have a "Emergency Supply" marker on them, and are found to still be unable to trace to General Supply during the Supply phase have the "Emergency Supply" marker flipped to "Out of Supply". Strongpoints also suffer from being Out of Supply. Units that are marked "Out of Supply" have the following negative effects:
                </div>
            </span>

            <div>
                <div className="gray-box">
                   <div className="subsubheader">Effects of being Out of Supply<BsrLink page="11" rule="6.35" /></div>
                    <ul>
                        <li>2 Movement points are subtracted from its normal movement allowance (prior to any halving due to other rules).
                            Exceptions: Do not reduce the MA of cavalry, flotilla, or armored train units.</li>
                        <li>Out of Supply Axis motorized units are subject to Fuel Shortage.</li>
                        <li>Cannot conduct Railroad or Strategic movement.</li>
                        <li>The unit cannot conduct overrun.</li>
                        <li>The unit cannot fire defensively (if artillery). OOS artillery can still fire offensively if they are given Attack Supply.</li>
                        <li>A defending stack gives the attacker a -1 drm on the combat roll if any unit defending is OOS.</li>
                        <li>German panzer or German motorized divisions do not get the Divisional Integrity Bonus in an attack if any of its
                            member units participating in the attack are OOS, unless they are given Attack Supply for that attack.</li>
                        <li>Strongpoint markers go out of General Supply just like units - but when they go from "Emergency Supply" to OOS,
                            they are removed from the map.</li>
                        <li>Soviet units that are in the ZOC of an enemy unit and also in Emergency Supply or OOS suffer an additional die roll modifier on their
                            surrender roll.</li>
                        <li>Cannot do Unit Conversion</li>
                        <li>Cannot receive replacements, except for Soviet units which can still absorb Zap units.</li>
                    </ul>
                </div>
            </div>

            <span className="spacer2rem" />

            <span>
                <div className="subheader-image">
                    <span>6.8</span>
                    <div>Attack Supply</div>
                    <img src={supplystrip} alt="supply counters" />
                </div>
                <span className="spacer1rem" />
                <div>
                    Attack Supply is <span className="b">not required to conduct combat</span>. However, units that attack without Attack Supply suffer the following negative effects.
                </div>
            </span>













            <div>
                <div className="gray-box">
                   <div className="subsubheader">Effects of attacking without Attack Supply:</div>
                    <ul>
                        <li>+2 die modifier on combat table roll.</li>
                        <li>Artillery cannot provide support.</li>
                        <li>Results marked with * on the combat table cause additional losses to the attacker.</li>
                        <li>German panzer or German motorized divisions do not get the Divisional Integrity Bonus in an attack if any of its
                            member units participating in the attack are OOS, unless they are given Attack Supply for that attack.</li>

                    </ul>
                </div>
            </div>


            <span className="spacer1_5rem" />
            <div>
                <div>
                    To use Attack Supply for a combat all units that are participating in the attack, including any artillery units, must be able to trace a LOC (7 or 5 hexes, depending on the current General Supply LOC length) to the Attack Supply unit, either a Mobile Supply counter or a Supply Dump. The Attack Supply point is consumed (either remove the Mobile Supply counter, or flip a Supply Dump back over to its Mobile Supply side), and then the attack can proceed as a Combat Supplied attack. It doesn't matter if you have only one unit attacking or 20 with 4 artillery units providing support - 1 attack uses 1 Attack Supply, but you might have to use 2 (or more) in order to reach every attacking unit. Of course, its a good idea to have your Attack Supply close enough so that it reaches all attacking units so you only need to spend 1 Attack Supply.
                </div><div>
                    Note that when the odds are 9-1 or greater, the expenditure of Attack Supply is usually not necessary.
                </div><div>
                    A Attack Supply counter has two sides to it. One side is the Mobile Attack Supply unit. The other side is a Attack Supply Dump. Mobile Attack Supply units can move on their own, or be transported by rail. If you have two Mobile Attack Supply units in the same hex, they can be flipped to a single Attack Supply Dump. If you wish to move a Attack Supply Dump, then you have to sacrifice a point of Attack Supply by simply flipping the Attack Supply Dump to its Mobile Attack Supply side, then you can move it. You can not later turn this single unit back to its Attack Supply Dump unless it is joined by another Mobile Attack Supply unit later. Once you make the decision to flip a dump to its mobile side, you lose that point of Attack Supply.
                </div><div>
                    Attack Supply units cannot be captured. If the hex they are in is entered by an enemy unit, the Attack Supply is removed from the map.
                </div><div>
                    Both sides get a maximum number of Attack Supply counters to use in each scenario (except some training scenarios). This is a hard limit, you can not add more Attack Supply counters beyond this limit (although you're free to create dumps as much as you can with the available Mobile Supply units). Each side gets a certain maximum number of Mobile Attack Supply units that can be brought onto the map each turn. If all Attack Supply counters are on the map, then you don't get to bring any new ones onto the map. Typically, the Axis are constantly expending their Attack Supply, and therefore have a constant stream of Mobile Attack Supply units entering the map, often by rail. The Soviets, since they usually don't attack too often, sometimes get "maxxed" out on their Attack Supply units because the limit of Attack Supply units allocated to them are all on the map waiting to get used.
                </div><div>
                    For example, lets say your Attack Supply allotment is 4 Attack Supply points a turn. If, on a turn, you only have 1 Attack Supply unit available to be brought in (because the rest are on the map), then you bring only 1 in (the one available, even though you qualify for 4). They do not accumulate to the next turn. The next turn you can still only bring in the set maximum of 4 again.
                </div><div>
                    For the Axis, its important to keep attacking (in good odds attacks) and expending your Attack Supply. You don't want to get "maxed" out on Attack Supply sitting on the map because it probably means you are not using your troops effectively enough. Get them up front and attacking. Especially the panzer divisions. An idle panzer division is a bad thing.
                </div>
            </div>










            <ScrollToTopOnMount />



        </div>
    );
}

export default Supply;