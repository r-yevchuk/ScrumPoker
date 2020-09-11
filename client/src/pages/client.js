import * as React from "react";
import Container from "react-bootstrap/Container";
import '../styles/client.css'
import {cardSet} from "../const/config";
import Row from "react-bootstrap/Row";
import Card from "../components/card";
import Table from "react-bootstrap/Table";
import Api from "../services/api";

class Client extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     session: { id: 0},
    }
  }

  showCards(cards, index, isAllCardsSelected) {
    return <Card key={cards} index={index} value={cards} active={isAllCardsSelected} handle={() => this.forceUpdate()}/>
  }

  getSession(id){
    Api.get('session/' + id)
      .then((response) => {
        if (response.error !== null) {
          return;
        }
        this.setState({session: response.data})
      });
  }

  render() {
    const {match: {params}} = this.props;
    const {sessionId} = params;
    const {session} = this.state;
    this.getSession(sessionId)

    return (
      <Container fluid>
        <h5 className="mt-4 mb-2 text-center"> Session name: {session.name}, id: {sessionId}</h5>

        <Container fluid>
          <h5 className="mt-2 text-center">Members:</h5>
          <Row >
            <span className="table-container">
          <Table className="table-members" striped bordered hover size="sm">
            <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Estimation</th>
            </tr>
            </thead>

            <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            </tbody>
          </Table>
            </span >
          {/*<span className="table-container">*/}
          {/*<Table className="table-members" striped bordered hover size="sm">*/}
          {/*  <thead>*/}
          {/*  <tr>*/}
          {/*    <th>#</th>*/}
          {/*    <th>Name</th>*/}
          {/*    <th>Estimation</th>*/}
          {/*  </tr>*/}
          {/*  </thead>*/}

          {/*  <tbody>*/}
          {/*  <tr>*/}
          {/*    <td>5</td>*/}
          {/*    <td>Mark</td>*/}
          {/*    <td>Otto</td>*/}
          {/*  </tr>*/}
          {/*  <tr>*/}
          {/*    <td>6</td>*/}
          {/*    <td>Jacob</td>*/}
          {/*    <td>Thornton</td>*/}
          {/*  </tr>*/}
          {/*  <tr>*/}
          {/*    <td>7</td>*/}
          {/*    <td>Jacob</td>*/}
          {/*    <td>Thornton</td>*/}
          {/*  </tr>*/}
          {/*  <tr>*/}
          {/*    <td>8</td>*/}
          {/*    <td>Jacob</td>*/}
          {/*    <td>Thornton</td>*/}
          {/*  </tr>*/}
          {/*  </tbody>*/}
          {/*</Table>*/}
          {/*</span>*/}
          </Row>
        </Container>

        <Container className="mt-2 text-center">
          Status:
          <Container className="status">
            You can vote!
          </Container>


          <Row className="cards-row mt-4">


            {cardSet.values.map((cards, index) =>
              this.showCards(cards, index, cardSet.selected[index]))}
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Client;
