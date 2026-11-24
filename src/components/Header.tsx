import React, { Component } from 'react';

interface HeaderProps {
  title: string;
}

class Header extends Component<HeaderProps> {
  render() {
    const { title } = this.props;

    return (
      <header style={styles.header}>
        <h1 style={styles.title}>{title}</h1>
      </header>
    );
  }
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    marginBottom: '20px',
    paddingBottom: '12px',
    borderBottom: '2px solid #e2e8f0',
    textAlign: 'center'
  },
  title: {
    margin: 0,
    fontSize: '24px',
    color: '#1e293b'
  }
};

export default Header;