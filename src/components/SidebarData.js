import React, { Component } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    link: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "My Songs",
    link: "/SongList",
    icon: <FaIcons.FaHeadphones />,
    cName: "nav-text",
  },
  {
    title: "My Playlists",
    link: "/dashboard",
    icon: <MdIcons.MdFeaturedPlayList />,
    cName: "nav-text",
  },
  {
    title: "About",
    link: "/info",
    icon: <FaIcons.FaInfoCircle />,
    cName: "nav-text",
  },
  {
    title: "Reach Us",
    link: "/contact",
    icon: <MdIcons.MdCall />,
    cName: "nav-text",
  },
  /* {
    title: "Sign Up",
    path: "/register",
    icon: <FaIcons.FaPencilAlt />,
    cName: "nav-text-mobile",
  },
  {
    title: "Log In",
    path: "/login",
    icon: <MdIcons.MdLogin />,
    cName: "nav-text-mobile",
  }, */
];
