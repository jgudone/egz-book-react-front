import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";

import CreateBook from "./components/CreateBook";
import UpdateBook from "./components/UpdateBook";
import BookList from "./components/BookList";

function App() {
  return (<Router>
    <Navbar bg="primary">
      <Container>
        <Link to={"/"} className="navbar-brand text-white">
          Book
        </Link>
      </Container>
    </Navbar>

    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <Routes>
            <Route path="/book/create" element={<CreateBook />} />
            <Route path="/book/update/:id" element={<UpdateBook />} />
            {/* <Route exact path='/' element={<BookList />} /> */}
            <Route path="/" element={<BookList />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  </Router>);
}

export default App;
