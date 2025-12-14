import React from "react";
import './styles.css';
import Header from "../Header";
import Banner from "../Banner";
import Footer from "../Footer";

interface Guide {
    guideNumber: string;
    status: string;
    origin: string;
    destination: string;
    lastUpdate: string;
    statusValue: string;
}

interface GuideStateProps {
    guides: Guide[];
}

const GuideState = ({ guides }: GuideStateProps) => {
    const totalGuides = guides.length;
    const inTransit = guides.filter(guide => guide.statusValue === "2").length;
    const delivered = guides.filter(guide => guide.statusValue === "3").length;

    return(
        <>
            <Header />
            <section className="main">
                <Banner />
                <section className="main_general-status" id="estado">
                    <h2>Estado General</h2>
                    <div className="main_general-status-table">
                        <p className="main_general-status-table-num-total-guides">Número total de guías activas</p>
                        <p className="main_general-status-table-in-transit ">Guías en tránsito</p>
                        <p className="main_general-status-table-delivered ">Guías entregadas</p>
                        <p className="main_general-status-table-row1 ">{totalGuides}</p>
                        <p className="main_general-status-table-row2 ">{inTransit}</p>
                        <p className="main_general-status-table-row3 ">{delivered}</p>
                    </div>
                </section>
            </section>
            <Footer />

        </>
    )
}
export default GuideState;