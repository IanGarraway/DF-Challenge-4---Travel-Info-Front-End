
import { fireEvent, getByText, render, screen } from "@testing-library/react";
import Favourites from "../../pages/Favourites";
import { MemoryRouter, createMemoryRouter, RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";

import sampleFavourites from '../testData/sample.favourites.json'

describe(`Tests for Favourites.jsx`, () => {
    const mockSetSavedLocations = vi.fn();
    const mockSetLocation = vi.fn();
    const defaultLocation = "Favourites";
    const defaultSavedLocations = sampleFavourites;



    test(`it should render 'telling you about`, () => {
        const { container } = render(
            <Favourites
                savedLocations={defaultSavedLocations}
                setSavedLocations={mockSetSavedLocations}
                location={defaultLocation}
                setLocation={mockSetLocation}
            />,
            { wrapper: MemoryRouter }
        );

        expect(screen.queryByText(/Telling you about.../i)).toBeInTheDocument();
        const elements = container.getElementsByClassName("loc");
        expect(elements).toHaveLength(4);
    });

    test(`it should say are loading if no favourites are passed in`, () => {
        const {getByText}  = render(
            <Favourites
                savedLocations={[]}
                setSavedLocations={mockSetSavedLocations}
                location={defaultLocation}
                setLocation={mockSetLocation}
            />,
            { wrapper: MemoryRouter }
        );

        expect(getByText('are loading...')).toBeInTheDocument();
        
    });


});