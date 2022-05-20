import { Table } from "antd";

const columns = [
  {
    title: "Pokemon",
    dataIndex: "nomPokemon",
  },
  {
    title: "Type1",
    dataIndex: "type",
    filters: [
      {
        text: "Water",
        value: "Water",
      },
      {
        text: "Grass",
        value: "Grass",
      },
      {
        text: "Poison",
        value: "Poison",
      },
      {
        text: "Fire",
        value: "Fire",
      },
      {
        text: "Normal",
        value: "Normal",
      },
      {
        text: "Flying",
        value: "Flying",
      },
      {
        text: "Electric",
        value: "Electric",
      },
      {
        text: "Ground",
        value: "Ground",
      },
      {
        text: "Bug",
        value: "Bug",
      },
      {
        text: "Grass",
        value: "Grass",
      },
    ],
    onFilter: (value, record) => record.type.indexOf(value) === 0,
  },
  {
    title: "Type2",
    dataIndex: "type2",
  },
  {
    title: "Poids",
    dataIndex: "poid",
    defaultSortOrder: "increase",
    sorter: (a, b) => a.poid - b.poid,
  },
  {
    title: "Taille",
    dataIndex: "taille",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.poid - b.poid,
  },
  {
    title: "Description",
    dataIndex: "description",
  },
];

const data = [
  {
    key: "1",
    nomPokemon: "Pikachu",
    taille: 0.4,
    poid: 6,
    type: "Electric",
    type2: "",
    description:
      "It occasionally uses an electric shock to recharge a fellow Pikachu that is in a weakened state.",
  },
  {
    key: "2",
    nomPokemon: "Ekans",
    taille: 0.2,
    poid: 6.9,
    type: "Poison",
    type2: "",
    description:
      "It sneaks through grass without making a sound and strikes unsuspecting prey from behind.",
  },
  {
    key: "3",
    nomPokemon: "Butterfree",
    taille: 1.1,
    poid: 32,
    type: "Bug",
    type2: "Flying",
    description:
      "It loves the honey of flowers and can locate flower patches that have even tiny amounts of pollen.",
  },
  {
    key: "4",
    nomPokemon: "Squirtle",
    taille: 0.5,
    poid: 9,
    type: "Water",
    type2: "",
    description:
      "It shelters itself in its shell, then strikes back with spouts of water at every opportunity.",
  },
  {
    key: "5",
    nomPokemon: "Gastrodon",
    taille: 0.9,
    poid: 29.9,
    type: "Ground",
    type2: "Water",
    description:
      "Long ago, its entire back was shielded with a sturdy shell. There are traces of it left in its cells.",
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}

const TableauPokemon = () => (
  <Table columns={columns} dataSource={data} onChange={onChange} />
);

export default TableauPokemon;
