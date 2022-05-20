import { Card } from "antd";
import { Image } from "antd";
const { Meta } = Card;

const PokemonCard = () => (
  <Card
    hoverable
    bordered
    style={{ width: 300 }}
    cover={
      <Image
        width={200}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
    }
  >
    <Meta
      vn
      title="Bulbibi"
      description="Pendant un certain temps après sa naissance, il grandit en se nourrissant de la graine sur son dos."
    />
    <br />
    <p>Type : Bitoufleur</p>
    <p>Taille : </p>
    <p>Poids : </p>
  </Card>
);
export default PokemonCard;
