import React from "react";
import { FormGroup, Input, Label, Col, Row } from "reactstrap";

// this.props become props that are destructured from a props argument that is passed in
export default function CheckboxSection({
  state,
  interests,
  interestType,
  handleChange,
}) {
  return (
    <>
      <h6>
        <strong>
          {interestType
            .split("_")
            .map(
              (interestWord) =>
                `${interestWord[0]}${interestWord.slice(1).toLowerCase()}`
            )
            .join(" ")}
        </strong>
      </h6>
      <Row className="row">
        <Col
          xs={6}
          className="mx-auto border border-primary form-container p-4"
        >
          {interests.map((interest) => {
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
                      state.interests[interestType].indexOf(interest.id) >= 0
                    }
                    onChange={() => handleChange(interest.id, interestType)}
                  />
                </Col>
                <Label className="text-left col-4" check for={interest.id}>
                  {interest.displayName}
                </Label>
              </FormGroup>
            );
          })}
        </Col>
      </Row>
    </>
  );
}
