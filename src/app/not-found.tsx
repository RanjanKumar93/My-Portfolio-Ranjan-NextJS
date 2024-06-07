"use client";

import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div style={styles.container}>
      <h1 className="dark:text-white ">Page Not Found</h1>
      <button
        onClick={handleGoHome}
        style={styles.button}
        className="dark:text-white"
      >
        Go Home
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center" as "center",
    color: "#333",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
  },
};

export default NotFoundPage;
