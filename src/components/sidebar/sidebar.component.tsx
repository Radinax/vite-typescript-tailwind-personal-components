import { MatchPath } from "./match-path";
import { HomeIcon, TagIcon } from "@heroicons/react/outline";
import cn from "classnames";
import { Link } from "react-router-dom";

type Links = {
  to: string;
  label: string;
  icon: React.FC<React.ComponentProps<"svg">>;
  children?:
    | {
        to: string;
        label: string;
        icon: React.FC<React.ComponentProps<"svg">>;
      }[]
    | null;
};

const linksUser: Links[] = [
  { to: "/", label: "Home", icon: HomeIcon },
  {
    to: "/cards",
    label: "Cards",
    icon: TagIcon,
  },
];

export interface SidebarProps {
  open?: boolean;
  setOpen?(value: boolean): void;
}

const Sidebar: React.FC<SidebarProps> = ({ setOpen }) => {
  return (
    <div className="w-20 fixed left-0 top-0 max-h-screen min-h-screen bg-secondary dark:bg-dark-secondary">
      {linksUser.map(({ to, label, icon: Icon }) => {
        return (
          <MatchPath key={to} to={to}>
            {(current) => (
              <Link
                to={to}
                onClick={() => setOpen?.(false)}
                aria-current={current ? "page" : undefined}
                className={cn(
                  current
                    ? "bg-secondary text-white"
                    : "text-brand-100 hover:bg-brand-800 hover:text-white",
                  "group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium",
                )}
              >
                <Icon
                  aria-hidden="true"
                  className={cn(
                    current
                      ? "text-white"
                      : "text-brand-300 group-hover:text-white",
                    "h-6 w-6",
                  )}
                />
                <span className="mt-2 text-center">{label}</span>
              </Link>
            )}
          </MatchPath>
        );
      })}
    </div>
  );
};

export default Sidebar;
