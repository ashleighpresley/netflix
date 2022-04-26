import React from "react";
import { Spinner, LockBody, ReleaseBody, Picture } from "./styles/loading";

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner>
      <LockBody />
      <Picture src={`/images/users/${src}`} />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaeBody() {
  return <ReleaseBody />;
};
