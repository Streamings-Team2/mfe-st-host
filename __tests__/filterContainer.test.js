import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FilterContainer from "../src/components/filter/filterContainer";

describe('FilterContainer', () => {
    let mockOnData;

    beforeEach(() => {
        mockOnData = jest.fn();
    });

    test('should render FilterContainer and call onData with the correct arguments on filter', () => {
        render(<FilterContainer onData={mockOnData} />);

        // Busca los elementos de formulario por su label
        const airlineSelect = screen.getByLabelText(/Aerolínea/i);
        const statusSelect = screen.getByLabelText(/Estado/i);
        const flightNumberInput = screen.getByLabelText(/N° vuelo/i);
        const filterButton = screen.getByText(/Filtrar/i);
        const clearButton = screen.getByText(/Limpiar/i);

        // Verifica que los elementos se rendericen
        expect(airlineSelect).toBeInTheDocument();
        expect(statusSelect).toBeInTheDocument();
        expect(flightNumberInput).toBeInTheDocument();
        expect(filterButton).toBeInTheDocument();
        expect(clearButton).toBeInTheDocument();

        // Simula los cambios en los inputs
        fireEvent.change(airlineSelect, { target: { value: "Aerolínea A" } });
        fireEvent.change(statusSelect, { target: { value: "Activo" } });
        fireEvent.change(flightNumberInput, { target: { value: "1234" } });

        // Simula el clic en el botón de filtrar
        fireEvent.click(filterButton);

        // Verifica que mockOnData sea llamado con los argumentos esperados
        expect(mockOnData).toHaveBeenCalledWith({
            airlineName: "Aerolínea A",
            status: "Activo",
            flightNumber: "1234",
        });
    });

    test('should clear the filter by clicking the clear button', () => {
        render(<FilterContainer onData={mockOnData} />);

        const airlineSelect = screen.getByLabelText(/Aerolínea/i);
        const statusSelect = screen.getByLabelText(/Estado/i);
        const flightNumberInput = screen.getByLabelText(/N° vuelo/i);
        const clearButton = screen.getByText(/Limpiar/i);

        // Simula los cambios en los inputs
        fireEvent.change(airlineSelect, { target: { value: "Aerolínea A" } });
        fireEvent.change(statusSelect, { target: { value: "Activo" } });
        fireEvent.change(flightNumberInput, { target: { value: "1234" } });

        // Simula el clic en el botón de limpiar
        fireEvent.click(clearButton);

        // Verifica que mockOnData sea llamado con un objeto vacío
        expect(mockOnData).toHaveBeenCalledWith({});
    });
});
