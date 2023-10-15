import {IconDefinition} from "@fortawesome/free-brands-svg-icons";

export class JobCategoryModel {
  constructor(public icon: IconDefinition,
              public headingTitle: string,
              public jobNumber: number) {
  }
}
