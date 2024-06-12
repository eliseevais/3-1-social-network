import React from "react";

import {FeedPropsType} from "../../redux/storeAllPropsType";

export const Feed = (props: FeedPropsType) => {
  return (
    <div>{props.text}</div>
  );
};
