import React, { Component } from "react"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Mailchimp from "react-mailchimp-form"

export default function Faq() {
  return (
    <>
      <h3>Frequently Asked Questions</h3>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>
            What languages do you have commercial experience in?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            HTML, CSS, Javascript (React, Node, Angular) and Python.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>What kind of jobs can you do?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Front end or full stack developer/software engineer jobs, using
            Javascript and/or Python.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography>
            Would you be interested in part time work for equity?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Not at the moment, sorry. Currently working on my own project so
            stay tuned...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography>I tried to call you, but you didn't pick up?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Please email me if you want to arrange a call, as I'm probably
            coding! Don't try the witheld number tactics, I worked in
            recruitment myself I know all the tricks ;)
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography>What are your salary requirements?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            That honestly depends on so many factors (not being difficult, it's
            the truth), just reach out and ask if I'm looking.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography>What did you use to code this website?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Javascript/React. My favourite for getting things up and running
            very quickly.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Mailchimp
        action="https://reikon95.us18.list-manage.com/subscribe/post?u=30e725db9a4374200ca835c2b&amp;id=ae05b717ca"
        fields={[
          {
            name: "EMAIL",
            placeholder: "Email",
            type: "email",
            required: true,
          },
        ]}
      />
    </>
  )
}
