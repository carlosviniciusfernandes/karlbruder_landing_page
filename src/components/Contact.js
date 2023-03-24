import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const MapsButton = () => {
  return (
    <a href="https://goo.gl/maps/ijnUT4xnCa64bTKi6" target="_blank">
      <img src={process.env.PUBLIC_URL + '/icons/maps.png'} height="20" />
    </a>
  )
}

const HomeButton = () => {
  return (
    <a href="#">
      <img src={process.env.PUBLIC_URL + '/icons/home.jpg'} height="38px" hspace="5" />
    </a>
  )
}

const WhatsappButton = () => {
  return (
    <a href="https://wa.me/5516997632102" target="_blank">
      <img src={process.env.PUBLIC_URL + '/icons/whatsapp.png'} width="38px" height="38px" hspace="5" />
    </a>
  )
}

const InstagramButton = () => {
  return (
    <a href="https://www.instagram.com/karlbruder.hema/?hl=pt-br" target="_blank">
      <img src={process.env.PUBLIC_URL + '/icons/instagram.png'} width="38px" height="38px" hspace="5" />
    </a>
  )
}

const YoutubeButton = () => {
  return (
    <a href="https://www.youtube.com/channel/UCEzgHTyAzDwL1-KTYvd9m4w" target="_blank">
      <img src={process.env.PUBLIC_URL + '/icons/youtube.png'} width="38px" height="38px" hspace="5" />
    </a>
  )
}

const Contact = () => {
  // TODO READ VALUES FROM CONFIG
  return (
    <div id='contact'>
      <Container fluid className='bg-black text-white pt-3'>
        <Row>
          <Col
            className='d-flex justify-content-center'
            xs={12} sm={6}
          >
            <p>
              Estação Ferroviária de São Carlos<br/>
              Praça Antonio Prado, São Carlos - SP<br/>
              CEP 13569-532 | <MapsButton />
            </p>
          </Col>

          <Col
            className='d-flex justify-content-center align-items-center'
            xs={12} sm={6}
          >
            <HomeButton /><WhatsappButton /><InstagramButton /><YoutubeButton />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;