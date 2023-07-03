import "./App.css";
import Headers from "./components/Headers";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "./components/SectionItem.css";

function App() {
  const users = [
    {
      name: "Bekjan",
      lastName: "Urustemov",
      age: "17",
      id: "1",
    },
    {
      name: "Nursultan",
      lastName: "Asan uulu",
      age: "21",
      id: "2",
    },
    {
      name: "Baitik",
      lastName: "Azamatov",
      age: "20",
      id: "3",
    },
    {
      name: "Shaimerdin",
      lastName: "Goslingov",
      age: "19",
      id: "4",
    },
    {
      name: "Aidana",
      lastName: "Urustemova",
      age: "18+",
      id: "5",
    },
    {
      name: "Aigerim",
      lastName: "Taitelieva",
      age: "18+",
      id: "6",
    },
  ];
  return (
    <div className="App">
      <Headers />
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Last Name</th>
          <th>ID</th>
        </tr>
      </table>
      <Section arr={users} />
      <Footer />
    </div>
  );
}

export default App;
