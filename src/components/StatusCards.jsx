import React from "react";

export default function StatusCards({ title, value }) {
  return (
    <div className="flex flex-col bg-btncolor rounded-lg border border-border p-4 gap-4 items-start">
      <p className="">{title}</p>
      <p className="text-4xl">{value}</p>
    </div>
  );
}
