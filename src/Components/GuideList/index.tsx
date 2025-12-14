import React from "react";
import './styles.css';
import Recharge from '../../Assets/recharge.png';
import History from '../../Assets/historial.png';
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

interface GuideListProps {
    guides: Guide[];
    onUpdateStatus: (guideNumber: string, newStatus: string) => void;
}

const GuideList = ({ guides, onUpdateStatus }: GuideListProps) => {
    return(
        <>
            <Header />
            <section className="main">
                <Banner />
                <section className="main_lista" id="lista">
                    <h2 className="main_lista-title">Lista de guias</h2>
                    <div className="main_lista-guide">
                        <table className="main_lista-guide-table" cellPadding="10" cellSpacing="0">
                            <thead className="main_lista-guide-table-head">
                                <th>Número de guía</th>
                                <th>Estado actual</th>
                                <th>Origen</th>
                                <th>Destino</th>
                                <th>Última actualización</th>
                                <th>Acciones</th>
                            </thead>
                            <tbody className="main_lista-guide-table-body">
                                {guides.map((guide: Guide, index: number) => (
                                    <tr key={index}>
                                        <td>{guide.guideNumber}</td>
                                        <td>{guide.status}</td>
                                        <td>{guide.origin}</td>
                                        <td>{guide.destination}</td>
                                        <td>{guide.lastUpdate}</td>
                                        <td className="main_lista-guide-table-body-actions">
                                            <button className="main_lista-guide-table-body-actions-btn"><img src={Recharge} alt="icono recarga" /> Actualizar</button>
                                            <button className="main_lista-guide-table-body-actions-btn"><img src={History} alt="icono historial" /> Revisar Historial</button>
                                            <p>Actualizar estado:</p>
                                            <select 
                                                className="status-selector main_lista-guide-table-body-actions-btn" 
                                                defaultValue={guide.statusValue}
                                                onChange={(e) => onUpdateStatus(guide.guideNumber, e.target.value)}
                                            >
                                                <option value="1">Pendiente</option>
                                                <option value="2">En tránsito</option>
                                                <option value="3">Entregado</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </section>
            <Footer />
        </>
    );
};

export default GuideList;