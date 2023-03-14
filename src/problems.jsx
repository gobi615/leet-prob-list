import { Fragment } from "react";

import ids from "./data/probs.json";
import problems from "./data/top_problems.json";

const Problems = () => {
  //   console.log(ids);
  //   console.log(problems);
  const probs_links = getLinks();
  console.log(probs_links.length);
  const leetcode_link = "https://leetcode.com/problems/";
  return (
    <div className="container">
      <table className="table  table-hover table-bordered text-start">
        <thead>
          <tr>
            <th>Ids</th>
            <th>Leetcode Id</th>
            <th>Difficulty</th>
            <th>Problem Link</th>
            <th style={{ width: "30%" }}>Tags</th>
          </tr>
        </thead>
        <tbody>
          {probs_links.map((p) => {
            return (
              <tr key={p.probs_id}>
                <td className="text-center">{p.probs_id}</td>
                <td className="text-center">{p.leet_probs_id}</td>
                <td className="text-center">
                  {p.details && p.details.difficulty}
                </td>
                <td className="fw-bold fs-6">
                  <a
                    target="_blank"
                    className="text-decoration-none"
                    href={p.details && leetcode_link + p.details.titleSlug}
                  >
                    {p.details && p.details.title}
                  </a>
                </td>
                <td>
                  {p.details &&
                    p.details.topicTags.map((t) => t.name + ",    ")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const getLinks = () => {
  let links = [];
  for (let i = 0; i < ids.length; i++) {
    let obj = { ...ids[i] };
    let prob = problems.data.pql.questions.filter(
      (p) => p.frontendQuestionId == obj.leet_probs_id
    )[0];
    obj = { ...obj, details: prob };
    links.push(obj);
  }
  return links;
};

export default Problems;
