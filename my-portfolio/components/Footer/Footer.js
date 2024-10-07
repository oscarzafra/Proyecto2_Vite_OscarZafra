import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Redes Sociales</h2>
<div>
${Button("public/icons/instagram-icons.webp", "Instagram")}
${Button("public/icons/x-icon.png", "X")}
${Button("public/icons/facebook_icons.png", "Facebook")}
${Button("public/icons/LinkedIn_icon.jpeg", "LinkedIn")}
</div>
`;