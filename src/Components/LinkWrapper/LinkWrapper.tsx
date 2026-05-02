interface LinkWrapperProps {
  href: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

const LinkWrapper = ({ href, isExternal, children}: LinkWrapperProps) => {
  const isMail = href.startsWith('mailto:');
  const useTargetBlank = isExternal && !isMail;

  return(
    <a 
      href={href} 
      target={useTargetBlank ? "_blank" : undefined}
      rel={useTargetBlank ? "noopener" : undefined}
      className="social-link-wrapper"
    >
      {children}
    </a>
  );
}

export default LinkWrapper;