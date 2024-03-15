# ARCHITECTURE 

### FRONTEND
- SSG + client only routes for logged in section
### BACKEND
- user authentication via social 3rdparty oauth
  - https://www.npmjs.com/package/@react-oauth/google
- CRUD REST api NestJS / express
  - /events
  - /auth
  - /profile
  - /users/{id}
  - /event/{id}/transport
  - /event/{id}/users
  - **MANAGER**
    - /events/new
    - /users
    - /approval-requests
    - /approval-requests/confirm
    - /approval-requests/reject

### DATA
- postgres db
- users, events, transport, 
- events data
- user avatar and event images
  
### HOSTING
- https://railway.app/pricing
- https://render.com/pricing#compute 35$ ~


# TODO

## QR CODE
- A4 with title, QR code and subtitle

## event detail page
- offer ride modal
- sign up button redirects to /login if not location.state.loggedIn
- _manager mode_
  - show edit button
  - show cancel button

## login
- email and password fields
- remove iOS sign in

## manage dashboard

- disabled add event button [OK]

## SCENARIO

### USER

1. scan qr code
2. see event
3. login
4. sign up for event

### MANAGER

1. open app installed to mobile phone
2. approve/reject users
3. look at event management
4. look at event creation
