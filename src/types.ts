import React from "react";

type Activity = {
  title: string;
  start: string;
  end: string;
};

interface ActivityProps {
  activities: Activity[];
}

interface DayProps {
  weekDate: string;
  monthDate: number;
}

interface TileProps {
  children: React.ReactElement[] | React.ReactElement;
}

interface CalendarProps {
  children: React.ReactElement[] | React.ReactElement;
}

export type { DayProps, TileProps, CalendarProps, ActivityProps, Activity };
