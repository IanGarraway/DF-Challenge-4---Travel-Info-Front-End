
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
// import MockAxios from "jest-mock-axios";
// import pkg from '@jest/globals';

import Favourites from "../../pages/Favourites";
import FavouritesService from "../../services/Favourites.service";

import sampleFavourites from '../testData/sample.favourites.json'

// const { jest } = pkg;
// jest.mock('axios');

describe(`Tests for Favourites.jsx`, () => {
    const mockSetSavedLocations = vi.fn();
    const mockSetLocation = vi.fn();
    const defaultLocation = "Favourites";
    const defaultSavedLocations = sampleFavourites;



    test(`it should render 'telling you about and the default saved`, () => {
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

    test(`it should set location to favourites if its not on load`, () => {
        const {getByText}  = render(
            <Favourites
                savedLocations={defaultSavedLocations}
                setSavedLocations={mockSetSavedLocations}
                location={"HomePage"}
                setLocation={mockSetLocation}
            />,
            { wrapper: MemoryRouter }
        );

        expect(mockSetLocation).toHaveBeenCalled();
        expect(mockSetLocation).toHaveBeenCalledWith("Favourites");
        
    });


});
//assisted by chatGPT


// describe(`Axios tests of favourites`, () => {

//     const mockSetSavedLocations = vi.fn();
//     const mockSetLocation = vi.fn();
//     const defaultLocation = "Favourites";
//     const defaultSavedLocations = sampleFavourites;
    
//     afterEach(() => {
//         MockAxios.reset();
//     })

//     test('should trigger an axios call to /remfav with the favourites _id', async() => {
        
//         const { getByText, queryByText } = render(
//             <Favourites
//                 savedLocations={defaultSavedLocations}
//                 setSavedLocations={mockSetSavedLocations}
//                 location={defaultLocation}
//                 setLocation={mockSetLocation}
//             />,
//             { wrapper: MemoryRouter }
//         );
//         expect(getByText('Leeds, GB')).toBeInTheDocument();

//         const deleteIcon = getByText('Leeds, GB').closest('tr').querySelector('.delete-icon');
//         fireEvent.click(deleteIcon);

//         MockAxios.post.mockResolvedValueOnce({ status: 200, data: {} });

//         await waitFor(() => {
//             expect(MockAxios.post).toHaveBeenCalled('http://localhost:3000/remfac', { favID: "666ec26455eb6475d4c9c63b" }, { withCredentials: true });
//         })

//     })
// })