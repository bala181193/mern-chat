import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from "react"
import { Expand } from "@mui/icons-material"
export default function AccordionPage() {
    const [expaned, setexpaned] = useState<string | false>(false)
    const handleChange = (isExpanded: boolean, panel: string) => {
        setexpaned(isExpanded ? panel : false)
    }
    return (
        <div style={{ width: "300px" }}>
            <Accordion expanded={expaned === "panel1"}
                onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}
            >
                <AccordionSummary
                    id='pannel-header-1'
                    aria-control='pannel-header-1'
                    expandIcon={<ExpandMoreIcon />}>
                    <Typography

                    >Accordian
                        1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography

                    >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti nostrum placeat accusamus quasi autem ullam optio beatae doloremque fugit quis? Excepturi debitis hic dignissimos! Repudiandae aliquam architecto omnis impedit laudantium.
                    </Typography>
                </AccordionDetails>
                <AccordionSummary
                    id='pannel-header-2'
                    aria-control='pannel-header-2'
                    expandIcon={<ExpandMoreIcon />}>
                    <Typography

                    >Accordian
                        1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography

                    >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti nostrum placeat accusamus quasi autem ullam optio beatae doloremque fugit quis? Excepturi debitis hic dignissimos! Repudiandae aliquam architecto omnis impedit laudantium.
                    </Typography>
                </AccordionDetails>  <AccordionSummary
                    id='pannel-header-3'
                    aria-control='pannel-header-3'
                    expandIcon={<ExpandMoreIcon />}>
                    <Typography

                    >Accordian
                        1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography

                    >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti nostrum placeat accusamus quasi autem ullam optio beatae doloremque fugit quis? Excepturi debitis hic dignissimos! Repudiandae aliquam architecto omnis impedit laudantium.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expaned === "panel12"} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}>

                <AccordionSummary
                    id='pannel-header-2'
                    aria-control='pannel-header-2'
                    expandIcon={<ExpandMoreIcon />}>
                    <Typography

                    >Accordian
                        1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography

                    >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti nostrum placeat accusamus quasi autem ullam optio beatae doloremque fugit quis? Excepturi debitis hic dignissimos! Repudiandae aliquam architecto omnis impedit laudantium.
                    </Typography>
                </AccordionDetails>

            </Accordion>
            <Accordion expanded={expaned === "panel13"} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}>

                <AccordionSummary
                    id='pannel-header-3'
                    aria-control='pannel-header-3'
                    expandIcon={<ExpandMoreIcon />}>
                    <Typography

                    >Accordian
                        1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography

                    >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti nostrum placeat accusamus quasi autem ullam optio beatae doloremque fugit quis? Excepturi debitis hic dignissimos! Repudiandae aliquam architecto omnis impedit laudantium.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}