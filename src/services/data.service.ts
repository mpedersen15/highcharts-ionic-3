export class DataService {
  private pieData = [100, 50, 200, 25, 75, 150];

  processData;
  trendData;
  profileData;
  sleepCount;
  currentDataSet = 0;

  
    // username: "",
    // name: "",
    // email: "",
    // password: "",
    // password2: "",
    // dataCount: "",
    // dataLastLoaded: 10,
    // data: [],
    // currentData: 0,
    // loggedIn: false,
    // trendData: {
    //   avgSleepLvlDeep: 0,
    //   avgSleepLvlLight: 0,
    //   avgSleepLvlRestless: 0,
    //   avgSleepLvlAwake: 0,
    //   avgSleepLvlNoEEG: 0,
    //   avgSleepLvlRem: "",
    //   avgSleepDuration: "",
    //   avgTimeToBed: "",
    //   avgWakeTime: "",
    //   avgQualityScore: 0,
    //   avgRating: 0,
    //   avgDayNum: "",
    //   daySleepLvlDeep: [],
    //   daySleepLvlLight: [],
    //   daySleepLvlRestless: [],
    //   daySleepLvlAwake: [],
    //   daySleepLvlNoEEG: [],
    //   daySleepLvlRem: [],
    //   daySleepDuration: [],
    //   dayTimeToBed: [],
    //   dayWakeTime: [],
    //   dayQualityScore: [],
    //   dayRating: [],
    //   dayYear: [],
    //   wkSleepLvlDeep: [],
    //   wkSleepLvlLight: [],
    //   wkSleepLvlRestless: [],
    //   wkSleepLvlAwake: [],
    //   wkSleepLvlNoEEG: [],
    //   wkSleepLvlRem: [],
    //   wkSleepDuration: [],
    //   wkTimeToBed: [],
    //   wkWakeTime: [],
    //   wkQualityScore: [],
    //   wkRating: [],
    //   wkDayNum: [],
    //   wkReset: [],
    //   wkYear: [],
    //   moSleepLvlDeep: [],
    //   moSleepLvlLight: [],
    //   moSleepLvlRestless: [],
    //   moSleepLvlAwake: [],
    //   moSleepLvlNoEEG: [],
    //   moSleepLvlRem: [],
    //   moSleepDuration: [],
    //   moTimeToBed: [],
    //   moWakeTime: [],
    //   moQualityScore: [],
    //   moRating: [],
    //   moDayNum: [],
    //   moReset: [],
    //   moYear: []
  getPieData(){
    return this.pieData.slice(0);
  }
}
