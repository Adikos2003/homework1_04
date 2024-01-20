import React from 'react';

const User = (props) => {
  return (
    <div>
      <h2>User component</h2>
      <p>Content: {props.content}</p>
    </div>
  );
};
const App = () => {
    const userContent = "Этот контент пользователя"

    return(
        <div>
            <h1>My content</h1>
            <User content={userContent}/>
        </div>
    )
}

export default User;