import styled from 'styled-components';
import EventItem from './event-item';
const ImageWrapper = styled.div`
  display: flex;
  width: 800px;
  height: 1000px;
  border: 1px black solid;
  flex-wrap: wrap;
`;

const EventList = (props) =>{


  return(
    <>
    <ImageWrapper>
      <EventItem/>
    </ImageWrapper>
    
    </>
  )


}

export default EventList;