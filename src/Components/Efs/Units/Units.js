import React from 'react';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
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
                <div className={props.language === 'en' ? '' : 'block-hidden'}>UNITS</div>
                <div className={props.language === 'fr' ? '' : 'block-hidden'}>UNITÉS</div>
                <div className={props.language === 'ru' ? '' : 'block-hidden'}>UNITS ru</div>
                <div></div>
            </div>

            <div className={props.language === 'en' ? '' : 'block-hidden'}>
            <div className="clipart">
                <img src={unitinfo1} alt="unit info 1" />
            </div>
            </div>
            <div className={props.language === 'fr' ? '' : 'block-hidden'}>
            <div className="clipart">
                <img src={unitinfo1_fr} alt="unit info 1" />
            </div>
            </div>

            <p>
                <span className={props.language === 'en' ? '' : 'block-hidden'}>
                    Counters representing ground units have a variety of information packed on them. The graphic above should be self explanatory. Many of the counters come with their setup hexes printed on them and/or icons that designate in what scenario they appear in. Most ground combat units have separate attack and defense strengths. Some units are better on the attack than defense, and some are stronger in defense than attack (or have no attack strength).
                </span>
                <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                    Les pions qui reprèsentent les unitès terrestres sont imprimès avec un bon nombre d'informations. La photo ci-dessus ne devrait pas avoir besoin d'explications. La plupart des pions ont leur hex de placement directement imprimè, et/ou il y a des icènes qui dèsignent dans quel scènario ils apparaissent. La plupart des unitès de combat terrestres ont une force d'attaque et une force de dèfense sèparèe. Certaines unitès sont meilleures en attaque qu'en dèfense, et certaines sont plus fortes en dèfense qu'en attaque (ou n'ont pas de force d'attaque).
                    </span>
                <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                    Russian text
                </span>
            </p>

<div className={props.language === 'en' ? '' : 'block-hidden'}>
            <div className="clipart">
                <img src={unitinfo2} alt="unit info 2" />
            </div>
</div>
<div className={props.language === 'fr' ? '' : 'block-hidden'}>
            <div className="clipart">
                <img src={unitinfo2_fr} alt="unit info 2" />
            </div>
</div>

            <p>
                <span className={props.language === 'en' ? '' : 'block-hidden'}>
                    There are various types of artillery in EFS. The more common artillery types move like regular combat units do. They
    can move along roads, trails, open terrain, or be transported by rail. Ranges and support strengths of the artillery units
    depend on the type of artillery guns the unit historically had. Rocket artillery has a range of 1, which means they have
    to be adjacent to the hex they are supporting. Most artillery ranges are 2. Some big guns, such as railway guns or super
    heavy artillery, may have ranges up to 8 hexes. These big guns typically have a "move" and a "fire" side. While moving they
    cannot support, and must wait to "flip" to their "firing" side to contribute to combats. Soviet Navy ships can only support
    combats that are near the coast.
                </span>
                <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                    Il y a plus ieurs types d'artillerie dans EFS. Les types d'artillerie les plus courants se dèplacent comme des unitès de combat règulières. Elles peuvent se dèplacer sur les routes, les chemins, en terrain clair ou ètre transportèes en train. La portèe et la force de soutien des unitès d'artillerie dèpend du type de canons que possèdait l'unitè historique. Les fusèes ont une portèe de 1, ce qui signifie qu'elles doivent ètre adjacentes è l'hex qu'elles soutiennent. La majoritè des portèes de l'artillerie est 2. Certains gros canons, comme les canons ferroviaires ou l'artillerie super lourde, peut avoir une portèe jusqu'è 8 hexs. Gènèralement ces gros canons ont un cètè "mouvement" et un cètè "tir". Lorsqu'ils se dèplacent, ils ne peuvent pas soutenir, et doivent attendre d'ètre retournès sur leur cètè de "tir" pour pouvoir participer è un combat. Les navires Soviétiques ne peuvent soutenir que des combats se dèroulant près des cètes.
                    </span>
                <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                    Russian text
                </span>
            </p>









            <div className={props.language === 'en' ? '' : 'block-hidden'}>
            <div className="clipart">
                <img src={unitinfo3} alt="unit info 3" />
            </div>
            </div>
            <div className={props.language === 'fr' ? '' : 'block-hidden'}>
            <div className="clipart">
                <img src={unitinfo3_fr} alt="unit info 3" />
            </div>
            </div>

            <p>
                <span className={props.language === 'en' ? '' : 'block-hidden'}>
                    Soviet Headquarters can be either "operational" or "non-operational". A Soviet Headquarters that is non-operation causes a disruption in command control in the area they are in. To become operational, they must make their activation die roll, which has to be equal or less than the "recovery value". The command value of a headquarters indicates the level of command control it can exert. A low value means it is a weak headquarters (0 or 1), while higher command values (2-3) indicates a well run headquarters. Command values give a headquarters ability to activate non-motorized units to allow them to move in the Soviet motorized phases, the ability to give "no retreat" or "retreat" orders, and the ability to order reserves into a defensive battle.
                </span>
                <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                    Les Quertiers Gènèraux Soviétiques peuvent ètre "opèrationnel" ou "non-opèrationnel". Un QG Soviétique qui n'est pas opèrationnel cause une dèsorganisation du contrèle de commandement dans la règion qui l'entoure. Pour redevenir opèrationnel, il doit rèussir un jet d'activation, qui doit avoir un rèsultat infèrieur ou ègal è sa "valeur de rècupèration". La valeur de commandement d'un QG indique le niveau du contrèle de commandement qu'il peut exercer. Une basse valeur indique que c'est un QG faible (0 ou 1), alors qu'une haute valeur de commandement (2-3) indique un QG bien organisè. Les valeurs de commandement donnent aux QG la possibilitè d'activer des unitès non motorisèes pour leur permettre de se dèplacer au cours des phases motorisèes Soviétiques, ainsi que la capacitè è donner des ordres "Pas de Retraite" ou "Retraite", et de commander des rèserves lors d'une bataille dèfensive.
                    </span>
                <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                    Russian text
                </span>
            </p>


            <div className={props.language === 'en' ? '' : 'block-hidden'}>
            <div className="clipart">
                <img src={unitinfo4} alt="unit info 4" />
            </div>
            </div>
            <div className={props.language === 'fr' ? '' : 'block-hidden'}>
            <div className="clipart">
                <img src={unitinfo4_fr} alt="unit info 4" />
            </div>
            </div>

            <p>
                <span className={props.language === 'en' ? '' : 'block-hidden'}>
                    There are two types of aircraft in EFS, "Bombers" and "Fighters". Bombers can do close air support and/or interdiction.
                    Some fighters can also do close air support and/or interdiction, although their primary role is as a fighter. Air Combat
                    Ratings range from 1 (poor) to 4 (strong). Close air support provides DRMs to the combat die roll of a ground combat. Axis
                    aircraft can interdict Soviet movement, and decrease the Command Value of Soviet headquarters. Aircraft can be damaged or
                    destroyed by air combat or by anti-air.
                <br /><br /> Color is extensively used on the counters to express a variety of information. The following graphic provides a
                    legend to the color codes.
                </span>
                <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                    Il y a deux types d'avions dans EFS. Les "Bombardiers" et les "Chasseurs". Les bombardiers peuvent faire du soutien au sol et/ou de l'interdiction. Certains chasseurs peuvent aussi faire du soutien au sol et/ou de l'interdiction, bien que leur rèle principal soit celui de chasseur. Les valeurs de Combat Aèrien vont de 1 (mauvais) è 4 (fort). Le soutien au sol donne un DRM pour le dè du rèsultat du combat terrestre. L'aviation Allemande peut interdire le mouvement Soviétique et diminuer la Valeur de Commandement des QG Soviétiques. Les avions peuvent ètre endommagès ou dètruits par le combat aèrien ou la flak.
                <br /><br />
                    La couleur est frèquemment utilisèe sur les pions afin de reprèsenter un grand nombre d'informations. Les photos qui suivent permettent d'illustrer la signification de ces couleurs.
                </span>
                <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                    Russian text
                </span>
            </p>





















            <div className={props.language === 'en' ? '' : 'block-hidden'}>

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
                        <div><span>Slovak units are yellow.</span></div>
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
                <span className={props.language === 'en' ? '' : 'block-hidden'}>
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
                <span className={props.language === 'en' ? '' : 'block-hidden'}>
                    There's a large variety of unit types in EFS. Many have specific capabilities and restrictions described in the rules.                </span>
                <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                    Il y a une grande diversitè de types d'unitès dans EFS. La plupart ont des capacitès spècifiques ainsi que des restrictions qui sont dècrites dans les règles.
                </span>
                <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                    Russian text
                </span>
            </p>










            <section>
                <div className="subheader1_4">MOTORIZED UNITS</div>
                <table className="unit-type"><tbody>
                    <tr>
                        <td><img src={s4} alt="armor" /></td>
                        <td>Armor<span className="red">*</span></td>

                        <td><img src={s5} alt="assault gun" /></td>
                        <td>Assault Gun<span className="red">*</span></td>

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




















        <div className={props.language === 'fr' ? '' : 'block-hidden'}>

<div className="gray-box">
    <p className="subsubheader2">CODES DES COULEURS</p>

    <div className="two-column-flex">
        <div className="color-code-image"><img src={c1} alt="attack factor is red" /></div>
        <div className="color-code-text">
            <div><span>Facteur d'Attaque en rouge:</span> Unitè Blindèe.</div>
            <div><span>Mouvement dans une case rouge:</span>  l'Unitè est motorisèe.</div>
        </div>
    </div>

    <div className="two-column-flex">
        <div className="color-code-image"><img src={c2} alt="c2" /></div>
        <div className="color-code-text">
            <div><span>Bande jaune en haut:</span> N'a de ZDC que dans l'hex occupè.</div>
            <div><span>Type en bleu:</span> Navale.</div>
            <div><span>Mouvement en vert:</span> NKVD.</div>
        </div>
    </div>

    <div className="two-column-flex">
        <div className="color-code-image"><img src={c3} alt="c3" /></div>
        <div className="color-code-text">
            <div><span>Mouvement en bleu:</span> Mouvement de flottille uniquement.</div>
        </div>
    </div>

    <div className="two-column-flex">
        <div className="color-code-image"><img src={c4} alt="c4" /></div>
        <div className="color-code-text">
            <div><span>Type en vert:</span> NKVD.</div>
        </div>
    </div>


    <div className="two-column-flex">
        <div className="color-code-image"><img src={c5} alt="c5" /></div>
        <div className="color-code-text">
            <div><span>Type en jaune:</span> Milice.</div>
        </div>
    </div>

    <div className="two-column-flex">
        <div className="color-code-image"><img src={c6} alt="c6" /></div>
        <div className="color-code-text">
            <div><span>Type en bleu clair:</span> Aèroportè.</div>
        </div>
    </div>

    <div className="two-column-flex">
        <div className="color-code-image"><img src={c13} alt="c13" /></div>
        <div className="color-code-text">
            <div><span>Type en rouge:</span> Garde.</div>
        </div>
    </div>

    <div className="two-column-flex">
        <div className="color-code-image"><img src={c7} alt="c7" /></div>
        <div className="color-code-text">
            <div><span>Type en blanc:</span> Armèe règulière.</div>
        </div>
    </div>

    <div className="two-column-flex">
        <div className="color-code-image"><img src={c8} alt="c8" /></div>
        <div className="color-code-text">
            <div><span>Mouvement en jaune:</span> Capable d'infiltrer.</div>
        </div>
    </div>

    <div className="two-column-flex">
        <div className="color-code-image"><img src={c10} alt="c10" /></div>
        <div className="color-code-text">
            <div><span>Mouvement en gris:</span> Mouvement ferroviaire uniquement.</div>
        </div>
    </div>

    <div className="two-column-flex">
        <div className="color-code-image"><img src={c11} alt="c11" /></div>
        <div className="color-code-text">
            <div><span>Type en bleu clair:</span> Luftwaffe/Aèroportè.</div>
        </div>
    </div>

    <div className="two-column-flex">
        <div className="color-code-image"><img src={c12} alt="c12" /></div>
        <div className="color-code-text">
            <div><span>Mouvement en orange:</span> Motorisè, bouge en mouvement règulier.</div>
        </div>
    </div>

    <div className="two-column-flex">
        <div className="color-code-image"><img src={italian_infantry_div_60} alt="Italian infantry" /></div>
        <div className="color-code-text">
            <div><span>Les unités italiennes sont violettes.</span></div>
        </div>
    </div>


    <div className="two-column-flex">
        <div className="color-code-image"><img src={slovak_infantry_div_60} alt="Slovak infantry" /></div>
        <div className="color-code-text">
            <div><span>Les unités slovaques sont jaunes.</span></div>
        </div>
    </div>

    <div className="two-column-flex">
        <div className="color-code-image"><img src={rumanian_infantry_div_60} alt="Romanian infantry" /></div>
        <div className="color-code-text">
            <div><span>Les unités roumaines sont vertes.</span></div>
        </div>
    </div>

    <div className="two-column-flex">
        <div className="color-code-image"><img src={finnish_60} alt="Finnish infantry" /></div>
        <div className="color-code-text">
            <div><span>Les unités finlandaises sont blanches avec une bande bleue.</span></div>
        </div>
    </div>

</div>

<div className="spacer2rem" />

<p>
    <span className={props.language === 'en' ? '' : 'block-hidden'}>
    Unit size is designated by small symbols on top of the unit type boxes.
    </span>
    <span className={props.language === 'fr' ? '' : 'block-hidden'}>
    La taille de l'unité est indiquée par de petites désignations en haut du symbole de type d'unité.
    </span>
</p>

<div className="spacer1rem" />

<table className="unit-size"><tbody>
    <tr>
        <td>XXX</td>
        <td>Corps</td>
        <td>Les corps avaient un nombre variable de divisions qui leur étaient assignées.</td>
    </tr>
    <tr>
        <td>XX</td>
        <td>Division</td>
        <td> Les effectifs officiels de la division d'infanterie allemande étaient d'environ 15 000 à 18 000 hommes dans une division. <br /> Panzer allemand
            les divisions comptaient environ 150-200 chars et environ 11 000 hommes. <br /> Les divisions d’infanterie soviétique comptaient environ 11 000 hommes.</td>
    </tr>
    <tr>
        <td>X</td>
        <td>Brigade</td>
        <td>Les Soviétiques ont souvent utilisé des brigades de chars pour compléter leurs unités d'infanterie.</td>
    </tr>
    <tr>
        <td>III</td>
        <td>Régiment</td>
        <td>Environ 1200 - 3000 hommes. Généralement 3 régiments à une division.</td>
    </tr>
    <tr>
        <td>II</td>
        <td>Bataillon</td>
        <td>400 à 900 hommes. Un bataillon avait généralement 3 à 5 compagnies.</td>
    </tr>
    <tr>
        <td>I</td>
        <td>Compagnie</td>
        <td>100-300 hommes.</td>
    </tr></tbody>
</table>



<div className="spacer3rem" />
<p>
    <span className={props.language === 'en' ? '' : 'block-hidden'}>
        There's a large variety of unit types in EFS. Many have specific capabilities and restrictions described in the rules.                </span>
    <span className={props.language === 'fr' ? '' : 'block-hidden'}>
        Il y a une grande diversitè de types d'unitès dans EFS. La plupart ont des capacitès spècifiques ainsi que des restrictions qui sont dècrites dans les règles.
    </span>
    <span className={props.language === 'ru' ? '' : 'block-hidden'}>
        Russian text
    </span>
</p>










<section>
    <div className="subheader1_4">UNITES MOTORISEES</div>
    <table className="unit-type"><tbody>
        <tr>
            <td><img src={s4} alt="armor" /></td>
            <td>Blindè<span className="red">*</span></td>

            <td><img src={s5} alt="assault gun" /></td>
            <td>Canon d'Assaut<span className="red">*</span></td>

            <td><img src={s6} alt="armored anti-tank" /></td>
            <td>Blindè Anti-Char<span className="red">*</span></td>

            <td><img src={s7} alt="recon" /></td>
            <td>Reconnaissance</td>
        </tr></tbody>
    </table>

    <table className="unit-type"><tbody>
        <tr>
            <td><img src={s8} alt="motorized infantry" /></td>
            <td>Infanterie Motorisèe</td>

            <td><img src={s8b} alt="motorcycle infantry" /></td>
            <td>Infanterie è Moto</td>

            <td><img src={s9} alt="motorized border infantry" /></td>
            <td>Infanterie de Frontière Motorisèe</td>

            <td><img src={s10} alt="motorized combat engineer" /></td>
            <td>Gènie de Combat Motorisè</td>
        </tr></tbody>
    </table>

    <table className="unit-type"><tbody>
        <tr>
            <td><img src={s11} alt="motorized anti-aircraft" /></td>
            <td>Anti-Aèrien Motorisè</td>

            <td><img src={s12} alt="motorized anti-tank" /></td>
            <td>Anti-Char Motorisè</td>

        </tr></tbody>
    </table>
    <div className="note"><span className="red">*</span> Ces unitès sont considèrèes "Blindèes" pour l'Usure des Blindès, le Bonus d'Armes Combinèes, l'Intègritè Divisionnaire, et les pertes blindèes.</div>


</section>











<section>
    <div className="subheader1_4">UNITES NON MOTORISEES</div>
    <table className="unit-type"><tbody>
        <tr>
            <td><img src={s13} alt="infantry" /></td>
            <td>Infanterie</td>

            <td><img src={s14} alt="mountain infantry" /></td>
            <td>Montagnards</td>

            <td><img src={s15} alt="Airborne / Parachute" /></td>
            <td>Aèroportè/Parachute</td>

            <td><img src={s16} alt="s16" /></td>
            <td>Sècurtiè</td>
        </tr></tbody>
    </table>

    <table className="unit-type"><tbody>
        <tr>
            <td><img src={s18} alt="partisan" /></td>
            <td>Partisan</td>

            <td><img src={s19} alt="combat engineer" /></td>
            <td>Gènie de Combat</td>

            <td><img src={s20} alt="ski" /></td>
            <td>Ski</td>

            <td><img src={s21} alt="cavalry" /></td>
            <td>Cavalerie</td>
        </tr></tbody>
    </table>

    <table className="unit-type"><tbody>
        <tr>
            <td><img src={s22} alt="headquarters" /></td>
            <td>Quartier Gènèral</td>

            <td><img src={s23} alt="anti-aircraft" /></td>
            <td>Anti-Aèrien</td>

        </tr></tbody>
    </table>
</section>




<section>
    <div className="subheader1_4">UNITES D'ARTILLERIE</div>
    <table className="unit-type"><tbody>
        <tr>
            <td><img src={s24} alt="Field Artillery" /></td>
            <td>Artillerie de Campagne</td>

            <td><img src={s25} alt="Rocket Artillery" /></td>
            <td>Fusèes</td>

            <td><img src={s26} alt="Coast Artillery" /></td>
            <td>Artillerie Cètière</td>

            <td><img src={s27} alt="Super-Heavy Artillery" /></td>
            <td>Artillerie Super Lourde</td>
        </tr></tbody>
    </table>

    <table className="unit-type"><tbody>
        <tr>
            <td><img src={s28} alt="Railroad Super-Heavy Artillery" /></td>
            <td>Artillerie Ferroviaire Super Lourde</td>

            <td><img src={s29} alt="Super-Heavy (firing side)" /></td>
            <td>Super Lourde (cètè tir)	</td>

            <td><img src={s30} alt="Naval Unit" /></td>
            <td>Unitè navale</td>

        </tr></tbody>
    </table>

</section>





<section>
    <div className="subheader1_4">UNITES SPECIALES</div>
    <table className="unit-type"><tbody>
        <tr>
            <td><img src={s31} alt="Flotilla" /></td>
            <td>Flottille</td>

            <td><img src={s32} alt="Armored Train" /></td>
            <td>Train Blindè</td>

        </tr></tbody>
    </table>

</section>

</div>

<ScrollToTopOnMount />



        </div>

    );
}

export default Units;