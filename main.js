//client import
const wdio = require("webdriverio");


// 옵션 설정
const opts = {
  // hostname: '175.126.172.231',
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    deviceName: "myphone",
    automationName: "UiAutomator2",
    udid: 'ce061606cbddd93401', //변경
    bundleId: 'com.android.vending'
  }
};

async function main() {
  const client = await wdio.remote(opts);

  //핵심 로직 추가

  //com.android.vending 


  await client.deleteSession();
}

main();
