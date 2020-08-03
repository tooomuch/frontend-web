import { LocationState } from "history";
import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

type Props = NavLinkProps<LocationState>;

export const InternalLink = ({ exact = true, children, ...props }: Props) => (
  <NavLink exact={exact} {...props}>
    {children}
  </NavLink>
);
