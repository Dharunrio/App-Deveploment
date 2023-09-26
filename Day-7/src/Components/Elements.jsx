import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 2px solid rgba(200, 200, 200, 0.6);
  border-radius: 5px;
  padding: 0px 10px;
  transition: all 200ms ease-in-out;
  margin-bottom: 5px;

  &::placeholder {
    color: rgb(150, 150, 150);
  }


  &:focus {
    outline: none;
    border-bottom: 1px solid rgb(128, 191, 255);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  max-width: 150px;
  padding: 10px;
  margin-bottom : 15px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all 240ms ease-in-out;
  background: linear-gradient(
    58deg,
    rgb(83 48 186) 20%,
    rgb(223 225 228) 100% 

  );

  &:hover {
    filter: brightness(1.03);
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`;

export const BoldLink = styled.a`
  font-size: 12px;
  color: rgb(97, 103, 122);
  font-weight: 500;
  text-decoration: none;
  border-bottom: 1px dashed rgb(128, 191, 255);
  cursor: pointer;
`;

export const LineText = styled.p`
  font-size: 12px;
  color: rgba(150, 150, 150, 0.8);
  font-weight: 500;
`;

export const MutedLine = styled.p`
  font-size: 12px;
  color: rgba(150, 150, 150, 0.8);
  font-weight: 500;
  text-decoration: none;
  padding-bottom: 8px;
  padding-top: 8px;
  border-bottom: 1px dashed rgba(200, 200, 200, 0.8);
`;