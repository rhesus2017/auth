import styled from "styled-components";

interface RadioProps {
  select: string[];
  value: string;
  icon: string[];
  onClick: (value: string) => void;
}

const Radio = (props: RadioProps) => {
  const { select, value, icon, onClick } = props;

  return (
    <RadioStyled>
      {select.map((item, index) => {
        return (
          <div
            className={`radio ${item === value}`}
            onClick={() => onClick(item)}
          >
            <div>
              <img src={icon[index]} alt={item} />
              <p>{item}</p>
            </div>
          </div>
        );
      })}
    </RadioStyled>
  );
};

export default Radio;

const RadioStyled = styled.div`
  display: flex;
  gap: 8px;

  .radio {
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
  }
`;
