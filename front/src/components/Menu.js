import { Image } from "antd";

import { Row, Col } from "antd";
const Siders = () => (
  <Row>
    <Col span={6}>
      <Image
        className="App-logo-spin"
        width={50}
        src="https://www.pngplay.com/wp-content/uploads/2/Pokeball-PNG-Pic-Background.png"
      />
    </Col>
    <Col span={18}>
      <Image
        width={150}
        src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
      />
    </Col>
  </Row>
);

export default Siders;
