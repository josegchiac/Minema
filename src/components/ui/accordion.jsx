import { useState } from 'react';

export function Accordion({ children }) {
  return <div>{children}</div>;
}

export function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 border rounded-xl bg-[#f1eee9]">
      <button
        className="w-full text-left p-4 font-semibold"
        onClick={() => setOpen(!open)}
      >
        {title}
      </button>
      {open && <div className="p-4 pt-0">{children}</div>}
    </div>
  );
}
