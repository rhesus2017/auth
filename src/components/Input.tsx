import styled from "styled-components";

interface InputProps {
  type: "default" | "password";
  inputType: "email" | "password" | "tel" | "text";
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const Input = (props: InputProps) => {
  const { type, inputType, value, placeholder, onChange } = props;

  return (
    <InputStyled>
      <input
        type={inputType}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
      {type === "password" && (
        <div
          className="img"
          onClick={() => setPasswordVisible((state) => !state)}
        >
          {passwordVisible ? (

          ) : (
						
          )}
        </div>
      )}
    </InputStyled>
  );
};

export default Input;

const InputStyled = styled.div``;
