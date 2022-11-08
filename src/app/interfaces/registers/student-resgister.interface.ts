export interface StudentRegis {
  REGIS_ID: string;
  CITIZEN_ID: string;
  STUIDENT_NAME_THAI: string;
  STUIDENT_LASTNAME_THAI: string;
  STUIDENT_NAME_ENG: string;
  STUIDENT_LASTNAME_ENG: string;
  BIRTH_DATE: string;
  INSERT_DATE: string;
  SEMESTER: string;
  YEAR: string;
}


export interface StudentRegisDetail {
  CITIZEN_ID: string;
  FACULTY_NO: string;
  MAJOR_NO: string;
  ISCED_ID: string;
  PROGRAM_ID: string;
  ID_MAJOR: string;
  INSERT_DATE: string;
  SEMESTER: string;
  YEAR: string;
  EDIT_DATE: string;
  USER_EDIT: string;
}

export interface StudentEducateDetail {
  CITIZEN_ID: string;
  EDU_NAME: string;
  MAJOR_NAME: string;
  EDU_END: string;
  EDU_DEGREE: string;
  AMPHOE: string;
  AMPHOE_CODE: string;
  PROVINCE: string;
  PROVINCE_CODE: string;
  ZIPCODE: string;
  EDU_TELEPHONE_NO: string;
  DESCRIPTINE: string;
  INSERT_DATE: string;
  SEMESTER: string;
  YEAR: string;
}

export interface StudentAddress {
  CITIZEN_ID: string;
  ADDRESS: string;
  DISTRICT: string;
  DISTRICT_CODE: string;
  AMPHOE: string;
  AMPHOE_CODE: string;
  PROVINCE: string;
  PROVINCE_CODE: string;
  ZIPCODE: string;
  TELEPHONE_NO: string;
  EDIT_DATE: string;
  USER_EDIT: string;
  INSERT_DATE: string;
  SEMESTER: string;
  YEAR: string;
}

export interface StudentRegister {
  REGIS_ID: string;
  CITIZEN_ID: string;
  STUIDENT_NAME_THAI: string;
  STUIDENT_LASTNAME_THAI: string;
  STUIDENT_NAME_ENG: string;
  STUIDENT_LASTNAME_ENG: string;
  BIRTH_DATE: string;
  FACULTY_NO: string;
  MAJOR_NO: string;
  ISCED_ID: string;
  PROGRAM_ID: string;
  ID_MAJOR: string;
  INSERT_DATE: string;
  SEMESTER: string;
  YEAR: string;
  EDIT_DATE: string;
  USER_EDIT: string;
  EDU_NAME: string;
  MAJOR_NAME: string;
  EDU_END: string;
  EDU_DEGREE: string;
  EDU_AMPHOE: string;
  EDU_AMPHOE_CODE: string;
  EDU_PROVINCE: string;
  EDU_PROVINCE_CODE: string;
  EDU_ZIPCODE: string;
  EDU_TELEPHONE_NO: string;
  DESCRIPTINE: string;
  ADDRESS: string;
  DISTRICT: string;
  DISTRICT_CODE: string;
  AMPHOE: string;
  AMPHOE_CODE: string;
  PROVINCE: string;
  PROVINCE_CODE: string;
  ZIPCODE: string;
  TELEPHONE_NO: string;
  CITIZEN_IMG_PATH: string;
  EDU_FILE_PATH: string;
  PHOTO_PATH: string;
  PAYMENT_IMG_PATH: string;
}
