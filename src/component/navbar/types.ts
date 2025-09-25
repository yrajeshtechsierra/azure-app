import { NavLinks } from "./const";

export type NavLinkKeyType = keyof typeof NavLinks;
export type NavLinkValueType = (typeof NavLinks)[keyof typeof NavLinks]; 