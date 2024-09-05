import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import App from "../../App";


describe(`App.jsx tests`, () => {
    
    test('Basic render', () => {
        render(<App />, 
            { wrapper: MemoryRouter }
        )

        expect(screen.queryByText(/Tell me about.../i)).toBeInTheDocument();

    })

    test('search for a city', async () => {
        const appRender = render(<App />, 
            { wrapper: MemoryRouter }
        )

        const locationInput = appRender.getByPlaceholderText(/Location name.../i)
        
        const testLocation = "Leeds"
        //Act
        fireEvent.change(locationInput, { target: { value: testLocation } });

        await userEvent.click(screen.getByTestId('searchButton'));

        expect(screen.queryByText(/Telling you about.../i)).toBeInTheDocument();
    })
})

// Need to add tests after I have figured out how to mock axios calls from the front end