import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import {store} from "../../store/store"; // adjust path as needed
import GuideRegister from "../GuideRegister";

describe('Guide Register component', () => {
    it('should display the Guide Register form', () => {
        render(
            <Provider store={store}>
                <GuideRegister />
            </Provider>
        );
        const form = screen.getByTestId('guide-register-form');
        expect(form).toBeInTheDocument();
    });
    it('should add new guide when the form is submitted', () => {
        jest.spyOn(window, 'alert').mockImplementation(() => {});
        const newGuide = {
            guideNumber: '123456789',
            status: 'Pendiente',
            origin: 'Ciudad A',
            destination: 'Ciudad B',
            lastUpdate: '2023-01-01',
            statusValue: '1'
        };
        render(
            <Provider store={store}>
                <GuideRegister />
            </Provider>
        );
        const button = screen.getByRole('button');
        const guideNumberInput = screen.getByLabelText('Número de guía');
        const originInput = screen.getByLabelText('Origen');
        const destinationInput = screen.getByLabelText('Destino');
        const destinataryInput = screen.getByLabelText('Destinatario');
        const lastUpdateInput = screen.getByLabelText('Fecha de creación');
        const statusValueSelect = screen.getByRole('combobox');
        
        fireEvent.change(guideNumberInput, { target: { value: newGuide.guideNumber } });
        fireEvent.change(originInput, { target: { value: newGuide.origin } });
        fireEvent.change(destinationInput, { target: { value: newGuide.destination } });
        fireEvent.change(destinataryInput, { target: { value: 'pepito lopez' } });
        fireEvent.change(lastUpdateInput, { target: { value: newGuide.lastUpdate } });
        fireEvent.change(statusValueSelect, { target: { value: newGuide.statusValue } });
        
        fireEvent.click(button);
        expect(button).toBeInTheDocument();
        expect(window.alert).toHaveBeenCalledWith("Guía registrada exitosamente");
            
    });
    it('should show an error when a field is empty', () => {
        const newGuide = {
            guideNumber: '123456789',
            status: 'Pendiente',
            origin: 'Ciudad A',
            destination: 'Ciudad B',
            lastUpdate: '2023-01-01',
            statusValue: '1'
        };
        render(
            <Provider store={store}>
                <GuideRegister />
            </Provider>
        );
        const button = screen.getByRole('button');
        const guideNumberInput = screen.getByLabelText('Número de guía');
        const originInput = screen.getByLabelText('Origen');
        const destinationInput = screen.getByLabelText('Destino');
        const destinataryInput = screen.getByLabelText('Destinatario');
        const lastUpdateInput = screen.getByLabelText('Fecha de creación');
        const statusValueSelect = screen.getByRole('combobox');
        
        fireEvent.change(guideNumberInput, { target: { value: newGuide.guideNumber } });
        fireEvent.change(originInput, { target: { value: newGuide.origin } });
        fireEvent.change(destinationInput, { target: { value: newGuide.destination } });
        fireEvent.change(destinataryInput, { target: { value: 'pepito lopez' } });
        
        
        fireEvent.click(button);
        expect(button).toBeInTheDocument();
        expect(window.alert).toHaveBeenCalledWith("Por favor completa todos los campos");
           
    });
});