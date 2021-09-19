import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  [x: string]: any;


  httpClient: any;
  handleError: any;
  url = "http://localhost:8080/jpaCall";
  constructor(private http: HttpClient) { }

  public doRegistration(user: any) {
    debugger;
    return this.http.post("http://localhost:8080/jpaCall/users", user, { responseType: 'text' as 'json' })

  }
  public doFetch(user: any) {
    return this.http.get("http://localhost:8080/jpaCall/getDetail", user)

  }
  public doUpdate(user: any) {
    return this.http.get("http://localhost:8080/jpaCall/subscribers", user)

  }
  public doDelete(employeeDetailId: any) {
    return this.http.put("http://localhost:8080/jpaCall/deletedata", employeeDetailId)

  }
  uploadFile(formData: FormData) {
    return this.http.post("http://localhost:8080/jpaCall/uploadFile", formData)
  }

  downloadFile(fileName: any) {
    return this.http.get(this.url + '/downloadFile?fileName=' + fileName, {
      responseType: 'blob'
    })
  }
  viewFile(fileName: any) {
    return this.http.get(this.url + '/viewFile?fileName=' + fileName)


  }
}
