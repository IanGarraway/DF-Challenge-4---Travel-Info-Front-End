import { fireEvent, render, screen } from "@testing-library/react";
import TellYou from "../../pages/TellYou";
import { MemoryRouter, createMemoryRouter, RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";


describe(`Tests for HomePage.jsx`, () => {
    const mockSetDestination = vi.fn();
    const mockSetLocation = vi.fn();
    const mockSetSavedLocations = vi.fn();
    const defaultWeatherData = [
        {
            date: '2024-06-18 18:00:00',
            weather_desc: 'light rain',
            icon: '10d',
            temp: 289.62
        },
        {
            date: '2024-06-19 12:00:00',
            weather_desc: 'overcast clouds',
            icon: '04d',
            temp: 290.42
        },
        {
            date: '2024-06-20 12:00:00',
            weather_desc: 'broken clouds',
            icon: '04d',
            temp: 294.11
        },
        {
            date: '2024-06-21 12:00:00',
            weather_desc: 'scattered clouds',
            icon: '03d',
            temp: 293.95
        },
        {
            date: '2024-06-22 12:00:00',
            weather_desc: 'broken clouds',
            icon: '04d',
            temp: 294.67
        }
    ];
    const defaultLocation = "TellYou";
    const defaultDestination = "Leeds, GB";
    const defaultSavedLocations = [
        { _id: "6670988dac9ce7c6a4dcb8f9", name: "Leeds, GB", userID: "667097ccac9ce7c6a4dcb8e6" },
        { _id: "6670981bac9ce7c6a4dcb8f3", name: "London, GB", userID: "667097ccac9ce7c6a4dcb8e6" }
    ];
    const defaultUser = "TestGuy";



    test(`it should render 'telling you about`, () => {
        render(
            <TellYou
                destination={defaultDestination}
                weatherData={defaultWeatherData}
                setDestination={mockSetDestination}
                user={defaultUser}
                setSavedLocations={mockSetSavedLocations}
                savedLocations={defaultSavedLocations}
                location={defaultLocation}
                setLocation={mockSetLocation}
            />,
            { wrapper: MemoryRouter }
        );

        expect(screen.queryByText(/Telling you about.../i)).toBeInTheDocument();
        expect(screen.queryAllByTestId("weatherImage")).toHaveLength(5);
        expect(screen.queryByAltText("save Location icon")).toBeInTheDocument();
        expect(screen.queryByAltText("save Location icon")).toHaveAttribute("src","src/assets/images/bookmarked.svg" );
    });

    test(`it should send TellYou to setLocation`, () => {
        render(
            <TellYou
                destination={defaultDestination}
                weatherData={defaultWeatherData}
                setDestination={mockSetDestination}
                user={defaultUser}
                setSavedLocations={mockSetSavedLocations}
                savedLocations={defaultSavedLocations}
                location="HomePage"
                setLocation={mockSetLocation}
            />,
            { wrapper: MemoryRouter }
        );

        expect(mockSetLocation).toHaveBeenCalledOnce();
        expect(mockSetLocation).toHaveBeenCalledWith("TellYou");
        
    });

    test(`it should only display the save favourite button if there is a user`, () => {
        render(
            <TellYou
                destination={defaultDestination}
                weatherData={defaultWeatherData}
                setDestination={mockSetDestination}
                user=""
                setSavedLocations={mockSetSavedLocations}
                savedLocations={defaultSavedLocations}
                location={defaultLocation}
                setLocation={mockSetLocation}
            />,
            { wrapper: MemoryRouter }
        );

        expect(screen.queryByAltText("save Location icon")).not.toBeInTheDocument();
        
    });

    test(`it should only display the unbookmarked image button if the favourite isn't in the users list`, () => {
        render(
            <TellYou
                destination={defaultDestination}
                weatherData={defaultWeatherData}
                setDestination={mockSetDestination}
                user={defaultUser}
                setSavedLocations={mockSetSavedLocations}
                savedLocations={[]}
                location={defaultLocation}
                setLocation={mockSetLocation}
            />,
            { wrapper: MemoryRouter }
        );

        expect(screen.queryByAltText("save Location icon")).toHaveAttribute("src","src/assets/images/unbookmarked.svg" );
        
    });

    test(`it should render loading if there is no weather data`, () => {
        render(
            <TellYou
                destination={defaultDestination}
                weatherData={[]}
                setDestination={mockSetDestination}
                user={defaultUser}
                setSavedLocations={mockSetSavedLocations}
                savedLocations={defaultSavedLocations}
                location={defaultLocation}
                setLocation={mockSetLocation}
            />,
            { wrapper: MemoryRouter }
        );

        expect(screen.queryByText(/loading/i)).toBeInTheDocument();
        
    });
})
