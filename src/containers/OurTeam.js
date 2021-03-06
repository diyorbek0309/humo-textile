import { Container } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/extra/Header";
import classes from "../components/our-team/OurTeam.css";
import OurTeamGallery from "../components/our-team/OurTeamGallery";
import { ourTeamDataUz, ourTeamDataRu } from "../data";
import SectionTitle from "../components/extra/SectionTitle";

function OurTeam() {
  let lang = useSelector((state) => state.language);

  let ourTeamData;
  if (lang === "uz") {
    ourTeamData = { ...ourTeamDataUz };
  } else {
    ourTeamData = { ...ourTeamDataRu };
  }

  return (
    <div className={classes.OurTeamContainer}>
      <Header header={ourTeamData.header} />
      <Container maxWidth="lg" className={classes.OurTeamWrap}>
        <div className={classes.wrapper}>
          <div className={classes.our_team}>
            {ourTeamData.members.map((member, index) => (
              <div className={classes.team_member} key={index}>
                <div className={classes.left}>
                  <div className={classes.member_img}>
                    <img src={member.image} alt="Jamoaviy Surat" />
                  </div>
                  <h3>{member.firstName + " " + member.lastName}</h3>
                  <span>{member.position}</span>
                </div>
                <div className={classes.DescriptionWrap}>
                  {member.description.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <SectionTitle title={ourTeamData.sectionTitle} />
        <OurTeamGallery />
      </Container>
    </div>
  );
}

export default OurTeam;
