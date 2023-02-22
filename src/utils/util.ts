import dayjs from "dayjs";

export const getPhoneNumberWithDash = (phoneNumber: string) => {
  return phoneNumber.replace(
    /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,
    "$1-$2-$3"
  );
};

export const getAgeFromBirthDate = (birth_date: string) => {
  const year = dayjs().diff(birth_date, "year");
  const month = dayjs().diff(birth_date, "month") % 12;

  return `${year ? `${year}년` : ""} ${month ? `${month}개월` : ""}`;
};
