import { MonthObject } from "@app-types/Games";

interface MonthDateRange {
  fromDate: string;
  endDate: string;
  fromDateName: string;
  endDateName: string;
}

export function getCurrentMonthDateRange(): MonthDateRange {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth();

  const monthNumber = String(month + 1).padStart(2, "0");

  const fromDate = `${year}-${monthNumber}-01`;

  const lastDay = new Date(year, month + 1, 0).getDate();

  const endDate = `${year}-${monthNumber}-${String(lastDay).padStart(2, "0")}`;

  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
  });

  const monthName = formatter.format(today).toLowerCase();

  return {
    fromDate,
    endDate,
    fromDateName: monthName,
    endDateName: monthName,
  };
}

export function formatGameReleaseDate(dateString: string): string {
  if (!dateString) return "";

  const date = new Date(`${dateString}T00:00:00`);

  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
  });

  return formatter.format(date);
}
