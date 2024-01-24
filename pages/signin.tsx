"use client";

import type { MouseEvent } from "react";

import { Form, Input, Button } from "antd";
import { useLazyQuery } from "@apollo/client";
import { graphql } from "generated/gql";

const signInQueryDocument = graphql(/* GraphQL */ `
  query signInQuery($username: String!, $password: String!) {
    signIn(username: $username, password: $password) {
      token
      user {
        ...UserItem
      }
    }
  }
`);

const onGetRoundedRandom = () => {
  let rounded = "";

  for (let i = 0; i < 8; i++) {
    const resullt = Math.ceil(Math.random() * 50);

    rounded += `${resullt + 40}% `;
    i === 3 && (rounded += "/ ");
  }

  return rounded.trim();
};
type SignInProps = { rounded: string[] };

const SignIn: React.FC<SignInProps> = ({ rounded }) => {
  const [signInQuery] = useLazyQuery(signInQueryDocument);
  // console.log(props);
  // onGetRoundedRandom();
  const [form] = Form.useForm();

  const onSubmit = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    form.validateFields().then((val) => {
      console.log("kk", val);

      signInQuery({ variables: val }).then(({ data }) => {
        console.log(data);
      });
    });
  };

  return (
    <main className="flex h-screen items-center justify-center bg-gray-c1000">
      <div
        style={{ borderRadius: rounded[0] }}
        className="signin-container relative flex h-[380px] w-[380px] items-center justify-center transition-all duration-700 will-change-[border-radius,transform] before:absolute before:left-20 before:top-16 before:h-9 before:w-9 before:rounded-full before:bg-white before:opacity-70 before:content-[''] after:absolute after:left-28 after:top-[100px] after:h-4 after:w-4 after:rounded-full after:bg-white after:opacity-70 after:content-['']"
      >
        <Form form={form} className="flex flex-1 flex-col items-center px-16 pt-6">
          <header className="mb-5 text-4xl font-bold tracking-widest">登录</header>

          <Form.Item
            name="username"
            rules={[{ required: true, message: "账号内容不可为空" }]}
            className="signin-input relative mb-8 w-full rounded-full px-1.5 before:absolute before:left-1/2 before:top-2 before:h-1 before:w-1/2 before:-translate-x-1/2 before:rounded-full before:bg-white/50 before:content-['']"
          >
            <Input autoComplete="off" className="py-2.5 text-sm" size="large" allowClear bordered={false} placeholder="手机号码 / 邮箱" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "密码不可为空" }]}
            className="signin-input relative mb-8 w-full rounded-full px-1.5 before:absolute before:left-1/2 before:top-2 before:h-1 before:w-1/2 before:-translate-x-1/2 before:rounded-full before:bg-white/50 before:content-['']"
          >
            <Input.Password size="large" allowClear bordered={false} placeholder="大小写" className="py-2.5 text-sm" />
          </Form.Item>

          <Button
            size="large"
            type="primary"
            danger
            onClick={onSubmit}
            className="relative w-[120px] rounded-full bg-[#ff0f5b] duration-500 before:absolute before:left-1/2 before:top-1 before:h-1 before:w-1/2 before:-translate-x-1/2 before:rounded-full before:bg-white/30 before:content-[''] hover:w-36"
          >
            登录
          </Button>
        </Form>
      </div>

      <div
        style={{ borderRadius: rounded[1] }}
        className="forget relative flex h-[120px] w-[120px] items-center justify-center bg-[#c61dff] tracking-widest transition-all duration-1000 will-change-[border-radius,transform] before:absolute before:left-7 before:top-4 before:h-5 before:w-5 before:rounded-full before:bg-white/40 before:content-['']"
      >
        <span className="break-words text-sm text-white">忘记密码</span>
      </div>

      <div
        style={{ borderRadius: rounded[2] }}
        className="sign-up relative flex h-20 w-20 items-center justify-center bg-[#01b4ff] tracking-widest transition-all duration-700 will-change-[border-radius,transform] before:absolute before:left-6 before:top-3 before:h-4 before:w-4 before:rounded-full before:bg-white/40 before:content-['']"
      >
        <span className="break-words text-sm text-white">注册</span>
      </div>

      <style global jsx>{`
        .signin-container {
          box-shadow:
            inset 20px 20px 20px rgba(0, 0, 0, 0.05),
            25px 35px 20px rgba(0, 0, 0, 0.05),
            25px 30px 30px rgba(0, 0, 0, 0.05),
            inset -20px -20px 25px rgba(255, 255, 255, 0.9);
        }

        .signin-container:hover {
          border-radius: ${rounded[3]} !important;
        }

        .forget {
          box-shadow:
            inset 10px 10px 10px rgba(190, 1, 254, 0.05),
            15px 25px 10px rgba(190, 1, 254, 0.1),
            15px 20px 20px rgba(190, 1, 254, 0.1),
            inset -10px -10px 15px rgba(255, 255, 255, 0.5);
        }

        .forget:hover {
          border-radius: ${rounded[4]} !important;
        }

        .sign-up {
          box-shadow:
            inset 10px 10px 10px rgba(1, 180, 255, 0.05),
            15px 25px 10px rgba(1, 180, 255, 0.1),
            15px 20px 20px rgba(1, 180, 255, 0.1),
            inset -10px -10px 15px rgba(255, 255, 255, 0.5);
        }

        .sign-up:hover {
          border-radius: ${rounded[5]} !important;
        }
      `}</style>
    </main>
  );
};

export default SignIn;

export async function getServerSideProps() {
  const rounded: Array<string> = [];

  for (let i = 0; i < 6; i++) {
    rounded.push(onGetRoundedRandom());
  }

  return {
    props: { rounded }
  };
}
