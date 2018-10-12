export default class DoctorProfile {
  constructor(practiceData) {
    this.name = practiceData.practices[0].name;
  }
}
