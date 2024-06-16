// No tests needed

import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer.jsx";
import { MemoryRouter } from "react-router-dom";
import { expect } from "vitest";


describe(`Tests for HomePage.jsx`, () => {
    const mockDestinationSelect = vi.fn();


    test(`it should render 'tell me about`, () => {
        render(
            <Footer />,
            { wrapper: MemoryRouter }
        );

        expect(screen.queryByText(/© 2024 DFCORP/i)).toBeInTheDocument();
    });
    
});

