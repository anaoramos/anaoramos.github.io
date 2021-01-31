import React from 'react';
import Typography from "@material-ui/core/Typography";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
// @ts-ignore
import MyCV from '../documents/cv.pdf';

export const ProfessionalInfo = () => {
    return (
        <React.Fragment>
            <Timeline align="alternate">
                <TimelineItem>
                    <TimelineOppositeContent style={{fontSize: "small"}}>
                        <Typography color="textSecondary" style={{fontSize: "small"}}>
                            October, 2020
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent style={{fontSize: "small"}}>
                        <Typography color="textSecondary" style={{fontSize: "small"}}>
                            Junior Full Stack Engineer, OTO Systems
                        </Typography>
                        <Typography style={{fontSize: "small"}}>
                            OTO Systems is a spin-off from <b>SRI International</b> that uses artificial intelligence to
                            analyze speech, processing millions of customer files to help companies, e.g. contact
                            centers, to help unlock valuable data from voice interactions.
                            <br/>
                            I do a variety of tasks like writing internal/user documentation, code, or even support.
                            <br/>
                            As  a  full  stack  developer  I’m  involved  in  both  frontend  and  backend  tasks.
                            In  the  frontend  side, I  develop  frontend  components  using <b>ReactJS</b>,  mostly <b>Typescript</b>.
                            On  the  backend  side,  I  use <b>Kotlin</b> for editing or adding services for our existing API’s and creating new ones as requested.
                            <br/>
                            My engineering team is spread between Portugal and Switzerland, so we plan, track and manage our agile and software development projects with Jira, Zeplin, Slack.
                            We also use <b>Git</b> as version control system.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent style={{fontSize: "small"}}>
                        <Typography color="textSecondary" style={{fontSize: "small"}}>
                            January, 2020
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent style={{fontSize: "small"}}>
                        <Typography color="textSecondary" style={{fontSize: "small"}}>
                            Software Engineer Trainee, Nonius Software
                        </Typography>
                        <Typography style={{fontSize: "small"}}>
                            Nonius provides hospitality technology fully integrated with hotel's management systems.

                            I started a project in which I was responsible for the design of the architecture and the development
                            of a chatbot to be used by the Nonius support team as well to be integrated in the Nonius Website(performing Human Handoff).
                            <br/>
                            My work started by analyzing the chatbot frameworks(cost-effective benefits, required architecture,time of development, ...)
                            and determining the respective pros and cons. In addition, I also developed different  demos,
                            using <b>Wit.ai</b> (with <b>Python</b> on  the  server  side  in  combination  with  the <b>Django web framework</b> for  the  frontend)  and  using DialogFlow (with <b>Node.js</b>),
                            which was originally integrated with Google Assistant.
                            <br/>
                            In the end, I worked with DialogFlow framework, using Node.js for the server side.  The frontend was provided by the integration with Tiledesk.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent style={{fontSize: "small"}}>
                        <Typography color="textSecondary" style={{fontSize: "small"}}>
                            September, 2018
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent style={{fontSize: "small"}}>
                        <Typography color="textSecondary" style={{fontSize: "small"}}>
                            Research Student in Bioeng. and Telemedicine Group, Polytechnic University of Madrid
                        </Typography>
                        <Typography style={{fontSize: "small"}}>
                            Before getting my Masters degree, I decided that it would be good for me to have research
                            experience to know whether to do a PhD or get a job in industry.
                            <br/>
                            That is why I applied to the <b>Bioengineering and Telemedicine Group</b> at Polytechnic
                            University of Madrid and worked in the <b>artificial intelligence</b> field to investigate
                            and develop Deep Learning approaches to brain
                            segmentation of stroke patients using magnetic resonance imaging with no basic truth
                            designation.
                            <br/>
                            It was a good experience to decide that my path now is not to do a PhD, but to work in the
                            industry.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
            <Typography style={{fontSize: "small"}}>
                You can find more information in <a href={MyCV} download={'ana_ramos_cv.pdf'}>my CV</a>.
            </Typography>
        </React.Fragment>
    );
}
