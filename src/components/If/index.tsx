import React from 'react';

const If: React.FC<IfProps> = ({ condition, children, otherChildren }) => {
  return condition ? <>{children}</> : otherChildren || null;
};

export default If;
