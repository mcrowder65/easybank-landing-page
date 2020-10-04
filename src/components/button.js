import styled from "@emotion/styled"
const Button = styled.button`
  background: linear-gradient(135deg, #33d35e 0%, #2ab6d9 99.58%);
  border: none;
  color: white;
  border-radius: 22px;
  width: 163px;
  height: 44px;
  font-size: 14px;
  line-height: 28px;
  outline: none;
  :hover {
    opacity: 0.7;
  }
  :active {
    transform: translateY(2px);
  }
`

export default Button
