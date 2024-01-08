import React, { useEffect, useState } from "react";
import { logo } from "../components/assets/index";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
  Text,
  Grid as Divider,
  LinkBox,
  Flex,
  Spacer,
  Image,
  useToast,
  Toast,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { BsFillLightningFill } from "react-icons/bs";
import { ExternalLinkIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { LuHelpCircle } from "react-icons/lu";
import decode from "jwt-decode";
import { googleLogout } from "@react-oauth/google";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();
  const history = useNavigate();
  const Toast = useToast();

  const isAuthPage = location.pathname === "/auth";

  const logout = () => {
    try {
      localStorage.clear();
      setUser(null);
      googleLogout();
      Toast({
        title: "logged out",
        description: "successfully Logged out",
        duration: 5000,
        isClosable: true,
        status: "success",
        position: "top",
      });
      history("/auth");
    } catch (error) {
      Toast({
        title: "Logout Failed",
        description: "An error occurred while logging out, try again later",
        duration: 5000,
        isClosable: true,
        status: "error",
        position: "top",
      });
    }
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
  }, [location]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("profile"));
    console.log("storedUser", storedUser);
    setUser(storedUser);
  }, []);

  const handleGetHelpClick = () => {
    const subject = "Need Help";
    const mailtoLink = `mailto:myemail@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=Please describe your issue or question here...`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      {!isAuthPage && (
        <LinkBox
          as="header"
          px={{ base: 4, sm: 8 }}
          py={4}
          bg="#101010"
          borderBottom="1px"
          borderColor="#009e66"
        >
          <Flex justify="between" align="center">
            <Link to="/">
              <Image src={logo} h="35" />
            </Link>
            <Spacer />
            {user ? (
              <>
                <Flex display={{ base: "none", md: "flex", sm: "flex" }}>
                  <NavLink to="/upgrade">
                    <Button
                      leftIcon={<BsFillLightningFill />}
                      bg="transparent"
                      color="#fff"
                      _hover={{ bg: "transparent" }}
                    >
                      Upgrade
                    </Button>
                  </NavLink>
                </Flex>
                <Flex display={{ base: "none", md: "flex", sm: "flex" }}>
                  <NavLink>
                    <Button
                      leftIcon={<LuHelpCircle />}
                      bg="transparent"
                      color="#fff"
                      _hover={{ bg: "transparent" }}
                      onClick={handleGetHelpClick}
                    >
                      Help
                    </Button>
                  </NavLink>
                </Flex>

                {!isAuthPage && (
                  <Menu>
                    <MenuButton
                      bg="transparent"
                      _hover={{ bg: "transparent" }}
                      as={Button}
                      leftIcon={
                        <Avatar
                          size="sm"
                          bg="#009e66"
                          name={user?.username?.charAt(0)}
                        />
                      }
                    ></MenuButton>
                    <MenuList>
                      <Divider my={2} opacity="0.6" />
                      <MenuItem display="block">
                        <Text fontSize="sm" fontWeight="bold">
                          {user?.username}
                        </Text>
                        <Text fontSize="sm">{user?.email}</Text>
                      </MenuItem>
                      <NavLink fontSize="sm" to="/create-post">
                        <MenuItem>Generate an Image</MenuItem>
                      </NavLink>
                      <NavLink fontSize="sm">
                        <MenuItem type="email" onClick={handleGetHelpClick}>
                          Get Help
                        </MenuItem>
                      </NavLink>
                      <NavLink to="/upgrade" fontSize="sm">
                        <MenuItem>Billing</MenuItem>
                      </NavLink>
                      <Button
                        as="button"
                        fontSize="sm"
                        onClick={logout}
                        bg="transparent"
                        _hover={{ bg: "transparent" }}
                      >
                        Logout
                      </Button>
                    </MenuList>
                  </Menu>
                )}
              </>
            ) : (
              <>
                {!isAuthPage && (
                  <NavLink to="/auth">
                    <Button
                      as="button"
                      bg="transparent"
                      border="1px solid #009e66"
                      color="#f0f0f0"
                      _hover={{ bg: "transparent" }}
                      borderRadius="none"
                      rightIcon={<ExternalLinkIcon size="sm" />}
                    >
                      Log in
                    </Button>
                  </NavLink>
                )}
              </>
            )}
          </Flex>
        </LinkBox>
      )}
    </>
  );
};

export default Navbar;
