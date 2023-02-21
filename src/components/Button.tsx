import styled, { css } from "styled-components";

type Type = "primary" | "secondary";
type Size = "large" | "small";

interface ButtonProps {
  type: Type;
  size: Size;
  label: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  const { type, size, label, onClick, disabled = false } = props;

  return (
    <ButtonStyle
      buttonType={type}
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

const colorStyle = css<{ buttonType: Type }>`
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

const ButtonStyle = styled.button<{ buttonType: Type; size: Size }>`
  cursor: pointer;

  ${sizeStyle};

  ${colorStyle};

  &:disabled {
    background: ${({ theme }) => theme.gradient.gray.gray02};
    color: ${({ theme }) => theme.font.hint};
    cursor: default;
  }
`;
