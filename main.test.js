const supertest = require('supertest');
const request = supertest('http://localhost:3000');
const bcrypt = require("bcryptjs");

describe('Express Route Test', function () {
	// it('should return hello world', async () => {
	// 	return request.get('/hello')
	// 		.expect(200)
	// 		.expect('Content-Type', /text/)
	// 		.then(res => {
	// 			expect(res.text).toBe('Hello BENR2423');
	// 		});
	// })

	it('User login successfully', async () => {
		return request
			.post('/login')
			.send({username: "Patrick Hammes", userpassword: "yEynTentn1SKrG6"})
			.expect('Content-Type', /text/)
			.expect(200).then(response => {
				expect(response.text).toEqual("Login success");
			});
	});

	it('login failed', async () => {
		return request
			.post('/login')
			.send({username: "Patrick Hammes", userpassword: "012345"})
			.expect('Content-Type', /text/)
			.expect(404).then(response => {
				expect(response.text).toEqual("Invalid Input");
	});
});
	

	it('register', async () => {
		return request
			.post('/register')
			.send({username: "user5", userpassword: "$a$20$epPrCrueehOXu96M2MIoAuZf9Uma67vyCF7wHJO4w9BByPPVbTg5i"})
			.expect('Content-Type', /text/)
			.expect(200).then(response => {
				expect(response.text).toEqual("Successfully, create new account");
	});
});

	it('register failed', async () => {
		return request
			.post('/register')
			.send({username: "user4", userpassword: "123456789"})
			.expect('Content-Type', /text/)
			.expect(404).then(response => {
				expect(response.text).toEqual("Username exists");
			});
	});

	it('update successfully', async () => {
		return request
			.patch('/update')
			.send({username: "Kelly Nader"})
			.expect(200)
	});

	it('delete successfully', async () => {
    	return request
    	  .delete('/delete')
    	  .send({username:"Ms. Edgar Bartoletti", userpassword: "dzF4QT8arXG_MQr"})
    	  .expect('Content-Type', /text/)
    	  .expect(200).then(response => {
     			expect(response.text).toEqual("Successfully Delete");
			});
	});

  	it('delete failed', async () => {
    	return request
    	.delete('/delete')
      	.send({username: 'user1', userpassword: "1010"})
      	.expect('Content-Type', /text/)
      	.expect(404).then(response => {
        		expect(response.text).toEqual("Delete Failed");
    	});
	});
});