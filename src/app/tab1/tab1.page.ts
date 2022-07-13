import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../shared/models/post';
import {AppState} from '../shared/store/app-state';
import {Store} from '@ngrx/store';
import {selectCurrentUser} from '../login/store/login.selectors';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public posts: Post[] = [];

  constructor(private httpClient: HttpClient, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    combineLatest([this.store.select(selectCurrentUser), this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts')]).subscribe(
      result => {
        this.posts = result[1].filter(post => post.userId !== result[0][0].id);
      }
    );
  }


}
