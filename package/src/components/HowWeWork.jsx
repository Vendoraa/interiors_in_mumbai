import React from 'react'
import { motion } from 'framer-motion';

const workingProcess = [
    { num: "01", heading: "Book an appointment", text: "Call or WhatsApp us and we will visit your flat to measure and understand what you need. Site visits are free across Mumbai." },
    { num: "02", heading: "Design and approval", text: "We share layout options, 3D views and a fixed itemised quote. Nothing is ordered until you approve the design and price." },
    { num: "03", heading: "Execution", text: "Our carpenters, painters and electricians work to a written schedule. You get weekly updates and a site supervisor's number." },
    { num: "04", heading: "Project Handover", text: "We do a joint walkthrough, fix anything on your snag list, then hand over with the warranty papers and material bills." },
]

const HowWeWork = () => {
    return (
        <>
            <div className="container">
                <div className="section-head style-1">
                    <h6 className="sub-title text-primary">WORK PROCESS</h6>
                    <h2 className="title">How we Work</h2>
                </div>
                <div className="row">
                    {
                        workingProcess.map((i, index) => (
                            <motion.div className="col-lg-3 col-sm-6 position-relative" key={i.num}
                                initial={{ opacity: 0, y: '100%' }}
                                whileInView={{ opacity: 1, y: "0" }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="work-process shadow text-center m-b30 h-100">
                                    <div className="number">{i.num}</div>
                                    <h4 className="title m-b15">{i.heading}</h4>
                                    <p className="m-b0">{i.text}</p>
                                </div>
                                {index !== workingProcess.length - 1 && (
                                    <div className="process-arrow d-none d-lg-block" style={{
                                        position: 'absolute',
                                        top: '50%',
                                        right: '-15px',
                                        transform: 'translateY(-50%)',
                                        zIndex: 1,
                                        fontSize: '24px',
                                        color: 'var(--primary)'
                                    }}>
                                        <i className="fas fa-chevron-right"></i>
                                    </div>
                                )}
                            </motion.div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}
export default HowWeWork
