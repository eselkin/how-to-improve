import React, { useState, useCallback } from "react";
import { Form, Jumbotron, Container } from "reactstrap";
import INTERESTS from "../data/interests";
import CheckboxSection from "./CheckboxSection";

export default function UserInterestsForm() {
  const [state, setState] = useState({
    interests: { SPORTS_INTERESTS: [], HOBBIES: [] },
  });

  const handleChange = useCallback((interest, typeOfInterest) => {
    // We need the type of interest to say which key to use in this.state.interests
    let newInterests = { ...state.interests }; // make a copy of the object using the spread operator
    if (newInterests[typeOfInterest].indexOf(interest) >= 0) {
      // check if the interest exists and if it does, remove it with filter
      newInterests[typeOfInterest] = newInterests[typeOfInterest].filter(
        (i) => i !== interest
      );
    } else {
      // if the interest does not exist add it with push
      newInterests[typeOfInterest].push(interest);
    }
    setState({ interests: newInterests });
  }, [state]);
  const handleSubmit = () => {
    console.log(this.state);
  };
  return (
    <>
      <Jumbotron className="lobster">
        <h1>Tell us a little about you!</h1>
      </Jumbotron>
      <Container className="mx-auto">
        <Form onSubmit={handleSubmit}>
          {Object.keys(INTERESTS).map((interestType) => (
            <CheckboxSection
              key={interestType}
              state={state}
              interests={INTERESTS[interestType]}
              interestType={interestType}
              handleChange={handleChange}
            />
          ))}
        </Form>
      </Container>
    </>
  );
}
