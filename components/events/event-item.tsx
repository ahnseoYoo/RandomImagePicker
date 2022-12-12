import { useState, useEffect } from 'react';
import styled from 'styled-components';

// const avatarUrls= ["https://cdn-icons-png.flaticon.com/512/1797/1797287.png","https://cdn-icons-png.flaticon.com/512/4717/4717946.png","https://cdn-icons-png.flaticon.com/512/4717/4717946.png","https://cdn-icons-png.flaticon.com/512/141/141695.png","https://cdn-icons-png.flaticon.com/512/6018/6018583.png","https://cdn-icons-png.flaticon.com/512/141/141689.png",'https://cdn-icons-png.flaticon.com/512/8453/8453752.png','https://cdn-icons-png.flaticon.com/512/8453/8453740.png','https://cdn-icons-png.flaticon.com/512/8453/8453747.png'];

const PreviewImage = styled.div`
  
  width: 100px;
  height: 100px;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  &:hover{
    background-color: red;
  }
  img {
    width: 50px;
    height: 50px;
    overflow: hidden;

  }
`
const GetData = styled.button `
  width: 100px;
  height: 30px;
`
const Image = styled.img `
&:hover{  
    border: 1px solid pink;
  } 
`
const RandomImgWrapper = styled.div `
  border: 1px solid blue;
`

const EventItem = (props) =>{
  const [urlList, setUrlList] = useState([]);
  const [randomImage, setRandomImage] = useState();

  const handleFetch = async () => {
    await fetch('api/data')
    .then(res => res.json())
    .then(data => {
      setUrlList(data.map((item)=>({url: item.url, uuid: item.id })));
      console.log(urlList);
    })
  }

  const handleDelete = async (e) => {
    let reqBody = {
      id: e.target.alt
    }
    await fetch('api/data', {
      method: 'DELETE',
      body: JSON.stringify(reqBody),
      headers: {
          'Content-Type': 'application/json'
      }
    }).catch((error)=> console.error(error));

  }

  const handleRandomImage = async() => {
    await fetch('api/random')
    .then(res => res.json())
    .then(data => {
      setRandomImage(data);
      console.log(randomImage);
    })

  }


  return(
    <>
    <RandomImgWrapper>
      <PreviewImage>
        <Image src={randomImage}/>
      </PreviewImage>
    </RandomImgWrapper>
    <GetData onClick={handleFetch}>get images</GetData>
    <GetData onClick={handleRandomImage}>get Random Image</GetData>
    {urlList.map((item)=>(
      <PreviewImage key={item.uuid}>
        <Image src={item.url} alt={item.uuid} onClick={(e)=>handleDelete(e)}/>
      </PreviewImage>
    
    ))}
    
    </>
  )


}

export default EventItem;