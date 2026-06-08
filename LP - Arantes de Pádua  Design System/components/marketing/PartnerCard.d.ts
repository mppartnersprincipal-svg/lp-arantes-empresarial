import * as React from "react";

export interface PartnerCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Portrait image URL (3:4). */
  photo?: string;
  /** Partner name. */
  name?: string;
  /** Role / title, e.g. "Sócio · Direito Empresarial". */
  role?: string;
  /** OAB registration line, e.g. "OAB/SP 000.000". */
  oab?: string;
}

/** Partner portrait card with emerald gradient foot + caption. */
export function PartnerCard(props: PartnerCardProps): JSX.Element;
