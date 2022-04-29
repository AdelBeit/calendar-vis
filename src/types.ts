type Activity = {
  title: string;
  start: string;
  end: string;
};

interface DayProps {
  activities: Activity[];
}

export type { DayProps, Activity };
