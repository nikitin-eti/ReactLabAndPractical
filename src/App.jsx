import React from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/molecules/Card/Card';
import Input from './components/atoms/Input/Input';
import Button from './components/atoms/Button/Button';

function App() {
  return (
    <>
      <Header />
      <main
        style={{
          padding: '50px 20px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Card>
          <h2
            style={{
              color: '#22d3ee',
              fontFamily: 'monospace',
              marginBottom: '30px',
              textTransform: 'uppercase',
              textAlign: 'center',
              textShadow: '0 0 10px rgba(34, 211, 238, 0.5)',
            }}
          >
            Авторизація терміналу
          </h2>
          <Input type="email" label="Email" placeholder="user@system.io" />
          <Input type="password" label="Пароль" placeholder="••••••••" />
          <div
            style={{
              display: 'flex',
              gap: '15px',
              marginTop: '20px',
              width: '100%',
            }}
          >
            <Button variant="primary">Увійти</Button>
            <Button variant="secondary">Реєстрація</Button>
          </div>
        </Card>
      </main>
    </>
  );
}

export default App;
