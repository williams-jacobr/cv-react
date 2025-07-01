export interface GitContributionsGraphQlResponse {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        totalContributions: number,
        weeks: {
          contributionDays: GitContributionsGraphQlContributionDays[],
        }[]
      }
    }
  }
}

export interface GitContributionsGraphQlContributionDays {
  contributionCount: number;
  date: string;
}
