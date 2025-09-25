import { ArrowDownOnSquareIcon, ChartBarIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import { NavLinks } from "../navbar/const";

export const sideBarLinks = [
  { id: 1, name: NavLinks.OVERVIEW, icon: ChartBarIcon },
  { id: 2, name: NavLinks.RECRUIT, icon: ClipboardDocumentCheckIcon },
  { id: 3, name: NavLinks.SUMMARY, icon: ArrowDownOnSquareIcon },
];