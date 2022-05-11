import React from 'react';
import { Nav } from 'react-bootstrap';
import { useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Nav.Link
          style={{color: match? '#ec3642': '', background: match ? "white" : "none" }}
          to={to}
          {...props}
        >
          {children}
        </Nav.Link>
      </div>
    );
  }
export default CustomLink;