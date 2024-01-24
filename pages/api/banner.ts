import { NextApiRequest, NextApiResponse } from "next";
import _ from "lodash";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  fetch("http://localhost:3030/banner")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      res.end(JSON.stringify({ code: 2000, msg: null, data }));
    })
    .catch((err) => {
      console.log(err);
      res.end(JSON.stringify({ code: 4000, msg: null, data: null }));
    });
};
