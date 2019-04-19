import React from 'react';
import combat from "../../../images/efs/combat/combat.jpg";
import map_combat1 from "../../../images/efs/combat/map_combat1.jpg";
import map_combat2 from "../../../images/efs/combat/map_combat2.jpg";
import declared_attack from "../../../images/efs/combat/declared_attack.gif";
import joseph_stalin from "../../../images/efs/combat/joseph-stalin.jpg";
import combined_arms_bonus from "../../../images/efs/combat/combined_arms_bonus.jpg";
import divisional_integrity from "../../../images/efs/combat/divisional_integrity.jpg";
import german_engineer from "../../../images/efs/combat/german_engineer2.gif";
import artillery_units from "../../../images/efs/combat/artillery_units.jpg";
import soviet_artillery_firing from "../../../images/efs/combat/soviet_artillery_firing.jpg";
import orders_strip from "../../../images/efs/combat/orders_strip.jpg";
import directhit from "../../../images/efs/combat/directhit.jpg";
import counter_additional_retreat from "../../../images/efs/combat/counter_additional_retreat.png";
import counter_no_retreat from "../../../images/efs/combat/counter_no_retreat.png";
import panzer from "../../../images/efs/combat/panzer.png";
import './Combat.scss';

const Combat = (props) => {
    return (
        <div className="content">

            <span className={props.language === 'en' ? '' : 'block-hidden'}>

                <div className="content-title">
                    <div>COMBAT</div>
                    <div></div>
                </div>

                <div className="generic-flex-space-around combat">
                    <img src={combat} alt="combat" />
                </div>
                <div className="spacer1rem" />
                <p>
                    In addition to all the problems of supply and movement, units also occasionally had to engage in combat.
                </p>
                <p>
                    The core general sequence leading to combat is
                    <ol>
                        <li>Get adjacent to enemy units.</li>
                        <li>Declare Combat.</li>
                        <li>Enemy gets to respond, if possible.</li>
                        <li>Then you go forward with the attack, for better or for worse. Once you declared an attack, you have to follow through and roll them dice. </li>
                    </ol>
                </p>
                <p>
                    Factors that can affect combat are air support, naval support, Attack Supply expenditure, artillery support, Orders, terrain, weather, fortifications, engineers, Combined Arms, Divisional Integrity, and supply issues.
                </p><p>
                    The Combat Results table is a standard odds based table. Odds go from 1-4 to 10-1. Odds less than 1-4 are treated as automatic attacker eliminated (although you can't declare a combat if the initial odds are less than 1-4), and odds greater than 10-1 are treated as 10-1. There is a 3-2 column and a 3-4 column, which sometimes requires some mental mathematical dexterity. The results on the table range from no effect, to retreats, to step losses, and to complete annihilation, otherwise known as the dreaded 'e' result.
                </p><p>
                    <span className="b">Attacking Is Voluntary</span>, however if you wish to attack, then things get a little "sticky". Any enemy unit that exerts a ZOC into a hex of an attacking unit MUST also be attacked.
                </p>
                <div className="sticky-example">
                    <div>Attacking is Voluntary, but Sticky! Example:</div>
                    <div className="generic-flex-space-around">
                        <div><img src={map_combat1} alt="sticky example1" /></div>
                        <div className="text">If the German unit wants to attack the Soviet cavalry unit...</div>
                    </div>
                    <div className="generic-flex-space-around">
                        <div><img src={map_combat2} alt="sticky example2" /></div>
                        <div className="text">then the circled Soviet division will also need to be attacked, since it exerts a ZOC on the hex the German unit is attacking from. The German unit could attack both Soviet units, or the German player must bring up another unit to attack the circled division. Note that the Soviet armored unit across the Major River would not need to be attacked, since ZOCs do not extend across Major Rivers, even if there is a bridge.</div>
                    </div>
                </div>

                <div className="spacer2rem" />
                <div className="subheader-image">
                    <div>Declaration of Attack</div>
                    <img src={declared_attack} alt="declared attack counter" />
                </div>
                <div className="spacer1rem" />
                <p>
                    The phasing player must designate all his attacks before the start of the Combat phase. All designated attacks must have initial odds of at least 1-4. The rules state that a Declared Attack marker must be put on the defender hex being attacked. I prefer to put them on the attacking units, with the arrow of the marker pointing towards the defender hex, that way its easier for me to remember who exactly is attacking what. But you can do it either way. By only putting the marker on the defender hex, you can sometimes cause some doubt to your enemy as to who exactly is attacking, or how strong an attack to expect. At the moment of combat, the attacker can change who is attacking which defender hex, but still - each marked defender hex must be attacked, even if the final odds turn out to be less than 1-4.
                </p>


                <p className="subheader2">Hexes Eligible to be Attacked</p>

                <p>
                    In order for your units to attack enemy units, either:<br />
                    <span className="indent1rem"><span className="b">a)</span> The hex the enemy units are in can be normally entered by your units (according to the current weather conditions).</span><br />
                    <span className="indent1rem">AND / OR</span> <br />
                    <span className="indent1rem"><span className="b">b)</span> The enemy units exert a ZOC into the hex the attackers are attacking from. However, advance after combat cannot occur into terrain units are prohibited from entering.</span><br />
                </p>
                <p>
                    Multiple-hex defender hexes can be attacked as a single attack, but all attacking units must be adjacent to all defending units. Typically, multiple defender hex combats consist of an attacker in one hex attacking two defender hexes.
                </p>

                <p className="subheader2">Reaction Movement</p>
                <p>Reaction Movement provides a mechanism where a defender can move additional troops to a hex under attack, possibly upsetting the odds calculation, or possibly denying the enemy a CAB bonus. It is similar to the concept of "reserves", except only motorized units can move.
                </p>
                <p>In the Reaction Movement phase the defender may move any motorized units that are within three hexes of a Declared Attack hex, up to half of their movement allowance.
                </p>
                <div className="gray-box">
                    <p className="subsubheader">Reaction Movement Qualifications</p>
                    <ul>
                        <li>Only non-orange ma motorized units may move in the Reaction Movement phase.</li>
                        <li>Must be within 3 hexes of the Declared Attack hex.</li>
                        <li>Cannot start in ZOC of an enemy unit, or be in a Defender Hex.</li>
                        <li>For Soviets, must also be within Command Range of an operating Headquarters unit with at least 1 non-interdicted Command Point, and also NOT be in range of a Non-Op Headquaters.</li>
                        <li>Must not be OOS, or have a Overrun marker on it.</li>
                    </ul>
                </div>

                <div className="spacer1rem" />
                <p>Motorized units that qualify to move in the Reaction Phase need not move towards the Declared Attack. It can move in any direction, up to half its movement allowance. It can do One Hex Movement if the unit is not OOS and its not Mud weather. It cannot enter an enemy ZOC unless there is a friendly unit(s) in the hex. If it moves into a hex that is in enemy ZOC (and has a friendly unit(s) in it), it must stop. It also does not pay the normal +1 cost for entering ZOC if entering a Defender Hex. Once a motorized unit enters a defender hex, it adds its combat strength to the defense, plus any other benefits it may add, such as denying the enemy the use of CAB.
                </p>


                <div className="spacer2rem" />
                <div className="subheader-image stalin">
                    <div>Mandated Attack</div>
                    <img src={joseph_stalin} alt="Joseph Stalin" />
                </div>
                <div className="spacer1rem" />
                <p>
                    The Soviet player may be obligated to make one or more Mandated Attacks during a turn. Typically these are received as a "special event" on the Soviet Replacements Table, which is rolled on each turn. A Mandated Attack represents a direct order from Stavka to go on the offensive. Soviet generals that refused these orders often suffered immediate consequences. In EFS, when a Mandated Attack is required, the Soviet player must make an attack at a minimum (initial) odds of at least 3-2 as soon as possible, preferably in the turn it is received.
                </p>
                <p>
                    If the Soviet player does not (or cannot) meet this requirement, the order for the Mandated Attack(s) still remain in effect. Additionally, these penalties occur:
                <ul>
                        <li>
                            If during the Game Turn Interphase there are unmet Mandated Attacks, the Axis Player receives +2 VPs for each outstanding Mandated Attack, if the Axis player took and held a vp location that turn.
                    </li>
                        <li>The Soviets get a +1 drm for each unmet Mandated Attack when rolling on the Replacements Table.</li>
                    </ul>
                </p>
                <p>
                    There is a marker titled "Mandated Attack Not Yet Made" that goes on the Soviet Loss/Replacement Track that can keep track of the current Mandated Attack *debt*.
</p>
                <p>
                    Soviets suffer from * results on the Combat Results table for Mandated Attacks, regardless of Attack Supply. Note that * results are cumulative. A Soviet Mandated Attack that is not Attack Supplied suffers the equivalent of two * results if a * result is rolled.
</p>
                <p>
                    As the Soviet player, you will probably suffer needless losses due to these Mandated Attacks. Its something that is unavoidable. Just be prepared to be capable of making an attack every turn, because you don't know when the Mandated Attack order will come down the pipe. Keep Attack Supply near the front so that you don't have to suffer double * losses when making a Mandated Attack.
                </p>

                <p className="subheader2">Combined Arms bonus</p>
                <p>The Combined Arms bonus (CAB) gives a DRM of -1 benefit to the attacker. There are several requirements that must be met before the attacker can qualify for CAB: the attacker must have a qualifying armored unit (identified by the red attack factor), and also have a recon, motorized infantry, motorcycle, or engineer unit attacking with it. The units being attacked cannot have any armor, AT or AA units. CAB cannot not occur if the defending units are behind any kind of river, in swamp hexes, in fortifications or behind fortified lines, or in City or Major City hexes. CAB can only occur during Dry or Frost turns. Once again ...
                </p>

                <div className="special-emphasis">
                    CAB can only occur during Dry or Frost turns
                </div>

                <div className="spacer1rem" />
                <p className="centered-bordered">
                    <img src={combined_arms_bonus} alt="combined arms bonus examples" />
                </p>

                <div className="spacer2rem" />
                <div className="subheader-image stalin">
                    <div>Divisional Integrity</div>
                    <img src={divisional_integrity} alt="Divisional Integrity" />
                </div>
                <div className="spacer1rem" />
                <p>
                    German panzer and motorized divisions can qualify for a Divisional Integrity bonus drm of -1. For a German panzer division to qualify for the bonus, it must have its panzer regiment attacking, and at least two of its other units (motorized infantry regiments or the recon unit) attacking the same defender. The attacking units can be stacked together or in different hexes. These Divisional Integrity bonuses are cumulative. For a German motorized division it would need all three of its regiments involved in the same attack to qualify, PLUS for each German motorized division getting a Divisional Integrity bonus, it must be *matched* by a qualifying German panzer division that is participating in the same attack. German motorized divisions, alone, do not qualify for the Divisional Integrity bonus. If the attack is not supplied with Attack Supply, then if any of the units counted for the Divisional Integrity are OOS, the Divisional Integrity is denied for that division.
</p><p>
                    Exceptions: Any SS motorized division need only have 3 of its four component units present to qualify for Divisional Integrity. The SS LAH brigade qualifies with its two units.
</p><p>
                    Unlike the finicky Combined Arms bonus, the Divisional Integrity bonus is available in all weather conditions, against any enemy units in any terrain. The only thing that might mess it up is the required units being OOS while attacking without Attack Supply.
</p><p>
                    Note that under the right conditions, German panzer divisions will often get both a Divisional Integrity bonus AND a Combined Arms bonus. This makes them the most effective fighting force in the game.
</p><p>
                    Since German motorized divisions only get the Divisional Integrity bonus when attacking in concert with German panzer divisions, its obvious that you should keep them together or near each other.
</p>


                <div className="spacer2rem" />
                <div className="subheader-image">
                    <div>Engineer Effects</div>
                    <img src={german_engineer} alt="German engineer counter" />
                </div>
                <div className="spacer1rem" />
                <p>
                    Engineer effects can be declared when the attacking force contains at least one engineer unit and the defender is receiving a DRM for city, major city, fortified line, strongpoint, or River (not Major River) terrain. Engineer effects can also be declared when attacking a town in Mud (as the defender gets a DRM in that situation). The engineer effect gives the attacker a -1 DRM. Note that by declaring Engineer Effects, the engineer may take a step loss due to a asterisk result (see below for details). Engineer effects are only for attacking, defending engineers give no special benefit to the defense.
                </p>

                <div className="spacer1rem" />
                <p className="centered artillery">
                    <img src={soviet_artillery_firing} alt="Soviet artillery firing" />
                </p>

                <div className="spacer2rem" />
                <div className="subheader-image artillery">
                    <div>Artillery Support</div>
                    <img src={artillery_units} alt="artillery counters" />
                </div>
                <div className="spacer1rem" />
                <p>
                    Artillery units need able to reach, by LOS, the Attack Supply being used to supply an attack in order for it to support that attack. If not, they can use additional Attack Supply that they can reach. Non-OOS Artillery units do not use Attack Supply when supporting a defense. OOS Artillery cannot provide defensive support.
                </p><p>
                    Artillery support values are halved in Mud, or in Lingering Mud in the affected hexes (Woods). Artillery is halved when firing into swamp.
                </p><p>
                    The Axis player can add up to 4 artillery units to the attack or defense. An exception is Axis super-heavy artillery, which do not count in the 4 unit max. Additionally, in the defense, Axis super-heavy artillery can only add their support strength in defense of their hex - as long as there is at least one other ground combat unit with it. Axis super-heavy artillery can only provide its support strength to attacks against City, Major City, Fortified Line, or Strongpoint terrain.
                </p><p>
                    The Soviet player is usually limited to using 1 maximum artillery unit for an attack or defense. However, artillery units stacked with Headquarters can sometimes allow the Soviet player to use more than 1. See the chart regarding artillery support.
                </p><p>
                    Artillery values cannot be split for use in more than one combat.
                </p><p>
                    Artillery must be able to reach the Defender Hex with their range value in order to add support to an attack or defense. Note that artillery that have a range of one will need to be adjacent to the defender hex to participate.
                </p><p>
                    Artillery support values cannot exceed the ground combat strength of the friendly units involved in a defense or attack.
                </p>


                <div className="spacer2rem" />
                <div className="subheader-image artillery">
                    <div>No Retreat and Additional Retreat orders</div>
                    <img src={orders_strip} alt="orders counters" />
                </div>
                <div className="spacer1rem" />
                <p>
                    The attacker or defender in a battle may place No Retreat or Additional Retreat orders on units in a battle. An order applies to all the friendly units in that battle, even if it is a multiple-hex combat. The Axis player may always freely issue these orders, but the Soviet player needs to have a Headquarters within Command Range of the units with a non-interdicted Command point to use for issuing the order. An exception for the Soviets are NKVD units. A defender hex in a Town, City, or Major City and with a NKVD unit in it automatically places the hex under the No Retreat order (this is not optional, you are forced), except when within range of a non-op HQ's (see Headquarters page).
</p><p>
                    Orders are placed face down and not revealed until the moment of the combat die roll. The attacker places the orders down first. Except for the case of NKVD units, orders are optional.
</p>









                <div className="gray-box">
                    <p className="subsubheader">Effects of the No Retreat order</p>
                    <div className="two-column-flex counter-left">
                        <img src={counter_no_retreat} alt="counter no retreat order" />
                        <div>
                            <ul>
                                <li>For the Defender under No Retreat order, +1 DRM to the combat die roll. Attacker with No Retreat does not get a DRM.</li>
                                <li>Units under a No Retreat order change a "R" result to a step loss. Then apply any numerical step loss result. (R turns to a "1", R1 turns to effectively a "2", etc).</li>
                                <li>In addition, any non-German units suffer an additional step loss unless they are in a city, major city, hill, mountain, alpine, woods, or non-destroyed fortification hex.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="gray-box">
                    <p className="subsubheader">Effects of the Additional Retreat order</p>
                    <div className="two-column-flex counter-left">
                        <img src={counter_additional_retreat} alt="counter additional retreat order" />
                        <div>
                            <ul>
                                <li>Units that get a R result and are under an Additional Retreat order retreat 3 hexes instead of 2. Units can only retreat on a "R" or "Rn" result.</li>
                                <li>Retreat path is determined by non-owner. Units must be retreated through a path that does not result in step loss, if possible.</li>
                                <li>Units retreating under Additional Retreat cannot retreat through even one uncontested enemy ZOC. If forced to they are eliminated.</li>
                                <li>If there is a numerical step loss in addition to the R result, the units suffer one less step loss.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="spacer1rem" />
                <p>
                    Usually the defender will be the one using orders most often. The No Retreat order stops units from retreating, but can cost you more step losses. Unless you've got more than two steps in a defender hex, it may be reckless to place a No Retreat order on units. It may be tempting to cause a +1 DRM to the enemy, but you might be handing the enemy a great victory. Additional Retreat orders are quite useful when you actually do want to retreat, and want to cut down on step losses.
                </p>

                <div className="spacer2rem" />
                <div className="subheader-image stalin">
                    <div>Step Losses</div>
                    <img src={directhit} alt="Direct hit on anti-tank gun" />
                </div>
                <div className="spacer1rem" />
                <p>
                    A numerical result on the combat results table is the number of step losses that occurred to an attacker and/or defender. The step loss is applied to the total lot of attackers or defenders, not to every individual unit. A unit has from 1 to 4 steps. A combat unit with its highest combat strength of 8 or more have four steps. 5-7 combat strength has three steps. Units with 2 steps have a weaker side on the reverse side of the counter. A unit with only one step has a blank reverse side (or its mobile side in case of super-heavy artillery). Units with 3 or 4 steps require the use of a Step Loss counter to indicate intermediate levels of strength that are not printed on the counter.
                </p><p>
                    Units that are eliminated in combat due to step losses, and were not completely surrounded or blocked by impassable terrain, go into the Cadre box for possible rebuilding during the replacement phase, otherwise they go to the eliminated box. Units that were destroyed by an "e" result go into the eliminated box. Units in the elimated box cannot be rebuilt. Exception - killed off Soviet MG/UR units always go back into the MG/UR pool, typically a opaque cup. Specific scenario rules may overrule the Cadre rule or modify it.
                </p><p>
                    When a armor or non-Guard artillery unit step is lost (not unit, step) move the marker on the step loss track. When the marker reaches the end of the track, chalk up one VP for the enemy and return the marker to the start of the step loss track. Each Guards step lost gives one VP directly to the enemy.
                </p><p>
                    Step losses may be modified by Asterisk (*) results, No Retreat orders, and Additional Retreat orders.
                </p>






                <p className="subheader2">Asterisk (<span className="bigger-bold-text">*</span>) Results</p>
                <p>
                    The combat results table is peppered with results marked with a asterisk symbol *, called "Asterisk Result" (sometimes called an easier to pronounce "Star Result"). This symbol can have the following effects:
                <ul>
                        <li>It can mean an "additional loss" to an attacker (<span className="green-bold">ADDITIONAL LOSS</span>).</li>
                        <li>It can determine that the first loss distributed MUST be to an engineer or an armor unit. ( <span className="blue-bold">ENGINEER ATTRITION</span> or <span className="red-bold">ARMOR ATTRITION</span>)</li>
                    </ul>
                    And, sometimes, both can come into effect.
                </p>

                <div className="gray-box additional-loss">
                    <p className="subsubheader"><span className="green-bold">ADDITIONAL LOSS</span> due to Asterisk (<span className="bigger-bold-text">*</span>) Results are activated when any of these conditions apply:</p>

                    <div>
                        <ul>
                            <li>If the attack was made without Attack Supply.</li>
                            <li>If the attack was a Soviet Mandated Attack.</li>
                            <li>If the attack was against units protected by a non-destroyed Fortification (fortified line, or strongpoint). In the case of attacking across a Fortified Line, all attacking units must have attacked across a fortified line to have <span className="green-bold">ADDITIONAL LOSS</span> occur.</li>
                        </ul>
                    </div>

                </div>

                <div className="spacer1rem" />
                <p>
                    These asterisk conditions are cumulative for <span className="green-bold">ADDITIONAL LOSS</span>. You could have two * results, or even three * if you hit the trifecta - your attacking force is (1) attacking without Attack Supply, doing so as a (2) Mandated Attacked, and into (3) fortifications.
                </p><p>
                    The extra step loss(es) caused by <span className="green-bold">ADDITIONAL LOSS</span> can be applied to any attacking units of your choosing.
                </p>

                <p className="subheader2">
                    <span className="blue-bold">ENGINEER ATTRITION</span> and <span className="red-bold">ARMOR ATTRITION</span>
                </p>
                <p>
                    If an asterisk is on the combat results, and there are attacking engineers or armor, then check the following cases to see if they apply:
                </p>
                <div className="spacer2rem" />

                <div className="engineer-attrition">
                    <div className="title">ENGINEER ATTRITION</div>
                    <div className="subtitle">Asterisk (<span className="asterisk">*</span>) Results and Engineers</div>
                    <img src={german_engineer} alt="German engineer counter" />
                    <div className="eatext">
                        If an asterisk was on the combat result, then:<br />
                        If Engineering Effects had been declared by the attacker to get a -1 DRM, then:<br />
                        combat result of * means - one engineer step lost.<br />
                        combat result of 1* means - one engineer step lost (and satisfies the numerical loss of 1).
                    </div>
                </div>
                
                <div className="spacer2rem"/>

                <div className="armor-attrition">
                    <div className="title">ARMOR ATTRITION</div>
                    <div className="subtitle">Asterisk (<span className="asterisk">*</span>) Results and Armor</div>
                    <div className="generic-flex-space-around armor">
                        <img src={panzer} alt="German panzer counter" />
                        <div>"Armor", as meant here, are units<br />
                            with an attack value in red.
                            </div>
                    </div>
                        <div className="aatext">
                            If an asterisk is on the combat result with a numeric loss number, then:<br />
                            If <span className="italic-bold">all</span> of the following are true:<br />
                            <ul className="moveup">
                                <li>If the attacking force contains at least one Armor unit.</li>
                                <li>The other force has at least one step of any of these: Armor, anti-tank, or AA units.</li>
                                <li>Engineering effects were not declared.</li>
                                <li>The combat result contains a asterisk AND a number.</li>
                            </ul>  
                            Then -<br/>
                            combat result of 1* means - one armor step lost (satisfies the numerical loss of 1).<br/>
                            <div className="extra"><span className="red-bold">ARMOR ATTRITION</span> can occur to attacking, and defending, armor.</div>
                            <span className="other-notes">
                                other notes:<br/>
                                A combat result of only a * does not cause ARMOR ATTRITION.<br/>
                                If an armored step is lost due to ARMOR ATTRITION, then in the defending force - if they are<br/> losing 1 or more steps also - the first step they lose must be one of either armor, anti-tank, or AA.
                            </span>
                        </div>
                   
                </div>


            </span>
        </div>
    );
}

export default Combat;