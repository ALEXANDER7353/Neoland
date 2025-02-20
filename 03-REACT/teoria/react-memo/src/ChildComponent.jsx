import { memo } from 'react';

export function ChildComponent() { }
memo(({ value }) => {
  return (
    <h1>
      holaeste es mi valor {value}
    </h1>
  );
});
ChildComponent.displayName = 'ChildComponent';
