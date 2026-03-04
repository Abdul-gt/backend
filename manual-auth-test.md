### Manual Testing for JWT Auth

This file provides curl commands you can run in your terminal to test the authentication flow. Keep your server running while doing this.

**1. Register a new user:**
```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"testuser@example.com", "password":"password123"}'
```

**2. Login with the user:**
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"testuser@example.com", "password":"password123"}'
```

*(Copy the `token` from the JSON response of the login request)*

**3. Access the protected `/auth/me` route:**
*Replace `YOUR_TOKEN_HERE` with the actual token.*
```bash
curl -X GET http://localhost:3000/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**4. Access without a token (Expected: Error 401)**
```bash
curl -X GET http://localhost:3000/auth/me
```

**5. Access with an invalid token (Expected: Error 403)**
```bash
curl -X GET http://localhost:3000/auth/me \
  -H "Authorization: Bearer invalid1234.token"
```
