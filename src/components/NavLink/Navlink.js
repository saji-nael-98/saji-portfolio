import React, { forwardRef } from "react";

const Navlink = forwardRef(({ href, text, onClick }, ref) => (
  <a ref={ref} href={href} onClick={onClick}>
    {text}
  </a>
));

export default Navlink;
