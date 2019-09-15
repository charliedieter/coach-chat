import React from "react";
import { Icon } from "native-base";

export default function({ name, type, ...rest }) {
  return <Icon name={name} type={type} {...rest} style={{ width: 40, color: "#4B4453" }}></Icon>;
}
