import styled from 'styled-components';
import EventItem from './event-item';
const ImageWrapper = styled.div`
  display: flex;
  width: 303px;
  height: 303px;
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