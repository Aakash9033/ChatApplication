import React from "react";

export const extractTime = (dateString) => {
  const date = new Date(dateString);
  const hours = padZero(date.getHours());
  const miniutes = padZero(date.getMinutes());
  return `${hours}:${miniutes}`;
};

function padZero(number) {
  return number.toString().padStart(2, "0");
}
