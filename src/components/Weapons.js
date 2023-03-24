import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Weapons = () => {
    return (
        <div id='weapons'>
            <Container fluid className='bg-black text-white text-center pt-3'>
                <Row className='justify-content-center'>
                    <Col xs={2} className='text-center'>
                        <h3>Modalidades</h3>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6} className='px-5'>
                        <h4>Espada Longa Alemã</h4>
                        <i class="icon-liech-v2" style={{fontSize: '128px'}}></i>
                        <p>
                            O mestre Johannes Liechtenauer marcou a sociedade do século XIV com sua forma de combate efficiente. Desferindo de forma tática, golpes velozes e contra-ataques calculados, capazes de finalizar duelos em instantes.
                        </p>
                    </Col>
                    <Col sm={12} md={6} className='px-5'>
                        <h4>Espada Longa Italiana</h4>
                        <i class="icon-fiori-v10" style={{fontSize: '128px'}}></i>
                        <p>
                            A arte da Batalha exclusiva aos nobre. O mestre Fiori del Liberi ensinou aos cavaleiros do século XVI uma poderosa e completa forma de lutar a curta distância, destruindo seus oponentes em embates ferozes.
                        </p>
                    </Col>
                    <Col sm={12} md={6} className='px-5'>
                        <h4>Sabre Inglês</h4>
                        <i class="icon-sabre-v2" style={{fontSize: '128px'}}></i>
                        <p>
                            Destinado aos lordes e oficiais, a lâmina fria do sabre corta de forma elegante e letal. Durante o século XIX renomado espadachim capitão Alfred Hutton ensinou aos seus regimentos de forma estruturada e altamente detalhada a arte do sabre.
                        </p>
                    </Col>
                    <Col sm={12} md={6} className='px-5'>
                        <h4>Montante Ibérico</h4>
                        <i class="icon-montante-v3" style={{fontSize: '128px'}}></i>
                        <p>
                            Arma dos guardiões reais, o brandir do montate é poderoso para enfrentar multidões, firmando terreno e impondo order. O general Dom Diogo Gomes de Figueyredo deixou em sua memória, ensinamentos para domar este monstro frente a tempestade.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Weapons;