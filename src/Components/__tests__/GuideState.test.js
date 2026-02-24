import React from "react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import GuideState from "../GuideState";
import { render, screen } from "@testing-library/react";


describe('Guide State component', () => {
    it('should render table with data', () => {
    const guides = [
    {
      guideNumber: "XP-3748291056",
      status: "En tránsito",
      origin: "Guadalajara, Jalisco",
      destination: "Monterrey, Nuevo León",
      lastUpdate: "2025-03-10",
      statusValue: "2"
    },
    {
      guideNumber: "TR-5921037485",
      status: "Entregado",
      origin: "Ciudad de México, CDMX",
      destination: "Querétaro, Querétaro",
      lastUpdate: "2025-03-09",
      statusValue: "3"
    },
    {
      guideNumber: "PK-8473201956",
      status: "En tránsito",
      origin: "Tijuana, Baja California",
      destination: "León, Guanajuato",
      lastUpdate: "2025-03-11",
      statusValue: "2"
    },
    {
      guideNumber: "SH-2109876543",
      status: "En tránsito",
      origin: "Mérida, Yucatán",
      destination: "Puebla, Puebla",
      lastUpdate: "2025-03-08",
      statusValue: "2"
    },
    {
      guideNumber: "DL-6598324710",
      status: "En tránsito",
      origin: "Cancún, Quintana Roo",
      destination: "Toluca, Estado de México",
      lastUpdate: "2025-03-12",
      statusValue: "2"
    }
  ];      render(
        <Provider store={store}>
            <GuideState guides={guides} /> 
        </Provider>
    );
        const totalGuides = screen.getByTestId('total-guides');
        const inTransit = screen.getByTestId('in-transit');
        const delivered = screen.getByTestId('delivered');
        expect(totalGuides).toHaveTextContent('5');
        expect(inTransit).toHaveTextContent('4');
        expect(delivered).toHaveTextContent('1');
    });

});