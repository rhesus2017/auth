import styled from "styled-components";

interface RadioProps {
  type: "강아지" | "고양이";
  value: string;
  icon: string;
  onClick: () => void;
}

const Radio = (props: RadioProps) => {
  const { type, value, icon, onClick } = props;

  return (
    <RadioStyled className={`${type === value}`} onClick={onClick}>
      <div>
        <img src={icon} alt={type} />
        <p>{type}</p>
      </div>
    </RadioStyled>
  );
};

export default Radio;

const RadioStyled = styled.div`
  display: flex;
  flex-grow: 1;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.border.normal};
  padding: 16px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &.true {
    border: 1px solid ${({ theme }) => theme.border.active};
    transition: 0.3s;
  }

  div {
    text-align: center;

    img {
      margin-bottom: 8px;
    }

    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: -0.02em;
      color: ${({ theme }) => theme.font.primary};
    }
  }
`;
