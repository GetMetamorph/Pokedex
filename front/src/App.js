import "./App.css";
import "antd/dist/antd.css";
import Siders from "./components/Menu";
import TableauPokemon from "./components/TableauPokemon";
import RechercherPokemon from "./components/RechercherPokemon";
import PokemonCard from "./components/PokemonCard";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Sider style={{ height: "100vh", padding: "10px" }}>
          <Siders />
        </Sider>
        <Layout>
          <Header className="header">
            <RechercherPokemon />
          </Header>
          <Content>
            <TableauPokemon />
            <PokemonCard />
          </Content>
          <Footer className="dark">Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
