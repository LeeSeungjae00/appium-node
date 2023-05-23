//client import
const wdio = require("webdriverio");

//adb shell dumpsys window | grep -E 'mCurrentFocus'
//왼쪽이 AppPackage, 오른쪽이 AppActivity

// 옵션 설정
const opts = {
  // hostname: '172.20.10.6',
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    deviceName: "myphone",
    automationName: "UiAutomator2",
    appActivity: ".app.honeycomb.Shell$HomeActivity",
    appPackage: "com.google.android.youtube",
    udid: 'R3CM80YMLGT', //변경
    noReset: true
  }
};

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const client = await wdio.remote(opts);


  //com.android.vending 앱 실행
  client.launchApp()

  await sleep(10000)

  // 좌표클릭 (x,y)
  // await client.touchAction([
  //   { action: 'tap', x: 576, y: 1188 },
  // ])

  // await sleep(500)
  // await client.touchAction([
  //   { action: 'tap', x: 913, y: 618 },
  // ])

  // await sleep(500)

  // while (1) {
  //   await client.touchAction([
  //     { action: 'tap', x: 500, y: 700 },
  //     { action: 'tap', x: 500, y: 700 },
  //     { action: 'tap', x: 500, y: 700 },
  //     { action: 'tap', x: 500, y: 700 },
  //     { action: 'tap', x: 500, y: 700 },
  //     { action: 'tap', x: 500, y: 700 },
  //     { action: 'tap', x: 500, y: 700 },
  //     { action: 'tap', x: 500, y: 700 },
  //     { action: 'tap', x: 500, y: 700 },
  //     { action: 'tap', x: 500, y: 700 },
  //     { action: 'tap', x: 500, y: 700 },
  //     { action: 'tap', x: 500, y: 700 },
  //     { action: 'tap', x: 500, y: 700 },
  //     { action: 'tap', x: 500, y: 700 },
  //   ])
  // }

  await client.deleteSession();
}

main();


