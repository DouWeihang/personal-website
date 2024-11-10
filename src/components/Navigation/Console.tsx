"use client";

import {
  UserOutlined,
  CameraOutlined,
  GlobalOutlined,
  TrophyOutlined,
  MessageOutlined,
  SettingOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import ICON_SIGN_IN from "@/assets/panda.svg";
import { usePathname, useRouter } from "next/navigation";

const MENU = [
  {
    title: "站点信息",
    path: "/console",
    icon: <GlobalOutlined />,
  },
  {
    title: "个人信息",
    path: "/console/individual",
    icon: <UserOutlined />,
  },
  {
    title: "个人生活",
    path: "/console/post/life",
    icon: <CameraOutlined />,
  },
  {
    title: "学习成果",
    path: "/console/post/achievements",
    icon: <TrophyOutlined />,
  },
  {
    title: "学习笔记",
    path: "/console/post/notes",
    icon: <FileTextOutlined />,
  },
  {
    title: "联系消息",
    path: "/console/contact",
    icon: <MessageOutlined />,
  },
  {
    title: "其他",
    path: "/console/other",
    icon: <SettingOutlined />,
  },
];

/**
 * @name ConsoleNavigation 导航-控制台
 */
const Console = () => {
  const router = useRouter();
  const path = usePathname()!;

  function onChange(e: React.MouseEvent<HTMLUListElement>) {
    const click = e?.target as HTMLElement;
    const target = click.closest("[data-path]") as HTMLElement;
    if (target?.dataset?.path) {
      router.push(target.dataset.path);
    }
  }

  const routePath = path.split("/").splice(0, 4).join("/");

  return (
    <aside className="w-[250px] h-full px-3 rounded-xl overflow-hidden shadow-custom bg-white sticky top-14">
      <Image
        alt="#"
        priority
        width={60}
        src={ICON_SIGN_IN}
        className="mx-auto py-5"
      />
      <hr className="m-auto mb-2 border border-slate-50" />
      <ul onClick={onChange}>
        {MENU.map((v) => (
          <li
            key={v.path}
            data-path={v.path}
            className={`
                  ${
                    routePath === v.path
                      ? "bg-black text-white"
                      : "hover:bg-black/5"
                  }
              flex items-center h-9 px-2 mt-1 mb-2
              text-sm cursor-pointer rounded-xl leading-9
            `}
          >
            {v.icon} &nbsp; {v.title}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Console;
