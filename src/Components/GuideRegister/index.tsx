import React, { useState, ChangeEvent, FormEvent } from "react";
import './styles.css';
import Header from "../Header";
import Banner from "../Banner";
import Footer from "../Footer";

interface GuideRegisterProps {
    addGuide: (guide: any) => void;
}

const GuideRegister = ({ addGuide }: GuideRegisterProps) => {
    const [formData, setFormData] = useState({
        guide_number: "",
        origin: "",
        destination: "",
        receiver: "",
        date: "",
        status: "1"
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!formData.guide_number || !formData.origin || !formData.destination || !formData.receiver || !formData.date) {
            alert("Por favor completa todos los campos");
            return;
        }

        const statusMap: { [key: string]: string } = {
            "1": "Pendiente",
            "2": "En tránsito",
            "3": "Entregado"
        };

        const newGuide = {
            guideNumber: formData.guide_number,
            status: statusMap[formData.status] || "Pendiente",
            origin: formData.origin,
            destination: formData.destination,
            lastUpdate: formData.date,
            statusValue: formData.status
        };

        addGuide(newGuide);
        
        setFormData({
            guide_number: "",
            origin: "",
            destination: "",
            receiver: "",
            date: "",
            status: "1"
        });

        alert("Guía registrada exitosamente");
    };

    return(
        <>
            <Header />
            <section className="main">
                <Banner />
                <section className="main_guide-regis" id="registro">
                    <h2 className="main_guide-regis-title">Registro de guías</h2>
                    <form className="main_guide-regis-form" onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Registra tu guía</legend>
                            <div>
                                <label htmlFor="guide_number">Número de guía</label>
                                <input 
                                    className="main_guide-regis-form-input" 
                                    type="text" 
                                    name="guide_number" 
                                    id="guide_number" 
                                    value={formData.guide_number}
                                    onChange={handleInputChange}
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="origin">Origen</label>
                                <input 
                                    className="main_guide-regis-form-input" 
                                    type="text" 
                                    name="origin" 
                                    id="origin" 
                                    value={formData.origin}
                                    onChange={handleInputChange}
                                    required 
                                />
                            </div>    
                            <div>
                                <label htmlFor="destination">Destino</label>
                                <input 
                                    className="main_guide-regis-form-input" 
                                    type="text" 
                                    name="destination" 
                                    id="destination" 
                                    value={formData.destination}
                                    onChange={handleInputChange}
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="receiver">Destinatario</label>
                                <input 
                                    className="main_guide-regis-form-input" 
                                    type="text" 
                                    name="receiver" 
                                    id="receiver" 
                                    value={formData.receiver}
                                    onChange={handleInputChange}
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="date">Fecha de creación</label>
                                <input 
                                    className="main_guide-regis-form-input" 
                                    type="date" 
                                    name="date" 
                                    id="date" 
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    required 
                                />
                            </div>    
                            <div>
                                <label htmlFor="status">Estado inicial</label>
                                <select 
                                    className="main_guide-regis-form-input" 
                                    name="status" 
                                    id="status" 
                                    value={formData.status}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="1">Pendiente</option>
                                    <option value="2">En tránsito</option>
                                    <option value="3">Entregado</option>
                                </select>
                            </div>
                            <div className="main_guide-regis-form-buttons">
                                <input type="submit" value="Enviar" className="main_guide-regis-form-buttons-sumbit" id="submit" />
                            </div>
                        </fieldset>    
                    </form>
                </section>
            </section>
            <Footer />
        </>
    );
};

export default GuideRegister;