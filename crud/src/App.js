import { Provider } from "./Context";
import React from 'react';
import Menu from './components/template/nav';
import Footer from './components/template/footer';
import { Actions } from "./Actions";
import Main from "./components/template/main";
import List from "./components/template/list/UserList"

function App() {
  const data = Actions();
  return (
    <Provider value={data}>
    
      <div className="grid-container">
      
        <section className="left-side">
        <div className="item2"> <Menu/></div>
        </section>
        
        <div className="item3"><Main></Main></div>
      
        <section className="right-side">
        <div className="item4"><List/></div>
        </section>
        <div className="item5"> <Footer/></div>
      </div>
      
    </Provider>
  );
}

export default App;

/*<Provider value={data}>
<div className="App">
  <div className="wrapper">
    <section className="left-side">
      <Form />
    </section>
    <section className="right-side">
      <UserList />
    </section>
  </div>
</div>
</Provider>
);
}

export default App;*/

