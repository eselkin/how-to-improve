import React from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Jumbotron,
  Container,
  Row,
  Col,
} from "reactstrap";

export default class UserInterestsForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state.interests is an array of strings of the names/ids of the checkboxes below
    this.state = { interests: [] };
  }
  handleChange(interest) {
    let newInterests = [...this.state.interests]; // make a copy of the array using the spread operator
    if (newInterests.indexOf(interest) >= 0) {
      // check if the interest exists and if it does, remove it with filter
      newInterests = newInterests.filter((i) => i !== interest);
    } else {
      // if the interest does not exist add it with push
      newInterests.push(interest);
    }
    this.setState({ interests: newInterests });
  }
  handleSubmit() {
    console.log(this.state);
  }
  render() {
    return (
      <>
        <Jumbotron className="lobster">
          <h1>Tell us a little about you!</h1>
        </Jumbotron>
        <Container className="mx-auto">
          <Form onSubmit={this.handleSubmit}>
            <h6>
              <strong>Sports Interests</strong>
            </h6>
            <Row className="row">
              <Col
                xs={6}
                className="mx-auto border border-primary form-container p-4"
              >
                <FormGroup className="row justify-content-center">
                  <Col xs={2} className="text-right">
                    <Input
                      type="checkbox"
                      id="basketball"
                      checked={this.state.interests.indexOf("basketball") >= 0}
                      onChange={() => this.handleChange("basketball")}
                    />
                  </Col>
                  <Label className="text-left col-4" check for="basketball">
                    Basketball
                  </Label>
                </FormGroup>
                <FormGroup className="row justify-content-center">
                  <Col xs={2} className="text-right">
                    <Input
                      type="checkbox"
                      id="iceHockey"
                      checked={this.state.interests.indexOf("iceHockey") >= 0}
                      onChange={() => this.handleChange("iceHockey")}
                    />
                  </Col>
                  <Label className="text-left col-4" check for="iceHockey">
                    Ice hockey
                  </Label>
                </FormGroup>
                <FormGroup className="row justify-content-center">
                  <Col xs={2} className="text-right">
                    <Input
                      type="checkbox"
                      id="soccer"
                      checked={this.state.interests.indexOf("soccer") >= 0}
                      onChange={() => this.handleChange("soccer")}
                    />
                  </Col>
                  <Label className="text-left col-4" check for="soccer">
                    Soccer
                  </Label>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Container>
      </>
    );
  }
}
