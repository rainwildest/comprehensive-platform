import { Avatar } from "antd";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = (props) => (
  <div className="flex h-screen w-full overflow-hidden bg-white">
    <aside className="flex w-16 flex-col items-center justify-end px-2.5 py-4">
      <Avatar size="large" className="bg-primary">
        风
      </Avatar>
    </aside>
    <main className="flex-1 py-4 pr-4">
      <section className="relative h-full w-full rounded-3xl bg-neutral-100">{props.children}</section>
    </main>
  </div>
);

export default Layout;
