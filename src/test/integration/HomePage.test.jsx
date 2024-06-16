
import { fireEvent, render, screen } from "@testing-library/react";
import HomePage from "../../pages/HomePage";
import { MemoryRouter, createMemoryRouter, RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";


describe(`Tests for HomePage.jsx`, () => {
    const mockDestinationSelect = vi.fn();


    test(`it should render 'tell me about`, () => {
        render(
            <HomePage destinationSelect={mockDestinationSelect} />,
            { wrapper: MemoryRouter }
        );

        expect(screen.queryByText(/Tell me about.../i)).toBeInTheDocument();
    });

    test(`it should return Leeds when the button is submitted`,async () => {
        //Arrange
        const homePageRender = render(<HomePage destinationSelect={mockDestinationSelect} />);

        const locationInput = homePageRender.getByPlaceholderText(/Location name.../i)
        
        const testLocation = "Leeds"
        //Act
        fireEvent.change(locationInput, { target: { value: testLocation } });

        await userEvent.click(screen.getByRole('button'));


        //Assert
        expect(mockDestinationSelect).toHaveBeenCalledOnce();
        expect(mockDestinationSelect).toHaveBeenCalledWith("Leeds");
    })
    
});