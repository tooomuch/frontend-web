import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Main = ({ children }: Props) => <div>{children}</div>;
