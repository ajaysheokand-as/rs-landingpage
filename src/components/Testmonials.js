import React from 'react'
import img1 from '../data/Photo.png'
import img2 from '../data/Photo2.png'
import img3 from '../data/Photo3.png'
import Staricon from '../data/Staricon.png'
import EmptyStaricon from '../data/emply_star.png'



const Testmonials = () => {

   console.log(img1)

    const card = [{ img:img1, name: "Sarah K.", desination: "UX Designer @Brello", brief: "I was looking for a way to streamline my design process and the Anima’s Landing Page UI Kit was a lifesaver! The intuitive design and ease of customisation have saved me hours of time and effort. Highly recommend!" },
    {abc:"empty", img: img2, name: "Michael L.", desination: "Michael L.", brief: "The Landing Page UI Kit has been a game changer for my agency. The pre-designed components and templates have helped us deliver projects faster and with more consistency. Great job!" },
{ img:img3, name: "Lauren M.", desination: "UX Designer @Boo", brief: "Anima’s Landing Page UI Kit has become a staple in my design toolkit. Whether I'm working on a new project or need to make updates to an existing one, this kit has everything I need to get the job done quickly and efficiently." }]
    return (
        <div className='testo_main_container'>
            <div className='testo_heading'>
                <div className='testo_title1'>Real Stories from Satisfied Customers</div>
                <div className='testo_title2'>See how our landing page ui kit is making an impact.</div>

            </div>
            <div className='testo_main_map'>
 
 {card.map((new_map)=>(

<div className='testo_card'>
                    <div className='testo_inner_card'>
                        <div className='testo_iner_iner_card'>
                            <div className='testo_pic'>
                                <img src={new_map.img} alt="rect image" />

                            </div>
                            <div className='testo_iner_card_text1'>
                                {
                                    new_map.name
                                }
                            </div>
                            <div className='testo_iner_card_text2'>
                                {
                                    new_map.desination
                                }
                            </div>

                        </div>
                        <div className='testo_iner_card_text3'>

                           {
                            new_map.brief
                           }
                        </div>

                    </div>
                    <div className='star_div'>
                        <div className='star_pro'>
                            <img src={Staricon} alt='react image' />

                            

                        </div>
                        <div className='star_pro'>
                            <img src={Staricon} alt='react image' />

                        </div>
                        <div className='star_pro'>
                            <img src={Staricon} alt='react image' />

                        </div>
                        <div className='star_pro'>
                            <img src={Staricon} alt='react image' />

                        </div>
                        <div className='star_pro'>
                            { (new_map.abc)?<img src={EmptyStaricon} alt='react image' />:<img src={Staricon} alt='react image' />}
                            {/* <img src={Staricon} alt='react image' /> */}

                        </div>


                    </div>

                </div>


 ))}
                

            </div>

        </div>
    )
}

export default Testmonials
