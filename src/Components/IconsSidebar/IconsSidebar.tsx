import GithubIcon from "../../Icons/GithubIcon";
import GlobeIcon from "../../Icons/GlobeIcon";
import InstagramIcon from "../../Icons/InstagramIcon";
import LinkedInIcon from "../../Icons/LinkedInIcon";
import MailIcon from "../../Icons/MailIcon";
import LinkWrapper from "../LinkWrapper/LinkWrapper";
import './IconsSidebar.css'

const IconsSidebar = () => (
  <div className="social-sidebar">
    <LinkWrapper href='https://github.com/carloscndev' isExternal>
      <GithubIcon className="github-icon" />
    </LinkWrapper>
    <LinkWrapper href='https://carloscndev.com' isExternal>
      <GlobeIcon className="globe-icon"/>
    </LinkWrapper>
    <LinkWrapper href='https://www.instagram.com/carloscndev.isrunning/' isExternal>
      <InstagramIcon className="instagram-icon"/>
    </LinkWrapper>
    <LinkWrapper href='https://www.linkedin.com/in/carloscndev/ins' isExternal>
      <LinkedInIcon className="linkedIn-icon"/>
    </LinkWrapper>
    <LinkWrapper href='mailto:carloscndev@gmail.com'>
      <MailIcon className="mail-icon"/>
    </LinkWrapper>
  </div>
);

export default IconsSidebar;