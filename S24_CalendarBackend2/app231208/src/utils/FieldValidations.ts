import moment from "moment";

export const isDate = (value: string) => {
  if (!value) {
    return false;
  }

  const dateFormat = "YYYY/MM/DD";
  const date = moment(value, dateFormat);
  return date.isValid();
};
