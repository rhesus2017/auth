import styled from "styled-components";
import iconArrowDown from "../assets/svg/iconArrowDown.svg";

interface SelectProps {
  value: string;
  placeholder: "연도" | "월";
  options: string[];
  onChange: (value: string) => void;
}

const Select = (props: SelectProps) => {
  const { value, placeholder, options, onChange } = props;

  return (
    <SelectStyled
      value={value}
      onChange={(event) => onChange(event.target.value)}
      required
    >
      <option disabled selected value="" hidden>
        {placeholder}
      </option>
      {options.map((item) => (
        <option value={item}>{item}</option>
      ))}
    </SelectStyled>
  );
};

export default Select;

const SelectStyled = styled.select`
  flex-grow: 1;
  padding: 13.5px 16px;
  border-radius: 6px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.border.normal};
  background: url(${iconArrowDown}) no-repeat center right 14px;

  option[value=""][disabled] {
    display: none;
  }

  option {
    color: ${({ theme }) => theme.border.active};
  }

  &:required:invalid {
    color: ${({ theme }) => theme.font.hint};
  }
`;
