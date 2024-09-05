import axios from "axios";
import AccountService from "../../services/Account.service.js";
import MockAdapter from 'axios-mock-adapter';
import { afterEach, beforeEach, describe, expect, vi } from "vitest";



describe('AccountService', () => {
    
    let mock;

    beforeEach(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    });

    //Testing the login function

    it('should login sucessfully with valid credentials', async () => {
        //Arrange
        const mockResponse = { token: 'fakeToken' };
        mock.onPost('http://localhost:3000/login').reply(200, mockResponse);
        
        //Act
        const response = await AccountService.login({ username: 'testUser', password: 'testPass' });

        //Assert
        expect(response.status).toBe(200);
        expect(response.data.token).toBe('fakeToken');
    });

    it('should throw an error on failed login', async () => {
        //arrange
        mock.onPost('http://localhost:3000/login').reply(401, { message: 'Unauthorised' });
        
        //Act
        await expect(AccountService.login({ username: 'wrongUser', password: 'wrongPassword' }))
            .rejects
            .toThrow();
    });
    // Testing the logout function
    it('should logout successfully', async () => {
        //arrange
        mock.onPost('http://localhost:3000/logout').reply(200, { message: 'Logged out' });

        //Act
        const response = await AccountService.logout();

        //Assert
        expect(response.status).toBe(200);
    });

    it('should handle an error during logout', async () => {
        //Arrange
        mock.onPost('http://localhost:3000/logout').reply(500, { message: 'Server Error' });

        const consoleSpy = vi.spyOn(console, 'error').mockImplementation(async () => {});
            await expect(AccountService.logout())
                .rejects
                .toThrow();
        
        expect(consoleSpy).toHaveBeenCalledWith('Error logging out', expect.anything());

        consoleSpy.mockRestore();
    });

    // Testing the newAccount function
    it('should create a new account successfully', async () => {
        //Arrange
        const mockResponse = { message: 'Account created' };        
        mock.onPost('http://localhost:3000/newuser').reply(201, mockResponse);

        //Act
        const response = await AccountService.newAccount('newUser', 'Test User', 'test@example.com', 'newPassword');

        //Assert
        expect(response.status).toBe(201);
        expect(response.data.message).toBe('Account created');
    });

    it('should throw an error on account creation failure', async () => {
        //Arrange
        mock.onPost('http://localhost:3000/newuser').reply(400, { message: 'Bad Request' });

        //Act

        //Assert
        await expect(AccountService.newAccount('invalidUser', 'Test User', 'test@example.com', 'badPassword'))
            .rejects
            .toThrow();
    });


});