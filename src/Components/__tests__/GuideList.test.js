import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import GuideList from "../GuideList";
import { Provider } from "react-redux";
import {store} from "../../store/store"; // adjust path as needed

describe('Guide List component', () => {
    it('should display the Guides List', () => {
        const guides = [
            {
            guideNumber: 'XP-3748291056',
            status: "En tránsito",
            origin: "Guadalajara, Jalisco",
            destination: "Monterrey, Nuevo León",
            lastUpdate: "2025-03-10",
            statusValue: "2"},
            {
            guideNumber: "TR-5921037485",
            status: "Entregado",
            origin: "Ciudad de México, CDMX",
            destination: "Querétaro, Querétaro",
            lastUpdate: "2025-03-09",
            statusValue: "3"
            },
        ]
        
        render(
            <Provider store={store}>
                <GuideList guides={guides} onUpdateStatus={jest.fn()} />
            </Provider>
        );
        
        const table = screen.getByRole('table');
        const firstGuideCell = screen.getByText('XP-3748291056');
        expect(firstGuideCell).toBeInTheDocument();
        expect(firstGuideCell.closest('tr')).toBeInTheDocument();
    });
    it('should display a message when there are no guides', () => {
        render(
            <Provider store={store}>
                <GuideList guides={[]} onUpdateStatus={jest.fn()} />
            </Provider>
        );
        });
    it('should change the status of a guide when the selector is changed', () => {
        const guides = [
            {
            guideNumber: 'XP-3748291056',
            status: "Pendiente",
            origin: "Guadalajara, Jalisco",
            destination: "Monterrey, Nuevo León",
            lastUpdate: "2025-03-10",
            statusValue: "1"},
        ]
        
        render(
            <Provider store={store}>
                <GuideList guides={guides} onUpdateStatus={jest.fn()} />
            </Provider>
        );
        const button = screen.getByRole('combobox');
        expect(button).toBeInTheDocument();
        fireEvent.change(button, { target: { value: '3' } });
        expect(button).toHaveTextContent('Entregado');
    });

  
})