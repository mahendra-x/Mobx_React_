import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import { Button, Form } from "react-bootstrap";
import { useStore } from "../Hooks/useStore";

export const GetUserDetails = observer(() => {
  const [text, setText] = useState("");
  const {
    rootStore: { githubUserDetails, countStore },
  } = useStore();

  const onIncrement = () => {
    countStore.increment();
  };
  const onDecrement = () => {
    countStore.decrement();
  };

  const onClickButton = () => {
    githubUserDetails.fetchGithubUserDetails(text);
  };
  return (
    <div>
      <div>
        User Name : {githubUserDetails.getUserDetails.name} <br />
        User Location: {githubUserDetails.getUserDetails?.location}
        <br />
        Count value in Github component: {countStore.getCountValue}
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="githubuser">
          <Form.Label>Search Github User</Form.Label>
          <Form.Control
            value={text}
            onChange={(event) => setText(event.target.value)}
            type="text"
            placeholder="Enter github user name"
          />
        </Form.Group>
        <Button onClick={onClickButton} variant="primary">
          Search User
        </Button>
      </Form>
    </div>
  );
});
