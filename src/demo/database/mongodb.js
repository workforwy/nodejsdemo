const { MongoClient } = require('mongodb');
const { mongeoDateBase } = require('../../config');

async function main() {
  // MongoDB 连接 URI
  const uri = mongeoDateBase; // 如果你使用的是远程 MongoDB，请相应更改 URI

  // 创建一个新的 MongoClient
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    // 连接到 MongoDB 服务器
    await client.connect();
    console.log('Connected successfully to server');

    const database = client.db('test'); // 选择数据库和集合

    // 获取集合
    const collection = database.collection('chatrecords');

    // 查询集合中的所有文档
    const query = { name: '林上森' }; // 空查询对象表示查询所有文档
    const options = {
      projection: { _id: 0, name: 1, contextMessages: 1, answerByChatGPT: 1 },
    }; // 仅选择需要的字段
    const cursor = collection.find(query, options);

    // 打印查询到的所有文档
    const allValues = await cursor.toArray();
    console.log('查询到的文档:');
    console.log(JSON.stringify(allValues));
  } finally {
    // 确保在完成后关闭连接
    await client.close();
  }
}

main().catch(console.error);
