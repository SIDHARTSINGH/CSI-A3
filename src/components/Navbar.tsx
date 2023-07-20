import React, { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon } from "@chakra-ui/icons";
import { MdSunny } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuthStore from "../store";

const Links = ["Home", "About", "Contact Us"];

const NavLink = ({ children: label }: { children: ReactNode }) => {
  const linkTo =
    label === "Home"
      ? ""
      : label === "About"
      ? "about"
      : label === "Contact Us"
      ? "contact-us"
      : label;

  return (
    <Text
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      {/* Using react-router-dom link to avoid rerender on same page reload */}
      <Link to={"/" + linkTo}>{label}</Link>
    </Text>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  const setLoggedOut = useAuthStore((s) => s.setLoggedOut);
  const handleLogout = () => {
    console.log("logging out");
    setLoggedOut();
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box px={5}>
              <Text as={"b"} fontSize={"xl"}>
                ZOROO
              </Text>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} px={5}>
            <Box px={5}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <MdSunny />}
              </Button>
            </Box>
            <Menu>
              <MenuButton>
                {isLoggedIn ? (
                  <Avatar
                    size="sm"
                    name="Sidhart Singh"
                    src="https://bit.ly/broken-link"
                  />
                ) : (
                  <Avatar size="sm" />
                )}
              </MenuButton>

              <MenuList>
                {isLoggedIn ? (
                  <React.Fragment>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>Settings</MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <MenuItem as={Link} to={"/sign-up"}>
                      Sign Up
                    </MenuItem>
                    <MenuDivider />
                    {/* 
                      // Only the text acts as a Link not the whole menu item :
                      <MenuItem>
                        <Link to={"/sign-in"}>Sign In</Link>
                      </MenuItem> 
                      // So, use menuitem as a Link using 'as' prop 
                    */}
                    <MenuItem as={Link} to={"/sign-in"}>
                      Sign In
                    </MenuItem>
                  </React.Fragment>
                )}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
