/* eslint-disable react/no-unescaped-entities */
import Breadcrumb from '@/components/Breadcrumb'
import Card from '@/components/Card'
import ShareButtons from '@/components/ShareButtons'
import TextIconBox from '@/components/TextIconBox'
import Link from 'next/link'
import React from 'react'

const ServiceDetails = () => {
    return (
        <>
            <Breadcrumb title={'Demande de passeport'} links={[
                {title: 'Transport', href: '/services/category'},
                {title: 'Demande de passeport', href: '/services/category/demande-de-passeport'}]}/>
            <div className="flex flex-col items-start justify-start gap-4 md:flex-row">

                <div className="flex  flex-1 flex-col gap-5 md:w-2/3">
                    <Card style='w-full'>
                        {/* Délai d'exécution, coût de la procédure, durée de validité */}
                        <div className="flex  items-center justify-center gap-5 overflow-hidden">
                            <TextIconBox style='min-h-36'
                                         icon={"https://img.icons8.com/ios-glyphs/30/1A2479/diploma.png"}
                                         title={"Délai d'exécution"} subTitle={'N/A'}/>
                            <TextIconBox style='min-h-36'
                                         icon={'https://img.icons8.com/ios-glyphs/30/1A2479/banknotes.png'}
                                         title={"Coût de la procédure"} subTitle={'N/A'}/>
                            <TextIconBox style='min-h-36'
                                         icon={'https://img.icons8.com/ios-glyphs/30/1A2479/calendar-4.png'}
                                         title={"Durée de validité"} subTitle={'N/A'}/>
                        </div>
                        {/* Description */}
                        <div
                            className="flex flex-col items-start justify-start gap-y-2 border-t-2 border-gray-300 divide-x pt-4">
                            <h3 className='text-black text-lg font-semibold text-start'>Description</h3>
                            <div className='text-black text-[14px] text-start'>
                                <div><p><span>C'est l'autorisation donnée par l'ARCEP à un opérateur de téléphonie, à un fournisseur d'accès internet ou à un titulaire d'un réseau indépendant pour l'utilisation d'une fréquence ou d'un canal radioélectrique déterminé selon des conditions spécifiées par le demandeur et étudiée par l'autorité de régulation pour les besoins de son service.</span>
                                </p><p><span><b>Détails sur les frais de dossiers des fréquences :&nbsp;</b></span></p>
                                    <ul>
                                        <li><b>Point à point : </b>100.000F/200.000F</li>
                                        <li><b>BLR : </b>100.000F/200.000F</li>
                                        <li><b>Réseau mobile 2G/3G/4G :</b> 2.000.000F</li>
                                        <li><b>Station terrienne pour service de CE :</b> 1.000.000F</li>
                                        <li><b>VSAT :</b> 200.000F à 1.000.000F</li>
                                        <li><b>USAT :</b> 100.000F/300.000F</li>
                                        <li><b>Radio recherche et Radiomessagerie (PAGING)
                                            :</b> 100.000F/200.000F/500.000F
                                        </li>
                                        <li><b>Réseau à ressources partagées (Trunking-3RP) : </b>100.000F/300.000F/500.000F
                                        </li>
                                        <li><b>VHF/UHF : </b>100.000F</li>
                                        <li><b>MF/HF :</b> 20.000F</li>
                                        <li><b>Côtière ou de navires :</b> 50.000F : 100.000F</li>
                                        <li><b>Aéronautique et d'amateur : </b>10.000F/25.000F</li>
                                        <li><b>TV : </b>300.000F/500.000F</li>
                                        <li><b>FM :</b> 25.000F/50.000F</li>
                                        <li><b>FAI par satellite :</b> 1.000.000F</li>
                                        <li><b>FSM par satellite pour applications IoT et M 2 M :</b> 500.000F</li>
                                    </ul>
                                    <div></div>
                                </div>
                            </div>
                        </div>

                        {/* Identification des personnes susceptibles / légitimes à faire la demande */}
                        <div
                            className="flex flex-col items-start justify-start gap-y-2 border-t-2 border-gray-300 divide-x pt-4">
                            <h3 className='text-black text-lg font-semibold text-start'>Identification des personnes
                                susceptibles / légitimes à faire la demande</h3>
                            <p className='text-black text-[14px] text-start'>
                                Personne physique ou morale.
                            </p>
                        </div>
                        {/* Conditions */}
                        <div
                            className="flex flex-col items-start justify-start gap-y-2 border-t-2 border-gray-300 divide-x pt-4">
                            <h3 className='text-black text-lg font-semibold text-start'>Conditions</h3>
                            <p className='text-black text-[14px] text-start'>
                                Être opérateur de téléphonie, un fournisseur d accès internet ou un titulaire d'un
                                réseau indépendant.
                            </p>
                        </div>

                        {/* Pièces à fournir */}
                        <div
                            className="flex flex-col items-start justify-start gap-y-2 border-t-2 border-gray-300 divide-x pt-4">
                            <h3 className='text-black text-lg font-semibold text-start'>Pièces à fournir</h3>
                            <div className='text-black text-[14px] text-start'>
                                <div><p><span>1.<span> </span></span><span>Lettre de demande d'assignation de fréquences adressée au Directeur&nbsp;</span><span>Général de l'Autorité de régulation ;</span>
                                </p><p><span>2.&nbsp;<span></span></span><span>Informations sur le Demandeur :</span>
                                </p><p><b><span>a.&nbsp;<span></span></span><span>S'il s'agit d'une personne morale de droit privé </span></b>
                                </p>
                                    <ul>
                                        <li><span>Copie du RCCM ou de son équivalent ;</span></li>
                                        <li><span>Copie de la carte d'opérateur économique ou copie du récépissé de déclaration ;</span>
                                        </li>
                                        <li><span><span>&nbsp;</span></span><span>Un extrait des statuts de la société et/ou un procès-verbal de l'organe compétent pour donner pouvoir, selon la forme juridique de la société, identifiant le représentant légal ;</span>
                                        </li>
                                        <li><span><span>&nbsp;</span></span><span>Copie légalisée de l'acte par lequel le représentant légal délègue son pouvoir à une personne tierce, s'il s'agit de son mandataire.</span>
                                        </li>
                                    </ul>
                                    <p><b><span>b.&nbsp;<span></span></span><span>S'il s'agit d'une personne morale de droit public</span></b>
                                    </p>
                                    <ul>
                                        <li><span><span>&nbsp;</span></span><span>Copie de l'acte portant création de la personne morale ou de tout acte attestant de la délégation du pouvoir ;</span>
                                        </li>
                                        <li><span><span>&nbsp;</span></span><span>Copie de l'acte désignant le représentant légal.</span>
                                        </li>
                                    </ul>
                                    <p><b>c. S'il s'agit d'une institution internationale :</b> l'accord de siège</p><p>
                                        <b>d. S'il s'agit d'une personne physique :</b> copie légalisée de la carte
                                        d'identité nationale ou du passeport, éventuellement du certificat de résidence
                                        ou de la carte consulaire du demandeur.</p><p><span>3. Les fiches techniques de tous les équipements du réseau ;</span>
                                    </p><p>
                                        <span>4. Le Formulaire</span><span>&nbsp;de demande dûment rempli et signé ;</span>
                                    </p><p><span>5. Le schéma du plan global fonctionnel du réseau ;</span></p><p><span>6. Les accords</span><span>&nbsp;d'interconnexion/accès aux réseaux ouverts au public, le cas échéant.</span>
                                    </p><p></p><p>&nbsp;</p></div>
                            </div>
                        </div>

                        {/* Étapes */}
                        <div
                            className="flex flex-col items-start justify-start gap-y-2 border-t-2 border-gray-300 divide-x pt-4">
                            <h3 className='text-black text-lg font-semibold text-start'>Étapes</h3>
                            <div className='text-black text-[14px] text-start'>
                                <div>
                                    <ol>
                                        <li><p><b>Préparation de la documentation :</b> Le demandeur doit rassembler
                                            tous les documents et informations nécessaires pour remplir le formulaire et
                                            les pièces justificatives requises ;</p></li>
                                        <li><p><b>Remplissage du formulaire et soumission de la demande :</b> Le
                                            demandeur remplit en ligne sur la présente plateforme le formulaire associé
                                            à cette procédure. Pour ce faire, cliquez sur le bouton « Faire la demande
                                            en ligne » ;</p></li>
                                        <li><p><b>Paiement des frais d'étude :</b> Le demandeur paie les frais de
                                            dossier via les moyens de paiement offerts par la plateforme ;</p></li>
                                        <li><p><b>Transmission et Vérification des Données :</b> Les informations
                                            fournies lors du remplissage du formulaire sont transmises à l'ARCEP qui
                                            procède à une vérification des données ;</p></li>
                                        <li><p><b>Traitement de la demande par l'ARCEP :</b> L'Autorité de Régulation
                                            examine la demande et les documents soumis pour s'assurer qu'ils sont
                                            complets et conformes aux exigences légales et réglementaires ;</p></li>
                                        <li><p><b>Notification en cas d'avis défavorable ou de besoin de complément
                                            d'information :</b> Un courrier motivé est adressé au demandeur pour fournir
                                            les compléments d'information ou pour lui notifier le rejet ;</p></li>
                                        <li><p><b>Notification en cas d'avis favorable :</b> Une facture est envoyée au
                                            demandeur pour le règlement des redevances et autres frais donnant droit à
                                            une autorisation ;</p></li>
                                        <li><p><b>Notification de Retrait des Documents :</b> Après règlement de la
                                            facture et envoi de la preuve au guichet, une notification est envoyée au
                                            demandeur en vue du retrait des documents d'autorisation (décision,
                                            certificat d'enregistrement, cahier des charges... et l'échantillon pour les
                                            cas des agréments d'équipement).</p></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        {/* Button */}

                    </Card>
                    <button className="btn px-3 py-2 bg-red-500 text-white">
                        Signaler une procédure inexacte
                    </button>
                </div>


                <div className=" md:sticky md:top-[100px] w-full  md:w-1/3">
                    <Link href="/services/category/demande-de-passeport/form" className="btn px-3 py-2 text-white bg-blue-950 w-full mb-3">
                        Faire la demande en ligne
                    </Link>
                    <Card style='flex  w-full flex-col gap-5 bg-white '>
                        <h2 className="text-xl font-semibold text-start">Fournisseur de service</h2>
                        <p className='text-black text-[14px] text-start'>
                            ARCEP
                        </p>
                        <p className='text-black text-[14px] text-start'>
                            4638, Boulevard Général Gnassingbé Eyadema – Immeuble ARCEP - BP 358 Lomé <br/>
                            (228) 22 23 63 80 / 22 23 63 63 / 22 23 63 94
                            guichet.autorisations@arcep.tg <br/>
                            (228) 22 23 63 80 / 22 23 63 63 / 22 23 63 94 <br/>
                        </p>
                        {/*site web */}
                        <p className='text-black text-[14px] text-start'>
                            <Link href="https://www.arcep.fr/" target="_blank" rel="noopener noreferrer">
                                https://www.arcep.fr/
                            </Link>
                        </p>
                        {/* Partager */}
                        <div className="flex items-start flex-col">
                            <h2>Partager</h2>
                            <ShareButtons/>
                        </div>
                    </Card>
                </div>

            </div>


        </>
    )
}

export default ServiceDetails