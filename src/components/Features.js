import React from 'react'

const Features = (props) => {
    return (

        <>
           
                    {/* <div className='cardsrow'> */}

                        <div className='FeatureCard'>

                            <div className='border'>
                                <div className='featureimg'>
                                    <img src={props.img} alt="React Image" />
                                </div>
                            </div>

                            <div className='Fast'>
                                {props.title1}
                            </div>

                            <div className='FASTBAR'>
                                {props.title2}
                            </div>

                            <div className='Learn'>

                                <div className='LearnMORE'>
                                Learn More
                                </div>
                                <div className='arrow'></div>
                                <img src={require('../image/ArrowRight.png')} alt="React Image" />
                            </div>
                        </div>

                    {/* </div> */}

        </>

    )
}

export default Features
