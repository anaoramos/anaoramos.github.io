import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
} from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  timelineItem: {
    marginBottom: theme.spacing(2),
  },
  timelineOpposite: {
    textAlign: "right",
  },
  timelineContent: {
    flex: 1,
  },
}));

const timelineData = [
  {
    date: "October, 2019",
    title: "Master's Degree in Medical Informatics, University of Minho",
    description: `I completed my dissertation, which led to the publication of a <a href="https://link.springer.com/chapter/10.1007/978-3-030-45697-9_43">paper</a>. This marked the culmination of my integrated master's degree in biomedical engineering with a final grade of 16/20.`,
  },
  {
    date: "June, 2018",
    title:
      "Research Intern, Bioengineering and Telemedicine Group, Polytechnic University of Madrid",
    description: `During my final year of the master's program, I had the opportunity to join a laboratory at the Polytechnic University of Madrid. I focused on the application of artificial intelligence in medical image analysis. I spent 6 months living in Madrid and working on this exciting research project.`,
  },
  {
    date: "September, 2017",
    title: "Bachelor's Degree in Biomedical Engineering, University of Minho",
    description: `After completing three years of study, I earned my bachelor's degree in biomedical engineering. Following this, I decided to pursue a master's degree in Medical Informatics.`,
  },
  {
    date: "September, 2014",
    title: "High School, Escola Secundária D. Afonso Sanches",
    description: `At the age of 18, I successfully completed my high school education with a final grade of 18/20. Subsequently, I enrolled in the integrated master's program in Biomedical Engineering at the University of Minho.`,
  },
];

const EducationInfo = () => {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      {timelineData.map((item, index) => (
        <TimelineItem key={index} className={classes.timelineItem}>
          <TimelineOppositeContent className={classes.timelineOpposite}>
            <Typography variant="body2" color="textSecondary">
              {item.date}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            {index !== timelineData.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent className={classes.timelineContent}>
            <Typography variant="body2" color="textSecondary">
              {item.title}
            </Typography>
            <Typography variant="body2">
              {" "}
              <span dangerouslySetInnerHTML={{ __html: item.description }} />
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default EducationInfo;
