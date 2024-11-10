function getRandomHexSegment() {
  return Math.floor(Math.random() * 0x10000).toString(16).padStart(4, '0');
}

function generateRandomIPv6WithPrefix() {
  let ipv6 = '2001:ee0'; // Giữ nguyên phần prefix
  for (let i = 0; i < 6; i++) { // Tạo thêm 6 đoạn ngẫu nhiên
      ipv6.push(getRandomHexSegment());
  }
  return ipv6.join(':');
}

module.exports = {generateRandomIPv6WithPrefix};