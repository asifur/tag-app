import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { TwitterService } from '../services/twitter.service';

@Component({
  selector: 'app-tweet-search',
  templateUrl: './tweet-search.component.html',
  styleUrls: ['./tweet-search.component.css']
})
export class TweetSearch implements OnInit {
  tagList: any;
  tagListfromStorage: any;
  searchKeyWord: string;
  tweetSearch_Pending: boolean = false;
  tweetSearch_creationTime_lebel: string = "Date posted";
  tweetSearch_Name_Label: string = "Name";
  tweetSearch_Location_Label: string = "Location";
  tweetSearch_Tweet_Label: string = "Tweet";
  tweetSearch_Header_Text: string = 'Twitter hashtags finder';
  tweetSearch_Intro_Text: string = 'This is a test project for find hashtag of  twitter. I have limit 10 tweets result from the API to return. The backend is done on .Net core web api. I have tested both API and angular project in local machine. To accept request from cross platform I have updated the .Net API to cors enable for any site. Though I could have mention the site url and port too. This may not be a complete soution and may need enhancement. I have shown tweet text, user name, user profile image, location and date posted. There are a lot of information available the response but I am using just few of those just to display in a single page. Thanks';
  tweetSearch_Searching_Text: string = 'Searching hashtags by';
  tweetSearch_Searched_Text: string = 'Searched hashtags by';
  tweetSearch_Search_Button_Text: string = 'Find hash tag';
  tweetSearch_Search_Error_Text: string = 'Find hash tag';
  tweetSearch_NotFound: string = 'Tag not found';
  constructor(private twitterService: TwitterService) { }

  ngOnInit() {
    if (localStorage.key) {
      this.searchKeyWord = localStorage.getItem('keyword');
      this.tagList = JSON.parse(localStorage.getItem('tagList'));
    }
  }

  findTwitterTag(): void {
    this.tweetSearch_Pending = true;
    this.twitterService.getTweets(this.searchKeyWord)
      .subscribe(
        tagList => {
          this.tweetSearch_Pending = false;
          this.tagList = tagList;
          localStorage.removeItem('tagList');
          localStorage.removeItem('keyword');
          localStorage.setItem('keyword', this.searchKeyWord);
          localStorage.setItem('tagList', JSON.stringify(this.tagList));
          console.log(this.tagList);
        }
      )
  }

  onKey(event: any) { // without type info
    this.searchKeyWord = event.target.value;
  }


}
