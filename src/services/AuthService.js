import User from "@/libs/User.js";
import { isLoggedIn } from "@/stores/auth.js";
export default class AuthService {
	token = localStorage.getItem('jwtToken');

	/**
	 * Register a new user
	 * @param firstName {string}
	 * @param lastName {string}
	 * @param email {string}
	 * @param password {string}
	 * @return {Promise<User>} - The registered user
	 */
	static async register(firstName, lastName, email, password) {
		//TODO: implement registration logic with API
		localStorage.setItem('jwtToken', email);
		localStorage.setItem('user', JSON.stringify(new User(
				1,
				firstName,
				lastName,
				email,
				true
		)));
		isLoggedIn.value = true;
	}

	/**
	 * Login a user
	 * @param email {string}
	 * @param password {string}
	 * @returns {Promise<User>} - The logged-in user
	 */
	static async login(email, password) {
		//TODO: implement login logic with API
		localStorage.setItem('jwtToken', email);
		localStorage.setItem('user', JSON.stringify(new User(
				1,
				'John',
				'Doe',
				email,
				true
		)));
		isLoggedIn.value = true;
	}
	
	/**
	 * Logout the user
	 * @returns {Promise<void>}
	 */
	static async logout() {
		localStorage.removeItem("jwtToken");
		localStorage.removeItem("user");
		isLoggedIn.value = false;
	}
	
	/**
	 * Get the logged-in user
	 * @returns {Promise<User>} - The logged-in user
	 */
	static async getUser() {
		throw new Error('Method not implemented.');
	}
	
	/**
	 * Check if the user is logged in
	 * @returns {Promise<boolean>} - True if the user is logged in, false otherwise
	 */
	static async isLoggedIn() {
		throw new Error('Method not implemented.');
	}
	
	/**
	 * Update the user's token
	 * @returns {Promise<void>}
	 */
	async updateToken() {
		throw new Error('Method not implemented.');
	}

	static async updateUser(user, password = null) {
		//TODO: implement update user logic with API
		console.log('user', user);
		localStorage.setItem('user', JSON.stringify(user));
		//TODO: this force the navbar to re-render, but it should be done in a better way
		isLoggedIn.value = false;
		isLoggedIn.value = true;
	}
}