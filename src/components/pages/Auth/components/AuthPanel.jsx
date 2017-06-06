import React from 'react';

export default function ({ className, ...rest }) {
  const classAttr = ['auth-pane'];
  if (className) classAttr.push(className);

  return (
    <div className={classAttr.join(' ').trim()}>
      <div className="auth-pane__logo">
        <span className="auth-pane__auth-span">АльтБрокер</span>
      </div>
      {rest.children}
    </div>
  );
}
