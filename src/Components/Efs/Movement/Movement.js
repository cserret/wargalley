import React from 'react';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
import BsrLink from "../BsrLink/BsrLink";
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
import soviet_cossack from "../../../images/efs/movement/soviet_cossack.png";
import germansuperheavy from "../../../images/efs/movement/germansuperheavy.jpg";
import german_pontoon_bridge from "../../../images/efs/movement/german_pontoon_bridge.png";
import german_troops_railroad from "../../../images/efs/movement/german_troops_railroad.png";
import mudroad from "../../../images/efs/movement/mudroad.jpg";
import right_arrow from "../../../images/efs/right_arrow.png";

import './Movement.scss';

const Movement = (props) => {
    return (
        <div className="content">

            <div className="content-title">
                <div>MOVEMENT</div>
                <div></div>
            </div>

            <div className="generic-flex-space-around road-signs">
                <img src={roadsigns} alt="road signs" />
            </div>
            <div className="spacer1rem" />

            <span>
                <p>
                    The movement rules form the core of the EFS system. There are various kinds of movement, and there are different phases in which movement can occur. Ground units are typically either non-motorized (foot or horse drawn) or motorized. But color coding on the movement factors of the counters can specify finer distinctions within these two types.
                </p><p>
                    Units move hex by adjacent hex (except for air transport). Hexes on the map each represent about 5 miles / 8 km.
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
                        <li><span className="slight-bold">Blue movement factor</span> - Flotilla/Naval movement only.</li>
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
                    <div className="axis">
                        <div>The order of phases for the Axis player is:</div>
                        <div className="phases">
                            <div>Regular Movement</div>
                            <img src={right_arrow} alt="right arrow" />
                            <div>Combat</div>
                            <img src={right_arrow} alt="right arrow" />
                            <div>Motorized Movement</div>
                        </div>
                    </div>
                    <div className="soviet">
                        <div>The order of phases for the Soviet player is:</div>
                        <div className="phases">
                            <div>Motorized Movement</div>
                            <img src={right_arrow} alt="right arrow" />
                            <div>Combat</div>
                            <img src={right_arrow} alt="right arrow" />
                            <div>Regular Movement</div>
                        </div>
                    </div>
                </div>

                <div className="spacer2rem" />
                <p>
                    As you can see, the Soviets are at a disadvantage. The Axis player gets to move all his units to set up combats, but the Soviet player can only move motorized units before combat. However, the Soviet player does have a limited ability to move some non-motorized units during the Soviet Motorized Movement Phase by having a headquarters "Activate" a non-motorized unit. This will be discussed in the section under "Headquarters". In 1941 the Soviets had big problems in coordinating armor with infantry, and it seems that sometimes commanders on the ground did not even try to coordinate them, and just sent the armor charging ahead, willy nilly, into combat unsupported.
                </p><p>
                    The <span className="b">Terrain Effects Chart</span> will need to be referred to constantly, as it is extensive, and has many different costs for different kinds, and combinations, of terrain. There are different columns for "Dry" weather, "Mud", "Frost", and "Arctic". There are some subtleties in the movement rules -
                </p>

                <div className="spacer2rem" />

                <div className="subheader-image header-2-image">

                    <div>Super-heavy artillery<BsrLink page="32" rule="13.4" /></div>
                    <img src={german_superheavy} alt="German Super-heavy artillery" />
                    <img src={germansuperheavy} alt="German super heavy artillery at Sevastopol" />
                </div>
                <div className="spacer1rem" />
                <div className="pdiv">
                    Super-heavy artillery (marked by unit symbol and green movement rate) are very restricted in how they can move:
                    <ul className="bare-ul">
                        <li>They can be transported by railroad movement. They must be in "move" mode before getting on a train.</li>
                        <li>They can move along connected Main Road or Motorway hexes at the rate of 1/2 mp per hex, under all weather conditions.</li>
                        <li>They can also move along connected Minor Roads at the rate of 1 mp per hex during Dry Weather with no Lingering Mud. </li>
                        <li>They can utilize strategic movement along a Motorway or Main Road. They cannot do strategic movement on a Minor Road.</li>
                        <li>If a super-heavy artillery is on a Minor Road when Mud occurs - it is stuck until totally dry weather returns.</li>
                        <li>If a super-heavy gets a retreat result on it, it can only retreat if it is on its mobile side. If it is on its firing side it is destroyed. If its on its mobile side, it can only retreat along Main Road or Motorway hexes (or along a Minor Road if the weather is Dry with no Lingering Mud), otherwise it is destroyed.</li>
                        <li>Super-heavy artillery can only change mode during the Engineering Phase. It can only change to its "firing" side if it did not move that turn. You might want to mark the super-heavy with some marker at the beginning of your movement phase so that you'll know not to move it so it can qualify to flip to firing mode.</li>
                        <li>Note that super-heavy artillery that is OOS may not be able to move at all, since the -2 MP effect of being OOS may bring its movement rate down to 0.</li>
                    </ul>
                </div>



                <div className="spacer2rem" />

                <div className="subheader-image header-2-image">
                    <span>6.71, 22.12a</span>
                    <div>Soviet cavalry</div>
                    <img src={soviet_cavalry} alt="Soviet cavalry" />
                    <img src={soviet_cossack} alt="Soviet Cossack commander at Kiev, 1942" />
                </div>
                <div className="spacer1rem" />
                <p>
                    Soviet cavalry units can move during both Motorized and Regular Movement Phases.
                    <ul className="bare-ul">
                        <li>They can always move 1/2 their movement during the Soviet Motorized Movement Phase, and then full movement during the Regular Movement Phase.</li>
                        <li>They do not suffer from the -2 MP penalty for being OOS. </li>
                        <li>Cavalry units with a yellow MA can conduct Infiltration Movement.  <span className="rule-ref">11.52.b, 10.13.d,e</span> </li>
                        <li>Soviet (not Axis) cavalry units can conduct overruns. If the overrun fails with a Soviet cavalry unit, that cavalry unit takes the first hit. <BsrLink page="26" rule="11.37j" /></li>
                        <li>They do not have the "retreat before combat option" capability that you see in some other games.</li>
                    </ul>
                </p>


                <div className="spacer1rem" />
                <div className="subheader-rule">
                    <span>10.7 Ex. 4</span>
                    <div>Exiting a Road</div>
                </div>
                <p>
                    EFS is strict as to when you can benefit from road movement. You can only benefit from road movement if you enter a hex on a road, and stay on that road (or to a different road that connects to the road you were using) as you exit it. If you enter, say, hex "A" along a road, but then move a hex "b" that the road does not connect to (from "A" to "B"), then you cannot claim the road benefit when you initially went into hex "A". You would have to pay normal costs to enter "A" as if the road didn't even go there. This kind of rule is unusual in a wargame, but it makes logical sense. If you "leave" the road inside a hex, then you are getting off the road "in that hex" and going right into the terrain that hex has. However, roads will provide a bridge to get across rivers, even if once after getting on the hex across the river you leave that road.
                </p>
                <p>
                    This rule has a little wiggle room. You could "end" your movement in a phase in a hex with a road and claim the road benefit. Then in the next movement phase you can leave that road and not worry about "paying back" for the previous movement phase. Using this method you could extract units that were otherwise "trapped" on a road going through otherwise prohibited terrain and "escape" into a non-prohibited hex that is next to it.
                </p>

                <div className="subheader-image stalin">
                    <span>10.75c2</span>
                    <div>Minor roads in mud</div>
                    <img src={mudroad} alt="muddy road" />
                </div>

                <p>
                    Minor Roads are considered to all but disappear in Mud turns. Motorized units must pay cost for the other terrain in the hex when moving along a Minor Road during Mud. The exception is Woods - do not add Woods cost while traveling along a Minor Road through Woods in Mud. Units can still do Strategic Movement along Minor Roads in Mud, though it doesn't change the cost of entering the hexes.
                </p>

                <div className="spacer2rem" />
                <div className="subheader-image header-1-image">
                    <div>Minsk-Smolensk-Moscow Motorway</div>
                    <img src={motorway} alt="Minsk-Smolensk-Moscow Motorway" />
                </div>

                <div className="pdiv">
                    (<span className="i">Barbarossa: Army Group Center only</span>) The Motorway in Army Group Center has special restrictions on its use. The Motorway was so important for the movement of supplies and critical reinforcements to the drive on Smolensk and Moscow that the Germans strictly controlled who and want could utilize this very important highway.
                    <ul className="bare-ul">
                        <li>Only Axis motorized, Orange MA, and Green MA units may benefit from the road rate on the Motorway. Super-Heavy artillery is still, though, restricted to one hex per MP.</li>
                        <li>For all other units, they can move along the Motorway but they have to pay the costs of other terrain in the hex, as if the Motorway wasn't even there.</li>
                        <li>Soviet forces can use the beneficial Motorway rates without these restrictions.</li>
                    </ul>
                </div>

                <div className="spacer2rem" />
                <div className="subheader-image header-1-image">
                    <div>How Railroads are sometimes treated like a road</div>
                    <img src={german_troops_railroad} alt="German troops walking along railroad" />
                </div>
                <div className="pdiv">
                    <ul className="bare-ul">
                        <li>When moving along a railroad (not using rail movement) in woods, subtract 1 from the movement cost to enter that hex.</li>
                        <li>When moving along a railroad over a River or Major River hexside, the unit ignores the cost of crossing that river or Major River hexside.</li>
                        <li>Artillery units can cross a Major River along a railroad.</li>
                        <li>Motorized units (and those with Orange MAs) may enter a swamp hex moving along a railroad. The cost is 3 MP per hex in any weather condition.</li>
                        <li>During mud turns, motorized units extend their ZOCs into surrounding hexes only if it is along a road or railroad.</li>
                        <li>A railroad can allow a LOC to go through a swamp hex during Dry or Mud turns.</li>
                    </ul>
                </div>

                <div className="spacer1rem" />

                <div className="subheader-image header-2-image">
                    <div>Bridges<BsrLink page="56" rule="22.2" /></div>
                    <img src={german_bridge} alt="German bridge" />
                    <img src={german_pontoon_bridge} alt="German pontoon bridge" />
                </div>
                <div className="spacer1rem" />
                <p>
                    Players may get some bridge units, depending on the scenario.
                    These bridge units allow movement across a river or major river without having to pay the river crossing costs.
                    Bridge units cannot be destroyed or captured. If an enemy unit enters the hex with the bridge unit, it is
                    removed from the map and returned to the owning player, who may place it again during the next turn.
                    Roads (major and minor) and railroads that go across rivers are assumed to have bridges there.
                    Those bridges also never get destroyed, and are always available to both sides.
                    Some bridges are printed on the map - those bridges *can* be destroyed.<BsrLink page="57" rule="22.4" />
                </p>
                <p>
                    To place a bridge, the active player can place the counter with the under-construction side next to a river, during the
                    (Axis) Movement Phase or (Soviet) Motorized Movement Phase.
                    The hex the bridge counter is placed in must be in General Supply (the other side of the river isn't required to be in
                    General Supply). A bridge can be constructed where there is a destroyed bridge marker (after the "new" bridge is complete,
                    the bridge marker and the destroyed bridge marker can be removed).
                    Movement over the completed bridge is considered to be road movement.
                </p>

                <div className="spacer1rem" />
                <div className="subheader-normal">One Hex Movement</div>
                <div className="pdiv">
                    Units may be able to move one hex even if the costs involved are higher than the unit's movement rating. One Hex Movement may occur in any movement phase.
                    <ul className="bare-ul">
                        <li>One Hex Movement cannot be performed on Mud turns, or in Woods during lingering Mud turns.</li>
                        <li>One Hex Movement can not be performed from a hex in enemy ZOC to an adjacent hex in enemy ZOC (though it may be able by using INFILTRATION movement).</li>
                        <li>One Hex Movement can only occur across a unbridged Major River in the Regular Movement Phase (yes this includes Soviet Motorized units also). This may be into a hex on the other side of the Major River that is in enemy ZOC, as long as the unit didn't start in enemy ZOC.</li>
                        <li>Motorized units cannot perform One Hex Movement in the Reaction Phase if it bears an OOS marker.</li>
                    </ul>
                </div>


                <div className="spacer2rem" />

                <div className="subheader-image header-2-image">
                    <div className="header-1-image-title">Infiltration Movement<BsrLink page="27" rule="11.4" /></div>
                    <img src={infiltration_movement_example} alt="Infiltration movement example" style={{ height: 'auto' }} />
                </div>

                <div className="pdiv">
                    Infiltration Movement allows eligible units to move directly from enemy ZOC to adjacent enemy ZOC.<br />
                    <div className="spacer0_5rem" />
                    Eligible units:
                    <ul className="bare-ul">
                        <li>Motorized units with a printed Movement Allowance of 7 or greater.</li>
                        <li>Cavalry units with a yellow Movement Allowance.</li>
                        <li>Ski units with a yellow Movement Allowance.</li>
                        <li>Mountain units.</li>
                    </ul>
                    <div className="spacer0_5rem" />
                    Restrictions:<br />
                    <ul className="bare-ul">
                        <li>Axis Infiltration Movement can only occur during the Axis Regular Movement Phase.</li>
                        <li>Soviet Infiltration Movement can only occur during the Soviet Motorized Movement Phase.</li>
                        <li>Infiltration movement cannot be performed on Mud turns, or in Woods during lingering Mud turns.</li>
                        <li>Infiltration movement cannot happen across non-destroyed enemy fortified lines or into enemy Strongpoints.</li>
                        <li>Infiltration movement cannot happen across unbridged Major River hexsides.</li>
                        <li>Infiltration movement cannot occur into or out of major city hexes.</li>
                    </ul>
                </div>



                <div className="spacer2rem" />
                <div className="subheader-image header-1-image">
                    <div>Air Transport</div>
                    <img src={L760} alt="L-750 transport aircraft" />
                </div>
                <p>
                    Players may get air transport points allocated to them in a scenario. All airborne type units, all MSUs, and Soviet HQ's can move by air transport. Air transported units must start and end on a friendly town, city, major city hex, or from the Air Ready box. Towns cannot be used for air transport in Mud conditions unless an engineer is also present in the hex. There is no range restriction, and air transport cannot be opposed by enemy air units or AA Fire. Units cannot start or end their air transport in a hex next to any enemy unit. Air transport cannot start or end in an enemy Zone of Interdiction. Although the rules aren't specific - common sense dictates that "friendly" means hexes on "your" side of the front, or hexes that are cut off by the enemy, but still have friendly units in them. Air transport is useful for saving your valuable HQ's.
                </p>




                <div className="spacer1rem" />
                <div className="subheader-normal">Overrun</div>
                <p>
                    Although similar to combat, overruns are considered part of movement.
                </p>
                <div className="pdiv">
                    During Motorized Movement or regular Movement phases, a motorized unit, or stack of motorized (and/or Cavalry) units that start the movement phase stacked together, may attempt to overrun an enemy occupied hex. To do so they must meet the minimum odds, and then roll on the overrun table. Attack Supply is not used, and no artillery can participate. Defending artillery units only defend with their defence factor. No air units can participate. The overrunning units must remain stacked. The hex adjacent to the target of the overrun cannot be in the ZOC of other enemy units, other than the units that are being overrun. None of the overrunning units can be Out of Supply. Overruns cannot take place if the units are using One Hex Movement. The overrunning units must be able to pay all normal movement costs, plus the cost of entering the enemy occupied hex (minus the cost of entering another enemy ZOC), plus 1 MP. The following restrictions also apply:

                    <ul className="bare-ul">
                        <li>Overruns can only occur in Dry or Frost weather.</li>
                        <li>Overruns cannot be done across Major Rivers.</li>
                        <li>Overruns cannot be done across inland sea/lake hexsides.</li>
                        <li>Overruns into swamp hexes can only occur during Frost weather.</li>
                        <li>Overruns against a city, major city, or strongpoints or across fortified lines require the presence of a motorized engineer.</li>
                    </ul>
                </div>
                <p>
                    See the overrun chart for minimum odds requirements and DRMs. If the overrun fails, the overrunning units are considered to have exhausted all their movement points. If the overrun is successful, the overrunning stack can continue moving if it has MPs left. If the defending units get retreated, then the overrunning player retreats them 2 hexes. Overrun units get an overrun marker put on them. While they have the overrun marker on them, they do not project a ZOC, cannot provide artillery support (if it is an artillery unit), and is not eligible for reaction movement. HQs that get overrun get flipped to their non-op side. Units that got overrun, or that resisted an overrun attempt, may be the target of another overrun attempt in the same movement phase.
                </p>



                <div className="spacer1rem" />
                <div className="subheader-normal">Some other Movement rules</div>
                <div className="pdiv">
                    <ul className="bare-ul">
                        <li>Enemy ZOCs cost an additional +1 movement point to enter (exception: Reaction Movement).</li>
                        <li>All roads (Main and Secondary) and railways are assumed to have a bridge when crossing any type of river. Bridges can not be demolished in EFS, however, both players may be equipped with pontoon units to create additional bridges as long as the pontoon unit remains adjacent to the river.</li>
                        <li>Snow turns Rivers into NE terrain. Snow turns Major Rivers into a +1 cost hexside terrain.</li>
                        <li>When Lingering Mud is in effect (always lasts 1 turn after weather turns from Mud back to Dry) all hexes with woods in them are considered to be in "Mud" weather. If you are tracing a LOC, it would be 7 hexes in Dry weather, but if trace through a Woods hex when its Lingering Mud, then that LOC gets cut down to 5 hexes.</li>
                        <li>City and Major City hexes are always assumed to be also extensions of any road or railroad that goes into them. Plus they are always 1/2 MP to enter during all weather conditions.</li>
                        <li>Fortified hexlines costs +1 MP to cross, and Strongpoint hexes costs +1 MP to enter, but a combination Fortified hexline and Strongpoint hex only costs +1 to cross and enter, not +2..</li>
                        <li>Footnote (a), when it is present for a cost, creates a +1 MP penalty for all motorized units except for Soviet Armor. Soviet Armor had wider tracks than any other vehicles and could negotiate muddy or marshy ground better.</li>
                        <li>Walking (or driving) along a Railroad gives a benefit of -1 MP cost when moving through a hex with Woods in it.</li>
                        <li>Soviet units pay 1 less MP when moving through wood hexes than listed on the TEC. <span className="rule-ref">10.46</span></li>
                    </ul>
                </div>

            </span>

            <ScrollToTopOnMount />

        </div >
    );
}

export default Movement;