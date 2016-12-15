import React from 'react';

// NOTE: Having several components in the same file is generally bad practice.
// Only use it here for simplicity.

export function NestedComponent() {
  return (
    <section>
      <span className="heading">Title</span>
      <SubComponent foo="bar" />
    </section>
  );
}

export function SubComponent({foo}) {
  return (
    <section>{foo}</section>
  );
}
