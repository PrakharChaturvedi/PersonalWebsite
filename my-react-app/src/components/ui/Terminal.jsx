import React from 'react';
import { cn } from '../../utils';

export const Terminal = ({ title, children, className }) => {
  return (
    <div className={cn("terminal-window", className)}>
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500/80"></div>
        <div className="terminal-dot bg-yellow-500/80"></div>
        <div className="terminal-dot bg-green-500/80"></div>
        <span className="ml-3 text-xs font-mono text-zinc-500">{title}</span>
      </div>
      <div className="p-6 font-mono text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
};
