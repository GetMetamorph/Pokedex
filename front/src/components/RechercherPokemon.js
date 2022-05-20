import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#red",
    }}
  />
);

const onSearch = (value) => console.log(value);

const RechercherPokemon = () => (
  <Search
    placeholder="Rechercher un pokemon"
    allowClear
    enterButton="Rechercher"
    size="large"
    onSearch={onSearch}
  />
);

export default RechercherPokemon;
