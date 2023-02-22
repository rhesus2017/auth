import styled, { css } from "styled-components";

type ButtonType = "primary" | "secondary";
type Size = "large" | "small";

interface ButtonProps {
  buttonType: ButtonType;
  size: Size;
  label: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  const { buttonType, size, label, onClick, disabled = false } = props;

  return (
    <ButtonStyle
      buttonType={buttonType}
      size={size}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </ButtonStyle>
  );
};

export default Button;

const sizeStyle = css<{ size: Size }>`
  ${(props) =>
    props.size === "large"
      ? css`
          width: 343px;
          padding: 12px;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 500;
          line-height: 19px;
          letter-spacing: -0.02em;
        `
      : css`
          width: 196px;
          padding: 12px;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 500;
          line-height: 19px;
          letter-spacing: -0.02em;
        `};
`;

const typeStyle = css<{ buttonType: ButtonType }>`
  ${(props) =>
    props.buttonType === "primary"
      ? css`
          background: ${({ theme }) => theme.gradient.pink.pink07};
          color: ${({ theme }) => theme.font.pure};
          border: none;
        `
      : css`
          background: transparent;
          color: ${({ theme }) => theme.font.primary};
          border: 1px solid ${({ theme }) => theme.border.normal};
        `}
`;

const ButtonStyle = styled.button<{ buttonType: ButtonType; size: Size }>`
  cursor: pointer;

  ${sizeStyle};

  ${typeStyle};

  &:disabled {
    background: ${({ theme }) => theme.gradient.gray.gray02};
    color: ${({ theme }) => theme.font.hint};
    cursor: default;
  }
`;
