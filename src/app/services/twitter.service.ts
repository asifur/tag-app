import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class TwitterService {
 
  twitterService_api_url: string = 'https://localhost:44381';
     
     constructor(private http: HttpClient) { }
    
     getTweets(key: string) {
        return this.http
          .get<any[]>(this.twitterService_api_url+'/api/Tweets?keyword='+key)
          .pipe(map(data => data));     
      }
    
   }