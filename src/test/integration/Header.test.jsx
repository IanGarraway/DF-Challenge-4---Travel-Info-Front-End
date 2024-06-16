import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe } from "vitest";
import Header from "../../components/Header.jsx";
import { MemoryRouter } from "react-router-dom";
import { expect } from "vitest";

import sampleFavourites from '../testData/sample.favourites.json'



describe("Tests for the header component", () => {
    const mockSetUser = vi.fn();
    const mockDestinationSelect = vi.fn();
    const mockSetLocation = vi.fn();
    const defaultLocation = "HomePage";
    const defaultSavedLocations = sampleFavourites;
    const defaultUser = "TestGuy2";


    test('It should say Login/Create Account if user is "" ', () => {
        render(
            <Header
                location={defaultLocation}
                savedLocations={defaultSavedLocations}
                user={""}
                setUser={mockSetUser}
                destinationSelect={mockDestinationSelect}
            />,
            { wrapper: MemoryRouter }
        );

        expect(screen.queryByText(/Login\/Create Account/i)).toBeInTheDocument();
        expect(screen.queryByText(/Logout/i)).not.toBeInTheDocument();
        
    })

    test('It should say Logout, TestGuy2 Account if user is TestGuy2 ', () => {
        render(
            <Header
                location={defaultLocation}
                savedLocations={defaultSavedLocations}
                user={defaultUser}
                setUser={mockSetUser}
                destinationSelect={mockDestinationSelect}
            />,
            { wrapper: MemoryRouter }
        );

        expect(screen.queryByText(/Login\/Create Account/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/TestGuy2, Logout/i)).toBeInTheDocument();
        
    })

    test('It should say favourites and have 5 drop down items ', async () => {
        const { container } = render(
            <Header
                location={defaultLocation}
                savedLocations={defaultSavedLocations}
                user={defaultUser}
                setUser={mockSetUser}
                destinationSelect={mockDestinationSelect}
            />,
            { wrapper: MemoryRouter }
        );

        
        expect(screen.queryByText(/Favourites/i)).toBeInTheDocument();
        const toggle = screen.getByText('Favourites');
        fireEvent.click(toggle);
        await waitFor(() => {
            const elements = container.getElementsByClassName('dropdown-item')
        
            expect(elements).toHaveLength(5);
        });
        
    })

    test('Home page should not show home or the searchbar', () => {

        render(
            <Header
                location={defaultLocation}
                savedLocations={defaultSavedLocations}
                user={defaultUser}
                setUser={mockSetUser}
                destinationSelect={mockDestinationSelect}
            />,
            { wrapper: MemoryRouter }
        );
        
        expect(screen.queryByText(/Home/i)).not.toBeInTheDocument();
        expect(screen.queryByPlaceholderText(/Location Search/i)).not.toBeInTheDocument();
    });

    test('Other pages should show home', () => {

        render(
            <Header
                location={"Favourites"}
                savedLocations={defaultSavedLocations}
                user={defaultUser}
                setUser={mockSetUser}
                destinationSelect={mockDestinationSelect}
            />,
            { wrapper: MemoryRouter }
        );
        
        expect(screen.queryByText(/Home/i)).toBeInTheDocument();
        expect(screen.queryByPlaceholderText(/Location Search/i)).toBeInTheDocument();
    });
    


    //Adjusting Header size tests

    // describe('Header component', () => {
    //     it('expands on wider screens', () => {
    //         // Mock window properties
    //         global.innerWidth = 1024;
    //         global.screen = { width: 1024 };

    //         render(
    //             <Header
    //                 user=""
    //                 savedLocations={[]}
    //                 setUser={() => { }}
    //                 destinationSelect={() => { }}
    //                 location="SomePage"
    //             />,
    //             { wrapper: MemoryRouter }
    //         );

    //         // Assert that the Offcanvas is expanded
    //         expect(screen.getByTestId('offcanvasNavbar-expand-false')).toBeInTheDocument();
    //     });

    //     it('collapses on narrower screens', async () => {
    //         // Mock window properties
    //         global.innerWidth = 320;
    //         global.screen = { width: 320 };

    //         render(
    //             <Header
    //                 user=""
    //                 savedLocations={[]}
    //                 setUser={mockSetUser}
    //                 destinationSelect={mockDestinationSelect}
    //                 location="SomePage"
    //             />,
    //             { wrapper: MemoryRouter }
    //         );

    //         // Assert that the Offcanvas is not present
    //         await waitFor(() => {
    //             expect(screen.getByTestId('offcanvasNavbar-expand-false')).toBeInTheDocument();
    //         });
    //     });
    // });
});