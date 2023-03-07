import styled from "styled-components";

export default function App() {
  return (
    <Iphone11ProContainer>
      <h1>Teste</h1>
    </Iphone11ProContainer>
  );
}

const Iphone11ProContainer = styled.div`
  width: 375px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;