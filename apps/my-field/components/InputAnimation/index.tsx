import styled from "@emotion/styled";

const InputGroup = styled.div`
  position: relative;

  .input {
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 4px;
    outline: 2px solid #fff;
    background-color: transparent;
    transition: outline-color 250ms;

    &:focus {
      outline-color: #3c50eb;
    }
  }

  .label {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(10px, 10px);
    transform-origin: left;
    color: #fff;
    transition: transform 200ms;
  }

  .input:focus + .label,
  .input:valid + .label {
    transform: translate(0, -30px) scale(0.8);
  }
`;

export function InputAnimation({ label }) {
  return (
    <InputGroup>
      <input type="text" id="fname" className="input" required />
      <label htmlFor="fname" className="label">
        {label}
      </label>
    </InputGroup>
  );
}

export default InputAnimation;
