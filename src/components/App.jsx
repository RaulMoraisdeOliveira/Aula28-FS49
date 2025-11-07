import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Link from './Link.jsx';
import List from './List.jsx';
import Item from './Item.jsx';

function App() {
  return (
    <>
      <Header corFundo='bg-sky-500'>
        <Nav>
          <Link texto='bicarte'/>
          <List>
            <Item>
              <Link texto='modelos' />
            </Item>
            <Item>
              <Link texto='contato' />
            </Item>
            <Item>
              <Link texto='sobre' />
            </Item>
          </List>
        </Nav>
      </Header>
    </>
  )
}

export default App;
