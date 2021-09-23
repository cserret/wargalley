import React from 'react';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
import combat from "../../../images/efs/combat/combat.jpg";
import map_combat1 from "../../../images/efs/combat/map_combat1.jpg";
import map_combat2 from "../../../images/efs/combat/map_combat2.jpg";
import declared_attack from "../../../images/efs/combat/declared_attack.gif";
import joseph_stalin from "../../../images/efs/combat/joseph-stalin.jpg";
import combined_arms_bonus from "../../../images/efs/combat/combined_arms_bonus.jpg";
import combined_arms_bonus_fr from "../../../images/efs/combat/combined_arms_bonus_fr.gif";
import divisional_integrity from "../../../images/efs/combat/divisional_integrity.jpg";
import german_engineer from "../../../images/efs/combat/german_engineer2.gif";
import artillery_units from "../../../images/efs/combat/artillery_units.jpg";
import soviet_artillery_firing from "../../../images/efs/combat/soviet_artillery_firing.jpg";
import orders_strip from "../../../images/efs/combat/orders_strip.jpg";
import directhit from "../../../images/efs/combat/directhit.jpg";
import counter_additional_retreat from "../../../images/efs/combat/counter_additional_retreat.png";
import counter_no_retreat from "../../../images/efs/combat/counter_no_retreat.png";
import panzer from "../../../images/efs/combat/panzer.png";
import retreat from "../../../images/efs/combat/retreat.jpg";
import advance from "../../../images/efs/combat/advance.jpg";
import germanantitank1942east from "../../../images/efs/combat/germanantitank1942east.jpg";
import surrenderc from "../../../images/efs/combat/surrenderc.jpg";
import wreck from "../../../images/efs/combat/burning_t34_.jpg";
import './Combat.scss';

const Combat = (props) => {
    return (
        <div className="content">

            <div className={props.language === 'en' ? '' : 'block-hidden'}>

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
                <div className="pdiv">
                    The core general sequence leading to combat is
                    <ol className="ol-less-top">
                        <li>Get adjacent to enemy units.</li>
                        <li>Declare Combat.</li>
                        <li>Enemy gets to respond, if possible.</li>
                        <li>Then you go forward with the attack, for better or for worse. Once you declared an attack, you have to follow through and roll them dice. </li>
                    </ol>
                </div>
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
                    <span>12.0</span>
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

                <div className="subheader-rule">
                    <span>14.1</span>
                    Reaction Movement
                </div>

                <p>Reaction Movement provides a mechanism where a defender can move additional troops to a hex under attack, possibly upsetting the odds calculation, or possibly denying the enemy a CAB bonus. It is similar to the concept of "reserves", except only motorized, or Guard, units can move.
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
                    <span>12.4, 15.21</span>
                    <div>Mandated Attack</div>
                    <img src={joseph_stalin} alt="Joseph Stalin" />
                </div>
                <div className="spacer1rem" />
                <p>
                    The Soviet player may be obligated to make one or more Mandated Attacks during a turn. Typically these are received as a "special event" on the Soviet Replacements Table, which is rolled on each turn. A Mandated Attack represents a direct order from Stavka to go on the offensive. Soviet generals that refused these orders often suffered immediate consequences. In EFS, when a Mandated Attack is required, the Soviet player must make an attack at a minimum (initial) odds of at least 3-2 as soon as possible, preferably in the turn it is received.
                </p>
                <div className="pdiv">
                    If the Soviet player does not (or cannot) meet this requirement, the order for the Mandated Attack(s) still remain in effect. Additionally, these penalties occur:
                    <ul>
                        <li>
                            If during the Game Turn Interphase there are unmet Mandated Attacks, the Axis Player receives +2 VPs for each outstanding Mandated Attack, if the Axis player took and held a vp location that turn.
                        </li>
                        <li>The Soviets get a +1 drm for each unmet Mandated Attack when rolling on the Replacements Table.</li>
                    </ul>
                </div>
                <p>
                    There is a marker titled "Mandated Attack Not Yet Made" that goes on the Soviet Loss/Replacement Track that can keep track of the current Mandated Attack *debt*.
                </p>
                <p>
                    Soviets suffer from <span className="asterisk">*</span> results on the Combat Results table for Mandated Attacks, regardless of Attack Supply. Note that <span className="asterisk">*</span> results are cumulative. A Soviet Mandated Attack that is not Attack Supplied suffers the equivalent of two <span className="asterisk">*</span> results if a <span className="asterisk">*</span> result is rolled.
                </p>
                <p>
                    As the Soviet player, you will probably suffer needless losses due to these Mandated Attacks. Its something that is unavoidable. Just be prepared to be capable of making an attack every turn, because you don't know when the Mandated Attack order will come down the pipe. Keep Attack Supply near the front so that you don't have to suffer double <span className="asterisk">*</span> losses when making a Mandated Attack.
                </p>

                <div className="subheader-rule">
                    <span>15.67</span>
                    Combined Arms bonus
                </div>

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
                    <span>15.68</span>
                    <div>Divisional Integrity</div>
                    <img src={divisional_integrity} alt="Divisional Integrity" />
                </div>
                <div className="spacer1rem" />
                <p>
                    German panzer and motorized divisions can qualify for a Divisional Integrity bonus drm of -1. For a German panzer division to qualify for the bonus,
                    it must have its panzer regiment attacking, and at least two of its other units (motorized infantry regiments or the recon unit) attacking the same defender.
                    The attacking units can be stacked together or in different hexes. These Divisional Integrity bonuses are cumulative.
                    For a German motorized division it would need all three of its regiments involved in the same attack to qualify,
                    Any SS motorized division need only have 3 of its four component units present to qualify for Divisional Integrity.
                    PLUS for each German motorized division getting a Divisional Integrity bonus, it must be *matched* by a qualifying German panzer division that is participating in the same attack.
                    German motorized divisions, alone, do not qualify for the Divisional Integrity bonus.

                    If the attack is not supplied with Attack Supply, then if any of the units counted for the Divisional Integrity are OOS, the Divisional Integrity is denied for that division.
                </p><p>
                    Exception: The SS LAH brigade qualifies with its two units.
                </p><p>
                    Unlike the finicky Combined Arms bonus, the Divisional Integrity bonus is available in all weather conditions, against any enemy units in any terrain.
                    The only thing that might mess it up is the required units being OOS while attacking without Attack Supply.
                </p><p>
                    Note that under the right conditions, German panzer divisions will often get both a Divisional Integrity bonus AND a Combined Arms bonus.
                    This makes them the most effective fighting force in the game.
                </p><p>
                    Since German motorized divisions only get the Divisional Integrity bonus when attacking in concert with German panzer divisions, its obvious that you should keep them together or near each other.
                </p>


                <div className="spacer2rem" />
                <div className="subheader-image">
                    <span>15.63</span>
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
                    <span>15.4, 15.55, 15.64</span>
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
                    <span>12.5</span>
                    <div>"No Retreat" and "Additional Retreat" order markers</div>
                    <img src={orders_strip} alt="orders counters" />
                </div>
                <div className="spacer1rem" />
                <p>
                    The attacker and defender in a battle may place a "No Retreat" or "Additional Retreat" order marker on units in
                    a battle. The placement of an order marker is done after defensive artillery support is declared.
                </p><p>
                    The orders marker, either "Additional Retreat" or "No Retreat", is placed face down on
                    the defending units so that
                    the attacker does not know which order it is.
                </p><p>
                    The attacker can only place an orders marker on their units if the defender has an orders marker on them.
                </p><p>
                    Orders can only be placed on a hex that is in "qualifying terrain". A hex is in "qualifying terrain" if
                    it has any of: woods, alpine, mountain, city, major city, or any type of friendly active fortification
                    (Exception - Citadels).
                </p><p>
                    A town is also "qualifying terrain" if there are mud conditions and the defender gets a DRM benefit for
                    mud - but in this case it only qualifies for the "No Retreat" order.
                </p><p>
                    An "Additional Retreat" order marker cannot be placed on a hex that is under the mud weather condition.
                </p><p>
                    The defender will be able to put a (single) orders marker on a defending hex that has
                    qualifying terrain. The placement of orders is optional (except for NKDV described below).
                </p><p>
                    The German player can place an orders marker for any units that are defending in qualifying
                    terrain.
                </p><p>
                    For the Soviets, they can only place a orders marker if:<br />
                    a) There is an operational HQ within range of the defending hex, and that HQ has at least 1 non-interdicted
                    command point to expend for the order. Non-Op headquarters that are in command range of the hex will prevent
                    the placement of orders.<br />
                    b) The defending hex has a NKVD unit. In this case, the NKVD automatically places a "No Retreat" order
                    on the hex it is in - if the hex has "qualifying terrain". No HQ command point is expended for this automatic
                    placement. The presence of a HQ or Non-Op HQ has no effect
                    on this placement. However, a HQ with a command point to spend, which is in command range (with no Non-Op
                    HQ in command range) can expend a command point to remove this "automatic" order.
                </p><p>
                    An orders marker applies to all the friendly units in that battle, even if it is a multiple-hex
                    combat. Conflicting orders cannot be applied to a player's units in the same combat.
                </p><p>
                    After orders for the defender is place, the attacker may place an order on their attacking units. Again,
                    one orders marker applies to all units of that player that are in the combat. The placement
                    of an orders marker does not need "qualifying terrain" - the fact that the defender has an orders marker
                    on it allows the attacking player to place an orders marker on that player's attacking units.
                </p><p>
                    The Soviet player will need a HQ in command range (with no Non-Op HQ in command range) with
                    a command point to expend for the placement of an orders marker for attacking units.
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
                    <div className="commentary">
                        The "No Retreat" order stops units from retreating,
                        but can cost you more step losses. Unless you've got more than two steps in a defender hex, it may be reckless to
                        place a "No Retreat" order on units. It may be tempting to cause a +1 DRM to the enemy, but you might be handing the
                        enemy a great victory - unless the defender is doomed anyways. "Additional Retreat" orders are quite useful when you actually do want to retreat, and want to
                        cut down on step losses.
                    </div>
                </p>

                <div className="spacer2rem" />
                <div className="subheader-image stalin">
                    <span>16.2, 22.11</span>
                    <div>Step Losses</div>
                    <img src={directhit} alt="Direct hit on anti-tank gun" />
                </div>
                <div className="spacer1rem" />
                <p>
                    A numerical result on the combat results table is the number of step losses that occurred to an attacker and/or defender. The step loss is applied to the total lot of attackers or defenders, not to every individual unit. A unit has from 1 to 4 steps. A combat unit with its highest combat strength of 8 or more have four steps. 5-7 combat strength has three steps. Units with 2 steps have a weaker side on the reverse side of the counter. A unit with only one step has a blank reverse side (or its mobile side in case of super-heavy artillery). A Soviet HQ has 1 step. Units with 3 or 4 steps require the use of a Step Loss counter to indicate intermediate levels of strength that are not printed on the counter.
                </p><p>
                    Units that are eliminated in combat due to step losses, and were not completely surrounded or blocked by impassable terrain, go into the Cadre box for possible rebuilding during the replacement phase, otherwise they go to the eliminated box. Units that were destroyed by an "e" result go into the eliminated box. Units in the elimated box cannot be rebuilt. Exception - killed off Soviet MG/UR units always go back into the MG/UR pool, typically a opaque cup. Specific scenario rules may overrule the Cadre rule or modify it.
                </p><p>
                    When a armor or non-Guard artillery unit step is lost (not unit, step) move the marker on the step loss track. When the marker reaches the end of the track, chalk up one VP for the enemy and return the marker to the start of the step loss track. Each Guards step lost gives one VP directly to the enemy.
                </p><p>
                    Step losses may be modified by Asterisk (*) results, No Retreat orders, and Additional Retreat orders.
                </p>

                <div className="spacer2rem" />
                <div className="subheader-image stalin">
                    <span>16.3</span>
                    <div>Asterisk (<span className="bigger-bold-text">*</span>) Results</div>
                    <img src={wreck} alt="burning T-34" />
                </div>
                <div className="pdiv">
                    The combat results table is peppered with results marked with a asterisk symbol <span className="asterisk">*</span>, called "Asterisk Result" (sometimes called an easier to pronounce "Star Result"). This symbol can have the following effects:
                    <ul class="ul-no-top">
                        <li>It can mean an "additional loss" to an attacker (<span className="green-bold">ADDITIONAL LOSS</span>).</li>
                        <li>It can determine that the first loss distributed MUST be to an engineer or an armor unit. ( <span className="blue-bold">ENGINEER ATTRITION</span> or <span className="red-bold">ARMOR ATTRITION</span>)</li>
                    </ul>
                    And, sometimes, both can come into effect.
                </div>

                <div className="gray-box additional-loss">
                    <p className="subsubheader"><span className="green-bold">ADDITIONAL LOSS</span> due to Asterisk (<span className="bigger-bold-text">*</span>) Results are activated when any of these conditions apply:</p>

                    <div>
                        <ul>
                            <li>If the attack was made without Attack Supply.</li>
                            <li>If the attack was a Soviet Mandated Attack.</li>
                            <li>If the attack was against units protected by a non-destroyed Fortification (fortified line, or strongpoint).</li>
                        </ul>
                        <div className="pdiv">In the case of attacking across a Fortified Line, all attacking units must have attacked across a fortified line to have <span className="green-bold">ADDITIONAL LOSS</span> occur.</div>
                    </div>

                </div>

                <div className="spacer1rem" />
                <p>
                    These asterisk conditions are cumulative for <span className="green-bold">ADDITIONAL LOSS</span>. You could have two <span className="asterisk">*</span> results, or even three <span className="asterisk">*</span> if you hit the trifecta - your attacking force is (1) attacking without Attack Supply, doing so as a (2) Mandated Attacked, and into (3) fortifications.
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
                        combat result of <span className="asterisk">*</span> means - one engineer step lost.<br />
                        combat result of 1<span className="asterisk">*</span> means - one engineer step lost (and satisfies the numerical loss of 1).
                    </div>
                </div>

                <div className="spacer2rem" />

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
                        Then -<br />
                        combat result of <span className="asterisk">*</span> means - one armor step lost (satisfies the numerical loss of 1).<br />
                        <div className="extra"><span className="red-bold">ARMOR ATTRITION</span> can occur to attacking, and defending, armor.</div>
                        <span className="other-notes">
                            other notes:<br />
                            A combat result of only a <span className="asterisk">*</span> does not cause ARMOR ATTRITION.<br />
                            If an armored step is lost due to ARMOR ATTRITION, then in the defending force - if they are<br /> losing 1 or more steps also - the first step they lose must be one of either armor, anti-tank, or AA.
                        </span>
                    </div>

                </div>


                <div className="spacer2rem" />


                <p>
                    <span className="green-bold">ADDITIONAL LOSS</span> can occur at the same time with <span className="blue-bold">ENGINEER ATTRITION</span> or <span className="red-bold">ARMOR ATTRITION</span>, if the qualifying conditions exist.
                </p><p>
                    <span className="blue-bold">ENGINEER ATTRITION</span> has precedence over <span className="red-bold">ARMOR ATTRITION</span>. If <span className="blue-bold">ENGINEER ATTRITION</span> occured - do not do <span className="red-bold">ARMOR ATTRITION</span>.
                </p><p>
                    Attacking units under an Additional Retreat order must still accept <span className="asterisk">*</span> results, when they apply. The benefit of Additional Retreat only subtracts 1 from any numerical step loss that is indicated in the result.
                </p>



                <div className="spacer2rem" />
                <div className="subheader-image stalin">
                    <span>16.4</span>
                    <div>Retreats</div>
                    <img src={retreat} alt="retreat" />
                </div>
                <div className="spacer1rem" />
                <div className="pdiv">


                    In most situations, the owning player retreats the units. If the units retreating had an "Additional Retreat" order on them, then the non-owning player retreats them.
                    <ul className="ul-no-top">
                        <li>The retreat has to be away from the original Defender Hex.</li>
                        <li>The owning player cannot purposely retreat the units through enemy ZOC to destroy them if there are safer retreat paths available.</li>
                        <li>If units are forced to end their retreat in a hex that is over stacked, they can retreat one more hex. If unable to do so, they are eliminated.</li>
                        <li>Some units can never retreat - they are super-heavy artillery on their fire sides, dumps, bridge units, zero MA units. Dumps are destroyed, and bridge units can return in the owning player's Movement Phase.</li>
                        <li>Units cannot retreat into hexes they are not allowed to move.</li>
                        <li>Units cannot retreat through two consecutive empty hexes with enemy ZOCs unless friendly units are in them. If forced to do so they are eliminated.</li>
                        <li>Units may pass through a empty hex with an enemy ZOC in it, but the unit (or stack) loses one step and must roll on the retreat table.</li>
                        <li>Soviet Headquarters that are forced to retreat through a non-friendly occupied hex in enemy ZOC gets flipped to its Non-Op side.</li>
                        <li>Artillery units may be willfully destroyed before rolling on the retreat table (in order to avoid DRM penalties for having artillery units trying to get through).</li>
                        <li>Units cannot retreat across a unbridged Major River, except in Snow/Arctic weather when non-artillery units may retreat across. </li>
                    </ul>
                </div>




                <div className="spacer2rem" />
                <div className="subheader-image stalin">
                    <span>16.5</span>
                    <div>Advances</div>
                    <img src={advance} alt="advance" />
                </div>
                <div className="spacer1rem" />
                <div className="pdiv">
                    When a defender hex is vacated due a retreat or elimination, any surviving attacking units may advance into that hex (ignoring any enemy ZOCs), with some limitations.
                    <ul className="ul-no-top">
                        <li>The decision to advance must be made before moving onto a different combat.</li>
                        <li>All, some, or none of the attacking units may advance, it is up to the attacking player.</li>
                        <li>Artillery units cannot advance after combat.</li>
                        <li>Attacker cannot violate stacking rules in an advance.</li>
                        <li>In case of a multiple defender hex combat, the attacker can choose from any defender hex to advance into.</li>
                        <li>Attacking units with a Additional Retreat order cannot advance.</li>
                        <li>Attacking units cannot advance into terrain it is not allowed to move into. </li>
                    </ul>

                    Advancing can be used to cut off possible retreats of defenders in other combats in that phase. In fact, better players always have this in mind when setting up attacks.
                    But you also need to avoid retreating the enemy to hexes where they can escape, or where they can block gaps in their line. Don't help the enemy.
                </div>

                <div className="spacer2rem" />
                <div className="subheader-image stalin">
                    <span>21.0</span>
                    <div>Soviet Surrender</div>
                    <img src={surrenderc} alt="advance" />
                </div>
                <div className="spacer1rem" />
                <div className="pdiv">
                    Soviet units that are surrounded, or otherwise in a hopeless state, may surrender (German units never surrender, at
                    least not in this game system).

                    During the Soviet Surrender Phase, the Soviet Player rolls on the Soviet Surrender Table for each Soviet occupied hex that:
                    <ul className="ul-no-top">
                        <li>Is adjacent to an Axis combat unit that does not have a No Zoc band and ...</li>
                        <li>cannot trace a line of hexes of any length free of Axis units or their uncontested ZOCs to a non-surrounded friendly
                            major city, port, or map-edge Supply Source.
                        </li>
                    </ul>
                    <p>
                        The Soviet player gets benefit DRMs for: a) being within the command range of a HQ, b) the hex has a Guard or NKVD unit, c) the hex
                        is a city, d) the hex has a fortification.
                    </p><p>
                        The Soviet player gets negative DRMs if theres: a) a Emergency Supply marker, b) Out of Supply marker, c) only Militia and/or coastal artillery units.</p>

                </div>


                <div className="spacer2rem" />
                <p className="centered">
                    <img src={germanantitank1942east} alt="German anti-tank crew" />
                </p>

                <p className="subheader2">Additional Combat Rules</p>
                <div className="pdiv">
                    <ul className="ul-no-top">
                        <li>The maximum DRMs that can be applied to a combat are +3 or -3. Additional DRMs are discarded <span className="rule-ref">11.43h, 15.7</span></li>
                        <li>Combat odds are rounded off in favor of the defender. <span className="rule-ref">15.57</span></li>
                        <li>If the odds turn out to be less than 1-4, the attacker is eliminated. Odds greater than 10-1 are resolved on the 10-1 column. <span className="rule-ref">15.57</span></li>
                        <li>The attacker cannot arbitrarily reduce the odds, other than the ability to choose which units are attacking. <span className="rule-ref">15.57</span></li>
                        <li>Armor is halved when attacking into City or Major City hexes. <span className="rule-ref">15.52c</span></li>
                        <li>Defender in City causes +1 DRM. Soviet Defender in Major City causes +2 DRM. <span className="rule-ref">15.52c</span></li>
                        <li>Combat strength of units (other than artillery) are halved when attacking <span className="b">from</span> swamp hexes in Dry, Mud, and Frost turns. <span className="rule-ref">15.52a</span></li>
                        <li>Artillery support strengths are halved when firing into swamp hexes in Dry, Mud, and Frost turns. <span className="rule-ref">15.52a</span></li>
                        <li>Combat strength of units are halved when attacking across major river during non-Snow/Arctic weather. Bridges have no effect. <span className="rule-ref">15.52b</span></li>
                        <li>Towns confer a +1 DRM during Mud (or if a town is in Woods in Lingering Mud) and in Snow turns.</li>
                        <li>Attackers that are under an Additional Retreat order cannot advance if they make the enemy retreat or eliminate them in combat. </li>
                    </ul>
                </div>

            </div>
















































            <div className={props.language === 'fr' ? '' : 'block-hidden'}>

                <div className="content-title">
                    <div>COMBAT</div>
                    <div></div>
                </div>

                <div className="generic-flex-space-around combat">
                    <img src={combat} alt="combat" />
                </div>
                <div className="spacer1rem" />
                <p>
                    En plus de tous les problèmes de ravitaillement et de mouvement, les unitès devront parfois engager le combat.
                </p>
                <div className="pdiv">
                    La sèquence gènèrale menant è un combat est
                    <ol className="ol-less-top">
                        <li>Se retrouver adjacent è des unitès ennemies.</li>
                        <li>Dèclarer le combat.</li>
                        <li>L'ennemie peut rèpondre si c'est possible.</li>
                        <li>Puis vous revenez è l'attaque, pour le meilleur ou pour le pire. Lorsque vous avez dèclarè une attaque, vous devez aller jusqu'au bout et lancer les dès.
                        </li>
                    </ol>
                </div>
                <p>
                    Les facteurs pouvant affecter le combat sont le soutien aèrien, le soutien naval, la dèpense de Ravitaillement d'Attaque, le soutien d'artillerie, les ordres, le terrain, la mètèo, les fortifications, le gènie, les armes combinèes, l'intègritè divisionnaire et le ravitaillement gènèral.
                </p><p>
                    La table de rèsultats des combats est une table standard basèe sur les rapports de forces. Les rapports vont de 1-4 è 10-1. Les rapports infèrieurs è 1-4 entraènent l'èlimination automatique de l'attaquant (bien qu'il soit interdit de dèclarer un combat si le rapport de forces initial est in fèrieur è 1-4), et les rapports supèrieurs è 10-1 sont traitès comme 10-1. Il y a une colonne 3-2 et une colonne 3-4, ce qui demande parfois un peu de dexteritè pour le calcul mental. Les rèsultats de la table vont d'aucun effet, è retraite, puis pertes de pas et enfin anihilation complète, plus connue sous le nom du terrifiant rèsultat 'e'.
                </p><p>
                    <span className="b">L'attaque est volontaire</span>, par contre, si vous voulez attaquer, les choses deviennent un peu plus "collantes". Toute unitè ennemie exerèant une ZDC dans l'hex d'une unitè qui attaque DOIT aussi ètre attaquèe.
                </p>
                <div className="sticky-example">
                    <div>L'attaque est volontaire mais collante ! - Exemple:</div>
                    <div className="generic-flex-space-around">
                        <div><img src={map_combat1} alt="sticky example1" /></div>
                        <div className="text">Si l'unitè Allemande veut attaquer l'unitè de cavalerie Soviétique...</div>
                    </div>
                    <div className="generic-flex-space-around">
                        <div><img src={map_combat2} alt="sticky example2" /></div>
                        <div className="text">alors la division Soviétique encerclèe devra aussi ètre attaquèe, car elle exerce une ZDC dans l'hex d'oè attaque l'unitè Allemande. L'unitè Allemande devra attaquer les deux unitès Soviétiques, ou alors le joueur Allemand devra amener une autre unitè pour attaquer la division encerclèe. Notez que l'unitè blindèe Soviétique derrière la Rivière Majeure n'a pas besoin d'ètre attaquèe, car aucune ZDC ne s'ètend è travers une Rivière Majeure, mème si il y a un pont.</div>
                    </div>
                </div>

                <div className="spacer2rem" />
                <div className="subheader-image">
                    <div>Dèclaration de l'Attaque</div>
                    <img src={declared_attack} alt="declared attack counter" />
                </div>
                <div className="spacer1rem" />
                <p>
                    Le joueur en phase doit dèsigner toutes ses attaques avant le dèbut de la Phase de Combat. Toutes les attaques dèsignèes doivent avoir un rapport de forces d'au moins 1-4. Les règles indiquent qu'un marqueur d'Attaque Dèclarèe doit ètre placè dans l'hex è attaquer. Je prèfère les mettre sur les unitès qui attaquent, avec la flèche orientèe vers l'hex du dèfenseur, c'est plus facile pour se rappeler exactement qui attaque qui. Mais vous pouvez faire comme vous voulez. Mais ne mettre un marqueur que dans l'hex du dèfenseur peut parfois poser des problèmes è l'adversaire pour savoir qui attaque exactement, ou quelle sera la force de l'attaque è laquelle s'attendre. Au moment du combat, l'attaquant peut changer qui attaque quel hex du dèfenseur, mais, chaque hex du dèfenseur avec un marqueur doit ètre attaquè, mème si le rapport de forces final passe è moins de 1-4.
                </p>


                <p className="subheader2">Hexs pouvant ètre Attaquès</p>

                <p>
                    Pour que vos unitès puissent attaquer des unitès ennemies, il faut que:<br />
                    <span className="indent1rem"><span className="b">a)</span> vos unitès puissent entrer normalement dans l'hex oè se trouvent les unitès ennemies (en fonction de la mètèo). </span><br />
                    <span className="indent1rem">ET / OU</span> <br />
                    <span className="indent1rem"><span className="b">b)</span> Les unitès ennemies projettent une ZDC dans l'hex d'ou provient l'attaque. Par contre, l'avance après combat est interdite dans les terrains oè les unitès n'ont pas le droit d'entrer.</span><br />
                </p>
                <p>
                    Plusieurs hexs du dèfenseur peuvent ètre attaquès en une seule attaque, mais tous les attaquants doivent ètre adjacents è tous les dèfenseurs. Gènèralement, les combats multi-hexs seront faits avec l'attaquant dans un hex et le dèfenseur dans deux hexs.
                </p>

                <p className="subheader2">Mouvement de Rèaction</p>
                <p>Le Mouvement de Rèaction est un mècanisme par lequel le dèfenseur peut dèplacer des troupes supplèmentaires vers un hex attaquè, pour peut ètre modifier le calcul du rapport de forces, ou empècher l'ennemi d'utiliser son bonus d'Armes Combinèes. Ceci est similaire au concept de "rèserve", sauf que seules les unitès motori sèes peuvent se dèplacer.
                </p>
                <p>Pendant la Phase de Mouvement de Rèaction, le dèfenseur peut dèplacer toutes les unitès motorisèes se trouvant dans les trois hexs d'un hex avec une Attaque Dèclarèe, et dèpenser jusqu'è la moitiè de leur Capacitè de Mouvement.
                </p>
                <div className="gray-box">
                    <p className="subsubheader">Qualifications pour le Mouvement de Rèaction</p>
                    <ul>
                        <li>Seules les unitès n'ayant pas une CM orange peuvent bouger pendant la Phase de Rèaction.</li>
                        <li>Elles doivent ètre dans les trois hexs d'une Attaque Dèclarèe.</li>
                        <li>Ne peut pas commencer dans la ZDC d'une unitè ennemie ou ètre dans un Hex du Dèfenseur.</li>
                        <li>Pour les Soviétiques, elles doivent aussi ètre è portèe de commandement d'un QG opèrationnel avec au moins 1 Point de Commandement non interdit, et ègalement NE PAS ètre è portèe d'un QG non-op.</li>
                        <li>Elles ne doivent pas ètre Non Ravitaillèes ni sous un marqueur de Dèbordement.</li>
                    </ul>
                </div>

                <div className="spacer1rem" />
                <p>Les unitès motorisèes qualifièes pour le Mouvement de Rèaction ne sont pas obligèes de se dèplacer vers une Attaque Dèclarèe. Elles peuvent aller dans n'importe quelle direction, avec la moitiè de leur Capacitè de Mouvement. Il peut y avoir un mouvement minimal si l'unitè n'est pas Non Ravitaillèe et qu'il ne Pleut pas. Elles ne peuvent pas entrer dans une ZDC ennemie è moins qu'une (ou plusieurs) unitès amies ne soient dèjè dans l'hex. Si elles entrent dans une ZDC ennemie (avec des unitès amies), elles doivent s'arrèter. Elles doivent aussi payer le coèt normal de +1PM pour entrer dans une ZDC si elles entrent dans un Hex du Dèfenseur. Lorsqu'une unitè motorisèe entre dans un hex du dèfenseur, elle ajoute sa force de combat è la dèfense ainsi que tous les autres bènèfices qu'elle peut apporter, comme empècher l'ennemi d'utiliser le BAC.
                </p>


                <div className="spacer2rem" />
                <div className="subheader-image stalin">
                    <div>Attaque Obligatoire</div>
                    <img src={joseph_stalin} alt="Joseph Stalin" />
                </div>
                <div className="spacer1rem" />
                <p>
                    Le joueur Soviétique peut ètre obligè de faire une ou plusieurs Attaques Obligatoires pendant un tour. Gènèralement ceci provient d'un "èvènement spècial" de la Table de Remplacement Soviétique, sur laquelle il faut faire un jet de dè par tour. Une Attaque Obligatoire reprèsente un ordre direct de la Stavka pour passer è l'offensive. Les gènèraux qui refusaient ces ordres en subissaient souvent les consèquences immèdiates. Dans EFS, lorsqu'une Attaque Obligatoire est imposèe, le joueur Soviétique doit faire une attaque avec un rapport initial d'au moins 3-2 dès que possible, de prèfèrence pendant le tour oè l'odre est donnè.
                </p>
                <div className="pdiv">
                    Si le joueur Soviétique ne veut (ou ne peut) pas exècuter l'odre, la (ou les) attaques obligatoires continuent de s'appliquer. De plus, ces pènalitès s'appliquent:
                    <ul>
                        <li>
                            Si pendant l'Interphase de Changement de Tour il reste des Attaques Obligatoires qui n'ont pas ètè exècutèes, le joueur Allemand reèoit +2PV pour chaque Attaque Obligatoire non rèsolue, tant que le joueur Allemand contrèle n'importe quelle localisation rapportant des points de victoire dans le scènario.
                        </li>
                        <li>Le joueur Soviétique obtient un DRM +1 par Attaque Obligatoire non rèsolue lorsqu'il fait un jet sur la Table de Remplacement.</li>
                    </ul>
                </div>
                <p>
                    Il y a un marqueur "Attaques Obligatoire non rèsolues" è mettre sur la piste de Pertes/Remplacements Soviétique de faèon è savoir combien il reste d'Attaques Obligatoire è faire.
                </p>
                <p>
                    Les Soviétiques doivent appliquer les r èsultats * de la Table de Rèsultat des Combats pour les Attaques Obligatoire, quel que soit l'ètat du Ravitaillement d'Attaque. Notez que les rèsultats <span className="asterisk">*</span> sont cumulatfs. Une Attaque Obligatoire sans Ravitaillement d'Attaque subira les effets de deux <span className="asterisk">*</span> si il y a un rèsultat avec une <span className="asterisk">*</span>.
                </p>
                <p>
                    En tant que joueur Soviétique, vous subirez probablement des pertes inutiles è cause de ces Attaques Obligatoire. C'est quelque chose d'inèvitable. Soyez juste prèparè pour pouvoir faire une attaque è chaque tour, parce que vous ne saurez jamais quand vont ètre donnès les ordres d'attaque. Gardez votre ravitaillement d'attaque près du front de faèon è ne pas subir une double perte è cause d'une * pendant une Attaque Obligatoire.
                </p>

                <p className="subheader2">Bonus d'Armes Combinèes</p>
                <p>Le Bonus d'Armes Combinèes (BAC) donne un DRM -1 è l'attaquant. Plusieurs obligations doivent ètre remplies avant que l'attaquant puisse bènèficier du BAC : l'attaquant doit avoir une unitè blindèe qualifièe (identifièe par un facteur d'attaque rouge), et aussi attaquer ave c une unitè de reconnaissance, une unitè d'infanterie motorisèe, une unitès de motos ou une une unitè du gènie. Les unitès attaquèes ne doivent pas ètre des unitès blindèes, anti-chars ou anti-aèriennes. Le BAC ne peut pas ètre utilisè si les unitès du dèfenseur sont derrière n'importe quel type de rivière, dans un hex d'ètang, dans une fortification ou derrière une ligne fortifièe, ou dans un hex de ville ou de ville majeure. Le BAC ne peut ètre utilisè que par temps Clair ou Gel. Encore une fois...
                </p>

                <div className="special-emphasis">
                    Le BAC ne peut ètre utilisè que par temps Clair ou Gel
                </div>

                <div className="spacer1rem" />
                <p className="centered-bordered">
                    <img src={combined_arms_bonus_fr} alt="combined arms bonus examples" />
                </p>

                <div className="spacer2rem" />
                <div className="subheader-image stalin">
                    <div>Intègritè Divisionnaire</div>
                    <img src={divisional_integrity} alt="Divisional Integrity" />
                </div>
                <div className="spacer1rem" />
                <p>
                    Les divisions de panzers et les divisions motorisèes Allemandes peuvent recevoir un bonus d'intègritè divisionnaire sous la forme d'un DRM -1. Pour qu'une panzer division Allemande reèoive ce bonus, son règiment de panzers doit attaquer, et au moins deux de ses autres unitès (r ègiments d'infanterie motorisè ou l'unitè de reconnaissance) doivent attaquer le mème dèfenseur. Les unitès de l'attaquant peuvent ètre empilèes ensemble ou se trouver dans des hexs diffèrents. Ces bonus d'intègritè divisionnaire sont cumulatifs. Pour une division motorisèe Allemande, il faudrait que les trois règiments soient engagès dans la mème attaque pour recevoir le bonus, PLUS, pour chaque division motorisèe Allemande avec le bonus d'intègritè divisionnaire, il doit y avoir autant de divisions de panzers participant è la mème attaque. Les divisions motorisèes Allemandes seules ne peuvent pas se qualifier pour le bonus d'intègritè divisionnaire. Si l'attaque n'est pas ravitaillèe avec du Ravitaillement d'Attaque, et qu'une des unitès prises en compte pour l'intègritè divisionnaire, alors l'intègritè divisionnaire est refusèe pour cette division.
                </p><p>
                    Exceptions : les divisions motorisèes SS n'ont besoin que de trois des quatre èlèments pour prètendre è l'intègritè divisionnaire. La brigade SS LAH reèoit le bonus avec deux de ses unitès.
                </p><p>
                    Contrairement au BAC, le bonus d'intègritè divisionnaire peut ètre utilisè par tous les temps, contre des unitès ennemies dans n'importe quel terrain. La seule chose qui peut l'empècher est qu'il y ait des unitès Non Ravitaillèes qui attaquent sans Ravitaillement d'Attaque.
                </p><p>
                    Notez que dans les bonnes conditions, les panzer divisions Allemandes auront souvent le bonus d'intègritè divisionnaire ET le BAC. Ce qui fait d'elles les forces de combat les plus puissantes du jeu.
                </p><p>
                    Comme les divisions motorisèes Allemandes n'obtiennent le bonus d'intègritè divisionnaire qu'en attaquant avec des divisions de panzers, il est èvident que vous devrez les garder ensemble, ou è proximitè.
                </p>


                <div className="spacer2rem" />
                <div className="subheader-image">
                    <div>Effets du Gènie</div>
                    <img src={german_engineer} alt="German engineer counter" />
                </div>
                <div className="spacer1rem" />
                <p>
                    Les effets du gènie peuvent ètre dèclarès lorsque la force de l'attaquant contient au moins une unitè du gènie et que le dèfenseur reèoit un DRM pour une ville, une ville majeure, une ligne fortifièe, un fortin ou une rivière (mais pas une Rivière Majeure). Les effets du gènie peuv ent aussi ètre dèclarès en attaquant un village par temps de Pluie (car le dèfenseur obtient un DRM dans cette situation). Les effets du gènie donnent un DRM -1 è l'attaquant. Notez qu'en dèclarant les effets du gènie, le gènie peut prendre une perte è cause d'un rèsultat avec une astèrisque (voir plus bas pour les dètails). Les effets du gènie ne sont utilisables qu'en attaque, le gènie en dèfense n'apporte aucun bonus dèfensif.
                </p>

                <div className="spacer1rem" />
                <p className="centered artillery">
                    <img src={soviet_artillery_firing} alt="Soviet artillery firing" />
                </p>

                <div className="spacer2rem" />
                <div className="subheader-image artillery">
                    <div>Soutien d'Artillerie</div>
                    <img src={artillery_units} alt="artillery counters" />
                </div>
                <div className="spacer1rem" />
                <p>
                    Les unitès d'artillerie doivent ètre capables d'atteindre, avec une Ligne de Ravitaillement, le Ravitaillement d'Attaque utilisè pour une attaque de faèon è pouvoir soutenir cette attaque. Sinon, elles peuvent utiliser un autre Ravitaillement d'Attaque qu'elles peuvent atteindre. Les unitès d'artillerie qui ne sont pas Non Ravitaillèes n'utilisent pas de Ravitaillement d'Attaque en dèfense. L'artillerie Non Ravitaillèe ne peut pas apporter son soutien en dèfense.
                </p><p>
                    Les valeurs de soutien de l'artillerie sont rèduites de moitiè par temps Pluvieux, ou de pluie prolongèe dans les hexs affectès (Bois). L'artillerie est rèduite de moitiè si elle tire dans un ètang.
                </p><p>
                    Le joueur Allemand peut utiliser jusqu'è 4 unitès d'artillerie en attaque ou en dèfense. L'exception est l'artillerie super lourde de l'Axe qui ne compte pas dans les 4 unitès. De plus, en dèfense, l'artillerie super lourde de l'Axe ne peut apporter sa force de soutien que pour dèfendre son propre hex - tant qu'il y a au moins une autre unitè de combat avec elle. L'artillerie super lourde de l'Axe ne peut apporter sa force de soutien qu'aux attaques contre les villes, les villes majeures, les lignes fortifièes ou les fortins.
                </p><p>
                    Le joueur Soviétique est gènèralement limitè è 1 unitè d'artillerie en attaque ou en dèfense. Par contre, les unitès d'artillerie empilèes avec un QG peuvent parfois permettre au joueur Soviétique d'en utiliser plus d'une. Voir le tableau concernant le soutien d'artillerie.
                </p><p>
                    Les valeurs de l'artillerie ne peuvent pas ètre dispersèes pour ètre utilisèes dans plus d'un combat.

                </p><p>
                    L'artillerie doit ètre capable d'atteindre l'Hex du Dèfenseur avec leur valeur de portèe pour pouvoir apporter leur soutien en attaque ou en dèfense. Notez que l'artillerie qui a une portèe de un devra ètre adjacente è l'hex du dèfenseur pour pouvoir participer.
                </p><p>
                    Les valeurs de soutien d'artillerie ne peuvent pas dèpasser la force de combat terrestre des unitès amies impliquèes dans la dèfense/attaque.
                </p>


                <div className="spacer2rem" />
                <div className="subheader-image artillery">
                    <div>Ordres Pas de Retraite et Retraite Supplèmentaire</div>
                    <img src={orders_strip} alt="orders counters" />
                </div>
                <div className="spacer1rem" />
                <p>
                    L'attaquant ou le dèfenseur peut placer des marqueurs d'ordres Pas de Retraite ou Retraite Supplèmentaire sur les unitès au combat. Un ordre s'applique è toutes les unitès engagèes dans le combat, mème si c'est un combat multi-hexs. Le joueur Allemand peut toujours donner ces ordres librement, mais le joueur Soviétique doit avoir un QG è portèe de commandement des unitès avec un point de commandement non interdit pour pouvoir donner l'ordre. Une exception pour les Soviétiques : les unitès du NKVD. Un dèfenseur dan s un hex de village, de ville ou de ville majeure et avec une unitè du NKVD place automatiquement un ordre Pas de Retraite dans l'hex (ceci n'est pas optionnel, vous y ètes obligè), sauf si l'hex est è portèe d'un QG non-op (voir la page sur les QG).
                </p><p>
                    Les ordres sont placès face cachèe et ne sont rèvèlè qu'au moment de lancer le dè de rèsolution du combat. L'attaquant place ses ordres en premier. Sauf dans le cas du NKVD, les ordres sont optionnels.
                </p>









                <div className="gray-box">
                    <p className="subsubheader">Effets de l'ordre Pas de Retraite</p>
                    <div className="two-column-flex counter-left">
                        <img src={counter_no_retreat} alt="counter no retreat order" />
                        <div>
                            <ul>
                                <li>Pour le dèfenseur : +1 DRM au dè de combat. L'attaquant avec un ordre Pas de Retraite n'obtient aucun DRM.</li>
                                <li>Les unitès sous un marqueur Pas de Retraite changent un rèsultat "R" en perte d'un pas. Appliquez ensuite le rèsultat numèrique des pertes de pas (un R se transforme en "1", un "R1" se transforme en "2", etc.).</li>
                                <li>De plus, toute unitè non Allemande subit un pas de pertes supplèmentaire è moins de se trouver dans un hex de ville majeure, de ville, de colline, de montagne, alpin, de bois, ou de fortification non dètruite.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="gray-box">
                    <p className="subsubheader">Effets de l'ordre Retraite Supplèmentaire</p>
                    <div className="two-column-flex counter-left">
                        <img src={counter_additional_retreat} alt="counter additional retreat order" />
                        <div>
                            <ul>
                                <li>Les unitès sous un marqueur de Retraite Supplèmentaire qui reèoivent un rèsultat R retraitent de 3 hexs au lieu de 2. Les unitès ne peuvent retraiter que sur un rèsultat "R" ou "Rn".</li>
                                <li>Le chemin de retraite est dèterminè par l'adversaire. Les unitès doivent retraiter par un chemin n'entraènant pas de pertes de pas si possible.</li>
                                <li>Les unitès avec une Retraite Supplèmentaire ne peuvent pas entrer dans un hex en ZDC ennemie incontestèe. Si elles sont forcèes de le faire, elles sont èliminèes.</li>
                                <li>Si il y a une perte numèrique en plus du rèsultat R, les unitès subissent un pas de pertes en moins.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="spacer1rem" />
                <p>
                    Gènèralement, c'est le dèfenseur qui utilisera le plus souvent les ordres. L'ordre Pas de Retraite empèche les unitès de retraiter, mais cela peut coèter plusieurs pas. A moins d'avoir plus de deux pas dans un hex en dèfense, il est très dangereux de placer un ordre Pas de Retraite sur ces unitès. Cela peut ètre tentant, car il y a un DRM +1 pour l'ennemi, mais vous pourrez donner une grande victoire è l'ennemi. Les ordres de Retraite Supplèmentaire sont assez utiles lorsque vou s voulez vraiment retraiter, et que vous voulez èviter les pertes.
                </p>

                <div className="spacer2rem" />
                <div className="subheader-image stalin">
                    <div>Pertes de Pas</div>
                    <img src={directhit} alt="Direct hit on anti-tank gun" />
                </div>
                <div className="spacer1rem" />
                <p>
                    Un rèsultat numèrique indique le nombre de pas que l'attaquant et/ou le dèfenseur doit subir. La perte est appliquèe è l'ensemble des unitès de l'attaquant ou du dèfenseur, et non è chaque unitè individuellement. Une unitè possède de 1 è 4 pas. Une unitè avec sa valeur de combat la plus èlevèe è 8 ou plus possède 4 pas, les unitès avec une force de 5-7 ont trois pas. Les unitès avec deux pas sont plus faibles sur leur verso. Une unitè qui n'a qu'un seul pas a un verso vierge (ou un cètè mobile dans le cas de l'artillerie super lourde). Les unitès avec 3 ou 4 pas doivent utiliser un marqueur de Perte de Pas pour indiquer les niveaux de forces intermèdiaires qui ne sont pas imprimès sur des pions.
                </p><p>
                    Les unitès èliminèes en combat è cause des pertes et qui n'ètaient pas complètement encerclèes ou bloquèes par du terrain infranchissable sont placèes dans la zone des Cadres pour ètre èventuellement reconstruites pendant la phase de remplacement, sinon elles vont dans la case èliminè. Les unitès dètruites par un rèsultat "e" vont dans la case èliminè. Les unitès dans la case èliminè ne peuvent pas ètre reconstruites. Exception - les unitès MG/UR Soviétiques èliminèes retournent toujours dans la tasse des unitès MG/UR. Les règles spèciales d'un scènario peuvent ignorer la règle des Cadres ou la modifier.
                </p><p>
                    Lorsqu'une unitè blindèe ou une unitè d'artillerie qui n'est pas une unitè de la garde perd un pas, dèplacez le maruqueur sur la piste des pertes de pas. Lorsque le marqueur atteint la fin de la piste, l'ennemi gagne 1 PV et remettez le marqueur au dèbut de la piste. Chaque pas de la garde perdu donne directement 1 PV è l'ennemi.
                </p><p>
                    Les pertes de pas peuvent ètre modifièes par un rèsultat avec une astèrisque (*), un ordre Pas de Retraite, ou un ordre de Retraite Supplèmentaire.
                </p>




                <div className="subheader-image stalin">
                    <span>16.3</span>
                    <div>Rèsultats avec une Astèrisque (<span className="bigger-bold-text">*</span>) Results</div>
                    <img src={wreck} alt="Wrecked pnazer" />
                </div>


                <div className="pdiv">
                    Ce symbole signifie "1 ètape de la perte additionnelle pour l'attaquant", ou Attrition. Ou il peut signifier que tous les deux se produisent, si les conditions de qualification existent.
                    <ul classname="ul-no-top">
                        <li>Cela peut signifier une "perte supplémentaire" pour un attaquant (<span className="green-bold">PERTE SUPPLEMENTAIRE</span>).</li>
                        <li>Il peut déterminer que la première perte distribuée DOIT être faite à un ingénieur ou à une unité de blindage. ( <span className="blue-bold">ATTRITION DU'GÈNIE</span> or <span className="red-bold">
                            ATTRITION DE L'ARMURE</span>)</li>
                    </ul>
                    Et, parfois, les deux peuvent entrer en vigueur.
                </div>

                <div className="gray-box additional-loss">
                    <p className="subsubheader"><span className="green-bold">PERTE SUPPLEMENTAIRE</span> avec une Astèrisque (<span className="bigger-bold-text">*</span>) sont activès lorsqu'une de ces conditions s'applique:</p>

                    <div>
                        <ul>
                            <li>Si l'attaque a ètè faite sans Ravitaillement d'Attaque.</li>
                            <li>Si l'attaque ètait une Attaque Obligatoire Soviétique.</li>
                            <li>Si l'attaque ètait dirigèe contre des unitès protègèes par une Fortification non dètruite (ligne fortifièe ou fortin). Dans le cas d'une attaque è travers une ligne fortifièe, tous les attaquants doivent avoir attaquer è travers une ligne fortifièe pour que le rèsultat <span className="asterisk">*</span> s'applique.</li>
                        </ul>
                    </div>

                </div>

                <div className="spacer1rem" />
                <p>
                    Ces conditions sont cumulatives. Vous pouvez subir deux rèsultats <span className="asterisk">*</span>, ou mème trois si : votre force (1) attaque sans Ravitaillement d'Attaque, en faisant (2) une Attaque Obligatoire, et (3) en attaquant une fortification.
                </p><p>
                    La perte supplèmentaire causèe par l'astèrisque peut gènèralement ètre appliquèe è l'unitè de votre choix. Par contre, si l'Attrition du Gènie ou des Blindès s'applique - vous pourrez ètre forcè de perdre un pas du gènie ou un pas blindè.
                </p>

                <p className="subheader2">
                    <span className="blue-bold">ATTRITION DU GENIE</span> and <span className="red-bold">ATTRITION DES BLINDES</span>
                </p>
                <p>
                    S'il y a un astèrisque sur le rèsultat , et il y a des génies d'attaque ou une armure, puis vérifiez les cas suivants pour voir s'ils s'appliquent:
                </p>
                <div className="spacer2rem" />

                <div className="engineer-attrition">
                    <div className="title">ATTRITION DU GENIE</div>
                    <div className="subtitle">Rèsultats Astèrisque (<span className="asterisk">*</span>) et Gènie</div>
                    <img src={german_engineer} alt="German engineer counter" />
                    <div className="eatext">
                        S'il y a un astèrisque sur le rèsultat - alors:<br />
                        Si les Effets du Gènie ont ètè dèclarès par l'attaquant pour obtenir un DRM -1, alors l'unitè du gènie doit perdre le pas supplèmentaire causè par le rèsultat <span className="asterisk">*</span>:<br />
                        un rèsultat <span className="asterisk">*</span> signifie : un pas du gènie est perdu.<br />
                        un rèsultat 1<span className="asterisk">*</span> signifie : un pas du gènie est perdu (satisfait le 1 nombre de perte d'ètape).
                    </div>
                </div>

                <div className="spacer2rem" />

                <div className="armor-attrition">
                    <div className="title">ATTRITION DES BLINDES</div>
                    <div className="subtitle">Rèsultats Astèrisque (<span className="asterisk">*</span>) et Blindès</div>
                    <div className="generic-flex-space-around armor">
                        <img src={panzer} alt="German panzer counter" />
                        <div>"Blindè" signifie ici les unitès
                            avec une valeur d'attaque en rouge.
                        </div>
                    </div>
                    <div className="aatext">

                        S'il y a un astèrisque sur le rèsultat - alors:<br />
                        Si  <span className="italic-bold">tout</span> ce qui suit est vrai:<br />
                        <ul className="moveup">
                            <li>Si la force en attaque contient au moins une Unitè Blindèe.</li>
                            <li>Si la force en dèfense contient au moins un de ces pas : blindè, anti-chars ou anti-aèrien.</li>
                            <li>Si les Effets du Gènie n'ont pas ètè dèclarès.</li>
                            <li>Si le rèsultat du combat contient une astèrisque ET un chiffre.</li>
                        </ul>
                        Alors -<br />
                        l'attrition des blindès se produit - Un rèsultat 1<span className="asterisk">*</span> signifie : un pas blindè est perdu (satisfait le 1 nombre de perte d'ètape).<br />
                        <div className="extra"><span className="red-bold">ATTRITION DES BLINDES</span> peut se produire pour attaquer, et défendre, blindes.</div>
                        <span className="other-notes">
                            autre notes:<br />
                            Un rèsultat avec seulement une <span className="asterisk">*</span> n'entraène pas l'attrition des blindès.<br />
                            Si un pas blindè est perdu è cause de l'attrition des blindès pour la force en dèfense, au cas oè plus d'1<br />
                            pas doit ètre perdu, le premier pas doit ètre retirè è une unitè blindèe, anti-chars, ou anti-aèrienne.
                        </span>
                    </div>

                </div>


                <div className="spacer2rem" />


                <p>
                    Si l'attaquant subit plusieurs rèsultats * (è cause de multiples qualifications pour un rèsultat <span className="asterisk">*</span>), l'attrition du gènie ou des blindès ne s'applique que pour la première <span className="asterisk">*</span>. Les autres ètoiles sont traitèes comme des pertes supplèmentaires è appli quer è n'importe quelles unitès.
                </p><p>
                    L'attrition du gènie est prioritaire sur l'attrition des blindès. Si une attrition du gènie se produit, n'appliquez pas l'attrition des blindès.
                </p><p>
                    Les unitès en attaque avec une ordre de Retraite Supplèmentaire doivent toujours accepter les rèsultats <span className="asterisk">*</span> si ils s'appliquent. Le bènèfice de la Retraite Supplèmentaire ne fait que soustraire 1 è un rèsultat numèrique, il ne permet pas de diminuer le nombre d'astèrisques.
                </p>



                <div className="spacer2rem" />
                <div className="subheader-image stalin">
                    <div>Retraites	</div>
                    <img src={retreat} alt="retreat" />
                </div>
                <div className="spacer1rem" />
                <div className="pdiv">


                    Dans la plupart des cas, c'est le propriètaire des pions qui retraite ses unitès. Si les unitès qui retraitent ont un ordre "Retraite Supplèmentaire", alors c'est l'adversaire qui retraite les unitès.
                    <ul className="ul-no-top">
                        <li>La retraite doit èloigner les unitès de l'Hex du Dèfenseur de dèpart.</li>
                        <li>Le propriètaire des unitès ne peut pas volontairement retraiter è travers une ZDC ennemie pour les dètruire si un chemin de retraite plus sèr existe.</li>
                        <li>Si les unitès sont forcèes de terminer leur retraite en surempilement, elles peuvent retr aiter d'un hex supplèmentaire. Si elles en sont incapables, elles sont èliminèes.</li>
                        <li>Certaines unitès ne peuvent jamais retraiter - l'artillerie super lourde en mode tir, les dèpèts, les unitès de pontonniers et les unitès avec une CM è zèro. Les dèpèts sont dètruits et les unitès de pontonniers peuvent revenir en jeu pendant la Phase de Mouvement de leur propriètaire.</li>
                        <li>Les unitès ne peuvent pas retraiter dans des hexs oè le mouvement leur est interdit.</li>
                        <li>Les unitès ne peuvent pas retraiter è travers deux hexs consècutifs en ZDC ennemie, è moins qu'une unitè amie n'y soit prèsente. Si elles sont forcèes de le faire, elles sont èliminèes.</li>
                        <li>Les unitès peuvent traverser un hex en ZDC ennemie, mais l'unitè (ou la pile) perd un pas et doit faire un jet sur la table de retraite.</li>
                        <li>Les QG Soviétiques qui sont forcès de retraiter è travers un hex en ZDC ennemi et qui n'est pas occupè par une unitè amie est retournè sur sa face non-op.</li>
                        <li>Les unitès d'artillerie peuvent ètre volontairement dètruites avant de faire un jet sur la table de retraite (afin d'èviter les DRM de pènalitè pour artillerie en retraite).</li>
                        <li>Les unitès ne peuvent pas retraiter è travers une Rivière Majeure sans pont, sauf avec un temps Neige/Arctique, les unitès qui ne sont pas de l'artillerie le peuvent. </li>
                    </ul>
                </div>




                <div className="spacer2rem" />
                <div className="subheader-image stalin">
                    <div>Avance Après Combat</div>
                    <img src={advance} alt="advance" />
                </div>
                <div className="spacer1rem" />
                <div className="pdiv">
                    Lorsqu'un hex du dèfenseur est libèrè suite è une retraite ou une èlimination, toutes les unitès de l'attaquant qui ont survècu peuvent avancer dans cet hex (en ignorant les ZDC ennemies), avec quelques limitations.
                    <ul className="ul-no-top">
                        <li>La dècision de l'avance doit ètre prise avant de passer è un autre combat.</li>
                        <li>Toutes, quelques unes ou aucune des unitès de l'attaquant peuvent avancer, c'est lui qui choisit.</li>
                        <li>Les unitès d'artillerie ne peuvent pas avancer après combat.</li>
                        <li>L'attaquant ne peut pas dèpasser les limites d'empilement pendant une avance.</li>
                        <li>Dans le cas d'un combat avec plusieurs hexs en dèfense, l'attaquant peut choisir dans quel hex il avance.</li>
                        <li>Les unitès qui attaquent avec un ordre de Retraite Supplèmentaire ne peuvent pas avancer.</li>
                        <li>Les unitès qui attaquent ne peuvent pas avancer dans un terrain qui leur est interdit pour le mouvement.</li>
                    </ul>

                    L'avance peut ètre utilisèe pour couper les possibles retraites du dèfenseur pour d'autres combats de cette phase. En fait, les bons joueurs ont toujours ceci en mèmoire lorsqu'ils prèparent leurs attaques.
                </div>

                <div className="spacer2rem" />
                <p className="centered">
                    <img src={germanantitank1942east} alt="German anti-tank crew" />
                </p>

                <p className="subheader2">Règles de Combat Supplèmentaires</p>
                <div className="pdiv">
                    <ul className="ul-no-top">
                        <li>Le DRM maximal pouvant ètre appliquè è un combat est +3 ou -3. Les DRM en excès sont ignorès.</li>
                        <li>Le rapport de forces est arrondi en faveur du dèfenseur.</li>
                        <li>Si le rapport passe è moins de 1-4, l'attaquant est èliminè. Les rapports supèrieurs è 10-1 sont rèsolus sur la colonne 10-1.</li>
                        <li>L'attaquant ne peut pas volontairement diminuer le rapport de forces final, en dehors de sa capacitè è choisir avec quelles unitès il va attaquer.</li>
                        <li>Les blindès sont rèduits de moitiè lorsqu'ils attaquent un hex de ville ou de ville majeure.</li>
                        <li>Les dèfenseurs en ville bènèficient d'un DRM +1. Un dèfenseur Soviétique dans une ville majeure bènèficie d'un DRM +2.</li>
                        <li>La force de combat des unitès est rèduite de moitiè en attaquant depuis un hex d'ètang par temps Clair, Pluie ou Gel.</li>
                        <li>La force de soutien de l'artillerie est rèduite de moitiè lorsqu'elle tire dans un hex d'ètang par temps Clair, Pluie ou Gel.</li>
                        <li>La force de combat des unitès est rèduite de moitiè lorsqu'elles attaquent è travers une rivière majeure si le temps n'est pas Neige/Arctique. Les ponts n'ont aucun effet.</li>
                        <li>Les villages apportent un DRM +1 lorsqu'il Pleut (ou si un village est dans un Bois pendant une pluie prolongèe) ou lorsqu'il Neige.</li>
                        <li>Les attaquants avec un ordre de Retraite Supplèmentaire ne peuvent pas avancer après combat si le dèfenseur retraite ou est èliminè. </li>
                    </ul>
                </div>

            </div>
































            <ScrollToTopOnMount />


        </div>
    );
}

export default Combat;