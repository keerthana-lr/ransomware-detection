import React from "react";

function Result() {
  const results = JSON.parse(localStorage.getItem("results")) || [];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Prediction Results</h1>

      <p style={styles.description}>
        The machine learning model has analyzed the dataset and classified
        transactions as ransomware or non-ransomware.
      </p>

      {/* TABLE */}
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.headerRow}>
              <th style={styles.cell}>#</th>
              <th style={styles.cell}>Length</th>
              <th style={styles.cell}>Weight</th>
              <th style={styles.cell}>Count</th>
              <th style={styles.cell}>Looped</th>
              <th style={styles.cell}>Neighbors</th>
              <th style={styles.cell}>Income</th>
              <th style={styles.cell}>Prediction</th>
            </tr>
          </thead>

          <tbody>
            {results.map((row, index) => (
              <tr key={index}>
                <td style={styles.cell}>{index + 1}</td>
                <td style={styles.cell}>{row.length}</td>
                <td style={styles.cell}>{row.weight}</td>
                <td style={styles.cell}>{row.count}</td>
                <td style={styles.cell}>{row.looped}</td>
                <td style={styles.cell}>{row.neighbors}</td>
                <td style={styles.cell}>{row.income}</td>

                <td
                  style={{
                    ...styles.cell,
                    color:
                      row.prediction === "Ransomware"
                        ? "red"
                        : "#00ff00",
                    fontWeight: "bold"
                  }}
                >
                  {row.prediction}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h4 style={styles.footer}>
        -- Keerthana L R --
      </h4>
    </div>
  );
}

const styles = {
  container: {
    background: "linear-gradient(to right, #1d5e1d, #461c65)",
    minHeight: "100vh",
    padding: "20px",
    color: "white",
    textAlign: "center"
  },

  title: {
    fontSize: "50px",
    marginBottom: "10px"
  },

  description: {
    fontSize: "20px",
    marginBottom: "20px"
  },

  tableWrapper: {
    maxHeight: "500px",
    overflowY: "auto",
    overflowX: "auto",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.05)",
    padding: "10px"
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    border: "1px solid rgba(255,255,255,0.3)"
  },

  headerRow: {
    backgroundColor: "#341e43",
    color: "white",
    zIndex: 2
  },

  cell: {
    border: "1px solid rgba(255,255,255,0.2)",
    padding: "12px",
    textAlign: "center"
  },

  footer: {
    marginTop: "20px",
    paddingBottom: "10px",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "20px"
  }
};

export default Result;