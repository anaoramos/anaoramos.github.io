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
    date: "August, 2021",
    title: "Software Engineer, Unity Software",
    description: `My main focus is to improve safety in the gaming environment. We utilize acoustic and semantic analysis techniques, leveraging Google Speech to Text, to gain valuable insights into the presence of toxic behavior within game voice chats. 
    This enables us to create a safer and more enjoyable gaming experience for all players involved. 
    I am actively involved in developing the API using Python and Django, as well as implementing and maintaining a customer dashboard using React and TypeScript.`,
  },
  {
    date: "October, 2020",
    title: "Full Stack Engineer, OTO Systems",
    description: `OTO Systems was a spin-off from SRI International that used artificial intelligence to analyze speech, processing millions of customer files to help companies, e.g. contact centers, to help unlock valuable data from voice interactions.
    As a software engineer, I built a sentiment analysis API and SDK using Python and Django. I also designed and implemented an internal dashboard using React and TypeScript to visualize JSON results and manage organizations, projects, and jobs effectively. 
    Additionally, I developed a user-friendly sales tool for efficient license key management within the organization. 
    I contributed to the ongoing maintenance and enhancement of a Kotlin SDK for license key management. 
    Throughout these projects, I provided dedicated support to users and customers.`,
  },
  {
    date: "January, 2020",
    title: "Software Engineer Trainee, Nonius Software",
    description: `At Nonius, a provider of integrated hospitality technology, I led a project focused on designing and developing a chatbot. 
    The chatbot was intended for use by the Nonius support team and integration into the company's website, enabling seamless human handoff. 
    My responsibilities included analyzing chatbot frameworks, considering factors like cost-effectiveness, required architecture, and development time. 
    After careful evaluation, I created demos using Wit.ai and DialogFlow, with the latter ultimately chosen for integration. 
    I utilized Node.js for the server-side implementation and leveraged the Tiledesk integration for the frontend.`,
  },
  {
    date: "September, 2018",
    title:
      "Research Student in Bioeng. and Telemedicine Group, Polytechnic University of Madrid",
    description: `Prior to pursuing my Masters degree, I sought research experience to determine my career path between pursuing a PhD or entering the industry. 
    I joined the Bioengineering and Telemedicine Group at Polytechnic University of Madrid, where I focused on artificial intelligence. 
    Specifically, I investigated and developed Deep Learning techniques for brain segmentation of stroke patients using magnetic resonance imaging, even in the absence of established ground truth.`,
  },
];

const ProfessionalInfo = () => {
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
            <Typography variant="body2">{item.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ProfessionalInfo;
