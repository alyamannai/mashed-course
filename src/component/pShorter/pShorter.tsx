import React, { useState } from "react";

interface Props {
  children: string;
  Maxlength?: number;
}

function PShorter({ children, Maxlength }: Props) {
  const [isExpanded, setExpanded] = useState(false);

  if (Maxlength !== undefined && children.length > Maxlength) {
    const displayText = isExpanded
      ? children
      : children.slice(0, Maxlength) + "...";

    return (
      <div>
        <p>{displayText}</p>
        <button onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? "Less" : "More"}
        </button>
      </div>
    );
  }

  return <p>{children}</p>;
}

export default PShorter;
