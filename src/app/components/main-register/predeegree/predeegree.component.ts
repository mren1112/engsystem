import { Component, LOCALE_ID, OnInit, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiImplementsFunctionCheckService } from '../functions/implement-function';
import { CookieAccepted } from '../policy-detail/cookies.interface';
import { PublicDialogComponent } from '../publicdialog/dialog.component';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { RegisFileUpload } from 'src/app/interfaces/registers/upload-files.interface';
import { ThaiProvinceService } from 'src/app/services/ThaiProvince.service';
import { ThaiProvince } from 'src/app/interfaces/registers/thai-provinces.interface';
import { FacultyService } from 'src/app/services/student-register/faculty.service';
import { StudentRegister } from 'src/app/interfaces/registers/student-resgister.interface';
import { FileUploadService } from 'src/app/services/student-register/FileUpload.formData.service';
declare var $: any;

@Component({
  selector: 'app-predeegree',
  templateUrl: './predeegree.component.html',
  styleUrls: ['./predeegree.component.scss'],
})
export class PredeegreeComponent implements OnInit {
  registerForm!: FormGroup;

  _FileUpload: RegisFileUpload = <RegisFileUpload>{};
  file: any;
  message = '';
  fd = new FormData();
  //File lists
  fileCitizen: any;
  fileProfile: any;
  filePayment: any;
  fileGraduate: any;
  numFile: number = 0;
  isfileCitizen: boolean = false;
  isfileProfile: boolean = false;
  isfileGraduate: boolean = false;

  imgProfileName = '';
  imgCitizenName = '';
  pdfGraduateName = '';

  name: any;
  myDate: any = new Date();
  df = 'mm/dd/yy';
  messege: CookieAccepted[] = [
    {
      MESSEGE_HEADER: '',
      MESSEGE_TEXT1: '',
      MESSEGE_TEXT2: '',
      MESSEGE_STATUS: '',
    },
  ];

  //--- check validators ----

  public inpCitizen: boolean = false;
  public inpTelNum: boolean = false;

  //------------------------------

  //--- array check -----
  public arrCntFiles = [];
  public CntFiles: number = 0;
  //------------------------------

  //--- section activity ---------
  public section1: boolean = true;
  public section2: boolean = true;
  public section3: boolean = true;
  public section4: boolean = true;
  public section5: boolean = true;

  public prevButton: boolean = false;
  public nextButton: boolean = true;
  public statusButton: boolean = true;

  //------------------------------

  // ----- TEST --------------------
  MAJOR = '';
  ct = '';
  citizenid = '';
  prename = '';
  snameTH = '';
  lnameTH = '';
  snameEN = '';
  lnameEN = '';
  birthDate = '';

  //------------- thai province -------------------
  thaiProvince: ThaiProvince = <ThaiProvince>{
    district: '',
    amphoe: '',
    province: '',
    zipcode: '',
    district_code: '',
    amphoe_code: '',
    province_code: '',
  };

  //--------------- faclty ----------------------
  public faculties: any;
  public regData: any;
  /*faculties: faculties = <faculties>{
    FACULTY_NO: '',
    FACULTY_NAME_THAI: '',
    FACULTY_NAME_ENG: '',
    FACULTY_NAME_SHORT: '',
    CURR_NO: 0,
    MAJOR_NAME_THAI: '',
    MAJOR_NAME_ENG: '',
    ISCED_ID: 0,
    PROGRAM_ID: '',
    ID_MAJOR: 0,
  };*/

  //------------------------------------------------

  public arrdata = [];
  public dataAddress: any;
  public address = '';
  public detail = '';
  public district = '';
  public amphoe = '';
  public province = '';
  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private router: Router,
    private _bottomSheet: MatBottomSheet,
    private apiImpFunctionCheck: ApiImplementsFunctionCheckService,
    private thaiProvincesService: ThaiProvinceService,
    private facultyService: FacultyService,
    private uploadService: FileUploadService
  ) {}

  async openPolicyDialog() {
    this.dialog.open(PublicDialogComponent, {
      width: '950px',
      data: {
        header: this.messege[0].MESSEGE_HEADER,
        txt: this.messege[0].MESSEGE_TEXT1,
        txt2: this.messege[0].MESSEGE_TEXT2,
      },
      disableClose: true,
    });
    sessionStorage.setItem('xdialog', 'Y');
  }

  ngOnInit(): void {
    //this.openPolicyDialog();
    this.registerForm = this.formBuilder.group({
      major: ['', Validators.required],
      //--------  section2 --------------
      citizenid: ['', Validators.required],
      prename: ['', Validators.required],
      snameTH: ['', Validators.required],
      lnameTH: ['', Validators.required],
      snameEN: ['', Validators.required],
      lnameEN: ['', Validators.required],
      birthDate: ['', Validators.required],
      //--------  section3 --------------
      addrid: ['', Validators.required],
      addr: ['', Validators.required],
      district: ['', Validators.required],
      amphoe: ['', Validators.required],
      province: ['', Validators.required],
      zipcode: ['', Validators.required],
      telno: ['', Validators.required],
      //---------- section 4 ----------------
    });

    this.thaiProvincesService.getZipcode().subscribe((data) => {
      this.arrdata = data;
      // console.log(data)
    });

    this.getFaculty();
    //this.setRegisterData();
  }

  get f() {
    return this.registerForm.controls;
  }

  onSelectMethod(event: any) {
    let d = new Date(Date.parse(event));
    this.myDate = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear() + 543}`;
  }

  //------- get faculty and major -------------------------
  private getFaculty() {
    this.facultyService.fetcFacultyAndMajor().subscribe((res) => {
      this.faculties = res;
      // console.log(this.faculties);
    });
  }
  //-------------------------------------------------------

  onSelectSection(val: number) {
    // console.log(val);
    //console.log(' --- ' + this.f['birthDate'].value);
    if (val === 1) {
      this.section2 = true;
    } else if (val === 2) {
      this.section3 = true;
    } else if (val === 3) {
      this.section4 = true;
    }
  }

  // section activity ---------------
  public cntSection = 0;
  btNextSection() {
    if (this.f['major'].value.length != 0) {
      this.cntSection++;
      this.section2 = true;
      this.prevButton = true;
      this.section1 = false;
    }
    console.log(this.cntSection);
  }

  btPrevSection() {
    if (this.cntSection == 1) {
      /*--this.cntSection;
      this.section2 = false;
      this.prevButton = false;
      this.section1 = true;*/
    }
    console.log(this.cntSection);
  }

  onChangeButton() {
    if (this.f['major'].value.length != 0) {
      this.statusButton = false;
    }
  }
  //----------------------------------

  async validNationalID(id: any) {
    let citizenIdCheck = await this.apiImpFunctionCheck.validNationalID(id);
    if (citizenIdCheck === true) {
      this.inpCitizen = citizenIdCheck;
    }
  }

  async validateTelNum(telNo: any) {
    let telNumCheck = await this.apiImpFunctionCheck.validateTelNum(telNo);
    if (telNumCheck === true) {
      this.inpTelNum = telNumCheck;
    }
  }

  openBottomSheet(): void {
    const bottomSheetRef = this._bottomSheet.open(ButtomSheetUploadComponent);
    bottomSheetRef.afterDismissed().subscribe((dataFromChild) => {
      console.log(dataFromChild);
    });
  }

  onFilechange(event: any) {
    //console.log(event.target.files[0]);
    this._FileUpload = event.target.files[0];
    console.log(this._FileUpload);
    this.file = event.target.files[0];
    // this.file = this._FileUpload.CITIZEN_IMG_PATH;
  }

  upload() {
    if (this.file) {
      /*this.uploadService.uploadfile(this.file).subscribe(resp => {
        alert("Uploaded")
      })*/
      alert(this.file);
    } else {
      alert('Please select a file first');
    }
  }
  // -=======================================

  async onChangeEvent(ev: any) {
    let _key = ev.target.value;

    // console.log(_key);

    if (_key.length > 3) {
      let res = await this.arrdata.filter((zip: any) => {
        return (
          zip.amphoe.indexOf(_key) > -1 ||
          zip.province.indexOf(_key) > -1 ||
          zip.district.indexOf(_key) > -1 ||
          zip.zipcode.toString().indexOf(_key) > -1
        );
      });
      this.dataAddress = res;

      // this.txt1=this.dataAddress;
      console.log(this.dataAddress);
    } else {
      return (this.dataAddress = []);
    }
  }

  addAddress(data: any) {
    this.thaiProvince.province = data.province;
    this.thaiProvince.province_code = data.province_code;
    this.thaiProvince.amphoe = data.amphoe;
    this.thaiProvince.amphoe_code = data.amphoe_code;
    this.thaiProvince.zipcode = data.zipcode;
    this.thaiProvince.district = data.district;
    this.thaiProvince.district_code = data.district_code;

    this.amphoe = data.amphoe;
    console.log(this.thaiProvince.amphoe);

    this.dataAddress = [];
  }
  // -=======================================
  percent = 20;

  onPercentChange(percent: number) {
    console.log('here');

    this.percent = percent;
  }
  //-=========================================

  // ----------- SET DATA -----------------------

  async setRegisterData() {
    let setData: StudentRegister = {
      REGIS_ID: this.f['major'].value,
      CITIZEN_ID: this.f['major'].value,
      STUIDENT_NAME_THAI: this.f['major'].value,
      STUIDENT_LASTNAME_THAI: this.f['major'].value,
      STUIDENT_NAME_ENG: this.f['major'].value,
      STUIDENT_LASTNAME_ENG: this.f['major'].value,
      BIRTH_DATE: this.f['major'].value,
      FACULTY_NO: this.f['major'].value,
      MAJOR_NO: this.f['major'].value,
      ISCED_ID: this.f['major'].value,
      PROGRAM_ID: this.f['major'].value,
      ID_MAJOR: this.f['major'].value,
      INSERT_DATE: this.f['major'].value,
      SEMESTER: this.f['major'].value,
      YEAR: this.f['major'].value,
      EDIT_DATE: this.f['major'].value,
      USER_EDIT: this.f['major'].value,
      EDU_NAME: this.f['major'].value,
      MAJOR_NAME: this.f['major'].value,
      EDU_END: this.f['major'].value,
      EDU_DEGREE: this.f['major'].value,
      EDU_AMPHOE: this.f['major'].value,
      EDU_AMPHOE_CODE: this.f['major'].value,
      EDU_PROVINCE: this.f['major'].value,
      EDU_PROVINCE_CODE: this.f['major'].value,
      EDU_ZIPCODE: this.f['major'].value,
      EDU_TELEPHONE_NO: this.f['major'].value,
      DESCRIPTINE: this.f['major'].value,
      ADDRESS: this.f['major'].value,
      DISTRICT: this.f['major'].value,
      DISTRICT_CODE: this.f['major'].value,
      AMPHOE: this.f['major'].value,
      AMPHOE_CODE: this.f['major'].value,
      PROVINCE: this.f['major'].value,
      PROVINCE_CODE: this.f['major'].value,
      ZIPCODE: this.f['major'].value,
      TELEPHONE_NO: this.f['major'].value,
      CITIZEN_IMG_PATH: this.f['major'].value,
      EDU_FILE_PATH: this.f['major'].value,
      PHOTO_PATH: this.f['major'].value,
      PAYMENT_IMG_PATH: this.f['major'].value,
    };
    console.log('set -- ' + JSON.stringify(setData.MAJOR_NO));
  }
  // --------------------------------------------

  // ------------- upload --------------------------

  onFileImgProfileChanged(event: any) {
    let tmp = event.target.files[0];
    if (!event) {
      return false;
    }
    if (
      tmp.name.length <= 0 ||
      !this.apiImpFunctionCheck.ValidateImageFile(tmp.name)
    ) {
      tmp = null;
      alert('Selected file format is not supported');
      this.imgProfileName = 'ชนิดไฟล์ jpg, png เท่านั้น';
      return false;
    }
    if (tmp.size > 5000000) {
      tmp = null;
      alert('not supported');
      this.pdfGraduateName = 'ขนาดไฟลต้องไม่เกิน 5 MB.';
      return false;
    } else {
      this.fileProfile = tmp;
      this.isfileProfile = true;
      this.imgProfileName = tmp.name;
      //console.log('file1 ' + tmp.type);
    }
  }

  onFileImgCitizenChanged(event: any) {
    let tmp = event.target.files[0];
    if (!event) {
      return false;
    }
    if (
      tmp.name.length <= 0 ||
      !this.apiImpFunctionCheck.ValidateImageFile(tmp.name)
    ) {
      tmp = null;
      alert('Selected file format is not supported');
      this.imgCitizenName = 'ชนิดไฟล์ jpg,png เท่านั้น';
      return false;
    }
    if (tmp.size > 5000000) {
      tmp = null;
      alert('not supported');
      this.pdfGraduateName = 'ขนาดไฟลต้องไม่เกิน 5 MB.';
      return false;
    } else {
      this.fileCitizen = tmp;
      this.isfileCitizen = true;
      this.imgCitizenName = tmp.name;
      console.log('file2 ' + this.imgCitizenName);
    }
  }

  onFileImgPaymentChanged(event: any) {
    if (!event) {
      return false;
    }
    if (event.target.files.length <= 0) {
      return false;
    }
    this.filePayment = event.target.files[0];
    console.log('file1 ' + event.target.files[0].name);
  }

  onFilePdfGraduateChanged(event: any) {
    let tmp = event.target.files[0];
    if (!event) {
      return false;
    }
    if (
      tmp.name.length <= 0 ||
      !this.apiImpFunctionCheck.ValidatePdfFile(tmp.name)
    ) {
      tmp = null;
      alert('Selected file format is not supported');
      this.pdfGraduateName = 'ชนิดไฟล์ pdf เท่านั้น';
      return false;
    }

    if (tmp.size > 20000000) {
      tmp = null;
      alert('not supported');
      this.pdfGraduateName = 'ขนาดไฟลต้องไม่เกิน 20 MB.';
      return false;
    } else {
      this.fileGraduate = tmp;
      this.isfileGraduate = true;
      this.pdfGraduateName = tmp.name;
      // console.log('file3 ' + tmp.size);
    }
  }

  uploadFile() {
    let res;
    if (this.isfileProfile && this.isfileProfile && this.isfileGraduate) {
      if (this.fileProfile !== undefined) {
        this.fd = new FormData();
        this.fd.append('file', this.fileProfile, '555.jpg');
        this.fd.append('tagetUpload', '1');
        res = this.uploadService.onUploadFile(this.fd);
        console.log('file1 1');
      }
      if (this.fileCitizen !== undefined) {
        this.fd = new FormData();
        this.fd.append('file', this.fileCitizen);
        this.fd.append('tagetUpload', '2');
        res = this.uploadService.onUploadFile(this.fd);
        console.log('file1 2');
      }
      if (this.fileGraduate !== undefined) {
        this.fd = new FormData();
        this.fd.append('file', this.fileGraduate);
        this.fd.append('tagetUpload', '3');
        res = this.uploadService.onUploadFile(this.fd);
        console.log('file1 3');
      }
    } else {
      alert('err');
    }

    /*const fd = new FormData();
  fd.append('file', this.file);
  fd.append('tagetUpload', '2');
  console.log('file ' + fd.get('file'));*/
    this.message = '';
    /*await this.uploadService.uploadFile(this.fd).subscribe(
    (res) => {
      this.message = res + '';
    },
    (err) => {
      console.log(err);
      this.message = 'Failed';
    }
  );*/
  }

  //-------------------------------------------------
}

function getLocale() {
  const locale = 'th';
  return `${locale}-u-ca-gregory`;
}
providers: [{ provide: LOCALE_ID, useFactory: getLocale }];

@Component({
  selector: './buttom-sheet-upload.component.html',
  templateUrl: './buttom-sheet-upload.component.scss',
})
export class ButtomSheetUploadComponent {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<ButtomSheetUploadComponent>
  ) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
