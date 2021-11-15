import React from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Jumbotron,
  Container,
  Col,
  Row,
} from "reactstrap";
import INTERESTS from "../data/interests";

export default class UserInterestsForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state.interests is an obhect with 2 keys "SPORTS_INTEREST" and "HOBBIES".
    // Each of those are an array of strings of the names / ids of the checkboxes below
    this.state = { interests: { SPORTS_INTERESTS: [], HOBBIES: [] } };
  }
  handleChange(interest, typeOfInterest) {
    // We need the type of interest to say which key to use in this.state.interests
    let newInterests = { ...this.state.interests }; // make a copy of the object using the spread operator
    if (newInterests[typeOfInterest].indexOf(interest) >= 0) {
      // check if the interest exists and if it does, remove it with filter
      newInterests[typeOfInterest] = newInterests[typeOfInterest].filter(
        (i) => i !== interest
      );
    } else {
      // if the interest does not exist add it with push
      newInterests[typeOfInterest].push(interest);
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
            <Row>
              <Col
                xs={6}
                className="mx-auto border border-primary form-container p-4"
              >
                {INTERESTS.SPORTS_INTERESTS.map((interest) => {
                  return (
                    <FormGroup
                      className="row justify-content-center"
                      key={interest.id}
                    >
                      <Col xs={2} className="text-right">
                        <Input
                          type="checkbox"
                          id={interest.id}
                          checked={
                            this.state.interests.SPORTS_INTERESTS.indexOf(
                              interest.id
                            ) >= 0
                          }
                          onChange={() =>
                            this.handleChange(interest.id, "SPORTS_INTERESTS")
                          }
                        />
                      </Col>
                      <Label
                        className="text-left col-4"
                        check
                        for={interest.id}
                      >
                        {interest.displayName}
                      </Label>
                    </FormGroup>
                  );
                })}
              </Col>
            </Row>
            <h6>
              <strong>Hobbies</strong>
            </h6>
            <Row>
              <Col
                xs={6}
                className="mx-auto border border-primary form-container p-4"
              >
                {INTERESTS.HOBBIES.map((interest) => {
                  return (
                    <FormGroup
                      className="row justify-content-center"
                      key={interest.id}
                    >
                      <Col xs={2} className="text-right">
                        <Input
                          type="checkbox"
                          id={interest.id}
                          checked={
                            this.state.interests["HOBBIES"].indexOf(
                              interest.id
                            ) >= 0
                          }
                          onChange={() =>
                            this.handleChange(interest.id, "HOBBIES")
                          }
                        />
                      </Col>
                      <Label
                        className="text-left col-4"
                        check
                        for={interest.id}
                      >
                        {interest.displayName}
                      </Label>
                    </FormGroup>
                  );
                })}
              </Col>
            </Row>
          </Form>
        </Container>
      </>
    );
  }
}
