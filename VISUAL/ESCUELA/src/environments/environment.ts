// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    url_user_login : 'http://localhost:8080/escuela/user/login',
    url_user_insert : 'http://localhost:8080/escuela/user',
    url_student_insert : 'http://localhost:8080/escuela/student',
    url_student_find_all : 'http://localhost:8080/escuela/student',
    url_student_delete : 'http://localhost:8080/escuela/student',
    url_student_report : 'http://localhost:8080/escuela/student/{id}/report',
    token_url_menu : 'TI4kPiQyT313oG8knnPXd6mzx29FQmBCa01gaATr',
    code_system : 25
  }
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
