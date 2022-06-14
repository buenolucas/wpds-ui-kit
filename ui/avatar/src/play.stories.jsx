import * as React from "react";
import { Avatar as Component } from "./";
import Image from "next/image";
import { styled } from "@washingtonpost/wpds-theme";

export default {
  title: "Avatar",
  component: Component,
};

const myLoader = ({ src }) => {
  return `${src}`;
};

const DefaultArgs = {
  size: "200",
};

const Container = styled("h3", {
  textAlign: "center",
});
const Label = styled("h3", {
  textAlign: "center",
});

export const Avatar = (args) => (
  <Container>
    <Label>
      Avatar with Element using <img /> tag
    </Label>
    <Component {...args}>
      <img
        src="https://i.pravatar.cc/300"
        alt="An avatar is an atomic component that represents an individual’s identity through a circular photo."
      />
    </Component>
    <Label>Avatar with Element using next/image image</Label>
    <Component {...args}>
      <Image
        loader={myLoader}
        src="https://i.pravatar.cc/300"
        width="32"
        height="32"
        layout="fixed"
        alt="An avatar is an atomic component that represents an individual’s identity through a circular photo."
      />
    </Component>
  </Container>
);

Avatar.args = { ...DefaultArgs };