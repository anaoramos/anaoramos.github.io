import React from 'react';
import Typography from "@material-ui/core/Typography";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";


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
                            I work with a team spread between Portugal and Switzerland, so we plan, track and manage
                            our agile and software development projects with <b>Jira</b>, <b>Zeplin</b>, <b>Slack</b>...
                            <br/>
                            As expected from a startup company, I do a variety of tasks such as: writing internal/user
                            documentation, code or even support. I work on the development of front-end components
                            (<b>Typescript</b>, <b>Javascript</b>, <b>ReactJS</b>) on the server side (<b>Python</b> and
                            <b>Kotlin</b>), develop <b>AWS Lambda functions</b> and I am also familiar with <b>Git</b>.
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
                            I started a project in which I was responsible for the <b>design of the architecture and the
                            development of a chatbot</b> to improve the call center services of Nonius support.
                            <br/>
                            My work started by analyzing the chatbot frameworks(cost-effective benefits, required
                            architecture, time of development, ...) and determining the respective pros and cons.
                            <br/>
                            In addition, I developed a chatbot demo with <b>Wit.ai</b> (using <b>Pyhton & Django web
                            framework</b> and with <b>DialogFlow</b> (with <b>Node.js</b>), which was originally
                            integrated as a Google Assistant. The accepted chatbot framework was the <b>DialogFlow</b>.
                            <br/>
                            During application development, Node.js was used for the server side, and the front end was
                            provided by the integration in Tiledesk.
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
        </React.Fragment>
    );
}
