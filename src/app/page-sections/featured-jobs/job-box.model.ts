export class JobBoxModel {
   imagePath: string;
   jobTitle: string;
   jobPlace: string;
   timePassed: number;
   jobType: string;
   jobStatus: string;
   jobSalaryMin: number;
   jobSalaryMax: number;

  constructor(imagePath: string,
              jobTitle: string,
              timePassed: number,
              jobType: string,
              jobPlace: string,
              jobStatus: string,
              jobSalaryMin: number,
              jobSalaryMax: number) {
    this.imagePath = imagePath;
    this.jobType = jobType;
    this.jobStatus = jobStatus;
    this.jobPlace = jobPlace;
    this.jobTitle = jobTitle;
    this.jobSalaryMin = jobSalaryMin;
    this.jobSalaryMax = jobSalaryMax;
    this.timePassed = timePassed;
  }

}
