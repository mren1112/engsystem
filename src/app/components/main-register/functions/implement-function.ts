import { Injectable } from '@angular/core'; 

@Injectable()
export class ApiImplementsFunctionCheckService {
  constructor() {}

  // function check input ditizen card id
  public validNationalID = (id: any): boolean => {
    if (id.length != 13) {
      // console.log('f1');
      return false;
    } else {
      // STEP 1 - get only first 12 digits
      for (var i = 0, sum = 0; i < 12; i++) {
        // STEP 2 - multiply each digit with each index (reverse)
        // STEP 3 - sum multiply value together
        sum += parseInt(id.charAt(i)) * (13 - i);
      }
      // STEP 4 - mod sum with 11
      let mod = sum % 11;
      // STEP 5 - subtract 11 with mod, then mod 10 to get unit
      let check = (11 - mod) % 10;
      // STEP 6 - if check is match the digit 13th is correct
      if (check == parseInt(id.charAt(12))) {
        //console.log('t');
        return true;
      } else {
        //console.log('f2');
        return false;
      }
    }
  };

  // function chek input telephone no.
  public validateTelNum = (telno: any): boolean => {
    if (telno.length < 10 || telno[0] != '0') {
      //console.log('f1');
      return false;
    } else {
      //console.log('t');
      return true;
    }
  };

/*
 validNationalID(id: any) {
    if (id.length != 13) {
      //console.log('f1');
      return (this.inpCitizen = false);
    } else {
      // STEP 1 - get only first 12 digits
      for (var i = 0, sum = 0; i < 12; i++) {
        // STEP 2 - multiply each digit with each index (reverse)
        // STEP 3 - sum multiply value together
        sum += parseInt(id.charAt(i)) * (13 - i);
      }
      // STEP 4 - mod sum with 11
      let mod = sum % 11;
      // STEP 5 - subtract 11 with mod, then mod 10 to get unit
      let check = (11 - mod) % 10;
      // STEP 6 - if check is match the digit 13th is correct
      if (check == parseInt(id.charAt(12))) {
        //console.log('t');
        return (this.inpCitizen = true);
      } else {
        //console.log('f2');
        return (this.inpCitizen = false);
      }
    }
  }
*/


ValidateImageFile(name: String) {
  var ext = name.substring(name.lastIndexOf('.') + 1);
  if (ext.toLowerCase() == 'png' || ext.toLowerCase() == 'jpg') {
    return true;
  } else {
    return false;
  }
}

ValidatePdfFile(name: String) {
  var ext = name.substring(name.lastIndexOf('.') + 1);
  if (ext.toLowerCase() == 'pdf') {
    return true;
  } else {
    return false;
  }
}
}
