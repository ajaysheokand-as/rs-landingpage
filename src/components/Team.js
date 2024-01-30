import React from 'react';
import image1 from '../image/Member Card.png'
import image2 from '../image/Member Card (1).png'
import image3 from '../image/Member Card (2).png'

const Team = () => {
    // console.log(image1)
  const teamImages = [
    { src: image1 },
    { src:image2},
    { src: image3 },
  ];

  return (
    <>
      <div className='testpage'>
        <div className='starttest'>
          <div className='ourteam'>Meet our team</div>
          <div className='Gettoknow'>
            Get to know the faces behind the scenes and learn about the values that drive us.
          </div>
        </div>

        <div className='Teamimg'>
          {teamImages.map((image) => (
            <div  className='Imghere'>
              <img src={image.src}  className='TeamMemberImage' />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
