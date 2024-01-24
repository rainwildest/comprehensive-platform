import { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";
import path from "path";
import dayjs from "dayjs";
import formidable, { errors as formidableErrors } from "formidable";

export const config = {
  api: {
    bodyParser: false
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.method);

  // 拼接文件夹路径
  const dir = path.resolve(process.cwd(), `uploads/${dayjs().format("YYYY-MM-DD_HH")}`);

  fs.access(dir, fs.constants.F_OK, async (err) => {
    if (err) {
      try {
        // 创建文件夹
        fs.mkdirSync(dir, { recursive: true });
      } catch (err) {
        res.end(JSON.stringify({ code: 400, msg: null, data: null }));
        return;
      }
    }

    const form = formidable({ multiples: false, uploadDir: dir, keepExtensions: true });

    try {
      const [fields, files] = await form.parse(req);
      console.log("fields", fields);

      files.files?.forEach((file) => {
        console.log(file.mimetype, file.size, file.originalFilename, file.newFilename);
      });

      res.end(
        JSON.stringify({
          code: 200,
          msg: null,
          data: {
            files: files.files?.map((file) => file.newFilename)
          }
        })
      );
    } catch (err: any) {
      // example to check for a very specific error
      if (err.code === formidableErrors.maxFieldsExceeded) {
      }

      res.end(
        JSON.stringify({
          code: 400,
          msg: null,
          data: null
        })
      );
    }
  });
};
