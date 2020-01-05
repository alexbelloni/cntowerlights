import React from 'react';
import {
    Container,
} from 'reactstrap';

const Links = ()=>{
    return(
        <Container>
            <p>Other Links:</p>
            <p><a href='https://www.cntower.ca' target='_blank' rel="noopener noreferrer">CNTower's Official webpage</a></p>
            <p><a href='https://www.earthcam.com/world/canada/toronto/cntower/?cam=cntower2' target='_blank' rel="noopener noreferrer">Webcam at the top</a></p>
        </Container>        
    );
}

export default Links;
