import React from "react";
import { useState } from "react";

function Clock() {
  let date = new Date();

  return (
    <div>
      <p>
        this is current time {date.toLocaleDateString()}-
        {date.toLocaleTimeString()}
      </p>
    </div>
  );
}

export default Clock;
