import GithubIcon from "../../Icons/GithubIcon";
import GlobeIcon from "../../Icons/GlobeIcon";
import InstagramIcon from "../../Icons/InstagramIcon";
import LinkedInIcon from "../../Icons/LinkedInIcon";
import MailIcon from "../../Icons/MailIcon";
import './IconsSidebar.css'

const IconsSidebar = () => (
  <div className="social-sidebar">
    <GithubIcon className="github-icon" />
    <GlobeIcon className="globe-icon"/>
    <InstagramIcon className="instagram-icon"/>
    <LinkedInIcon className="linkedIn-icon"/>
    <MailIcon className="mail-icon"/>
  </div>
);

export default IconsSidebar;