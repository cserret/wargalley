import React from 'react';
import artillerystrike from "../../../images/efs/supply/artillerystrike.jpg";
import barrels from "../../../images/efs/supply/barrels.gif";
import general_supply_example1 from "../../../images/efs/supply/general_supply_example1.jpg";
import general_supply_example2 from "../../../images/efs/supply/general_supply_example2.jpg";
import general_supply_example3 from "../../../images/efs/supply/general_supply_example3.jpg";
import supply_mud from "../../../images/efs/supply/supply_mud.gif";
import supply_snow from "../../../images/efs/supply/supply_snow.gif";
import supplystrip from "../../../images/efs/supply/supplystrip.gif"
import './Supply.scss';


const Supply = (props) => {

    return (
        <div className="content">

            <div className="content-title">
                <div className={props.language === 'en' ? '' : 'block-hidden'}>SUPPLY</div>
                <div className={props.language === 'fr' ? '' : 'block-hidden'}>RAVITAILLEMENT</div>
                <div className={props.language === 'ru' ? '' : 'block-hidden'}>Снабжение</div>
                <div></div>
            </div>


            <p>
                <span className={props.language === 'en' ? '' : 'block-hidden'}>

                    There are two types of supply represented in the East Front Series. The first
                    is <span className="b">General Supply</span>, and the other is called <span className="b">Attack Supply</span>. General
                    Supply represents the constant stream of food, fuel, bullets and other necessities required
                    in keeping an army in the field. Attack Supply represents an accumulation of supplies, present on the ground near combat
                    units, to be used for for intensive offensive combat operations - supplies like a large cache of artillery shells, large
                    amounts of bullets, grenades, etc. Units need to be in General Supply to avoid various penalties, such as reduced mobility.
                    Units need Attack Supply in order to perform to their top capability in combat. Attack Supply is represented on the map by
                    supply counters that you need to move to be near the units that are fighting and that need to consume the Attack Supply.
                    General Supply is not represented on the map, but rather is traced by counting hexes from a supply source to a unit. How
                    you count "hexes" for General Supply is explained below.


                </span>
                <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                    Il y a deux types de ravitaillement reprèsentès dans la East Front Series. Le premier est le <span className="b">Ravitaillement Gènèral</span>, et l'autre est appelè le <span className="b">Ravitaillement d'Attaque</span>. Le Ravitaillement Gènèral reprèsente le flux constant de nourriture, de carburant, et de tout ce qui est nècessaire pour maintenir une armèe sur le terrain. Le Ravitaillement d'Attaque reprèsente les munitions. Les unitès doivent ètre en ravitaillement gènèral pour èviter diverses pènalitès, comme une mobilitè rèduite. Les unitès doivent ètre en Ravitaillement d'Attaque pour pouvoir combattre avec toute leur efficacitè. Le Ravitaillement d'Attaque est reprèsentè sur la carte par des pions ravitaillement que vous devrez dèplacer vers les unitès qui combattent et qui ont besoin de consommer ce ravitaillement. Le Ravitaillement Gènèral n'est pas reprèsentè sur la carte, mais il est tracè en comptant les hexs depuis une source de ravitaillement jusqu'è une unitè. La faèon de compter les "hexs" pour le ravitaillement gènèr al est expliquès dans cette page.

                </span>
                <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                    Russian text
                </span>
            </p>





            <div className="spacer2rem" />

            <span className={props.language === 'en' ? '' : 'block-hidden'}>
                <div className="subheader-image">
                    <div>General Supply</div>
                    <img src={barrels} alt="general supply barrels" />
                </div>
                <p>
                    General Supply is delivered to units by tracing a path of contiguous hexes from a supply source to the hex a unit is in. The route may consist of 3 different types that can connect to each other:
             </p>
            </span>

            <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                <div className="subheader-image">
                    <div>Ravitaillement Gènèral</div>
                    <img src={barrels} alt="general supply barrels" />
                </div>
                <p>
                    Le ravitaillement gènèral est amenè aux unitès en traèant un chemin d'hexs contigus depuis une source de ravitaillement jusqu'è l'hex oè se trouve l'unitè. La route peut ètre composèe de trois èlèments diffèrents qui se connectent les uns au autres:
            </p>
            </span>

            <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                <div className="subheader-image">
                    <div>General Supply</div>
                    <img src={barrels} alt="general supply barrels" />
                </div>
                <p>
                    russian text
            </p>
            </span>



            <div className={props.language === 'en' ? '' : 'block-hidden'}>
                <div className="gray-box">
                    <p className="subsubheader">General Supply Path types</p>
                    <ul>
                        <li>a Railroad Net</li>
                        <li>a Road Net</li>
                        <li>a Line of Communications (LOC)</li>
                    </ul>
                </div>
            </div>

            <div className={props.language === 'fr' ? '' : 'block-hidden'}>
                <div className="gray-box">
                    <p className="subsubheader">Types d'èlèments de Ravitaillement Gènèral</p>
                    <ul>
                        <li>Rèseau ferroviaire</li>
                        <li>Rèseau routier</li>
                        <li>Ligne de Communication (LOC)</li>
                    </ul>
                </div>
            </div>

            <div className={props.language === 'ru' ? '' : 'block-hidden'}>
                <div className="gray-box">
                    <p className="subsubheader">russian text</p>
                    <ul>
                        <li>russian text</li>
                        <li>russian text</li>
                        <li>russian text</li>
                    </ul>
                </div>
            </div>



            <div className="spacer1_5rem" />

            <span className={props.language === 'en' ? '' : 'block-hidden'}>
                <p>
                    A Railroad Net (for the Axis, all rail hexes used must be "converted") can bring supply to any units on that railroad, or deliver the supply to the start of a road net or LOC. The railroad can be of any length to a supply source (the ultimate supply source is usually a map edge hex). If the railroad enters a hex with a main road or motorway road also in it, then the supply can be extended along that road 21 hexes from the point where the railroad meets that road. A "Road Net" consists of a Main Road or a Motorway (not Minor Roads). If a unit is on that "supply" road, then it is in supply. But usually a unit won't be on the road. In that case a LOC needs to reach to the unit for it to be deemed in General Supply. The LOC can be up to 7 hexes. The path of General Supply cannot enter an enemy occupied hex, cannot go through a hex with an enemy zone of control (ZOC) unless there is also a friendly combat unit in the hex.
             </p>
                <p>
                    Supply sources are identified in the scenario instructions. Typically they are a map edge, or range of hexes on a map edge, or a port. The Soviets also get to use Major City Hexes as a source of General Supply.
                 </p>
            </span>

            <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                <p>
                    Un rèseau ferroviaire (pour l'Allemand, tous les hexs de rails doivent avoir ètè "convertis") peut amener du ravitaillement è toutes les unitès sur cette voie ferrèe, ou amener du ravitaillement au dèbut d'un rèseau routier ou d'une LOC. La voie ferrèe peut ètre d'une longueur illimitèe (la source de ravitaillement ultime est gènèralement un hex au bord de la carte). Si la voie ferrèe entre dans un hex contenant ègalement une route principale ou une autoroute, alors le ravitaillement peut ètre ètendu è 21 hexs le long de cette route, è partir de l'intersection de la voie ferrèe et de la rout e. Un "Rèseau Routier" est composèe de Routes Principales ou d'Autoroutes (pas de Routes Mineures). Si une unitè est sur cette "route de ravitaillement", alors elle est ravitaillèe. Mais en gènèral, une unitè ne sera pas sur une route. Dans ce cas, une LOC doit ètre tracèe jusqu'è l'unitè pour qu'elle soit en ravitaillement gènèral. La LOC peut faire jusqu'è 7 hexs de long. Le chemin du Ravitaillement Gènèral ne peut pas entrer dans un hex occupè par l'ennemi, et ne peut pas traverser un hex en Zone de Contrèle ennemie (ZOC) è moins qu'une unitè de combat amie ne se trouve dans cet hex.
                </p>
                <p>
                    Les sources de ravitaillement sont identifièes dans les instructions du scènario. Gènèralement ce sont des hexs au bord de la carte, ou un ensemble d'hexs au bord de la carte, ou un port. Les Soviétiques peuvent aussi utiliser leurs hexs de Villes Majeures comme source de Ravitaillement Gènèral.

                    </p>
            </span>

            <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                <p>
                    russian text
            </p>
                <p>
                    russian text
            </p>
            </span>



            <div className={props.language === 'en' ? '' : 'block-hidden'}>
                <div className="gray-box">
                    <p className="subsubheader">The types of supply routes that can be traced and how they can connect:</p>
                    <ul>
                        <li>Supply source -> Railroad Net -> Road Net -> LOC</li>
                        <li>Supply source -> Railroad Net -> LOC</li>
                        <li>Supply source -> Road Net -> LOC</li>
                        <li>Supply source -> LOC</li>
                    </ul>
                </div>
            </div>


            <div className={props.language === 'fr' ? '' : 'block-hidden'}>
                <div className="gray-box">
                    <p className="subsubheader">Types d'èlèments de ravitaillement pouvant ètre tracès et comment ils se connectent.</p>
                    <ul>
                        <li>Source de Ravitaillement -> Rèseau Ferroviaire -> Rèseau Routier -> LOC</li>
                        <li>Source de Ravitaillement -> Rèseau Ferroviaire -> LOC</li>
                        <li>Source de Ravitaillement -> Rèseau Routier -> LOC</li>
                        <li>Source de Ravitaillement -> LOC</li>
                    </ul>
                </div>
            </div>

            <div className={props.language === 'ru' ? '' : 'block-hidden'}>
                <div className="gray-box">
                    <p className="subsubheader">russian text</p>
                    <ul>
                        <li>russian text</li>
                        <li>russian text</li>
                        <li>russian text</li>
                        <li>russian text</li>
                    </ul>
                </div>
            </div>






            <div className="spacer1rem" />
            <p>
                <span className={props.language === 'en' ? '' : 'block-hidden'}>

                    General Supply paths cannot go in any other combinations, such as LOC onto a Road Net, or Road Net onto a Railroad Net, or along a Road Net to a LOC then back to a Road Net, etc. Each path has to be <span className="italic">contiguous</span>.



                </span>
                <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                    Il ne peut pas y avoir d'autres combinaisons d'èlèments de ravitaillement, comme une LOC vers un rèseau routier, ou un rèseau routier vers un rèseau ferroviaire, ni par un rèseau routier vers une LOC puis è nouveau vers un rèseau routier, etc.
                </span>
                <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                    Russian text
                </span>
            </p>






            <div className={props.language === 'en' ? '' : 'block-hidden'}>
                <div className="gray-box">
                    <p className="subsubheader">Lengths of supply routes:</p>
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


            <div className={props.language === 'fr' ? '' : 'block-hidden'}>
                <div className="gray-box">
                    <p className="subsubheader">Longueurs des èlèments de ravitaillement</p>
                    <ul>
                        <li>Ferroviaire - illimitè (pour les Allemands, tous les hexs de voie ferrèe doivent d'abord avoir ètè "convertis").</li>
                        <li>Route Principale (ou Autoroute) - 21 hexs (pas de points de mouvement, comptez seulement les hexs). En cas de Pluie ou Neige/Arctique, ceci est rèduit è 15 hexs.</li>
                        <li>LOC - 7 hexs (pas de points de mouvement, comptez seulement les hexs). En cas de Pluie ou Neige/Arctique, ceci est rèduit è 5 hexs.</li>
                        <li>LOC (restriction supplèmentaire) - 5 hexs le long d'une route ou voie ferrèe traversant un marais par temps Clair.</li>
                        <li>LOC (restriction supplèmentaire) - 5 hexs en traversant un hex de marais par temps Clair.</li>
                        <li>LOC (restriction supplèmentaire) - 5 hexs en traversant un hex de bois par Pluie Prolongèe. Ceci ne s'applique pas si la LOC passe par une route ou une voie ferrèe dans l'hex de bois.</li>
                    </ul>
                </div>
            </div>

            <div className={props.language === 'ru' ? '' : 'block-hidden'}>
                <div className="gray-box">
                    <p className="subsubheader">Russian text</p>
                    <ul>
                        <li>Russian text</li>
                        <li>Russian text</li>
                        <li>Russian text</li>
                        <li>Russian text</li>
                        <li>Russian text</li>
                        <li>Russian text</li>
                    </ul>
                </div>
            </div>




            <div className="spacer1rem" />
            <p>
                <span className={props.language === 'en' ? '' : 'block-hidden'}>

                    The Railroad used in a supply trace has to be contiguous hexes of the same (or connecting) railroad.<br />
                    The Main Road (or Motorway) used in a supply trace has to be contiguous hexes of the same main road.<br />
                    The 7 hexes overland (LOC) has to be contiguous hexes.<br />
                    No "hopping" over hexes is allowed. No leaving a road to go around some obstruction (like an enemy unit) and getting back on the road. Any obstruction on a main road or railroad terminates the use of that main road or railroad at the last hex before the obstruction. From there, the LOC goes out up to 7 hexes. A General Supply path can not cross non-frozen lake/inland sea hexsides or unbridged major river. A General Supply path cannot enter a swamp hex during Dry or Mud turns unless the path is along a road or railroad that goes through the hex. A LOC can go along a railroad into a swamp hex during Dry or Mud turns. A General Supply path cannot enter a hex with a undestroyed enemy strongpoint or across a non-destroyed fortified line hexside.



                </span>
                <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                    La voie ferrèe utilisèe pour tracer le ravitaillement doit ètre composèe d'hexs contigus de la mème voie ferrèe.<br />
                    La Route Principale (ou Autoroute) utilisèe pour tracer le ravitaillement doit ètre composèe d'hexs contigus de la mème route.<br />
                    La LOC de 7 hexs doit ètre composèe d'hexs contigus.<br />
                    Il n'est pas autorisè de "sauter" des hexs. On ne peut pas quitter une route pour contourner un obstacle (comme une unitè ennemie) puis revenir sur la route. Tout obstacle sur une route principale ou une voie ferrèe termine l'utilisation de cette route ou voie ferrèe dans le dernier hex avant l'obstacle. A partir de lè, il faut utiliser la LOC de 7 hexs. Un chemin de Ravitaillement Gènèral ne peut pas traverser de cètès d'hexs de lacs/mers intèrieures non gelès ou de rivière majeur e sans pont. Un chemin de Ravitaillement Gènèral ne peut pas entrer dans un hex de marais pendant un tour avec un temps Clair ou Pluie è moins que ce chemin ne passe par une route ou une voie ferrèe traversant cet hex. Une LOC peut passer par une voie ferrèe dans un hex de marais pendant un tour Clair ou Pluvieux. Un chemin de Ravitaillement Gènèral ne peut pas entrer dans un hex contenant un fortin ennemi qui n'a pas ètè dètruit, ni è travers un cètè d'hex de ligne fortifièe non dètruite.

                </span>
                <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                    Russian text
                </span>
            </p>





            <div className={props.language === 'en' ? '' : 'block-hidden'}>
                <div className="gray-box">
                    <p className="subsubheader">Summary of General Supply stoppers:</p>
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


            <div className={props.language === 'fr' ? '' : 'block-hidden'}>
                <div className="gray-box">
                    <p className="subsubheader">Rèsumè de ce qui bloque le Ravitaillement Gènèral</p>
                    <ul>
                        <li>Il ne peut pas entrer dans un hex contenant une unitè ennemie.</li>
                        <li>Il ne peut pas entrer dans un hex contenant en ZDC ennemie, è moins que cet hex ne contienne aussi une unitè de combat amie.</li>
                        <li>Il ne peut pas traverser un cètè d'hex de lac/mer intèrieur non gelè.</li>
                        <li>Il ne peut pas traverser une rivière majeure sans pont.</li>
                        <li>Il ne peut pas entrer dans un hex de marais pendant les tours de temps Clair ou de Pluie, è moins que le ravitaillement ne puisse ètre tracè le lon g d'une route ou d'une voie ferrèe traversant le (ou les) hexs de marais.</li>
                        <li>Il ne peut pas traverser un fortin ennemi qui n'est pas dètruit (bien qu'il puisse y entrer et ravitailler des unitès amies qui s'y trouvent, mais il ne peut pas aller plus loin).</li>
                        <li>Il ne peut pas traverser de lignes fortifièes ennemies qui ne sont pas dètruites (les unitès amies du "mauvais" cètè de la ligne fortifièe, mème si elles sont dans le mème hex que la ligne, ne peuvent pas ètre ravitaillèes è travers les cètès d'hexs fortifiès.</li>

                    </ul>
                </div>
            </div>



            <div className={props.language === 'ru' ? '' : 'block-hidden'}>
                <div className="gray-box">
                    <p className="subsubheader">Russian text</p>
                    <ul>
                        <li>Russian text</li>
                        <li>Russian text</li>
                        <li>Russian text</li>
                        <li>Russian text</li>
                        <li>Russian text</li>
                        <li>Russian text</li>
                        <li>Russian text</li>
                    </ul>
                </div>
            </div>

            <div className="spacer2rem" />

            <div className={props.language === 'en' ? '' : 'block-hidden'}>
                <div className="two-column-flex example example1">
                    <div>
                        <div className="example-name">Example 1</div>
                        <div><img src={general_supply_example1} alt="general supply example 1" /></div>
                    </div>
                    <div>
                        <p className="minor">
                            In this example, the supply source for the Axis is marked "S", in the green circle in the lower left.
                   </p>
                        <p className="minor">
                            The supply on a main road can go up to 21 hexes on a dry weather turn. However, there is a Soviet unit sitting on the road. This stops the supply chain from going further up the road. A supply route can not exit a road then re-enter it further up. Note that Minor Roads (dotted lines) cannot be used in a Road Net. So the supply along the road terminates at the circle marked "A".
                        </p>
                        <p className="minor">
                            The German unit that is at the hex marked "A" is of course in supply. Now the supply can go "off road", otherwise called "LOC".
                   </p>
                        <p className="minor">
                            The LOC can go up to 7 hexes long on a dry turn. But it cannot enter enemy occupied hexes, or enter hexes where the enemy has a ZOC (although if you got a friendly unit there then supply can go through it). Therefore, the route shown is the shortest route possible to the other German units.
                        </p>
                        <p className="minor">
                            The German unit at the hex marked "5" is in supply. It is within 7 hexes of the supplied main road. The German panzer unit in the upper right part of the map, however, is too far away. It would have to move to at least the hex marked "7" to be in General Supply. Therefore, this unit is not in General Supply, and during the supply phase would be marked with the appropriate marker denoting it cannot draw General Supply.
                   </p>
                    </div>
                </div>
            </div>







            <div className={props.language === 'fr' ? '' : 'block-hidden'}>
                <div className="two-column-flex example example1">
                    <div>
                        <div className="example-name">Exemple 1</div>
                        <div><img src={general_supply_example1} alt="general supply example 1" /></div>
                    </div>
                    <div>
                        <p className="minor">
                            Dans cet exemple, la source de ravitaillement des Allemands est le "S" dans le cercle vert en bas è gauche.
                   </p>
                        <p className="minor">
                            Le ravitaillement sur une route principale peut aller jusqu'è 21 hexs par temps Clair. Par contre, il y a une unitè Soviétique sur la route. Ceci empèche è la ligne de ravitaillement d'aller plus loin sur la route. Une ligne de ravitaillement ne peut pas quitter une route puis y retourner. Notez que les routes secondaires (en pointillès) ne peuvent pas ètre utilisèes pour un rè seau routier. Donc le ravitaillement par la route s'arrète dans le "A" encerclè.
                   </p>
                        <p className="minor">
                            L'unitè Allemande se trouvant dans l'hex "A" est bien sur ravitaillèe. Maintenant le ravitaillement peut "sortir de la route", ce qui est appelè une "LOC".
                        </p>
                        <p className="minor">
                            La LOC peut faire jusqu'è 7 hexs de long par temps clair. Mais elle ne peut pas entrer dans les hexs occupès par l'ennemi, ni entrer dans des hexs en ZDC ennemie (bien que si vous avez des unitès amies dans ces hexs, alors le ravitaillement peut passer). Par consèquent, le chemin indiquè est le plus court chemin possible jusqu'aux autres unitès Allemandes.
                   </p>
                        <p className="minor">
                            L'unitè Allemande dans l'hex "5" est ravitaillèe. Elle est dans les 7 hexs de la route principale ravitaillèe. L'unitè de panzers dans le coin supèrieur droit est trop èloignèe. Elle devrait se dèplacer jusqu'è l'hex "7" pour ètre en Ravitaillement Gènèral. Par consèquent, cette unitè n'est pas en Ravitaillement Gènèral, et pendant la phase de ravitaillement elle recevra un marqueur appropriè pour indiquer qu'elle ne reèoit pas de Ravitaillement Gènèral.
                        </p>
                    </div>
                </div>
            </div>



            <div className={props.language === 'ru' ? '' : 'block-hidden'}>
                <div className="two-column-flex example example1">
                    <div>
                        <div className="example-name">пример 1</div>
                        <div><img src={general_supply_example1} alt="general supply example 1" /></div>
                    </div>
                    <div>
                        <p className="minor">
                            Russian text
                   </p>
                        <p className="minor">
                            Russian text
                                      </p>
                        <p className="minor">
                            Russian text
                                               </p>
                        <p className="minor">
                            Russian text
                                          </p>
                        <p className="minor">
                            Russian text
                                                </p>
                    </div>
                </div>
            </div>










            <div className="spacer2rem" />

            <div className={props.language === 'en' ? '' : 'block-hidden'}>
                <div className="two-column-flex example example2">
                    <div>
                        <div className="example-name">Example 2</div>
                        <div><img src={general_supply_example2} alt="general supply example 2" /></div>
                    </div>
                    <div>
                        <p className="minor">
                            In this example, the supply source for the Axis is marked "S", in the green circle in the lower left. The supply on a main road can go up to 21 hexes on a dry weather turn. However, there is a Soviet unit sitting on the road. This stops the supply chain from going further up the road at hex marked A. The German unit that is at the hex marked "A" is in supply.
                        </p>
                        <p className="minor">
                            Now the supply can go "off road", otherwise called "LOC". The LOC can go up to 7 hexes long on a dry turn. But it cannot enter enemy occupied hexes, or enter hexes where the enemy has a ZOC (although if you got a friendly unit there then supply can go through it). Therefore, the route shown is the shortest route possible to try to reach the unit across the river.
                        </p>
                        <p className="minor">
                            The LOC cannot be traced through the hex marked "B" - a enemy unit is exerting a ZOC on that hex. If a German unit *was* in hex "B", then supply could be traced through that hex. The LOC can not be traced through hex "C" for the same reason. Therefore, the LOC has to extend out as shown.
                        </p>
                        <p className="minor">
                            The LOC cannot go across a unbridged major river, and therefore cannot take the most direct route which would be to hex marked "D". General supply cannot go across a major river unless it is crossed by a bridge, minor or major road, or a railroad (it is assumed that any minor road, or major road, or railroad that crosses any kind of river means there is a bridge there). The LOC shown is the shortest possible to the German recon unit that is across the river. Unfortunately for that unit, the LOC ends one hex short. The German recon unit cannot draw General Supply. During the supply phase it would be marked with the appropriate marker denoting it cannot draw General Supply.
                        </p>
                    </div>
                </div>
            </div>



              
            <div className={props.language === 'fr' ? '' : 'block-hidden'}>
                <div className="two-column-flex example example2">
                    <div>
                        <div className="example-name">Exemple 2</div>
                        <div><img src={general_supply_example2} alt="general supply example 2" /></div>
                    </div>
                    <div>
                        <p className="minor">
                        Dans cet exemple, la source de ravitaillement des Allemands est le "S" dans le cercle vert en bas è gauche. Le ravitaillement sur une route principale peut aller jusqu'è 21 hexs par temps Clair. Par contre, il y a une unitè Soviétique sur la route. Ceci empèche è la ligne de ravitaillement d'aller plus loin que l'hex "A".                        
                        </p>
                        <p className="minor">
                        Maintenant le ravitaillement peut "sortir de la route", ce qui est appelè une "LOC". La LOC peut faire jusqu'è 7 hexs de long par temps clair. Mais elle ne peut pas entrer dans les hexs occupès par l'ennemi, ni entrer dans des hexs en ZDC ennemie (bien que si vous avez des unitès amies dans ces hexs, alors le ravitaillement peut passer). Par consèquent, le chemin indiquè est le plus court chemin possible pour essayer d'atteindre les unitès de l'autre cètè de la rivière.                        
                        </p>
                        <p className="minor">
                        La LOC ne peut pas passer dans l'hex "B" car une unitè ennemie exerce une ZDC dans cet hex. Si une unitè Allemande *ètait* dans l'hex "B", alors le ravitaillement pourrait passer p ar cet hex. La LOC ne peut pas passer par l'hex "C" pour la mème raison. Par consèquent la LOC doit s'ètendre comme indiquè.                        
                        </p>
                        <p className="minor">
                        La LOC ne peut pas traverser une rivière sans pont, et ne peut donc pas prendre la route la plus directe vers l'hex "D". Le Ravitaillement Gènèral ne peut pas traverser une rivière majeure sans passer par un pont, une route principale ou secondaire, ou une voie ferrèe (il est supposè qu'il existe un pont è chaque fois qu'une route ou une voie ferrèe traverse une rivière). La LOC est passe par le chemin le plus court possible pour atteindre l'unitè de reconnaissance Allemande de l'autre cètè de la rivière. Malheureusement pour cette unitè, la LOC est trop courte d'un hex. L'unitè de reconnaissance Allemande ne peut donc pas recevoir de Ravitaillement Gènèral. Pendant la phase de ravitaillement elle recevra un marqueur appropriè pour indiquer qu'elle ne reèoit pas de Ravitaillement Gènèral.
                       
                        </p>
                    </div>
                </div>
            </div>


            <div className={props.language === 'ru' ? '' : 'block-hidden'}>
                <div className="two-column-flex example example2">
                    <div>
                        <div className="example-name">пример 2</div>
                        <div><img src={general_supply_example2} alt="general supply example 2" /></div>
                    </div>
                    <div>
                        <p className="minor">
                        Russian text                        
                        </p>
                        <p className="minor">
                        Russian text                        
                        </p>
                        <p className="minor">
                        Russian text                        
                        </p>
                        <p className="minor">
                        Russian text                       
                        </p>
                    </div>
                </div>
            </div>












            <div className="spacer2rem" />

            <div className={props.language === 'en' ? '' : 'block-hidden'}>
                <div className="example example3">
                    <div>
                        <div className="example-name">Example 3</div>
                        <div className="example3"><img src={general_supply_example3} alt="general supply example 3" /></div>
                    </div>
                    <div className="row-text">
                        <div className="spacer1rem" />
                        <p className="minor">
                            In this example, the supply source is marked by hex "S". Since there is a converted Axis railroad that extends from "S" to hex "A", we can use the railroad to extend supply. Supply can extend along a railroad as far as the railroad goes.
                        </p>
                        <p className="minor">
                            In this case, the Axis have converted the railroad up to hex "A". So from hex "A" the supply goes off-road, and uses LOC to reach the more distant Axis units. The LOC reaches to the unit at hex "7", but cannot reach the German recon unit that is to the right of that.
                        </p>
                        <p className="minor">
                            All other German units are in General Supply, since they can easily reach the railroad by LOC.
                        </p>
                    </div>
                </div>
            </div>





            <div className={props.language === 'fr' ? '' : 'block-hidden'}>
                <div className="example example3">
                    <div>
                        <div className="example-name">Exemple 3</div>
                        <div className="example3"><img src={general_supply_example3} alt="general supply example 3" /></div>
                    </div>
                    <div className="row-text">
                        <div className="spacer1rem" />
                        <p className="minor">
                            Dans cet exemple, la source de ravitaillement est indiquèe par un "S". Comme une voie ferrèe convertie par l'Allemand s'ètend de l'hex "S" è l'hex "A", il est possible d'utiliser cette voie pour ètendre le ravitaillement. Le ravitaillement peut s'ètendre le long d'une voie ferrèe aussi loin que va cette voie.
                        </p>
                        <p className="minor">
                            Dans ce cas, les Allemands ont converti la voie jusqu'è l'hex "A". Donc è partir de cet hex, le ravitaillement quitte la voie et utilise la LOC pour atteindre les unitès Allemandes les plus èloignèes. La LOC s'ètend jusqu'è l'hex "7", mais ne peut pas atteindre l'unitè de reconnaissance Allemande qui se trouve è sa doite.
                        </p>
                        <p className="minor">
                            Toutes les autres unitès Allemandes sont en Ravitaillement Gènèral, car elles peuvent facilement atteindre la voie ferrèe avec la LOC.
                        </p>
                    </div>
                </div>
            </div>



            <div className={props.language === 'ru' ? '' : 'block-hidden'}>
                <div className="example example3">
                    <div>
                        <div className="example-name">пример 3</div>
                        <div className="example3"><img src={general_supply_example3} alt="general supply example 3" /></div>
                    </div>
                    <div className="row-text">
                        <div className="spacer1rem" />
                        <p className="minor">
                            Russian text
                        </p>
                        <p className="minor">
                            Russian text
                        </p>
                        <p className="minor">
                            Russian text
                        </p>
                    </div>
                </div>
            </div>




            <div className="spacer2rem"/>

        
            <span className={props.language === 'en' ? '' : 'block-hidden'}>
           
            <div className="subheader-normal">Use of Attack Supply as General Supply</div>

                <p>
                    There is one more way for units to get General Supply, but it's something to be avoided unless you have a very good reason. You can use Attack Supply as a source of General Supply. Using a Attack Supply counter for General Supply uses up that Attack Supply, or 1 point of a Dump. This procedure gives General Supply to friendly units that can trace 5 hexes, under the same conditions as tracing a LOC, to the Attack Supply. The units are then considered in General Supply for 1 turn. Typically, only Soviet forces will use this tactic, since they are often cut off by the advancing Germans, and may have some friendly Attack Supply trapped with them. But you may find yourself, as the Axis player, forced to do this if for example a panzer division got cut off - or if you "planned" on a panzer division being cut off while involved in a deep thrust behind enemy lines. 
                </p>
            </span>

            

            <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                <div className="subheader-normal">Utilisation du Ravitaillement d'Attaque en tant que Ravitaillement Gènèral</div>
                <p>
                Il y a une autre faèon d'obtenir du ravitaillement gènèral pour les unitès, mais c'est une action dèsespèrèe qui devrait ètre èvitèe autant que possible. Vous pouvez utiliser le Ravitaillement d'Attaque comme une source de Ravitaillement Gènèral. Utiliser du R avitaillement d'Attaque pour le Ravitaillement Gènèral coète 1 pion Ravitaillement d'Attaque, ou 1 point d'un Dèpèt. Cette procèdure donne du Ravitaillement Gènèral è toutes les unitès pouvant tracer une LOC de 5 hexs jusqu'au Ravitaillement d'Attaque. Ensuite, les unitès sont considèrèes en Ravitaillement Gènèral pour 1 tour. Gènèralement, seules les forces Soviétiques utiliseront cette tactique, car elles seront souvent isolèes è cause de l'avance Allemande, et pourront avoir quelques points de Ravitaillement d'Attaque piègès avec elles. Mais cela pourrait arriver, si vous jouez l'Allemand d'ètre forcè de le faire pour une panzer division isolèe.                 
                </p>
            </span>

            <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                <div className="subheader-normal">Использование снабжения как общая атака снабжения</div>
                <p>
                russian text                
                </p>
            </span>
   







            <div className="spacer1_5rem"/>

        
            <span className={props.language === 'en' ? '' : 'block-hidden'}>
           
            <div className="subheader-normal">Effects of not being able to get General Supply</div>

                <p>
                Units that were in General Supply but are found to be unable to trace to General Supply are marked with a "Emergency Supply" marker. These units are still considered to be in General Supply. Units that have a "Emergency Supply" marker on them, and are found to still be unable to trace to General Supply during the Supply phase have the "Emergency Supply" marker flipped to "Out of Supply". Strongpoints also suffer from being Out of Supply. Units that are marked "Out of Supply" have the following negative effects:               
                </p>
            </span>

            

            <span className={props.language === 'fr' ? '' : 'block-hidden'}>
                <div className="subheader-normal">Effets du manque de Ravitaillement Gènèral</div>
                <p>
                Les unitès qui ètaient en Ravitaillement Gènèral et qui sont maintenant incapables de tracer une ligne de ravitaillement reèoivent un marqueur "Emergency Supply". Ces unitès sont toujours considèrèes en Ravitaillement Gènèral. Les unitès sous un marqueur "Emergency Supply" et qui sont toujours incapables de tracer une ligne de ravitaillement pendant la Phase de Ravitaillement ont leur marqueur retournè sur la face "Out of Supply". Les fortins souffrent aussi des effets du manque de ravitaillement. Les unitès "Out of Supply" subissent les effets nègatifs suivants : 
                </p>
            </span>

            <span className={props.language === 'ru' ? '' : 'block-hidden'}>
                <div className="subheader-normal">Эффекты невозможности получить общее снабжение</div>
                <p>
                russian text                
                </p>
            </span>











            <div className={props.language === 'en' ? '' : 'block-hidden'}>
                <div className="gray-box">
                    <p className="subsubheader">Effects of being Out of Supply</p>
                    <ul>
                        <li>2 Movement points are subtracted from its normal movement allowance (prior to any halving due to other rules).
Exception - cavalry do not suffer the -2 penalty.</li>
                        <li>The unit cannot do Reaction Movement.</li>
                        <li>The unit cannot do Infiltration Movement.</li>
                        <li>The unit cannot conduct overrun.</li>
                        <li>The unit cannot fire defensively (if artillery). OOS artillery can still fire offensively if they are given Attack Supply.</li>
                        <li>A defending stack gives the attacker a -1 drm on the combat roll if any unit defending is OOS.</li>
                        <li>German panzer or German motorized divisions do not get the Divisional Integrity Bonus in an attack if any of its
member units participating in the attack are OOS, unless they are given Attack Supply for that attack.</li>
                        <li>Strongpoint markers go out of General Supply just like units - but when they go from "Emergency Supply" to OOS,
they are removed from the map.</li>
                        <li>Soviet units that are in the ZOC of an enemy unit and also in Emergency Supply or OOS suffer an additional die roll modifier on their
surrender roll.</li>
                    </ul>
                </div>
            </div>



            <div className={props.language === 'fr' ? '' : 'block-hidden'}>
                <div className="gray-box">
                    <p className="subsubheader">Effets du manque de Ravitaillement Gènèral</p>
                    <ul>
                        <li>On soustrait 2 Points de Mouvement de leur capacitè de mouvement normale (avant les rèductions causèes par d'autres règles).
Exception : la cavalerie ne subit pas cette pènalitè de -2.</li>
                        <li>L'unitè ne peut pas faire de Mouvement de Rèaction.</li>
                        <li>L'unitè ne peut pas faire de Mouvement d'Infiltration.</li>
                        <li>L'unitè ne peut pas faire de Dèbordement.</li>
                        <li>L'unitè ne peut pas tirer en dèfense (si c'est de l'artillerie). L'artillerie non ravitaillèe ne peut tirer en attaque que si elle reèoit du Ravitaillement d'Attaque.</li>
                        <li>Une pile en dèfense donne un drm de -1 è l'attaquant si une des unitès en dèfense n'est pas ravitaillèe.</li>
                        <li>Une panzer division ou une division motorisèe Allemande n'obtient pas le Bonus d'Intègritè Divisionnaire en attaque si un de ses èlèments parti cipant è l'attaque n'est pas ravitaillè, è moins qu'il ne reèoivent du Ravitaillement d'Attaque pour cette attaque.</li>
                        <li>Les marqueurs de fortins sont ravitaillès comme les unitès - mais lorsqu'ils passent de "Emergency Supply" è "OOS", ils sont retirès de la carte.</li>
                    <li>Les marqueurs de fortins sont ravitaillès comme les unitès - mais lorsqu'ils passent de "Emergency Supply" è "OOS", ils sont retirès de la carte.</li>
                    </ul>
                </div>
            </div>



            <div className={props.language === 'ru' ? '' : 'block-hidden'}>
                <div className="gray-box">
                    <p className="subsubheader">Эффекты отсутствия предложения</p>
                    <ul>
                        <li>russian text</li>
                        <li>russian text</li>
                        <li>russian text</li>
                        <li>russian text</li>
                        <li>russian text</li>
                        <li>russian text</li>
                        <li>russian text</li>
                        <li>russian text</li>
                        <li>russian text</li>
                    </ul>
                </div>
            </div>



        </div>
    );
}

export default Supply;