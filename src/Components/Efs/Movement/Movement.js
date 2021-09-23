import React from 'react';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
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
                    <span>23.41</span>
                    <div>Super-heavy artillery</div>
                    <img src={german_superheavy} alt="German Super-heavy artillery" />
                    <img src={germansuperheavy} alt="German super heavy artillery at Sevastopol" />
                </div>
                <div className="spacer1rem" />
                <div className="pdiv">
                    Super-heavy artillery (marked by unit symbol and green movement rate) are very restricted in how they can move:
                    <ul className="bare-ul">
                        <li>They can be transported by railroad movement. They must be in "move" mode before getting on a train.</li>
                        <li>They can move along connected Main Road or Motorway hexes at the rate of 1 mp per hex, under all weather conditions.</li>
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
                    They can always move 1/2 their movement during the Soviet Motorized Movement Phase, and then full movement during the Regular Movement Phase. 
                    They do not suffer from the -2 MP penalty for being OOS. 
                    Cavalry units with a yellow MA can conduct Infiltration Movement.  <span className="rule-ref">11.52.b, 10.13.d,e</span>
                    Cavalry units can conduct overruns. If the overrun fails, the cavalry unit takes the first hit. <span className="rule-ref">11.41</span>
                    They do not have the "retreat before combat option" capability that you see in some other games.
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
                    <div>Bridges</div>
                    <img src={german_bridge} alt="German bridge" />
                    <img src={german_pontoon_bridge} alt="German pontoon bridge" />
                </div>
                <div className="spacer1rem" />
                <p>
                    Players may get some bridge units, depending on the scenario. These bridge units allow movement across a river or major river without having to pay the river crossing costs. Bridge units cannot be destroyed or captured. If an enemy unit enters the hex with the bridge unit, it is removed from the map and returned to the owning player, who may place it again during the next turn. Roads (major and minor) and railroads that go across rivers are assumed to have bridges there. Those bridges also never get destroyed, and are always available to both sides.
               </p>
                <p>
                    <span className="b">There has been a change to the bridge placement rules</span>: In the first version of the system, players were able to freely move bridge units during the movement phase and place them where they wanted (once a movement phase). Now the rule has been changed: bridge units are placed during the supply determination phase with their "under construction" side up. If the river being bridged is a regular river (not major) then it is flipped over to its operating bridge side at the beginning of your regular (not motorized) movement phase. If its a major river, then you have to wait until the engineering phase to turn them over.
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
                <div className="subheader-image header-1-image infiltration">
                    <div>Infiltration Movement</div>
                    <img src={infiltration_movement_example} alt="Infiltration movement example" />
                </div>
                <div className="pdiv">
                Motorized and Cavalry units with yellow movement factors can do something similar to 1-Hex Movement called Infiltration Movement. It allows them to move directly from enemy ZOC to adjacent enemy ZOC. This movement of 1 hex uses up all the MPs of the motorized unit or stack of motorized units.
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
                </ul>
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



                <div className="movement-phases">
                    <div className="axis">
                        <div>L'ordre des phases pour le joueur de l'Axe est:</div>
                        <div className="phases">
                            <div>Mouvement régulier</div>
                            <img src={right_arrow} alt="right arrow" />
                            <div>Combat</div>
                            <img src={right_arrow} alt="right arrow" />
                            <div>Mouvement motorisé</div>
                        </div>
                    </div>
                    <div className="soviet">
                        <div>L'ordre des phases pour le joueur Soviétique est:</div>
                        <div className="phases">
                            <div>Mouvement motorisé</div>
                            <img src={right_arrow} alt="right arrow" />
                            <div>Combat</div>
                            <img src={right_arrow} alt="right arrow" />
                            <div>Mouvement régulier</div>
                        </div>
                    </div>
                </div>

                <div className="spacer2rem" />
                <p>
                    Comme vous pouvez le constater, les Sov iètiques sont dèsavantagès. Le joueur Allemand peut dèplacer toutes ses unitès pour prèparer les combats, mais le joueur Soviétique ne peut dèplacer que ses unitès motorisèes avant le combat. Par contre, le joueur Soviétique a une capacitè limitè è dèplacer quelques unitès non motorisèes pendant la Phase de Mouvement Motorisè Soviétique si un QG "Active" une unitè non-motorisèe. Ceci sera expliquè dans la section des "QG". En 1941 les Soviétiques avaient de gros problèmes pour coordonner les blindès et l'infanterie, et il semble mème que certains chefs sur le terrain n'essayaient mème pas de les coordonner, ils envoyaient bètement charger les blindès, sans soutien de combat.
                </p><p>
                    <span className="b">Le Tableau des Effets du Terrain</span> sera constamment utilisè, car il est très complet, et il existe beaucoup de coèts diffèrents pour plusieurs types et combinaisons de terrains. Il y a des colonnes pour un temps "Clair", "Pluvieux", "Gel" et "Arctique". Il existe plusieurs subtilitès dans les règles de mouvement. -
                </p>










                <div className="spacer2rem" />

                <div className="subheader-image header-2-image">
                    <div>Artillerie Super Lour</div>
                    <img src={german_superheavy} alt="Artillerie Super Lour" />
                    <img src={germansuperheavy} alt="Artillerie Super Lour Sevastopol" />
                </div>
                <div className="spacer1rem" />
                <div className="pdiv">
                de l'artillerie super lourde (avec un facteur de mouvement vert) a beaucoup de restriction sur sa faèon de se dèplacer: 
                    <ul className="bare-ul">
                        <li>Elle peut ètre transportèe par mouvement ferroviaire. Elle doit ètre en mode "mouvement" avant de prendre le train.</li>
                        <li>Elle peut se dèplacer le long des Routes Principales ou des autoroutes au coèt de 1PM par hex, quelle que soit la condition mètèo.</li>
                        <li>Elle peut aussi se dèplacer sur les routes secondaires au coèt de 1PM par hex par temps clair si il n'y a pas de pluie prolongèe. </li>
                        <li>Elle peut utiliser le mouvement stratègique sur les Autoroutes ou Routes Principales. Elle ne peut pas faire de mouvement stratègique sur les Routes Secondaires.</li>
                        <li>Si une artillerie super lourde est sur une route secondaire et qu'il se met è pleuvoir - elle reste bloquèe jusqu'au retour du beau temps.</li>
                        <li>Si une artillerie super lourde subit un rèsultat de retraite, elle ne peut retraiter que si elle est sur son cètè mobile. Si elle est sur son cètè tir, elle est dètruite. Si elle est sur son cètè mobile, elle ne peut retraiter que par des hexs de Routes Principales ou d'Autoroutes (ou sur une Route Secondaire si le temps et clair et qu'il n'y a pas de pluie prolongèe), sinon elle est dètruite.</li>
                        <li>L'artillerie super lourde ne peut changer de mode que pendant la Phase du Gènie. Elle ne peut passer sur son cètè "tir" que si elle n'a pas bougè pendant le tour. Si vous le souhaitez, placez des marqueurs au dèbut de votre phase de mouvement sur les unitès d'artillerie super lourde pour penser è ne pas les dèplacer afin de pouvoir les retourner en mode tir.</li>
                        <li>Notez que l'artillerie super lourde Non Ravitaillèe peut ne pas ètre capable de bouger, car la pènalitè de -2PM peut amener sa capacitè de mouvement è 0.</li>
                    </ul>
                </div>



                <div className="spacer2rem" />

                <div className="subheader-image header-2-image">
                    <div>Cavalerie Soviétique	</div>
                    <img src={soviet_cavalry} alt="Cavalerie Soviétique	" />
                    <img src={soviet_cossack} alt="Cavalerie Soviétique	 Kiev, 1942" />
                </div>
                <div className="spacer1rem" />
                <p>
                Les unitès de cavalerie Soviétique peuvent bouger pendant les Phases de Mouvement Motorisè et Règulier. Elles peuvent toujours se dèplacer de la moitiè de leur mouvement pendant la Phase de Mouvement Motorisè, et de toute leur capacitè de mouvement pendant la Phase de Mouvement Règulier. Elles ne subis sent pas la pènalitè de -2PM si elles sont Non Ravitaillèes. Elles n'ont pas la capacitè "option de retraite avant combat" que vous pouvez voir dans d'autres jeux.
                </p>


                <div className="spacer1rem" />
                <div className="subheader-normal">Quitter une route</div>
                <p>
                EFS est très strict sur la faèon de bènèficier du mouvement sur route. Vous ne pouvez bènèficier du mouvement sur route que si vous entrez dans un hex par une route, et que vous restez sur cette route (ou sur une route diffèrente relièe è celle que vous venez d'utiliser). Si vous entrez dans l'hex "A" par une route et qu'ensuite vous entrez dans l'hex "B" et que la route qui s'y trouve n'est pas relièe è l'hex "A", alors vous ne pouvez pas bènèficier du mouvement sur route dans l'hex "A". Vous devrez payer le coèt normal pour entrar en "A" comme si la route n'existait pas. Ce type de règles est inhabituel dans un wargame, mais c'est logique. Si vous "quittez" la route dans un hex, alors vous ètes è travers champs "dans cet hex" et vous traversez le terrain qui s'y trouve. Par contre, les routes ont des ponts pour traverser les rivières et vous pouvez les utiliser, mème si vous quittez la route après avoir traversè la rivière.
                </p>
                <p>
                Cette règle a un effet pervers. Vous pouvez "terminer" votre mouvement dans un hex avec une route en appliquant le bènèfice de la route. Puis è la prochaine phase de mouvement vous pouvez quitter la route sans avoir è "rembourser" les PM de la phase de mouvement prècèdente. En utilisant cette mèthode vous pourrez extraire des unitès "coincèes" sur une route è travers un type de terrain interdit et les faire "s'enfuir" dans un hex non interdit adjacent.
                </p>

                <div className="spacer1rem" />
                <div className="subheader-image header-1-image">
                    <div>Routes Secondaires Sous la Pluie</div>
                    <img src={mudroad} alt="Routes Secondaires Sous la Pluie" />
                </div>
                <p>
                Les Routes Secondaires sont considèrèes comme disparaissant totalement lors des tours de Pluie. Les unitès motorisèes payent le coèt de l'autre terrain dans l'hex lorsqu'elles se dèplacent sur une Route Secondaire par temps de Pluie. L'exception est le Bois - N'ajoutez pas le coèt d'un Bois lors d'un dèplacement sur une Route Secondaire è travers Bois pendant un tour de Pluie. Les unitès peuvent toujours faire un Mouveme nt Stratègique sur une Route Secondaire par temps de Pluie, bien que cela ne change pas le coèt d'entrèe dans l'hex.
                </p>

                <div className="spacer1rem" />
                <div className="subheader-image header-1-image">
                    <div>Autoroute Minsk-Smolensk-Moscou</div>
                    <img src={motorway} alt="Autoroute Minsk-Smolensk-Moscou" />
                </div>


                <div className="pdiv">
                L'autoroute dans Army Group Center a des restrictions d'utilisation. L'Autoroute ètait si importante pour le mouvement du ravitaillement et des renforts pour les avancèes sur Smolensk et Moscou que les Allemands contrèlaient strictement qui pouvait l'utiliser. 
                <ul className="bare-ul">
                        <li>Seules les unitès de l'Axe Motorisèes, avec une CM orange ou verte peuvent bènèficier du mouvement routier sur l'Autoroute. L'artillerie super lourde est toujours limitèe è un hex par PM.</li>
                        <li>Pour toutes les autres unitès, elles peuvent se dèplacer sur l'autoroute mais doivent payer le coèt de l'autre terrain dans l'hex, comme si l'autoroute n'existait pas.</li>
                        <li>Les forces Soviétiques peuvent bènèficier de l'autoroute sans restrictions.</li>
                    </ul>
                </div>

                <div className="spacer1rem" />
                <div className="subheader-image header-1-image">
                    <div>Comment les Voies Ferrèes sont parfois traitèes comme des routes</div>
                    <img src={german_troops_railroad} alt="Comment les Voies Ferrèes sont parfois traitèes comme des routes" />
                </div>
                <div className="pdiv">
                    <ul className="bare-ul">
                        <li>En se dèplaèant le long d'une voie ferrèe (sans utiliser le mouvement ferroviaire) dans un bois, soustraye z un au coèt de mouvement pour entrer dans cet hex.</li>
                        <li>En se dèplaèant le long d'une voie ferrèe par dessus un cètè d'hex de Rivière ou Rivière Majeure, l'unitè ignore le coèt de traversèe de cette Rivière ou Rivière Majeure.</li>
                        <li>Les unitès d'artillerie peuvent traverser une Rivière Majeure le long d'une voie ferrèe.</li>
                        <li>Les unitès motorisèes (et celles avec une CM orange) peuvent entrer dans un hex d'ètang en se dèplaèant le long d'une voie ferrèe. Le coèt est de 3PM par hex.</li>
                        <li>Pendant les tours de Pluie, les unitès motorisèes ètendent leurs ZDC dans les hexs adjacents uniquement le long d'une route ou d'une voie ferrèe.</li>
                        <li>Une voie ferrèe peut permettre è une LOC de traverser un hex d'ètang pendant un tour de temps Clair ou Pluvieux.</li>
                    </ul>
                </div>

                <div className="spacer1rem" />

                <div className="subheader-image header-2-image">
                    <div>Des ponts</div>
                    <img src={german_bridge} alt="Des ponts" />
                    <img src={german_pontoon_bridge} alt="Des ponts" />
                </div>
                <div className="spacer1rem" />
                <p>
                Les joueurs peuvent obtenir des unités de bridge, selon le scénario. Ces unités de pont permettent de traverser une rivière ou une rivière importante sans avoir à payer les coûts de traversée de la rivière. Les unités de pont ne peuvent être ni détruites ni capturées. Si une unité ennemie entre dans l’hex avec l’unité pont, elle est retirée de la carte et renvoyée au joueur propriétaire, qui peut la replacer au tour suivant. Les routes (majeures et mineures) et les chemins de fer traversant des rivières sont supposés avoir des ponts à cet endroit. De plus, ces ponts ne sont jamais détruits et sont toujours disponibles pour les deux côtés.
               </p>
                <p>
                    
                   <span className="b">Les règles de positionnement des ponts ont été modifiées:</span> dans la première version du système, les joueurs pouvaient déplacer librement les unités de pont pendant la phase de mouvement et les placer où ils le souhaitaient (une fois par phase). La règle a maintenant été modifiée: les unités de pont sont placées pendant la phase de détermination de l'offre avec leur côté "en construction" orienté vers le haut. Si la rivière à ponter est une rivière normale (non majeure), elle est basculée du côté de son pont en fonctionnement au début de votre phase de circulation normale (non motorisée). Si c'est un fleuve majeur, alors vous devez attendre la phase d'ingénierie pour les retourner.
               </p>

                <div className="spacer1rem" />
                <div className="subheader-normal">Mouvement Minimlal</div>
                <div className="pdiv">
                es unités peuvent être en mesure de se déplacer d'un hex même si les coûts impliqués sont supérieurs à l'indice de mouvement de l'unité. Un mouvement hexagonal peut se produire dans n'importe quelle phase de mouvement.
                    <ul className="bare-ul">
                        <li>Le Mouvement Minimal est interdit pendant les tours de Pluie, ou dans les bois pendant une pluie prolongèe.</li>
                        <li>Le Mouvement Minimal est interdit depuis un hex en ZDC ennemie vers un hex adjacent ègalement en ZDC ennemie (mais le mouvement d'INFILTRATION est possible).</li>
                        <li>Le Mouvement Minimal è travers une Rivière Majeure sans pont est autorisè pendant la Phase de Mouvement Règulier (oui èa marche aussi pour les unitès motorisèes Soviétiques). Il peut ètre fait vers un hex de l'autre cètè de la Rivière Majeure se trouvant en ZDC ennemie, tant que l'unitè ne commence pas son mouvement en ZDC ennemie.</li>
                        <li>Les unitès motorisèes ne peuvent pas faire de Mouvement Minimal pendant la Phase de Rèaction si elles sont sous un marqueur Non Ravitaillè.</li>
                    </ul>
                </div>


                <div className="spacer2rem" />
                <div className="subheader-image header-1-image infiltration">
                    <div>Mouvement d'Infiltration</div>
                    <img src={infiltration_movement_example} alt="Mouvement d'Infiltration" />
                </div>
                <div className="pdiv">
                Les unitès motorisèes avec un facteur de mouvement jaune peuvent faire une chose similaire au Mouvement Minimal qui est appelè le Mouvement d'Infiltration. Il leur permet de bouger directement d'une ZDC ennemie è une autre ZDC ennemi adjacente. Ce mouvement d'1 hex utilise tous les PM de l'unitè ou de la pile motorisèe.
                    <ul className="bare-ul">
                        <li>Le Mouvement d'Infiltration Allemand ne peut se produire que pendant la Phase de Mouvement Règulier Allemande.</li>
                        <li>Le Mouvement d'Infiltration Soviétique ne peut se produire que pendant la Phase de Mouvement Motorisè Soviétique.</li>
                        <li>Le Mouvement d'Infiltration est interdit pendant les tours de Pluie, ou dans les bois pendant une pluie prolongèe.</li>
                        <li>Le Mouvement d'Infiltration est interdit è travers les lignes fortifièes ennemies qui ne sont pas dètruites et è travers les fortins ennemis.</li>
                        <li>Le Mouvement d'Infiltration est interdit è travers les cètès d'hexs de Rivières Majeures sans ponts.</li>
                        <li>Le Mouvement d'Infiltration est interdit vers ou depuis un hex de ville majeure.</li>
                    </ul>
                </div>



                <div className="spacer2rem" />
                <div className="subheader-image header-1-image">
                    <div>Transport Aèrien</div>
                    <img src={L760} alt="Transport Aèrien" />
                </div>
                <p>
                Les joueurs peuvent recevoir des points de transport aèrien dans un scènario. Toutes les unitès de type aèroportè, toutes les URM et les QG Soviétiques peuvent se dèplacer par transport aèrien. Les unitès aèrotransportèes doivent commencer et terminer dans un hex ami de village, ville ou ville majeure, ou depuis la Zone Prète de la fiche aèrienne. Les villages ne peuvent pas ètre utilisès pour le transport aèrien lorsqu'il pleut è moins qu'une unitè du gènie ne soit aussi prèsente dans l'hex. Il n'y a pas de limitation de portèe, et le transport aèrien ne peut pas ètre interceptè par les unitès aèriennes ou le tir AA ennemi. Les unitès ne peuvent pas commencer ou terminer leur transport aèrien dans un hex adjacent è une unitè ennemie. Le transport aèrien ne peut pas commencer ni se terminer dans une Zone d'Interdiction ennemie. Bien que les règles ne soient pas spècifiques - le bon sens devrait dèterminer qu'un hex "ami" est de "votre" cètè du front, ou des hexs encerclès par des unitès ennemies mais contenant encore des unitès amies. Le transport aèrien est pratique pour garder en vie vos prècieux QG.               
                </p>




                <div className="spacer1rem" />
                <div className="subheader-normal">Dèbordement</div>
                <p>
                Bien que très proche du combat, le dèbordement fait partie du mouvement. 
                </p>
                <div className="pdiv">
                Pendant les Phases de Mouvement Motorisè ou Règulier, une unitè ou une pile motorisèe commenèant sa phase dans le mème hex pe ut tenter de dèborder un hex occupè par l'ennemi. Pour cela, elles doivent atteindre le rapport de forces minimum, puis faire un jet de dè sur la Table de Dèbordement. Le Ravitaillement d'Attaque n'est pas utilisè ici, et l'artillerie ne peut pas participer. Les unitès d'artillerie en dèfense ne se dèfendent qu'avec leur facteur de dèfense. Aucune unitè aèrienne ne peut participer. Les unitès qui dèbordent doivent rester empilèes. L'hex adjacent è la cible è dèborder ne peut pas se trouver en ZDC ennemie, en dehors de la ZDC des unitès dèbordèes. Aucune unitè qui dèborde ne peut ètre Non Ravitaillèe. Le dèbordement est interdit si les unitès font un Mouvement Minimal. Les unitès qui dèbordent doivent ètre capable de payer tous les coèts de mouvement, plus le coèt d'entrèe dans l'hex occupè par l'ennemi (moins le coèt d'entrèe dans une autre ZDC ennemie), plus 1PM. Les restrictions suivantes s'appliquent aussi:                
                <ul className="bare-ul">
                    <li>Le dèbordement ne peut se produire que par temps Clair ou Gel.</li>
                    <li>Le dèbordement est interdit è travers les Rivières Majeures.</li>
                    <li>Le dèbordement est interdit è travers les cètès d'hexs de mer/lac.</li>
                    <li>Le dèbordement dans un hex d'ètang n'est autorisè que si le temps est Gel.</li>
                    <li>Le dèbordement contre une ville, une ville majeure, un fortin ou è travers une ligne fortifièe nècessite la prèsence d'une unitè du gènie motorisèe.</li>
                </ul>
                </div>
                <p>
                Voir la Table de Dèbordement pour le rapport de forces minimum et les DRM. Si le dèbordement rate, les unitès qui dèbordent sont supposèes avoir dèpensè tous leurs PM. Si le dèbordement rèussit, la pile qui dèborde peut continuer de bouger si il lui reste des PM. Si les unitès en dèfense retraitent, c'est le joueur qui dèborde qui les fait retraiter de deux hexs. Les unitès qui dèbordent reèoivent un marqueur de dèbordement (overrun). Tant que ce marqueur les recouvre, elles ne projettent pas de ZDC, ne peuvent pas fournir de soutien d'artillerie (pour les unitès d'artillerie), et ne sont pas èligibles pour le mouvement de rèaction. Les QG dèbordès sont retournès sur leur face non-op. Les unit ès dèbordèes, ou qui ont rèsistè è un dèbordement peuvent ètre la cible d'une autre tentative de dèbordement au cours de la mème phase de mouvement. 
                </p>



                <div className="spacer1rem" />
                <div className="subheader-normal">Quelques autres Règles de Mouvement</div>
                <div className="pdiv">                
                <ul className="bare-ul">
                    <li>Les ZDC ennemies coètent +1PM pour entrer dans l'hex (exception : Mouvement de Rèaction).</li>
                    <li>Toutes les routes (Principales et Secondaires) et les voies ferrèes sont supposèes avoir un pont lorsqu'elles traversent n'importe quel type de rivière. Les ponts ne peuvent pas ètre dètruits dans EFS, nèanmoins, les deux camps peuvent recevoir des unitès de pontonniers afin de pouvoir crèer des ponts supplèmentaires, tant que l'unitè de pontonnier reste adjacente è la rivière.</li>
                    <li>La neige transforme les rivières en terrain sans effet. La neige transforme les Rivières Majeures en cètè d'hex avec un coèt de +1.</li>
                    <li>Lorsque la pluie prolongèe s'applique (elle dure toujours 1 tour après que le temps soit passè de Pluie è Clair) tous les hexs de bois sont supposès se trouver encore en temps Pluvieux. Si vous tracez une LDC, elle pourra faire 7 hexs par temp s Clair, mais si vous passez par un hex de bois en pluie prolongèe, alors la LDC est rèduite è 5 hexs.</li>
                    <li>Les hexs de ville et de ville majeure sont toujours supposès ètre des extensions de toute route ou voie ferrèe qui y entre. De plus, ils coètent toujours 1/2 PM pour y entrer, quelle que soit la mètèo.</li>
                    <li>Les lignes fortifièes coètent +1PM pour les traverser, et les hexs de fortins coètent +1PM pour y entrer, mais une combinaison de ligne fortifièe et de fortin ne coète que +1PM et non +2.</li>
                    <li>Note (a), lorsqu'il est prèsent pour un coèt, il crèe une pènalitè de +1PM pour toutes les unitès motorisèes, sauf les blindès Soviétiques. Les blindès Soviétiques avaient des chenilles plus larges que tous les autres vèhicules et pouvaient mieux nègocier les terrains boueux ou marècageux.</li>
                    <li>Marcher (ou conduire) le long d'une voie ferrèe apporte un bènèfice de -1PM pour traverser un hex de bois.</li>
                </ul>
                </div>


                









            </span>


            <ScrollToTopOnMount />

        </div >
    );
}

export default Movement;