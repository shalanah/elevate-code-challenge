export const subjects = ["math", "reading", "speaking", "writing"] as const;

export type UserStats = {
  current_streak_in_days: number;
  total_sessions_played: number;
  skills: {
    [k in (typeof subjects)[number]]: {
      current: number;
      max: number;
      level: string;
    };
  };
};

export type User = {
  id: string | number;
  first_name: string | null;
  last_name: string | null;
  image: string | null;
  stats: UserStats;
};

export const user_empty: User = {
  id: 0,
  first_name: null,
  last_name: null,
  image: null,
  stats: {
    current_streak_in_days: 0,
    total_sessions_played: 0,
    skills: {
      math: {
        current: 0,
        max: 0,
        level: "",
      },
      reading: {
        current: 0,
        max: 0,
        level: "",
      },
      speaking: {
        current: 0,
        max: 0,
        level: "",
      },
      writing: {
        current: 0,
        max: 0,
        level: "",
      },
    },
  },
};

// export const dummy_users = [
//   {
//     id: 1,
//     first_name: "Shalanah",
//     last_name: "Dawson",
//     image: null,
//     stats: {
//       current_streak_in_days: 5,
//       total_sessions_played: 10,
//       skills: {
//         math: {
//           current: 18,
//           max: 20,
//           level: 10, // would like to know what this means
//         },
//         reading: {
//           current: 12,
//           max: 20,
//           level: 10,
//         },
//         speaking: {
//           current: 12,
//           max: 20,
//           level: 10,
//         },
//         writing: {
//           current: 15,
//           max: 20,
//           level: 10,
//         },
//       },
//     },
//   },
// ];
