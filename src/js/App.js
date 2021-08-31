import React from 'react';

export default function App() {

    return (
        <div>
        <h1>I am a React Component!!</h1>
        <button onClick={() => {
            electron.notificationApi.sendNotification('My custom notification!');
        }}>Notify</button>
        </div>
    )
}
