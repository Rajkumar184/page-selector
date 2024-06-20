import React from "react";
import PageSelector from "./PageSelector";
import { Layout } from "antd";

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content>
        <PageSelector />
      </Content>
    </Layout>
  );
}

export default App;
