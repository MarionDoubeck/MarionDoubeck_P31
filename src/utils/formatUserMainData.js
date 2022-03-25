export class formatUserMainData {
  constructor(res) {
    this.id = res.id;
    this.firstName = res.userInfos.firstName;
    this.lastName = res.userInfos.lastName;
    this.age = res.userInfos.age;
    this.todayScore = res.todayScore;
    this.score = res.score;
    this.calorieCount = res.keyData.calorieCount;
    this.proteinCount = res.keyData.proteinCount;
    this.carbohydrateCount = res.keyData.carbohydrateCount;
    this.lipidCount = res.keyData.lipidCount;
  }
}
export class formatUserActivity {
  constructor(res) {
    this.id = res.userId;
    this.sessions = res.sessions;
  }
}
export class formatUserAverageSessions {
  constructor(res) {
    this.id = res.userId;
    this.sessions = res.sessions;
  }
}
export class formatUserPerformance {
  constructor(res) {
    this.id = res.userId;
    this.kind = res.kind;
    this.data = res.data;
  }
}