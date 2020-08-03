import React, { ReactNode } from "react";

export enum Target {
  Top = "_top",
  Self = "_self",
  Parent = "_parent",
  Blank = "_blank"
}

type Props = {
  to: string;
  target?: Target;
  children: ReactNode;
};

export const ExternalLink = ({ to, children, ...props }: Props) => (
  <a href={to} {...props}>
    {children}
  </a>
);
