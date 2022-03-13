import React from 'react';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
import BsrLink from "../BsrLink/BsrLink";
import './Units.scss';

import c10 from "../../../images/efs/units/c10.jpg";
import c11 from "../../../images/efs/units/c11.jpg";
import c12 from "../../../images/efs/units/c12.jpg";
import c13 from "../../../images/efs/units/c13.jpg";
import c1 from "../../../images/efs/units/c1.jpg";
import c2 from "../../../images/efs/units/c2.jpg";
import c3 from "../../../images/efs/units/c3.jpg";
import c4 from "../../../images/efs/units/c4.jpg";
import c5 from "../../../images/efs/units/c5.jpg";
import c6 from "../../../images/efs/units/c6.jpg";
import c7 from "../../../images/efs/units/c7.jpg";
import c8 from "../../../images/efs/units/c8.jpg";
import finnish_60 from "../../../images/efs/units/finnish_60.gif";
import italian_infantry_div_60 from "../../../images/efs/units/italian_infantry_div_60.gif";
import rumanian_infantry_div_60 from "../../../images/efs/units/rumanian_infantry_div_60.gif";
import s10 from "../../../images/efs/units/s10.gif";
import s11 from "../../../images/efs/units/s11.gif";
import s12 from "../../../images/efs/units/s12.gif";
import s13 from "../../../images/efs/units/s13.gif";
import s14 from "../../../images/efs/units/s14.gif";
import s15 from "../../../images/efs/units/s15.gif";
import s16 from "../../../images/efs/units/s16.gif";
import s18 from "../../../images/efs/units/s18.gif";
import s19 from "../../../images/efs/units/s19.gif";
import s20 from "../../../images/efs/units/s20.gif";
import s21 from "../../../images/efs/units/s21.gif";
import s22 from "../../../images/efs/units/s22.gif";
import s23 from "../../../images/efs/units/s23.gif";
import s24 from "../../../images/efs/units/s24.gif";
import s25 from "../../../images/efs/units/s25.gif";
import s26 from "../../../images/efs/units/s26.gif";
import s27 from "../../../images/efs/units/s27.gif";
import s28 from "../../../images/efs/units/s28.gif";
import s29 from "../../../images/efs/units/s29.gif";
import s30 from "../../../images/efs/units/s30.gif";
import s31 from "../../../images/efs/units/s31.gif";
import s32 from "../../../images/efs/units/s32.gif";
import s4 from "../../../images/efs/units/s4.gif";
import s5 from "../../../images/efs/units/s5.gif";
import s6 from "../../../images/efs/units/s6.gif";
import s7 from "../../../images/efs/units/s7.gif";
import s8b from "../../../images/efs/units/s8b.gif";
import s8 from "../../../images/efs/units/s8.gif";
import s9 from "../../../images/efs/units/s9.gif";
import slovak_infantry_div_60 from "../../../images/efs/units/slovak_infantry_div_60.gif";
import unitinfo1 from "../../../images/efs/units/unitinfo1.gif";
import unitinfo2 from "../../../images/efs/units/unitinfo2.gif";
import unitinfo3 from "../../../images/efs/units/unitinfo3.gif";
import unitinfo4 from "../../../images/efs/units/unitinfo4.gif";
import unitinfo1_fr from "../../../images/efs/units/unitinfo1_fr.gif";
import unitinfo2_fr from "../../../images/efs/units/unitinfo2_fr.gif";
import unitinfo3_fr from "../../../images/efs/units/unitinfo3_fr.gif";
import unitinfo4_fr from "../../../images/efs/units/unitinfo4_fr.jpg";

const Units = (props) => {
    return (
        <div className="content">

            <div className="content-title">
                <div>UNITS</div>
                <div></div>
            </div>

            <div>
                <div className="clipart">
                    <img src={unitinfo1} alt="unit info 1" />
                </div>
            </div>

            <p>
                <span>
                    Counters representing ground units have a variety of information packed on them. The graphic above should be self explanatory. Many of the counters come with their setup hexes printed on them and/or icons that designate in what scenario they appear in. Most ground combat units have separate attack and defense strengths. Some units are better on the attack than defense, and some are stronger in defense than attack (or have no attack strength).
                </span>
            </p>

            <div>
                <div className="clipart">
                    <img src={unitinfo2} alt="unit info 2" />
                </div>
            </div>

            <p>
                <span>
                    There are various types of artillery in EFS. The more common artillery types move like regular combat units do. They
                    can move along roads, trails, open terrain, or be transported by rail. Ranges and support strengths of the artillery units
                    depend on the type of artillery guns the unit historically had. Rocket artillery has a range of 1, which means they have
                    to be adjacent to the hex they are supporting. Most artillery ranges are 2. Some big guns, such as railway guns or super
                    heavy artillery, may have ranges up to 8 hexes. These big guns typically have a "move" and a "fire" side. While moving they
                    cannot support, and must wait to "flip" to their "firing" side to contribute to combats. Soviet Navy ships can only support
                    combats that are near the coast.
                </span>
            </p>

            <div>
                <div className="clipart">
                    <img src={unitinfo3} alt="unit info 3" />
                </div>
            </div>

            <p>
                <span>
                    Soviet Headquarters can be either "operational" or "non-operational". A Soviet Headquarters that is non-operation causes a disruption in command control in the area they are in. To become operational, they must make their activation die roll, which has to be equal or less than the "recovery value". The command value of a headquarters indicates the level of command control it can exert. A low value means it is a weak headquarters (0 or 1), while higher command values (2-3) indicates a well run headquarters. Command values give a headquarters ability to activate non-motorized units to allow them to move in the Soviet motorized phases, the ability to give "no retreat" or "retreat" orders, and the ability to order reserves into a defensive battle.
                </span>
            </p>


            <div>
                <div className="clipart">
                    <img src={unitinfo4} alt="unit info 4" />
                </div>
            </div>

            <p>
                <span>
                    There are two types of aircraft in EFS, "Bombers" and "Fighters". Bombers can do close air support and/or interdiction.
                    Some fighters can also do close air support and/or interdiction, although their primary role is as a fighter. Air Combat
                    Ratings range from 1 (poor) to 4 (strong). Close air support provides DRMs to the combat die roll of a ground combat. Axis
                    aircraft can interdict Soviet movement, and decrease the Command Value of Soviet headquarters. Aircraft can be damaged or
                    destroyed by air combat or by anti-air.
                    <br /><br /> Color is extensively used on the counters to express a variety of information. The following graphic provides a
                    legend to the color codes.
                </span>
            </p>

            <div>

                <div className="gray-box">
                    <p className="subsubheader2">COLOR CODES</p>

                    <div className="two-column-flex">
                        <div className="color-code-image"><img src={c1} alt="attack factor is red" /></div>
                        <div className="color-code-text">
                            <div><span>Attack factor is red:</span> Armored unit.</div>
                            <div><span>Movement in red box:</span> Unit is motorized.</div>
                        </div>
                    </div>

                    <div className="two-column-flex">
                        <div className="color-code-image"><img src={c2} alt="c2" /></div>
                        <div className="color-code-text">
                            <div><span>Yellow band across top:</span> Has ZOC only in hex occupied.</div>
                            <div><span>Unit type is blue:</span> Naval.</div>
                            <div><span>Movement factor is green:</span> Super-heavy artillery.</div>
                        </div>
                    </div>

                    <div className="two-column-flex">
                        <div className="color-code-image"><img src={c3} alt="c3" /></div>
                        <div className="color-code-text">
                            <div><span>Movement factor is blue:</span> Flotilla movement only.</div>
                        </div>
                    </div>

                    <div className="two-column-flex">
                        <div className="color-code-image"><img src={c4} alt="c4" /></div>
                        <div className="color-code-text">
                            <div><span>Unit type is green:</span> NKVD.</div>
                        </div>
                    </div>


                    <div className="two-column-flex">
                        <div className="color-code-image"><img src={c5} alt="c5" /></div>
                        <div className="color-code-text">
                            <div><span>Unit type is yellow:</span> Militia.</div>
                        </div>
                    </div>

                    <div className="two-column-flex">
                        <div className="color-code-image"><img src={c6} alt="c6" /></div>
                        <div className="color-code-text">
                            <div><span>Unit type is light blue:</span> Airborne.</div>
                        </div>
                    </div>

                    <div className="two-column-flex">
                        <div className="color-code-image"><img src={c13} alt="c13" /></div>
                        <div className="color-code-text">
                            <div><span>Unit type is red:</span> Guards.</div>
                        </div>
                    </div>

                    <div className="two-column-flex">
                        <div className="color-code-image"><img src={c7} alt="c7" /></div>
                        <div className="color-code-text">
                            <div><span>Unit type is white:</span> Regular army.</div>
                        </div>
                    </div>

                    <div className="two-column-flex">
                        <div className="color-code-image"><img src={c8} alt="c8" /></div>
                        <div className="color-code-text">
                            <div><span>Movement factor is yellow:</span> Infiltration capable.</div>
                        </div>
                    </div>

                    <div className="two-column-flex">
                        <div className="color-code-image"><img src={c10} alt="c10" /></div>
                        <div className="color-code-text">
                            <div><span>Movement factor is gray:</span> Rail movement only.</div>
                        </div>
                    </div>

                    <div className="two-column-flex">
                        <div className="color-code-image"><img src={c11} alt="c11" /></div>
                        <div className="color-code-text">
                            <div><span>Unit type is light blue:</span> Luftwaffe/Airborne.</div>
                        </div>
                    </div>

                    <div className="two-column-flex">
                        <div className="color-code-image"><img src={c12} alt="c12" /></div>
                        <div className="color-code-text">
                            <div><span>Movement factor is orange:</span> Motorized, moves full in regular movement.</div>
                        </div>
                    </div>

                    <div className="two-column-flex">
                        <div className="color-code-image"><img src={italian_infantry_div_60} alt="Italian infantry" /></div>
                        <div className="color-code-text">
                            <div><span>Italian units are purple.</span></div>
                        </div>
                    </div>


                    <div className="two-column-flex">
                        <div className="color-code-image"><img src={slovak_infantry_div_60} alt="Slovak infantry" /></div>
                        <div className="color-code-text">
                            <div><span>Slovak units are light green.</span></div>
                        </div>
                    </div>

                    <div className="two-column-flex">
                        <div className="color-code-image"><img src={rumanian_infantry_div_60} alt="Romanian infantry" /></div>
                        <div className="color-code-text">
                            <div><span>Romanian units are green.</span></div>
                        </div>
                    </div>

                    <div className="two-column-flex">
                        <div className="color-code-image"><img src={finnish_60} alt="Finnish infantry" /></div>
                        <div className="color-code-text">
                            <div><span>Finnish units are white with blue stripe.</span></div>
                        </div>
                    </div>

                </div>

                <div className="spacer2rem" />

                <p>
                    <span>
                        Unit size is shown by small designations on the top of the unit type symbol. There was of course alot of variation in what a "division" or "regiment" meant, depending on nationality and time. But generally a corps could have anywhere from 2 to 5 divisions. A division would have 3 regiments/brigades of its main type, plus several smaller battalions and companies of supporting troops. A regiment or brigade would have 2-5 battalions. The term regiment is often considered the same thing as a brigade, but brigades were usually designed to be more of a standalone fighting unit and not necessarily part of a division. Soviet divisions were smaller than German divisions.
                    </span>
                </p>

                <div className="spacer1rem" />

                <table className="unit-size"><tbody>
                    <tr>
                        <td>XXX</td>
                        <td>Corps</td>
                        <td>Corps had a variable number of divisions assigned to them.</td>
                    </tr>
                    <tr>
                        <td>XX</td>
                        <td>Division</td>
                        <td> German infantry division official strength was around 15,000 to 18,000 men in a division.<br /> German panzer
                            divisions had around 150-200 tanks, and about 11,000 men.<br /> Soviet infantry divisions had around 11,000 men.</td>
                    </tr>
                    <tr>
                        <td>X</td>
                        <td>Brigade</td>
                        <td>Soviets often used tank brigades to supplement infantry units.</td>
                    </tr>
                    <tr>
                        <td>III</td>
                        <td>Regiment</td>
                        <td>Around 1,200 - 3,000 men. Generally 3 regiments to a division.</td>
                    </tr>
                    <tr>
                        <td>II</td>
                        <td>Battalion</td>
                        <td>400 - 900 men. A battalion typically had 3-5 companies.</td>
                    </tr>
                    <tr>
                        <td>I</td>
                        <td>Company</td>
                        <td>100-300 men.</td>
                    </tr>
                </tbody>
                </table>



                <div className="spacer3rem" />
                <p>
                    <span>
                        There's a large variety of unit types in EFS. Many have specific capabilities and restrictions described in the rules.
                    </span>
                </p>

                <section>
                    <div className="subheader1_4">MOTORIZED UNITS</div>
                    <table className="unit-type"><tbody>
                        <tr>
                            <td><img src={s4} alt="armor" /></td>
                            <td>Armor<span className="red">*</span></td>

                            <td><img src={s5} alt="assault gun" /></td>
                            <td>Assault Gun</td>

                            <td><img src={s6} alt="armored anti-tank" /></td>
                            <td>Armored Anti-Tank<span className="red">*</span></td>

                            <td><img src={s7} alt="recon" /></td>
                            <td>Recon</td>
                        </tr></tbody>
                    </table>

                    <table className="unit-type"><tbody>
                        <tr>
                            <td><img src={s8} alt="motorized infantry" /></td>
                            <td>Motorized Infantry</td>

                            <td><img src={s8b} alt="motorcycle infantry" /></td>
                            <td>Motorcycle Infantry</td>

                            <td><img src={s9} alt="motorized border infantry" /></td>
                            <td>Motorized Border Infantry</td>

                            <td><img src={s10} alt="motorized combat engineer" /></td>
                            <td>Motorized Combat Engineer</td>
                        </tr></tbody>
                    </table>

                    <table className="unit-type"><tbody>
                        <tr>
                            <td><img src={s11} alt="motorized anti-aircraft" /></td>
                            <td>Motorized Anti-Aircraft</td>

                            <td><img src={s12} alt="motorized anti-tank" /></td>
                            <td>Motorized Anti-Tank</td>

                        </tr></tbody>
                    </table>
                    <div className="note"><span className="red">*</span> Considered "Armor" for Armor Attrition, CAB, Panzer Divisional Integrity, and Armor Loss.</div>


                </section>











                <section>
                    <div className="subheader1_4">NON-MOTORIZED UNITS</div>
                    <table className="unit-type"><tbody>
                        <tr>
                            <td><img src={s13} alt="infantry" /></td>
                            <td>Infantry</td>

                            <td><img src={s14} alt="mountain infantry" /></td>
                            <td>Mountain Infantry</td>

                            <td><img src={s15} alt="Airborne / Parachute" /></td>
                            <td>Airborne / Parachute</td>

                            <td><img src={s16} alt="s16" /></td>
                            <td>Security</td>
                        </tr></tbody>
                    </table>

                    <table className="unit-type"><tbody>
                        <tr>
                            <td><img src={s18} alt="partisan" /></td>
                            <td>Partisan</td>

                            <td><img src={s19} alt="combat engineer" /></td>
                            <td>Combat Engineer</td>

                            <td><img src={s20} alt="ski" /></td>
                            <td>Ski</td>

                            <td><img src={s21} alt="cavalry" /></td>
                            <td>Cavalry</td>
                        </tr></tbody>
                    </table>

                    <table className="unit-type"><tbody>
                        <tr>
                            <td><img src={s22} alt="headquarters" /></td>
                            <td>Headquarters</td>

                            <td><img src={s23} alt="anti-aircraft" /></td>
                            <td>Anti-Aircraft</td>

                        </tr></tbody>
                    </table>
                </section>




                <section>
                    <div className="subheader1_4">ARTILLERY UNITS</div>
                    <table className="unit-type"><tbody>
                        <tr>
                            <td><img src={s24} alt="Field Artillery" /></td>
                            <td>Field Artillery</td>

                            <td><img src={s25} alt="Rocket Artillery" /></td>
                            <td>Rocket Artillery</td>

                            <td><img src={s26} alt="Coast Artillery" /></td>
                            <td>Coast Artillery</td>

                            <td><img src={s27} alt="Super-Heavy Artillery" /></td>
                            <td>Super-Heavy Artillery</td>
                        </tr></tbody>
                    </table>

                    <table className="unit-type"><tbody>
                        <tr>
                            <td><img src={s28} alt="Railroad Super-Heavy Artillery" /></td>
                            <td>Railroad Super-Heavy Artillery</td>

                            <td><img src={s29} alt="Super-Heavy (firing side)" /></td>
                            <td>Super-Heavy (firing side)</td>

                            <td><img src={s30} alt="Naval Unit" /></td>
                            <td>Naval Unit</td>

                        </tr></tbody>
                    </table>

                </section>





                <section>
                    <div className="subheader1_4">SPECIAL UNITS</div>
                    <table className="unit-type"><tbody>
                        <tr>
                            <td><img src={s31} alt="Flotilla" /></td>
                            <td>Flotilla</td>

                            <td><img src={s32} alt="Armored Train" /></td>
                            <td>Armored Train</td>

                        </tr></tbody>
                    </table>

                </section>

            </div>







            <ScrollToTopOnMount />



        </div>

    );
}

export default Units;