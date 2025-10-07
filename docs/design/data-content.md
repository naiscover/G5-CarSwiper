# <Data Content>
## Context
<This section describes the types of data used and managed by the CarSwiper app, a platform designed for seamless car rental experiences. It covers essential data models, user interactions, and integration points important to our project.>
## Content
Entity       |  Attributes                                 
-------------+---------------------------------------------
Car          |  ID, Make, Model, Year, Price, Location, ...
User         |  ID, Name, Contact, Payment, Rentals, ...   
Booking      |  ID, CarID, UserID, StartDate, EndDate, ... 
Transaction  |  ID, BookingID, Amount, Status, ...         
## Decisions (if any)
## Next Steps
- [Finish setting up our car and booking data. ] (Prabhgun, Oct 30, 2025)
- [Add payment system] (Prabhgun, Oct 30, 2025) 
