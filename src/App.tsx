import React from "react";
import { Container, Wrapper } from "./components";
import { Header, Product } from "./modules";

function App() {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Product />
      </Wrapper>
    </Container>
  );
}

export default App;
