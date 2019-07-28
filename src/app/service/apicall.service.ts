import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
homeData:any;
apiToken:any;
  constructor(private http:HttpClient) { 
this.homeData={
	"email": "mayankmittal@intugine.com"
};
this.apiToken="tTU3gFVUdP";
  }
getData(){
  return this.http.post<Response>("https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/mayank", this.homeData, { headers: { "Authorization": "Bearer "+this.apiToken }});
}

}
