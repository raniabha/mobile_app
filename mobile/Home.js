import React, { useState } from 'react'
import { Route} from "react-router-dom";
import { Navbar, Nav, Table, Row, Col, Jumbotron, Container, Image } from 'react-bootstrap';
import './Home.css';

function Mobile() {

  const [loginform, loginformfn] = useState(false);
  const [show, setSate] = useState(false);
  const [loginlogout, loginfn] = useState('login');
  const [showMobile, showMobilefn] = useState(false);

  const [mobilestate1, mobilestatefn1] = useState(false);
  const [mobilestate2, mobilestatefn2] = useState(false);
  const [mobilestate3, mobilestatefn3] = useState(false);
  const [mobilestate4, mobilestatefn4] = useState(false);

  const loginformfn2 = () => {
    loginformfn(!loginform);
    if(loginlogout === "logout"){
      setSate(!show);
      if(loginlogout === "login")
        loginfn("logout");
      else{
        loginfn("login");
      }
      loginformfn(false);
      showMobilefn(false);
      mobilestatefn1(false);
      mobilestatefn2(false);
      mobilestatefn3(false);
      mobilestatefn4(false); 
    }
  }

  const toggleeve = () => {
    setSate(!show);
    if(loginlogout === "login")
      loginfn("logout");
    else{
      loginfn("login");
    }
    loginformfn(false);
    showMobilefn(false);
    mobilestatefn1(false);
    mobilestatefn2(false);
    mobilestatefn3(false);
    mobilestatefn4(false);  
  }

  const showMobilefn2 = () =>  {
    showMobilefn(!showMobile);
    mobilestatefn1(false);
    mobilestatefn2(false);
    mobilestatefn3(false);
    mobilestatefn4(false);
  }

  const mobilestate11 = () => {
    mobilestatefn1(!mobilestate1);
    mobilestatefn2(false);
    mobilestatefn3(false);
    mobilestatefn4(false);
  }

  const mobilestate22 = () => {
    mobilestatefn2(!mobilestate2);
    mobilestatefn1(false);
    mobilestatefn3(false);
    mobilestatefn4(false);
  }

  const mobilestate33 = () => {
    mobilestatefn3(!mobilestate3);
    mobilestatefn1(false);
    mobilestatefn2(false);
    mobilestatefn4(false);
  }

  const mobilestate44 = () => {
    mobilestatefn4(!mobilestate4);
    mobilestatefn1(false);
    mobilestatefn3(false);
    mobilestatefn2(false);
  }
  
  
  return (
    <Route>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="/">Mobile App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {show && (
            <>
              <Nav.Link onClick={showMobilefn2}>Show Mobile</Nav.Link>
            </>
          )}
        </Nav>
        <Nav>
          <Nav.Link onClick={loginformfn2} >{loginlogout}</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      {loginform && (
      <div className="Login4">
        <form>
          <h3>Sign In</h3>
          <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" required />
          </div>

          <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" required/>
          </div>
          <button type="submit" className="btn btn-primary btn-block" onClick={toggleeve}>Submit</button>
        </form>
      </div>
      )}
      <Row>
        {showMobile && (
          <Col>
            <div className='Login'>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Mobile</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td onClick={mobilestate11}>Samsung m21</td> 
                  </tr>
                  <tr>
                    <td onClick={mobilestate22}>Vivo</td>
                  </tr>
                  <tr>
                    <td onClick={mobilestate33}>One plus 6t</td>
                  </tr>
                  <tr>
                    <td onClick={mobilestate44}>iphone xs max</td>
                  </tr>
                </tbody>
              </Table>
            </div> 
          </Col>
        )}

        <Col >
          <div className="Login">

            {mobilestate1 && (
              <Jumbotron fluid>
              <Container>
              <h1>Samsung m21</h1>
              <Image src="https://static.toiimg.com/photo/70072353.cms" fluid  />
              <p>
                <b>Display:</b> 6.40-inch (2340x1080)<br/>
                <b>Rear Camera:</b> 48MP + 8MP + 5MP<br/>
                <b>Battery Capacity:</b> 6000mAh
              </p>
              </Container>
              </Jumbotron>
            )}

            {mobilestate2 && (
              <Jumbotron fluid>
              <Container>
              <h1>Vivo</h1>
              <Image src="https://fdn2.gsmarena.com/vv/pics/vivo/vivo-v9-5.jpg" fluid  />
              <p>
                <b>Display:</b> 6.40-inch (2340x1080)<br/>
                <b>Rear Camera:</b> 48MP + 8MP + 5MP<br/>
                <b>Battery Capacity:</b> 6000mAh
              </p>
              </Container>
              </Jumbotron>
            )}

            {mobilestate3 && (
              <Jumbotron fluid>
              <Container>
              <h1>One plus 6t</h1>
              <Image src="https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-8-2.jpg" fluid  />
              <p>
                <b>Display:</b> 6.40-inch (2340x1080)<br/>
                <b>Rear Camera:</b> 48MP + 8MP + 5MP<br/>
                <b>Battery Capacity:</b> 6000mAh
              </p>
              </Container>
              </Jumbotron>
            )}

            {mobilestate4 && (
              <Jumbotron fluid>
              <Container>
              <h1>iphone xs max</h1>
              <Image src="https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg" fluid  />
              <p>
                <b>Display:</b> 6.40-inch (2340x1080)<br/>
                <b>Rear Camera:</b> 48MP + 8MP + 5MP<br/>
                <b>Battery Capacity:</b> 6000mAh
              </p>
              </Container>
              </Jumbotron>
            )}
          </div>
        </Col>
      </Row>
    </Route>
  );
}
export default Mobile;
