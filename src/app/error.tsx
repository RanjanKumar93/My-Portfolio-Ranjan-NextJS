"use client"
const ErrorPage = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div style={styles.container}>
      <h1>Something went wrong</h1>
      <button onClick={handleRetry} style={styles.button}>
        Try Again
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    // backgroundColor: '#f0f0f0',
    textAlign: 'center' as 'center',
    color: '#333',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    // backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
};

export default ErrorPage;
