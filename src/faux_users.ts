export type UserStats = {
  current_streak_in_days: number;
  total_sessions_played: number;
  math: {
    current: number;
    max: number;
    level: number;
  };
  reading: {
    current: number;
    max: number;
    level: number;
  };
  speaking: {
    current: number;
    max: number;
    level: number;
  };
  writing: {
    current: number;
    max: number;
    level: number;
  };
};

export const subjects = ["math", "reading", "speaking", "writing"] as const;

export const users = [
  {
    first_name: "Shalanah",
    last_name: "Dawson",
    image: null,
    stats: {
      current_streak_in_days: 5,
      total_sessions_played: 10,
      math: {
        current: 18,
        max: 20,
        level: 10, // would like to know what this means
      },
      reading: {
        current: 12,
        max: 20,
        level: 10,
      },
      speaking: {
        current: 12,
        max: 20,
        level: 10,
      },
      writing: {
        current: 15,
        max: 20,
        level: 10,
      },
    },
  },
];
