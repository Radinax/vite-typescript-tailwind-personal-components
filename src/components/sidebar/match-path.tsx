import { useLocation, useResolvedPath } from "react-router-dom";

interface MatchPathProps {
  caseSensitive?: boolean;
  children(current: boolean): JSX.Element;
  end?: boolean;
  to: string;
}

export const MatchPath: React.FC<MatchPathProps> = ({
  caseSensitive = false,
  children,
  end = false,
  to,
}) => {
  const location = useLocation();
  const path = useResolvedPath(to);

  let locationPathname = location.pathname;
  let toPathname = path.pathname;

  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    toPathname = toPathname.toLowerCase();
  }

  const isActive =
    locationPathname === toPathname ||
    (!end &&
      locationPathname.startsWith(toPathname) &&
      locationPathname.charAt(toPathname.length) === "/");

  return children(Boolean(isActive));
};
