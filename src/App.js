import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus, faMessage, faBell, faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import Header from './components/Header';
import Main from './components/Main';
import Modal from './components/Modal';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import ChatPage from './Chatpage';
import Footer from "./components/Footer";
import { useState } from "react";
import Questionnaire from './components/questionnaire/questionnaire.js'
import {ApolloProvider,ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

function App() {

  const [value, setValue] = useState(false)
  //Array of FontAwesomeIcons,given id and button behavior//
  const faIcons = [
    { idName: "userBtn", index: faUser, status: value, clickHandler: function click() { } },
    { idName: "bellBtn", index: faBell, status: value, clickHandler: function click() { } },
    { idName: "searchBtn", mainIndex: faSearch, status: value, clickHandler: function click() { } },
    { idName: "homeBtn", footIndex: faHome, status: value, clickHandler: function click() { } },

    { idName: "plusBtn", footIndex: faPlus, status: value, clickHandler: function post() { setValue(true); } },

    { idName: "messageBtn", footIndex: faMessage, status: value, clickHandler: function click() { } }
  ]
  //SearchBtn icon and its given id
  const searchBtn = faIcons[2].mainIndex;
  const searchBtnId = faIcons[3].idName;
  //Array filter for nav Icons on Footer 
  const footIndex = faIcons.filter((items) => items.footIndex)
  //Array filter for nav Icons on Header
  const index = faIcons.filter((items) => items.index)

  //Header
  const AwesomeIconsHeader = index.map((items) =>
  (
    <li key={items.idName} >
      <button id={items.idName} onClick={items.clickHandler}>
        <FontAwesomeIcon icon={items.index} />
      </button>

    </li>
  ))


  //Footer
  const AwesomeIconsFoot = footIndex.map((items) =>
  (
    <li key={items.idName} >
      <button id={items.idName} onClick={items.clickHandler}>
        <FontAwesomeIcon icon={items.footIndex} />


      </button>


    </li>
  ))



  //Flex Container
  return (
    <ApolloProvider client={client}>
    <div className="container" >
      <Header faIcons={AwesomeIconsHeader} />

      <Main faIcons={(
        <button id={searchBtnId}>
          <FontAwesomeIcon icon={searchBtn} />
        </button>)}
      >
      </Main>
      <div>
       <Login></Login>
       <Signup></Signup>
      </div>
      <div>
        {value && <Modal closeModal={setValue} />}

        {/* <ChatPage></ChatPage> */}
        <Questionnaire></Questionnaire>
      </div>
      {//?????? for opening and closing Modal check Modal.js for rest of code 
      }



      <footer>
        <Footer faIcons={AwesomeIconsFoot} />
      </footer>
    </div>
    </ApolloProvider>
  );

}



export default App;
