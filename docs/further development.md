# Further Development

## Immediate needs

initial development needs optimisation, the css was poorly implemented and there are areas where the react components could be better optimised.

Graphics are in need of professional attention as the colour scheme choices are much to be desired and there are a number of icons which would be better suited if they shared a consistent theme.

## Extensions

in addition to the local mapping data API and hotel data API as suggested in the initial design requirements

### Different time windows

The present forecast is for a 5 day window, and while the data supplied is in 3 hour intervals the application presently only shows 12:00 time period for each of the following days. More detailed forecasts could be offered to the user for the aid in event planning. The present level of service from the weather data source could also be changed and open up forecasts from much further forward in time.

This more detailed level of forecast could be put behind a paywall allowing DFCorp to monetise the service. Though any thoughts in this direction should be aware of the large numbers of free services that would be competing with this services.

### Navigation and travel

if the user supplies their address, navigation suggestions could be made for getting them to the destination city.

This could be further expanded upon, much like with the hotels opens up the potential for considering routes to this destination, and allowing the user to book different methods of transit to get them to their destination.

Corporate users could further allow users to then send request for travel authorisation allowing Digital Futures Corporation to expand into corporate services, with an automated concierge service.

### Weather alerts

A service which could be offered would be for the user to gain updates regarding their chosen locations, maybe an update on a schedule of their choice or a warning if the weather drops below a predetermined level.

### Backend data storage

If the service ramps up in users, the chances are that a lot of them will be investigating the same cities. At present a request is made for the weather data from the service every time a client application makes a request of the server. This data doesn't change rapidly enough to necessitate this. The request data could be stored on the database and before sending a request to the API, it could check to see if a request had already been made in the last hour and reply to the front end with that data. This could potentially reduce expenses if the system receives a large volume of requests and while it would be additional processing on the server, it could also speed up the response to the client during heavy loads.

### Local time

One additional functionality could be the inclusion of the local time for a destination. For those interested in places outside of their own time zone, this could be useful for people arranging calls or virtual meetings to ensure that they are not picking an unsuitable time.

### Integration into other DFCorp products

#### Secret Diary

The login system could be used to extend to the DFCorps diary service, allowing a user to store and access their diary from anywhere. This could be further enhanced by allowing the user to encrypt their entries before saving them to the server, ensuring that they are the only ones who could ever read it, assuming of course they remember their own encryption key.

#### Air Traffic Control service

One of the aspects of the ATC software was to limit services during bad weather. Integrating the weather service with this would allow that aspect to be automated with up to date weather data. Combined with alerts, would further expand that clients functionality within the app.

#### Banking integration

Integration with DFCorps financial services could offer the clients using the application up to date exchange rate information for the city they are looking at. This could further be expanded by offering a link to allow the customer to exchange currency in anticipation of their visit.

#### Addressbook integration

For the clients who are using the DFCorp addressbook, the addresses stored could be used to focus on specific locations for checking the weather, particularly useful for those who may be working outside at those locations. It could also be tied into the navigation tools and allow a client to be given directions to their contact as well as the weather forecast.
