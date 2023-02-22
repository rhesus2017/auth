import styled from "styled-components";
import iconArrowDown from "../assets/svg/iconArrowDown.svg";

interface SelectProps {
  value: string;
  placeholder: "연도" | "월";
  options: string[];
  year?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = (props: SelectProps) => {
  const { value, placeholder, options, year, onChange } = props;
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const sliceOptions =
    Number(year) === currentYear
      ? options.filter((item) => Number(item) <= currentMonth + 1)
      : options;

  return (
    <SelectStyled value={value} onChange={onChange} required>
      <option disabled selected value="" hidden>
        {placeholder}
      </option>
      {sliceOptions.map((item) => (
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

  &:required:invalid {
    color: ${({ theme }) => theme.font.hint};
  }
`;
