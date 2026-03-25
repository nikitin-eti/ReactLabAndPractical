function Header() {
  const headerStyle = {
    backgroundColor: '#0f172a',
    color: '#22d3ee',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid #334155',
  };

  return (
    <header style={headerStyle}>
      <h2>React Практика</h2>
    </header>
  );
}

export default Header;
