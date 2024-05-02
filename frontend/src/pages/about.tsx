import Header from "@/components/Header";
import Layout from "@/components/Layout";
import React from "react";

const about = () => {
  return (
    <Layout>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <main className="main-content">
          <div
            style={{
              height: "100vh",
            }}
          >
            <iframe src="images/giphy.gif" width="100%" height="100%"></iframe>
          </div>
          <p></p>
        </main>
      </div>
    </Layout>
  );
};

export default about;
