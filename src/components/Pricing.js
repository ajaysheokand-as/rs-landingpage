import React from 'react'

const Pricing = (props) => {
    const DATA = [
        { title: "Free", title2: "$0", title3: " / month" ,title4:"Best for Small Teams or Individuals." ,title5:"Write feature details here"},
        { title: "Professional", title2: "$19", title3: " / month" ,title4:"Ideal for Growing Companies.." ,title5:"Write feature details here"  },
        { title: "Enterprise", title2: "$49", title3: " / month" ,title4:"Ultimate for Enterprise Solutions.." ,title5:"Write feature details here"  },
    ];
    return (
        <>
            <div className='pricingstart'>
                <div className="headlineFullDiv">
                    <div className="pricingtext">
                        {/* Pick Your Perfect Plan */}
                        {props.data.title1}
                    </div>
                    <div className='pricingtext2'>
                        {/* Find the perfect plan for your business with our flexible pricing options. */}
                        {props.data.title2}
                    </div>
                </div>

                <div className='CardsRowpricing'>
                {DATA.map((DATA) =>
                (
                    <div className='PrcingCard'>
                        <div className='Free'>
                            {/* Free */}
                           {DATA.title} 
                        </div>
                        <div className='Pricingdollor'>
                            <div className='dollor'>
                                {/* $0 */}
                                {DATA.title2}
                            </div>
                            <div className='months'>
                                {/* / month */}
                                {DATA.title3}
                            </div>
                        </div>
                        <div className='Bestfor'>
                            {/* Best for Small Teams or Individuals. */}
                            {DATA.title4}
                        </div>
                        <div className='writefuture'>
                            <div className='right'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M16.875 6.02539L8.125 14.7754L3.75 10.4004" stroke="#009379" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='Writehere'>
                            {DATA.title5}
                            </div>
                        </div>
                        <div className='writefuture'>
                            <div className='right'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M16.875 6.02539L8.125 14.7754L3.75 10.4004" stroke="#009379" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='Writehere'>
                            {DATA.title5}
                            </div>
                        </div>
                        <div className='writefuture'>
                            <div className='right'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M16.875 6.02539L8.125 14.7754L3.75 10.4004" stroke="#009379" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='Writehere'>
                            {DATA.title5}
                            </div>
                        </div>

                        <div className='pricingbutton'>
                            <div className='getstarted'>
                            Get Started
                            </div>
                        </div>
                    </div>
  ))}

                </div>

            </div>
        </>
    )
}

export default Pricing
