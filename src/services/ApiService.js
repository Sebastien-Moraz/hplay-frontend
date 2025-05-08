export default class ApiService {
	
	static async login(email, password) {
		const url = `/v1/user/login`;
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: {email, password},
		};
		const data = await ApiService.fetchData(url, options);
		return data;
	}
	
	/**
	 * Fetch data from the API
	 * @param endpoint {string} - The API endpoint to fetch data from
	 * @param method {string} - The HTTP method to use (GET, POST, PUT, DELETE)
	 * @param body {object} - The request body (for POST and PUT requests)
	 * @param headers {object} - Additional headers to include in the request
	 * @returns {Promise<any>} - The response data from the API
	 */
	static async fetchData(endpoint, {method = 'GET', body = null, headers = {}}) {
		const url = `${import.meta.env.VITE_API_URL}${endpoint}`;
		let options = {
			method,
			headers: {
				'Content-Type': 'application/json',
				...headers,
			},
		};
		if (body) {
			options.body = typeof body === 'object' ? JSON.stringify(body) : body;
		}

		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(`Error: ${response.status} ${response.statusText}`);
		}
		
		return response.json();
	}
}