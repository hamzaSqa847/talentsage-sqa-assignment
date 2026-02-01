import { test, expect } from '@playwright/test';

const baseURL = 'https://jsonplaceholder.typicode.com';

test.describe('Blog API Tests with Full Validation', () => {

  test('GET - Read a blog post', async ({ request }) => {
    
    // Send GET request
    const response = await request.get(`${baseURL}/posts/6`);
    
    //  1. Validate HTTP Status
    expect(response.status()).toBe(200);
    
    // Get the response data
    const data = await response.json();
    
    // 2. Validate JSON Structure
    expect(typeof data).toBe('object');
    expect(Array.isArray(data)).toBe(false);
    
    //  3. Validate Required Fields
    expect(data).toHaveProperty('userId');
    expect(data).toHaveProperty('id');
    expect(data).toHaveProperty('title');
    expect(data).toHaveProperty('body');
    
    // Optional: Verify field types
    expect(typeof data.userId).toBe('number');
    expect(typeof data.id).toBe('number');
    expect(typeof data.title).toBe('string');
    expect(typeof data.body).toBe('string');
  });


  test('POST - Create a new blog post', async ({ request }) => {
    
    // Create new blog data
    const newBlog = {
      userId: 1,
      title: 'My Test Blog',
      body: 'This is test body'
    };
    
    // Send POST request
    const response = await request.post(`${baseURL}/posts`, {
      data: newBlog
    });
    
    //  1. Validate HTTP Status
    expect(response.status()).toBe(201);
    
    // Get the response data
    const data = await response.json();
    
    //  2. Validate JSON Structure
    expect(typeof data).toBe('object');
    expect(Array.isArray(data)).toBe(false);
    
    //  3. Validate Required Fields
    expect(data).toHaveProperty('userId');
    expect(data).toHaveProperty('title');
    expect(data).toHaveProperty('body');
    expect(data).toHaveProperty('id');
    
    // Verify the values match what we sent
    expect(data.userId).toBe(newBlog.userId);
    expect(data.title).toBe(newBlog.title);
    expect(data.body).toBe(newBlog.body);
  });

});
