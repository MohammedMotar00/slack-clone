import React from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InserCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Sidebar() {
  const [channels, loading, error] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth());

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Motars SLACK-CLONE</h2>
          <h3>
            <FiberManualRecordIcon />
            {user.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      <OptionContainer>
        <div>
          <SidebarOption Icon={InserCommentIcon} title="Threads" />
          <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
          <SidebarOption Icon={DraftIcon} title="Saved items" />
          <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
          <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
          <SidebarOption Icon={AppsIcon} title="Apps" />
          <SidebarOption Icon={FileCopyIcon} title="File browser" />
          <SidebarOption Icon={ExpandLessIcon} title="Show less" />
          <hr />
          <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
          <hr />
          <SidebarOption Icon={AddIcon} title="Add channel" addChannelOption />
          {channels?.docs.map((doc) => (
            <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
          ))}
        </div>

        <Footer>
          <h3>This is Slack clone app and I will use it for my portfolio</h3>
        </Footer>
      </OptionContainer>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  margin-top: 60px;
  overflow-y: auto;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding-bottom: 10px;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    background-color: white;
    border-radius: 50%;
    font-size: 18px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;

const Footer = styled.div`
  padding: 20px;

  h3 {
    font-weight: 600;
    text-align: center;
    margin-bottom: 25px;
  }
`;

const OptionContainer = styled.div`
  height: calc(100vh - 138px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
