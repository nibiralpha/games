import { MonthObject } from "@app-types/Games";

export function getCurrentMonthObject(): MonthObject {
  const today = new Date();

  const monthNumber = today.getMonth() + 1;

  const formatter = new Intl.DateTimeFormat("en-US", { month: "long" });
  const monthName = formatter.format(today).toLowerCase();

  return {
    month: monthNumber,
    name: monthName,
  };
}
