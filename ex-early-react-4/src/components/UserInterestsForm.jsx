import React from "react";
import { Form, Jumbotron, Container } from "reactstrap";
import INTERESTS from "../data/interests";
import CheckboxSection from "./CheckboxSection";

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
      newInterests = newInterests[typeOfInterest].filter((i) => i !== interest);
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
            {Object.keys(INTERESTS).map((interestType) => (
              <CheckboxSection
                key={interestType}
                state={this.state}
                interests={INTERESTS[interestType]}
                interestType={interestType}
                handleChange={this.handleChange}
              />
            ))}
          </Form>
        </Container>
      </>
    );
  }
}
