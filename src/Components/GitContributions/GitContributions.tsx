import {useEffect, useState} from 'react';
import {graphql} from "@octokit/graphql";
import {GitContributionsGraphQlResponse} from './GitContributions.d';
import styles from './GitContributions.module.css';

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${process.env.REACT_PUBLIC_GITHUB_TOKEN}`,
  },
});

const GitContributions = function () {
  const [data, setData] = useState<GitContributionsGraphQlResponse>();

  useEffect(() => {
    graphqlWithAuth<GitContributionsGraphQlResponse>({
      query: `
      query($userName: String!) {
        user(login: $userName){
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }`,
      userName: 'williams-jacobr'
    }).then(response => setData(response)).catch(console.error);
  }, []);

  useEffect(() => console.log('data', data), [data]);

  if (!data) return false;

  return (
    <div className={styles.year}>
      {data.user.contributionsCollection.contributionCalendar.weeks.map(({contributionDays}, index) => (
        <div key={`week-${index + 1}`} className={styles.week}>
          {contributionDays.map(({contributionCount, date}) => (
            <div key={date} title={date} className={styles.date}>{contributionCount}</div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default GitContributions;
