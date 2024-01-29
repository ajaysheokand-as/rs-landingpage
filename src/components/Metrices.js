import React from 'react'


const Metrices = (props) => {
    const bigdata = [{ 'title1': '10k+', 'title2': 'Website launched' }, 
    { 'title1': '931k+', 'title2': 'Projects created with Anima' },
    { 'title1': '240k+', 'title2': 'New users joined Anima' } ,
     { 'title1': '12k+', 'title2': 'Teams used Anima' }]

    return (
        <div className='mat_container'>
            <div className='mat_inner_container'>
                <div className='mat_inner_div'>

                    {
                        props.Data.test.heading1
                    }
                </div>
                <div className='mat_inner_second_div'>
                    {
                        props.Data.test.heading2
                    }
                </div>



                <div className='bigb'>
                    {bigdata.map((bigb) => (
                        <>
                            <div className='mat_inner_map'>
                                <div className='mat_inner_map_first'>
                                    {bigb.title1}
                                </div>
                                <div className='mat_inner_map_second'>
                                    {bigb.title2}

                                </div>
                            </div>
                        </>
                    ))}


                </div>

            </div>

        </div>
    )
}

export default Metrices
