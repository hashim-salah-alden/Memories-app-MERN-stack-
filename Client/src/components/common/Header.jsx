import { NavLink } from "react-router-dom";
import useGetUser from "../../hooks/useGetUser.js";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/DropdownMenu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/NavigationMenu";
import { navigationMenuTriggerStyle } from "../ui/NavigationMenu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/UserAvatar";
import { ModeToggle } from "./mode-toggle.jsx";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../store/theme//themeSlice.js";

const navLinks = ["home"];
const authLinks = ["register", "login"];
const Header = () => {
  const { user,  logOut } = useGetUser();



  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center">
      <h1 className="grow text-3xl hidden md:block">
        Our |<span className="text-red-700 text-4xl font-bold"> Logo</span>
      </h1>
      <div>
        <NavigationMenu className={"my-5 w-3/5 flex   justify-start"}>
          <NavigationMenuList>
            {/* Navigations Links */}
            {navLinks.map((link) => {
              return (
                <NavigationMenuItem key={link}>
                  {/* react router link */}
                  <NavLink to={link} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <p className="capitalize">{link}</p>
                    </NavigationMenuLink>
                  </NavLink>
                </NavigationMenuItem>
              );
            })}

            {/* Auth Links */}
            {!user &&
              authLinks.map((link) => {
                return (
                  <NavigationMenuItem key={link}>
                    {/* react router link */}
                    <NavLink to={link} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        <p className="capitalize">{link}</p>
                      </NavigationMenuLink>
                    </NavLink>
                  </NavigationMenuItem>
                );
              })}

            <NavigationMenuItem>
              {/* dark mode toggle */}
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <button
                  onClick={() => {
                    dispatch(changeTheme());
                  }}
                >
                  <ModeToggle />
                </button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* User Actions*/}
            {user && (
              <NavigationMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>
                      <button onClick={() => logOut()}>Logout</button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Header;
