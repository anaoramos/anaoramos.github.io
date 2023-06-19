import React from "react";
import Typography from "@material-ui/core/Typography";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";

export const EducationInfo = () => {
  return (
    <React.Fragment>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent style={{ fontSize: "small" }}>
            <Typography color="textSecondary" style={{ fontSize: "small" }}>
              October, 2020
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent style={{ fontSize: "small" }}>
            <Typography style={{ fontSize: "small" }}>
              <a
                href={
                  "https://www.coursera.org/account/accomplishments/certificate/SRVTMHS229PJ"
                }
              >
                Principles of Secure Coding
              </a>
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent style={{ fontSize: "small" }}>
            <Typography color="textSecondary" style={{ fontSize: "small" }}>
              June, 2020
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent style={{ fontSize: "small" }}>
            <Typography style={{ fontSize: "small" }}>
              <a
                href={
                  "https://www.coursera.org/account/accomplishments/certificate/9A4CD99FBXRF"
                }
              >
                Server-side Development with NodeJS, Express and MongoDB
              </a>
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent style={{ fontSize: "small" }}>
            <Typography color="textSecondary" style={{ fontSize: "small" }}>
              October, 2019
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography style={{ fontSize: "small" }}>
              At the end of the academic year, I finished my dissertation from
              which I was able to publish a{" "}
              <a href={"https://lnkd.in/dSytZF8"}>paper</a> and finished my
              integrated master's degree in biomedical engineering with a
              classification of 16/20.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent style={{ fontSize: "small" }}>
            <Typography color="textSecondary" style={{ fontSize: "small" }}>
              June, 2018
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography style={{ fontSize: "small" }}>
              In my final master's year, I applied to a laboratory at the{" "}
              <b>Polytechnic University of Madrid</b> in the field of artificial
              intelligence for medical images. The application was accepted and
              I lived in Madrid for 6 months.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent style={{ fontSize: "small" }}>
            <Typography color="textSecondary" style={{ fontSize: "small" }}>
              May, 2018
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent style={{ fontSize: "small" }}>
            <Typography style={{ fontSize: "small" }}>
              English B1 Course – BabeliUM Centro de Línguas
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent style={{ fontSize: "small" }}>
            <Typography color="textSecondary" style={{ fontSize: "small" }}>
              September, 2017
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography style={{ fontSize: "small" }}>
              After three years, I finished my degree and then started a{" "}
              <b>master's in Medical Informatics</b>.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent style={{ fontSize: "small" }}>
            <Typography color="textSecondary" style={{ fontSize: "small" }}>
              January, 2015
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography style={{ fontSize: "small" }}>
              CAD Workshop: SolidWorks software – University of Minho
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent style={{ fontSize: "small" }}>
            <Typography color="textSecondary" style={{ fontSize: "small" }}>
              September, 2014
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography style={{ fontSize: "small" }}>
              Back in September 2014 when I was 18 years old, I finished high
              school with a classification of 18/20 and went to the{" "}
              <b>University of Minho</b> to begin an integrated master's degree
              in <b>Biomedical Engineering</b>.{" "}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
  );
};
