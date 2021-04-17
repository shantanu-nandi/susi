import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { IPost } from '../_models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: IPost[] = [
    {
      postId: '1',
      title: 'Google will finally stop using controversial Irish and Dutch tax loopholes',
      description: 'The era of Google using a pair of controversial loopholes to save billions of dollars in taxes on overseas ad revenue is coming to a close, according to a new report from Reuters. In 2020, the company will no longer take advantage of the so-called “Double Irish” and “Dutch sandwich” loopholes, which allowed it and countless other corporations to shift money from Ireland to the Netherlands and Bermuda, sheltering billions from taxes in the process.',
      imageUrl: 'https://cdn.vox-cdn.com/thumbor/ldYwksPGCTnA2GYL6Wr7TESHuqg=/0x106:2040x1254/280x158/cdn.vox-cdn.com/uploads/chorus_image/image/66002668/acastro_180508_1777_google_IO_0003.0.jpg',
      thumbnailUrl: 'https://cdn.vox-cdn.com/thumbor/ldYwksPGCTnA2GYL6Wr7TESHuqg=/0x106:2040x1254/280x158/cdn.vox-cdn.com/uploads/chorus_image/image/66002668/acastro_180508_1777_google_IO_0003.0.jpg',
      createdBy: 'Zoe Schiffer',
      createdDate: new Date(2020, 0, 1).toString(),
      views: 100,
      category: { name: 'Web'},
      tags: [ 'Google', 'Web', 'Tax', 'Double Irish']
    },
    {
      postId: '2',
      title: 'New Apple patent imagines virtual speakers that can simulate sound from anywhere in the room',
      description: 'Apple has just been granted a patent — concerning virtual positioning of audio — that could eventually lay the groundwork for new, more immersive audio applications. It builds on a previous patent Apple filed last month that enabled users to hear where people are physically located in a room through special headphone tech. Today’s patent does exactly the same thing, but with built-in MacBook speakers.',
      imageUrl: 'https://cdn.vox-cdn.com/thumbor/5Uh6V6s2yM6xXbkFfIUg2lXZDas=/111x0:1000x500/280x158/cdn.vox-cdn.com/uploads/chorus_image/image/66002347/macbook_patent_speaker_virtual.0.jpg',
      thumbnailUrl: 'https://cdn.vox-cdn.com/thumbor/5Uh6V6s2yM6xXbkFfIUg2lXZDas=/111x0:1000x500/280x158/cdn.vox-cdn.com/uploads/chorus_image/image/66002347/macbook_patent_speaker_virtual.0.jpg',
      createdBy: 'Bijan Stephen',
      createdDate: new Date(2020, 0, 1).toString(),
      views: 200,
      category: { name: 'Virtual Speaker'},
      tags: [ 'Apple', 'Virtual', 'Speaker', 'Product']
    },
    {
      postId: '3',
      title: 'Smoke app brings parts of Valve’s Steam to the Apple Watch',
      description: 'For people who want to check in on their gaming achievements in Steam or stay up to date with the latest sales, this Apple Watch app has you covered. Smoke gives Apple Watch users access to their Steam account, but that doesn’t mean people have the ability to play games from their wrist. The app exists to let you stay up to date on gaming news and to see what friends are playing while you might be away from your PC. There’s an ability to save news articles that come up in the Apple Watch and read them in Smoke’s companion app for iOS, according to 9to5Mac.',
      imageUrl: 'https://cdn.vox-cdn.com/thumbor/H55Dj8IRm2ndPefwVf4cvRGirSE=/0x219:1000x782/280x158/cdn.vox-cdn.com/uploads/chorus_image/image/66002287/apple_watch.0.jpg',
      thumbnailUrl: 'https://cdn.vox-cdn.com/thumbor/H55Dj8IRm2ndPefwVf4cvRGirSE=/0x219:1000x782/280x158/cdn.vox-cdn.com/uploads/chorus_image/image/66002287/apple_watch.0.jpg',
      createdBy: 'Julia Alexander',
      createdDate: new Date(2020, 0, 1).toString(),
      views: 50,
      category: { name: 'Product'},
      tags: [ 'Apple', 'Watch', 'Smoke', 'Product', 'App']
    },
    {
      postId: '4',
      title: 'US Army bans soldiers from using TikTok',
      description: 'United States Army soldiers can no longer use TikTok on government-owned phones following a decision to ban the app. The move comes amidst ongoing worries that the video app owned by Beijing-based company ByteDance could compromise national security or be used to influence or surveil Americans.',
      imageUrl: 'https://cdn.vox-cdn.com/thumbor/VakHv8Bgt4ShGjo-1mR3veWhtXs=/0x276:4960x3066/280x158/cdn.vox-cdn.com/uploads/chorus_image/image/66002122/1196062798.jpg.0.jpg',
      thumbnailUrl: 'https://cdn.vox-cdn.com/thumbor/VakHv8Bgt4ShGjo-1mR3veWhtXs=/0x276:4960x3066/280x158/cdn.vox-cdn.com/uploads/chorus_image/image/66002122/1196062798.jpg.0.jpg',
      createdBy: 'Justine Calma',
      createdDate: new Date(2020, 0, 1).toString(),
      views: 180,
      category: { name: 'Product'},
      tags: [ 'TikTok', 'App', 'Army', 'US', 'Soldiers']
    },
    {
      postId: '5',
      title: 'No one is ready for California’s new consumer privacy law',
      description: 'The California Consumer Privacy Act goes into effect January 1st, and it doesn’t look like anyone, even the state of California itself, is totally ready. Draft regulations for enforcing the law are still being finalized at the state level, and questions about specific aspects of the most sweeping privacy regulation since the European Union’s General Data Protection Regulation (GDPR) are still not clear.',
      imageUrl: 'https://cdn.vox-cdn.com/thumbor/-3u5y6bq1rjMBZGYiOrCtEWl1Yc=/0x106:2040x1254/280x158/cdn.vox-cdn.com/uploads/chorus_image/image/66000672/acastro_190204_1777_privacy_0002.0.jpg',
      thumbnailUrl: 'https://cdn.vox-cdn.com/thumbor/-3u5y6bq1rjMBZGYiOrCtEWl1Yc=/0x106:2040x1254/280x158/cdn.vox-cdn.com/uploads/chorus_image/image/66000672/acastro_190204_1777_privacy_0002.0.jpg',
      createdBy: 'Kim Lyons',
      createdDate: new Date(2019, 11, 31).toString(),
      views: 500,
      category: { name: 'Law'},
      tags: [ 'California', 'Consumer', 'Privacy', 'Act', 'January']
    },
    {
      postId: '6',
      title: 'Go read this ‘Cloud Hopper’ hacking investigation by the WSJ',
      description: 'The global hacking campaign known as “Cloud Hopper” perpetrated by government-sponsored Chinese hackers was much worse than originally reported, according to an investigation by the Wall Street Journal you should read in full. The report says that “at least a dozen cloud providers” were affected, but focuses on HP to illustrate the severity of the intrusions and the tactics used to attack and defend.',
      imageUrl: 'https://cdn.vox-cdn.com/thumbor/9UHzbJOO5zA3HrozqBMqoxQ6GdI=/0x156:3000x1844/280x158/cdn.vox-cdn.com/uploads/chorus_image/image/66000401/acastro_190904_3642_security_privacy_package_0001.0.jpg',
      thumbnailUrl: 'https://cdn.vox-cdn.com/thumbor/9UHzbJOO5zA3HrozqBMqoxQ6GdI=/0x156:3000x1844/280x158/cdn.vox-cdn.com/uploads/chorus_image/image/66000401/acastro_190904_3642_security_privacy_package_0001.0.jpg',
      createdBy: 'Thomas Ricker',
      createdDate: new Date(2019, 11, 31).toString(),
      views: 60,
      category: { name: 'Hacking'},
      tags: [ 'Hacking', '‘Cloud', 'Hopper', 'Global', 'Investigation', 'WSJ']
    },
    {
      postId: '7',
      title: 'The automatic trash can is here',
      description: 'Townew is fitted with a Refill Ring that contains enough recyclable material to create 25 trash bags. Its touchless design opens the lid with a wave of the hand. When full, a button press on the front seals the bag, opens the top assembly for bag removal, then closes to pull a new bag into place. If the lid won’t close due to overloading, the trash can will automatically lift the top and seal the bag for removal.',
      imageUrl: 'https://cdn.vox-cdn.com/thumbor/UeKspuaVoe9i46OAqR1lsoOz1tQ=/45x0:756x400/280x158/cdn.vox-cdn.com/uploads/chorus_image/image/66000073/Townew_how_it_works.0.gif',
      thumbnailUrl: 'https://cdn.vox-cdn.com/thumbor/UeKspuaVoe9i46OAqR1lsoOz1tQ=/45x0:756x400/280x158/cdn.vox-cdn.com/uploads/chorus_image/image/66000073/Townew_how_it_works.0.gif',
      createdBy: 'Thomas Ricker',
      createdDate: new Date(2019, 11, 31).toString(),
      views: 39,
      category: { name: 'Product'},
      tags: [ 'Trash', 'Can', 'Automatic', 'Product', 'Recyclable', 'Material']
    },
    {
      postId: '8',
      title: 'Another director leaves the Uncharted movie',
      description: 'Deadline says Travis Knight, who most recently directed Transformers spinoff Bumblebee, had to drop from the Uncharted movie because of scheduling difficulties. The movie is set to star Tom Holland as protagonist Nathan Drake. Holland, however, is also committed to playing Spider-Man in the next Marvel iteration of series, which apparently begins shooting this summer. Deadline reports that Sony still plans to release the Uncharted movie, but with a new director and later release date. (It was originally slated for a December 18th, 2020 release.)',
      imageUrl: 'https://cdn.vox-cdn.com/thumbor/4QDr84d3B0V_HoPidf_L2DAyj8w=/0x0:1920x1080/280x158/cdn.vox-cdn.com/uploads/chorus_image/image/65998772/direct-feed-screenshot-4.0.0.jpg',
      thumbnailUrl: 'https://cdn.vox-cdn.com/thumbor/4QDr84d3B0V_HoPidf_L2DAyj8w=/0x0:1920x1080/280x158/cdn.vox-cdn.com/uploads/chorus_image/image/65998772/direct-feed-screenshot-4.0.0.jpg',
      createdBy: 'Jay Peters',
      createdDate: new Date(2019, 11, 30).toString(),
      views: 120,
      category: { name: 'News'},
      tags: [ 'News', 'Movie', 'Director', 'Leaves', 'Travis', 'Knight']
    }
  ];

  constructor() { }

  getAll() {
    return of(this.posts
      .sort((p1, p2) => Date.parse(p2.createdDate) - Date.parse(p1.createdDate)));
  }

  get(id: string) {
    const index = this.posts.findIndex(p => p.postId === id);
    return of(index !== -1 ? this.posts[index] : null);
  }

  getPopularPosts() {
    return of(this.posts
      .sort((p1, p2) => p1.views - p2.views)
      .slice(this.posts.length - 3));
  }

  getRecentPosts() {
    return of(this.posts
      .sort((p1, p2) => Date.parse(p2.createdDate) - Date.parse(p1.createdDate))
      .slice(0, 3));
  }

  create(post:IPost) {
    post.postId = '' + (this.posts.length + 1);
    this.posts.unshift(post);
    return of(post);
  }
}
