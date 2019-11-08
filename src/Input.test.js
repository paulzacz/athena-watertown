import React from "react";
import Input from "./Input";
import { render } from "@testing-library/react";

describe("Input", () => {
  it("should tie the label to the input via htmlFor", () => {
    const { getByLabelText, debug } = render(
      <Input id="testID" onChange={() => {}} value="foobar" label="testLabel" />
    );
    // Assert that the label has a value of testLabel.
    getByLabelText("testLabel");
  });
});
