import React from 'react';
import { Code, Type } from 'lucide-react';

interface CodeEditorProps {
  code: string;
  onChange: (value: string) => void;
  label: string;
  placeholder?: string;
  readOnly?: boolean;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ 
  code, 
  onChange, 
  label, 
  placeholder,
  readOnly = false 
}) => {
  return (
    <div className="flex flex-col h-full bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
      <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex items-center gap-2">
        <Code className="w-4 h-4 text-slate-500" />
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">{label}</span>
      </div>
      <div className="flex-1 relative">
        <textarea
          value={code}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          readOnly={readOnly}
          spellCheck={false}
          className={`w-full h-full resize-none p-4 font-mono text-sm leading-relaxed outline-none ${
            readOnly 
              ? 'bg-slate-900 text-green-400' 
              : 'bg-white text-slate-800 focus:bg-slate-50'
          }`}
        />
      </div>
    </div>
  );
};