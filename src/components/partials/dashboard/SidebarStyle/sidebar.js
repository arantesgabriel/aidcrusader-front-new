import React, { useEffect, useState } from "react";
// Import selectors & action from setting store
import * as SettingSelector from "../../../../store/setting/selectors";

// Redux Selector / Action
import { useSelector } from "react-redux";

//components
import Verticalnav from "./verticalnav";
import Scrollbar from "smooth-scrollbar";

import { Link } from "react-router-dom";

import logoSidebar from "../../../../assets/images/svgs/logo-line.svg";
import logoMiniSidebar from "../../../../assets/images/svgs/aidcrusader.svg";

const Sidebar = () => {
  const sidebarType = useSelector(SettingSelector.sidebar_type); // array
  const sidebarMenuStyle = useSelector(SettingSelector.sidebar_menu_style);
  const [logoSrc, setLogoSrc] = useState(logoSidebar);
  
  useEffect(() => {
    Scrollbar.init(document.querySelector(".data-scrollbar"));

    const handleResize = () => {
      const sidebarResponsive = document.querySelector(
        '[data-sidebar="responsive"]'
      );

      if (window.innerWidth < 1025) {
        if (sidebarResponsive && !sidebarResponsive.classList.contains("sidebar-mini")) {
          setLogoSrc(logoMiniSidebar);
          sidebarResponsive.classList.add("sidebar-mini", "on-resize");
        }
      } else {
        setLogoSrc(logoSidebar);
        if (
          sidebarResponsive &&
          sidebarResponsive.classList.contains("sidebar-mini") &&
          sidebarResponsive.classList.contains("on-resize")
        ) {
          sidebarResponsive.classList.remove("sidebar-mini", "on-resize");
        }
      }
    };

    // Executa uma vez ao montar
    handleResize();

    // Adiciona o listener de resize
    window.addEventListener("resize", handleResize);

    // Remove ao desmontar
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const minisidebar = () => {
    const sidebar = document.getElementsByTagName("ASIDE")[0];
    sidebar.classList.toggle("sidebar-mini");
    
    // Altera o logo conforme o estado da sidebar
    if (sidebar.classList.contains("sidebar-mini")) {
      setLogoSrc(logoMiniSidebar);
    } else {
      setLogoSrc(logoSidebar);
    }
  };

  return (
    <>
      <aside
        className={`${sidebarType.join(
          " "
        )} ${sidebarMenuStyle} sidebar sidebar-default sidebar-base navs-rounded-all`}
        id="first-tour"
        data-toggle="main-sidebar"
        data-sidebar="responsive"
      >
        <div className="sidebar-header d-flex align-items-center justify-content-start position-relative">
          <Link
            to="/"
            className="d-flex align-items-center gap-2 iq-header-logo"
          >
            <img
              src={logoSrc}
              style={{ width: "250px" }}
              className="signin-img img-fluid mb-0 rounded-3"
              alt="images"
            />
          </Link>
          <div
            className="sidebar-toggle"
            data-toggle="sidebar"
            data-active="true"
            onClick={minisidebar}
          >
            <span className="menu-btn d-inline-block is-active justify-content-center">
              <i className="right-icon material-symbols-outlined icon-rtl">
                chevron_left
              </i>
            </span>
          </div>
        </div>
        <div className="sidebar-body pt-0 data-scrollbar">
          <div className="sidebar-list">
            <Verticalnav />
          </div>
        </div>
        <div className="sidebar-footer"></div>
      </aside>
    </>
  );
};

export default Sidebar;