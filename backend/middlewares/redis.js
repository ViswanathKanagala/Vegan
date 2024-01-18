const redis = require("redis");


const redisClient = redis.createClient({
    password: 'ZQqRijyG6Q33gTO069IXnCqyQY6w5FrI',
    socket: {
        host: 'redis-11068.c305.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 11068
    }
});


redisClient.connect();
redisClient.on('connect', () => {
    console.log('Redis is connected');
  });
module.exports=redisClient;