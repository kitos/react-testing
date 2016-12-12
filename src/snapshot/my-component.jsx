import React from 'react';

const MyComponent = ({ title, children }) => (
    <section>
        <header>{title}</header>
        <p>{children}</p>
    </section>
);

export default MyComponent;