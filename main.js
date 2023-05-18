//client import
const wdio = require("webdriverio");

//adb shell dumpsys window | grep -E 'mCurrentFocus'
//왼쪽이 AppPackage, 오른쪽이 AppActivity

// 옵션 설정
const opts = {
  hostname: '172.20.10.6',
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    deviceName: "myphone",
    automationName: "UiAutomator2",
    appActivity: "com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity",
    appPackage: "com.google.android.youtube",
    udid: 'R3CM80YMLGT', //변경
  }
};

// const capabilities = {
//   platformName: 'Android',
//   'appium:app': 'storage:filename=main-skeleton-universal-release.apk', // The filename of the mobile app
//   'appium:deviceName': 'Android GoogleAPI Emulator',
//   'appium:deviceOrientation': 'portrait',
//   'appium:automationName': 'UiAutomator2',
//   'sauce:options': {
//     build: 'appium-build-4ZA5I',
//     name: '<your test name>',
//   },
// };


function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const client = await wdio.remote(opts);


  //com.android.vending 앱 실행
  client.launchApp()


  //좌표클릭 (x,y)

  await sleep(10000)

  client.elementClick("00000000-0000-000f-ffff-ffff00000164")
  await client.e
  await client.deleteSession();
}

main();


