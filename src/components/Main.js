import React from "react";
import {Posts} from "./Posts";
import {JobCategories} from "./JobCategories";
import {NewJob} from "./NewJob";
import {PostJob} from "./PostJob";
import {Feetback} from "./Feetback";
import { Form } from "./Form";

export const Main = () => {
  return (
    <>
      <Posts />
      <JobCategories />
      <NewJob />
      <PostJob />
      <Feetback />
      <Form />
    </>
  );
};


