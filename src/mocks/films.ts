interface FilmInfo {
  id: number;
  title: string;
  year: number;
  summary: string;
  short_summary: string;
  genres: string;
  imdb_id: string;
  runtime: number;
  youtube_trailer: string;
  rating: string;
  movie_poster: string;
  director: string;
  writers: string;
  cast: string;
}

const films = [
  {
    id: 88,
    title: "The Greatest Showman",
    year: 2017,
    summary: "Orphaned, penniless but ambitious and with a mind crammed with imagination and fresh ideas, the American Phineas Taylor Barnum will always be remembered as the man with the gift to effortlessly blur the line between reality and fiction. Thirsty for innovation and hungry for success, the son of a tailor will manage to open a wax museum but will soon shift focus to the unique and peculiar, introducing extraordinary, never-seen-before live acts on the circus stage. Some will call Barnum's wide collection of oddities, a freak show; however, when the obsessed showman gambles everything on the opera singer Jenny Lind to appeal to a high-brow audience, he will somehow lose sight of the most important aspect of his life: his family. Will Barnum risk it all to be accepted?",
    short_summary: "Celebrates the birth of show business, and tells of a visionary who rose from nothing to create a spectacle that became a worldwide sensation.",
    genres: "Biography, Drama, Musical, Romance",
    imdb_id: "tt1485796",
    runtime: 105,
    youtube_trailer: "https://youtu.be/AXCTMGYUg9A",
    rating: "07-Aug",
    movie_poster: "https://hydramovies.com/wp-content/uploads/2018/04/The-Greatest-Showman-Movie-Poster.jpg",
    director: "Michael Gracey",
    writers: "Jenny Bicks",
    cast: "Hugh Jackman, Michelle Williams"
  },
  {
    id: 110,
    title: "Star Wars: The Last Jedi",
    year: 2017,
    summary: "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.",
    short_summary: "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.",
    genres: "Action, Adventure, Fantasy, Sci-Fi",
    imdb_id: "tt2527336",
    runtime: 152,
    youtube_trailer: "https://youtu.be/Q0CbN8sfihY",
    rating: "07-Apr",
    movie_poster: "https://hydramovies.com/wp-content/uploads/2018/04/Star-Wars-The-Last-Jedi-Movie-Poster.jpg",
    director: "Rian Johnson",
    writers: "Rian Johnson",
    cast: "Daisy Ridley, John Boyega, Mark Hamill"
  },
  {
    id: 117,
    title: "Pitch Perfect 3",
    year: 2017,
    summary: "After the highs of winning the World Championships, the Bellas find themselves split apart and discovering there aren't job prospects for making music with your mouth. But when they get the chance to reunite for an overseas USO tour, this group of awesome nerds will come together to make some music, and some questionable decisions, one last time.",
    short_summary: "Following their win at the world championship, the now separated Bellas reunite for one last singing competition at an overseas USO tour, but face a group who uses both instruments and voices.",
    genres: "Comedy, Music",
    imdb_id: "tt4765284",
    runtime: 93,
    youtube_trailer: "https://youtu.be/aVsOXRgjeeU",
    rating: 6,
    movie_poster: "https://hydramovies.com/wp-content/uploads/2018/04/Pitch-Perfect-3-Movie-Poster.jpg",
    director: "Trish Sie",
    writers: "Kay Cannon",
    cast: "Anna Kendrick, Rebel Wilson"
  },
  {
    id: 139,
    title: "I, Tonya",
    year: 2017,
    summary: "From the proverbial wrong side of the tracks in Portland, Oregon, former competitive figure skater Tonya Harding was never fully accepted in the figure skating community for not inherently being the image of grace, breeding and privilege that the community wanted to portray, despite she being naturally gifted in the sport athletically. Despite ultimately garnering some success in figure skating being national champion, a world championship medalist, an Olympian, and being the first American woman to complete a Triple Axel in competition, she is arguably best known for her association to \"the incident\: the leg bashing on January 6, 1994 of her competitor, Nancy Kerrigan, who, unlike Tonya, was everything that the figure skating community wanted in their representatives. Her association to that incident led to Tonya being banned from competitive figure skating for life. Tonya's story from the beginning of her figure skating life at age four to the aftermath of the incident is presented...",
    short_summary: "Competitive ice skater Tonya Harding rises amongst the ranks at the U.S. Figure Skating Championships, but her future in the activity is thrown into doubt when her ex-husband intervenes.",
    genres: "Biography, Comedy, Drama, Sport",
    imdb_id: "tt5580036",
    runtime: 120,
    youtube_trailer: "https://youtu.be/OXZQ5DfSAAc",
    rating: "07-Jun",
    movie_poster: "https://hydramovies.com/wp-content/uploads/2018/04/I-Tonya-Movie-Poster.jpg",
    director: "Craig Gillespie",
    writers: "Steven Rogers",
    cast: "Allison Janney, Margot Robbie, Sebastian Stan"
  },
  {
    id: 185,
    title: "Call Me by Your Name",
    year: 2017,
    summary: "CALL ME BY YOUR NAME, the new film by Luca Guadagnino, is a sensual and transcendent tale of first love, based on the acclaimed novel by Andr√© Aciman. It's the summer of 1983 in the north of Italy, and Elio Perlman (Timoth√©e Chalamet), a precocious 17-year-old young man, spends his days in his family's 17th century villa transcribing and playing classical music, reading, and flirting with his friend Marzia (Esther Garrel). Elio enjoys a close relationship with his father (Michael Stuhlbarg), an eminent professor specializing in Greco-Roman culture, and his mother Annella (Amira Casar), a translator, who favor him with the fruits of high culture in a setting that overflows with natural delights. While Elio's sophistication and intellectual gifts suggest he is already a fully-fledged adult, there is much that yet remains innocent and unformed about him, particularly about matters of the heart. One day, Oliver (Armie Hammer), a 24-year-old American college graduate student working on his...",
    short_summary: "In 1980s Italy, a romance blossoms between a seventeen year-old student and the older man hired as his father's research assistant.",
    genres: "Drama, Romance",
    imdb_id: "tt5726616",
    runtime: 132,
    youtube_trailer: "https://youtu.be/5rgO_TyyOoU",
    rating: 8,
    movie_poster: "https://hydramovies.com/wp-content/uploads/2018/04/Call-Me-by-Your-Name-Movie-Poster.jpg",
    director: "Luca Guadagnino",
    writers: "James Ivory",
    cast: "Armie Hammer, Michael Stuhlbarg, Timoth√©e Chalamet"
  },
  {
    id: 287,
    title: "Kingsman: The Golden Circle",
    year: 2017,
    summary: "After the Kingsman headquarters are blown up by a psychotic criminal named Poppy Adams, the surviving agents find their way to an allied secret organisation based in Kentucky, named Statesman. The two agencies must now work together in order to save the world and take down the so called 'Golden Circle'.",
    short_summary: "When their headquarters are destroyed and the world is held hostage, the Kingsman's journey leads them to the discovery of an allied spy organization in the United States. These two elite secret organizations must band together to defeat a common enemy.",
    genres: "Action, Adventure, Comedy",
    imdb_id: "tt4649466",
    runtime: 141,
    youtube_trailer: "https://youtu.be/6Nxc-3WpMbg",
    rating: "06-Aug",
    movie_poster: "https://hydramovies.com/wp-content/uploads/2018/04/Kingsman-The-Golden-Circle-Movie-Poster.jpg",
    director: "Matthew Vaughn",
    writers: "Jane Goldman",
    cast: "Colin Firth, Taron Egerton"
  },
  {
    id: 336,
    title: "Spider-Man: Homecoming",
    year: 2017,
    summary: "Peter Parker is exploring the concept of becoming an Avenger. Tony Stark tries to help Peter, but he does not have total faith in Spider-Man to become a hero. And so Peter Parker, aka Spider-Man sets off to prove he is worthy to become an Avenger!",
    short_summary: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
    genres: "Action, Adventure, Sci-Fi",
    imdb_id: "tt2250912",
    runtime: 133,
    youtube_trailer: "https://youtu.be/n9DwoQ7HWvI",
    rating: "07-May",
    movie_poster: "https://hydramovies.com/wp-content/uploads/2018/04/Spider-Man-Homecoming-Movie-Poster.jpg",
    director: "Jon Watts",
    writers: "Jonathan Goldstein",
    cast: "Michael Keaton, Tom Holland"
  },
  {
    id: 462,
    title: "La La Land",
    year: 2016,
    summary: "Aspiring actress serves lattes to movie stars in between auditions and jazz musician Sebastian scrapes by playing cocktail-party gigs in dingy bars. But as success mounts, they are faced with decisions that fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
    short_summary: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    genres: "Action, Comedy, Drama, Music, Musical",
    imdb_id: "tt3783958",
    runtime: 128,
    youtube_trailer: "https://youtu.be/0pdqf4P9MB8",
    rating: "08-Jan",
    movie_poster: "https://hydramovies.com/wp-content/uploads/2018/04/La-La-Land-Movie-Poster.jpg",
    director: "Damien Chazelle",
    writers: "Damien Chazelle",
    cast: "Emma Stone, Rosemarie DeWitt, Ryan Gosling"
  },
  {
    id: 475,
    title: "Rogue One: A Star Wars Story",
    year: 2016,
    summary: "All looks lost for the Rebellion against the Empire as they learn of the existence of a new super weapon, the Death Star. Once a possible weakness in its construction is uncovered, the Rebel Alliance must set out on a desperate mission to steal the plans for the Death Star. The future of the entire galaxy now rests upon its success.",
    short_summary: "The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.",
    genres: "Action, Adventure, Sci-Fi",
    imdb_id: "tt3748528",
    runtime: 133,
    youtube_trailer: "https://youtu.be/frdj1zb9sMY",
    rating: "07-Aug",
    movie_poster: "https://hydramovies.com/wp-content/uploads/2018/04/Rogue-One-A-Star-Wars-Story-Movie-Poster.jpg",
    director: "Gareth Edwards",
    writers: "Chris Weitz",
    cast: "Diego Luna, Felicity Jones"
  },
  {
    id: 549,
    title: "Miss Peregrine's Home for Peculiar Children",
    year: 2016,
    summary: "When Jacob discovers clues to a mystery that spans different worlds and times, he finds a magical place known as Miss Peregrine's Home for Peculiar Children. But the mystery and danger deepen as he gets to know the residents and learns about their special powers... and their powerful enemies. Ultimately, Jacob discovers that only his own special \"peculiarity\" can save his new friends.",
    short_summary: "When Jacob discovers clues to a mystery that stretches across time, he finds Miss Peregrine's Home for Peculiar Children. But the danger deepens after he gets to know the residents and learns about their special powers.",
    genres: "Action, Adventure, Drama, Family, Fantasy",
    imdb_id: "tt1935859",
    runtime: 127,
    youtube_trailer: "https://youtu.be/mAdpJw-MM-M",
    rating: "06-Jul",
    movie_poster: "https://hydramovies.com/wp-content/uploads/2018/04/Miss-Peregrines-Home-for-Peculiar-Children-Movie-Poster.jpg",
    director: "Tim Burton",
    writers: "Ransom Riggs",
    cast: "Asa Butterfield, Eva Green, Samuel L. Jackson"
  }
];
