const request = require('supertest');
const app = require('./server');

describe('Server Tests', () => {
    let server;

    beforeAll(() => {
        // เริ่มเซิร์ฟเวอร์สำหรับการทดสอบ
        server = app.listen(0); // ใช้ port 0 เพื่อให้ระบบเลือก port ว่าง
    });

    afterAll((done) => {
        // ปิดเซิร์ฟเวอร์หลังจากทดสอบเสร็จ
        server.close(done);
    });

    test('GET / should return 200', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    });

    test('GET /api/health should return health status', async () => {
        const response = await request(app).get('/api/health');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('status', 'OK');
        expect(response.body).toHaveProperty('message');
        expect(response.body).toHaveProperty('timestamp');
    });

    test('Health endpoint should return current timestamp', async () => {
        const response = await request(app).get('/api/health');
        const timestamp = new Date(response.body.timestamp);
        expect(timestamp).toBeInstanceOf(Date);
        expect(timestamp.getTime()).toBeGreaterThan(Date.now() - 10000); // within last 10 seconds
    });
});
