/**
 * Icons of Tech - Digital Magazine Main Application JS
 */

// ==========================================
// 1. DATA: Articles & Categories Database
// ==========================================

const CATEGORIES = {
  /* ALL: { name: 'All Articles', slogan: 'Stories for the people building the next era.' },*/
  AI: { name: 'AI', slogan: 'Inside the machines that are learning to think — and the people teaching them.' },
  FILM: { name: 'Film', slogan: 'The auteurs, producers, and craftspeople redrawing the edge of cinema.' },
  TECH: { name: 'Tech', slogan: 'Platforms, products, and the long arcs of the industry\'s next decade.' },
  AMBITION: { name: 'Ambition', slogan: 'Careers, conviction, and the cost of refusing to choose.' },
  CULTURE: { name: 'Culture', slogan: 'Taste, attention, and the slow forms quietly making a comeback.' },
  INTERVIEWS: { name: 'Interviews', slogan: 'Long conversations with the people building the next era.' },
  BUSINESS: { name: 'Business', slogan: 'Capital, companies, and the new rules of a re-priced industry.' }
};

/* 
// BACKUP SEED DATA
const ARTICLES_BACKUP = [
  {
    id: 'the-tech-executive-who-dared-to-make-a-movie',
    title: 'The Tech Executive Who Dared to Make a Movie',
    subtitle: 'Why Soumya Vijay\'s journey matters far beyond Hollywood.',
    category: 'Interviews',
    isCoverStory: true,
    author: 'Icons of Tech Editorial',
    date: 'June 26, 2026',
    readTime: '3 min read',
    tags: ['cover-story', 'soumya-vijay', 'women-in-tech', 'film', 'ambition'],
    heroImage: 'images/inaugural-cover-1.jpg',
    excerpt: 'Most people spend their lives choosing. Logic or creativity. Career or passion. Stability or risk. Technology or art. Soumya Vijay never accepted that premise.',
    content: [
      `Most people spend their lives choosing. Logic or creativity. Career or passion. Stability or risk. Technology or art. Society tells us that excellence demands specialization. Pick a lane. Stay in it. Become known for one thing.`,
      `Soumya Vijay never accepted that premise.`,
      `For years, she built her career at the forefront of technology, navigating some of the most transformative waves in modern business. From cloud computing to artificial intelligence, she mastered the complex mechanics of corporate leadership, execution, and strategy. By every conventional measure, she had already succeeded. And then she did something unconventional. She made a movie.`,
      `Not because it was the logical next step. Not because it was safe. But because inside the rigorous, data-driven world of tech, she kept alive a second fire: a deep, unrelenting commitment to storytelling.`,
      `Walking onto a film set as a producer for the first time is not so different from launching an ambitious software product. Both demand vision, relentless execution, resource allocation under tight constraints, and an extraordinary capacity to manage creative energy. Yet cinema carries a vulnerability that software rarely requires. On screen, there is nowhere to hide.`,
      `What makes Soumya Vijay’s story so resonant is not just the film itself, but what her journey represents for a new generation of leaders. We are entering an era where the boundary between technology and culture is dissolving. The leaders who will define the next decade are not those who confine themselves to a single discipline, but those who cross borders with conviction.`,
      `"I never viewed tech and cinema as opposing forces," Vijay reflects. "Tech is about engineering human capability; cinema is about engineering human emotion. If you respect both crafts, they feed off each other."`,
      `Her story is a testament to the power of refusal—refusing to let a title define your boundaries, refusing to flatten your ambition to fit a corporate slide deck, and having the courage to step onto a dynamic new stage when comfort would have been easier.`
    ]
  },
  {
    id: 'the-end-of-the-growth-at-all-costs-decade',
    title: 'The End of the Growth-at-All-Costs Decade',
    subtitle: 'Capital is cheap again — but the companies being built look almost nothing like the ones that defined the last cycle.',
    category: 'Business',
    isFeatured: true,
    author: 'Adam Reyes',
    date: 'June 26, 2026',
    readTime: '2 min read',
    tags: ['business', 'venture', 'startups', 'capital'],
    heroImage: 'images/business.jpg',
    excerpt: 'Capital is cheap again — but the companies being built look almost nothing like the ones that defined the last cycle.',
    content: [
      `For most of the 2010s, the dominant question in startup boardrooms was a variation of the same one: how can we grow faster? The cost of capital was effectively zero. The cost of customer acquisition was high but tolerable. The right answer, almost always, was to spend.`,
      `That era is over. Not because the money is gone — the money is not gone — but because the discipline around it has changed. Investors who lived through the 2022-2024 correction came out of it with a different set of instincts. Companies that survived came out with different ones, too.`,
      `The companies being built now are smaller, more profitable, more boring, and, in some quiet ways, more durable. They are not designed to be sold. They are designed to be owned. The founders running them talk less about scale and more about margin. They talk less about category leadership and more about cash flow.`,
      `"The unit economics conversation used to happen in year three," one investor said. "Now it happens in week three."`,
      `This is not, on its own, a story of decline. The previous decade produced extraordinary companies, and it also produced an enormous amount of waste. The current correction is, in part, the market re-pricing that waste. It is also, in part, a generational handoff. The founders who are most active today did not come of age during the zero-interest-rate years. They came of age during the correction.`,
      `What this produces is interesting. Companies that ship slowly. Companies that hire deliberately. Companies that are uncomfortable raising large rounds and, when they do, treat the money like it might be the last money they ever raise.`,
      `It is too early to say whether the resulting cohort will be more or less successful than the previous one. By traditional venture math, the answer will probably be: less. There will be fewer rocketships. There will be fewer all-or-nothing bets. There will also, very likely, be fewer total disasters.`
    ]
  },
  {
    id: 'the-founder-who-builds-only-when-bored',
    title: 'The Founder Who Builds Only When Bored',
    subtitle: 'Reena Mehta on patience, conviction, and the underrated discipline of doing nothing.',
    category: 'Interviews',
    isFeatured: true,
    author: 'Sara Kahn',
    date: 'June 26, 2026',
    readTime: '2 min read',
    tags: ['founders', 'business', 'interview'],
    heroImage: 'images/interviews.jpg',
    excerpt: 'Reena Mehta on patience, conviction, and the underrated discipline of doing nothing.',
    content: [
      `Reena Mehta has started four companies. Three of them worked. She is forty-one years old, lives in a modest apartment in Brooklyn, and has, by her own estimate, spent close to a third of her working life doing what she calls 'nothing in particular.'`,
      `She means this almost literally. Between companies, she reads. She walks. She talks to old friends. She does not, in any conventional sense, work. She has been told, repeatedly, that this is a strange way to behave for someone in her position. She finds the observation funny.`,
      `"Most of the worst decisions I have ever made," she said, "I made because I was bored and didn't want to admit it."`,
      `Her thesis is simple and almost impossible to follow. The only good time to start a company, she believes, is when you have an idea you cannot stop thinking about. Everything else is friction. Everything else is the founder trying to look productive in the absence of conviction.`,
      `The hard part, she says, is the waiting. Tech culture, as it currently exists, rewards motion. It rewards announcements, raises, hires, decks. It does not reward the founder who reads for eight months and then decides not to build anything.`,
      `She has, on three separate occasions, been close to starting a company she did not believe in. She talks about each of these moments the way other people talk about near misses on the highway. Slowly. With visible relief.`,
      `The company she is building now is small. It has six people. It is, she will tell you, the best work she has ever done. She is not in a hurry to scale it. She is, in fact, not in a hurry to do almost anything.`,
      `She is, however, very clear about the cost of her method. There are years of her life that look, on paper, like nothing happened. There is income foregone, status foregone, optionality foregone. She has, by her own admission, made peace with all of it.`,
      `The reward, she said, is that when she does work, she actually works.`
    ]
  },
  {
    id: 'what-the-museum-knows-that-the-feed-doesnt',
    title: "What the Museum Knows That the Feed Doesn't",
    subtitle: 'On taste, scarcity, and the strange revival of slow culture.',
    category: 'Culture',
    author: 'Imogen Wales',
    date: 'June 26, 2026',
    readTime: '1 min read',
    tags: ['culture', 'taste', 'museums'],
    heroImage: 'images/culture.jpg',
    excerpt: 'On taste, scarcity, and the strange revival of slow culture.',
    content: [
      `Walk into any serious museum on a Saturday afternoon and you will see something the feed cannot replicate: a room full of strangers, mostly under forty, looking at a single object for longer than thirty seconds.`,
      `This is not nostalgia. It is something stranger. A generation that was supposed to have its attention permanently disassembled is, in small but measurable ways, opting back into forms of culture that demand patience.`,
      `Museum attendance, opera subscriptions, hardcover sales of long literary novels, the return of the long-form essay — none of these are reaching the volumes of their mid-century peaks, but they are no longer dying. The line that bottomed out in the late 2010s has, very quietly, begun to climb.`
    ]
  },
  {
    id: 'the-new-rules-of-a-multidimensional-career',
    title: 'The New Rules of a Multidimensional Career',
    subtitle: 'What people who refuse to choose one thing have learned about how to do more than one thing well.',
    category: 'Ambition',
    author: 'Sara Kahn',
    date: 'June 26, 2026',
    readTime: '2 min read',
    tags: ['careers', 'ambition', 'polymath'],
    heroImage: 'images/ambition.jpg',
    excerpt: 'What people who refuse to choose one thing have learned about how to do more than one thing well.',
    content: [
      `The polymath has been written about so often, and so badly, that the word itself now arrives with a slight smirk. The image is of someone who is good at everything and serious about nothing. A dilettante in a nice sweater.`,
      `The people I spent the past year talking to do not look like that. They look, mostly, like people who decided at some point that the standard career — one ladder, climbed slowly, in one industry — was not going to be enough. They did not arrive at this conclusion romantically. They arrived at it after a long, sober look at the economics of attention.`,
      `The rules they have, mostly without writing them down, look something like this.`,
      `"If you do two things, you have to do them both with the discipline of someone who only does one. Otherwise you are not multidimensional. You are just unfocused."`,
      `First, both jobs have to be real jobs. Not hobbies. Not aspirations. Not "what I am also working on." Real jobs, with deliverables, deadlines, and consequences. The people who fail at this almost always fail because one of their two things is not actually a job.`,
      `Second, the two jobs have to compound. Not in a marketing sense — they don't have to be in adjacent industries — but in a cognitive sense. The skills you develop in one have to make you better at the other, even if the connection is invisible to outsiders.`,
      `Third, the schedule has to be brutal and honest. Most of the people doing this well are working sixty to eighty hours a week. They will tell you this in private. They will rarely say it in public. The culture has not yet caught up to the math.`,
      `Fourth, the social cost is real and worth naming. Friendships thin out. Hobbies disappear. The texture of a normal life — Sundays, evenings, the quiet middle of a Tuesday — is given up almost entirely for several years. The people who do this well have, almost without exception, made peace with that exchange. The people who have not made peace with it should not attempt this.`,
      `Fifth, and this is the rule no one wants to print, you have to be more honest with yourself than is comfortable. About which of your two things is actually the thing you love, and which is the thing you are using to fund the thing you love. About which of them you would keep doing if money were not a factor. About what you are actually building, and what you are using to hide from what you are actually building.`,
      `The people I admire most are the ones who have done all of this and come out the other side with both careers intact and a clear-eyed view of the cost. They are not selling a lifestyle. They are not telling you that you, too, can have it all. They are telling you that you can have more than one thing, if you are willing to give up almost everything else, and that the trade can be worth it.`
    ]
  },
  {
    id: 'the-platform-shift-nobody-is-talking-about',
    title: 'The Platform Shift Nobody Is Talking About',
    subtitle: 'Browsers are turning into operating systems. The implications, for everyone, are larger than the noise suggests.',
    category: 'Tech',
    author: 'Adam Reyes',
    date: 'June 26, 2026',
    readTime: '2 min read',
    tags: ['tech', 'platforms', 'browsers'],
    heroImage: 'images/tech.jpg',
    excerpt: 'Browsers are turning into operating systems. The implications, for everyone, are larger than the noise suggests.',
    content: [
      `Every fifteen years or so, the thing we call a computer changes shape. The mainframe gave way to the desktop. The desktop gave way to the laptop. The laptop, almost without anyone noticing, gave way to the phone. The next handoff is happening now, and it is not happening where most people are looking.`,
      `The browser, once a tool for reading documents, has spent a decade quietly becoming an operating system. It runs office suites and design tools and entire software companies. It runs games. It runs, in some cases, the development environments of the engineers who build the next generation of browsers.`,
      `The new wave of browser-native applications does not look like web pages. They look like native software, behave like native software, and increasingly are native software, served through the convenient fiction of a URL.`,
      `"The thing that used to be hard about the web was that it was a publishing medium pretending to be an application platform," one engineer said. "That fiction is finally over."`,
      `This matters for several reasons, only one of which is technical. The first is distribution. Anything that lives on the web is one link away from anyone in the world. The second is economics. The marginal cost of acquiring a user, for a well-made browser-native product, is approaching zero in a way it never did for app stores. The third is power. Whoever sets the rules of the browser, increasingly, sets the rules of software.`,
      `This last point is the one most people are missing. The recent settlements, court rulings, and quiet engineering decisions inside the big browsers are not minor. They are the rewriting, in real time, of the constitution of consumer software.`,
      `There are reasons to be optimistic. The browser is, by some distance, the most open platform mass-market computing has ever had. Anyone can ship to it. Anyone can fork it. Anyone can build on top of it without asking permission. That openness is the reason the shift is happening at all.`,
      `There are also reasons to be cautious. Openness is not a permanent property. It is maintained, deliberately, by a small number of people whose decisions almost no one watches. The next decade of consumer technology will be shaped, more than by any single product, by what those people choose to do.`
    ]
  },
  {
    id: 'the-second-act-of-the-indie-director',
    title: 'The Second Act of the Indie Director',
    subtitle: 'Streaming flattened cinema. A small group of filmmakers is trying to give it dimension back.',
    category: 'Film',
    author: 'Léa Marchand',
    date: 'June 26, 2026',
    readTime: '1 min read',
    tags: ['film', 'directors', 'indie'],
    heroImage: 'images/film.jpg',
    excerpt: 'Streaming flattened cinema. A small group of filmmakers is trying to give it dimension back.',
    content: [
      `For most of the past decade, the conventional wisdom about independent film was that it was over. The middle had collapsed. There were tentpoles, and there was content, and there was almost nothing in between.`,
      `The directors who were paying attention did not argue. They adapted. They learned to write television. They took commercial work. They directed other people's universes. And then, very quietly, they began to come back.`,
      `The films arriving this year share an aesthetic — patient, talky, formally unfussy, more interested in faces than in plots. They are not nostalgic for the 1970s. They are something else. They are interested in what cinema can do that no other medium can: hold a single human gaze, in a dark room, for two hours, without flinching.`,
      `"The audience for slow films is not small," one programmer told me. "It is hidden. Streaming hides it. Theaters reveal it."`,
      `The economics remain brutal. Most of these films will lose money. The ones that do not will be the ones that find, in the first weekend, the small and loyal audience that has been waiting for exactly this. The directors are not pretending otherwise. They have, in the language of one of them, made peace with the math.`,
      `What is changing is the infrastructure around them. New funds, new festivals, new distribution experiments. None of them, individually, will save independent cinema. Together, they form a kind of scaffolding — a way for serious films to find serious audiences without going through the algorithmic strip mall.`,
      `The directors I spoke to are not bitter. They are, almost without exception, more confident than they were five years ago. They are working with smaller budgets, smaller crews, and shorter shoots. They are also, they say, working with more freedom than they have ever had.`,
      `The second act, it turns out, looks a lot like the first one. Only quieter, and harder won.`
    ]
  },
  {
    id: 'the-quiet-rewiring-of-the-research-lab',
    title: 'The Quiet Rewiring of the Research Lab',
    subtitle: 'Inside the labs where AI is no longer the subject of study but the laboratory itself.',
    category: 'AI',
    author: 'Daniel Okafor',
    date: 'June 26, 2026',
    readTime: '2 min read',
    tags: ['ai', 'science', 'research'],
    heroImage: 'images/ai.jpg',
    excerpt: 'Inside the labs where AI is no longer the subject of study but the laboratory itself.',
    content: [
      `The lab looks ordinary. White benches, a fume hood, a centrifuge that wheezes when the building's air conditioning cuts out. The unusual thing is the screen on the far wall, which is currently running a small experiment that no human in the room designed and no human in the room is supervising.`,
      `In the past two years, a quiet inversion has taken place inside the world's most ambitious research groups. AI tools, once treated as another instrument on the bench, have begun acting as collaborators — drafting hypotheses, designing protocols, even arguing with the postdocs about which next step is worth a week of reagent.`,
      `The change is uneven. In drug discovery and materials science, the transition is breathtaking. In other fields, it is barely visible. But the direction is clear: the bottleneck in science is no longer the cost of running an experiment. It is the cost of deciding which experiment is worth running.`,
      `"The model is not smarter than my best graduate student," one principal investigator told me. "But it is faster, and it never gets tired, and it never feels embarrassed to ask a stupid question. Those three things, together, are extraordinary."`,
      `This is not the story the public has been told about AI in science. The headlines have been about benchmarks and breakthroughs — a protein folded, a theorem proved. The reality, on the ground, is quieter and more profound. Researchers describe a shift in how they spend their days. Less time at the bench. More time in dialogue. More time, in their words, doing the part of science that actually requires being a scientist.`,
      `There are losses, too. The slow, accidental learning that happens when a young researcher repeats a tedious procedure for the hundredth time — the muscle memory of the craft — is being abbreviated. Some senior scientists worry that a generation will arrive in the field knowing the right answer without ever having earned the wrong ones.`,
      `The labs that are thriving have made a deliberate choice. They have not tried to automate the human out of science. They have tried to automate the parts of science that were never really human in the first place — the bookkeeping, the literature review, the brute-force search — and protected, ferociously, the parts that are: judgment, taste, the willingness to be wrong in public.`
    ]
  },
  {
    id: 'the-executive-who-made-a-movie-legacy',
    title: 'The Executive Who Made a Movie',
    subtitle: 'After fifteen years building software, Priya Anand walked onto a film set as a first-time producer — and refused to choose between the two lives.',
    category: 'Interviews',
    author: 'Maya Iyer',
    date: 'June 26, 2026',
    readTime: '3 min read',
    tags: ['women-in-tech', 'film', 'ambition'],
    heroImage: 'images/executive.jpg',
    excerpt: 'After fifteen years building software, Priya Anand walked onto a film set as a first-time producer — and refused to choose between the two lives.',
    content: [
      `She was not pretending to be a film person. She was, by training and by trade, a builder of software platforms — the kind of person who has watched a company double in revenue for four years in a row and still gets defensive when someone calls her a tech executive at a dinner party. But she had read a script, and the script had not let her go, and now here she was, standing under a key light, asking the gaffer what a key light was.`,
      `"The theme nobody told me about being multidimensional," she said later, "is that you are always starting over. You spend fifteen years getting to the point where your opinion is treated as fact, and then you walk onto a set and you don't know the name of the cable you are tripping over. It is very good for the ego."`,
      `The film, a small, sharp domestic drama, was shot over eighteen days in upstate New York. It cost less than the marketing budget of a single enterprise software feature, but to Anand, the stakes felt comparable.`,
      `A generation of professionals raised on the discipline of product engineering is beginning to apply those tools to narrative. The result is a quiet rearrangement of the math behind independent film. They are not looking to lose money; they are looking to build engines that can pay for themselves.`,
      `What is striking about Anand, and the cohort she belongs to, is how unromantic she is about the work. "A script is a blueprint. A shoot is a sprint. Post-production is debugging," she said. "The vocabularies are different, but the work is similar. You have a vision, you have constraints, you have a group of very talented people who all want to build something else. Your job is to keep them all building the same thing."`,
      `She is already planning her next project. It will be a film. She will also continue to run a platform team at a growth-stage company.`,
      `"I was told I had to choose," she said. "But the secret of having two careers is that they are actually the same career. The career is learning how to do hard things, and the more of them you do, the better you get. You don't run out of memory. If anything, the drive gets larger when you practice more of them, not fewer."`
    ]
  }
];
*/
let ARTICLES = []; // Default empty, populated by fetch from Google Sheets

// Google Sheets Database API URL (Optional Apps Script Web App URL)
const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/AKfycbxGqkoFQYOsNmdNl56Qx1F5TJTzbXrR9mzbm-x_veoKLu8MTGG_0i3XNx2BOEMrziyVow/exec';

// Load persistent user published & edited articles from LocalStorage & Google Sheets
function loadArticlesFromStorage() {
  const customArticles = JSON.parse(localStorage.getItem('iot_custom_articles') || '[]');
  const deletedIds = JSON.parse(localStorage.getItem('iot_deleted_article_ids') || '[]');

  // 1. Initialize with Backup Data as a starting point
  if (typeof ARTICLES_BACKUP !== 'undefined') {
    ARTICLES = JSON.parse(JSON.stringify(ARTICLES_BACKUP));
  }

  // 2. Apply any custom edits stored in local storage
  if (customArticles.length > 0) {
    customArticles.forEach(custom => {
      const idx = ARTICLES.findIndex(a => a.id === custom.id);
      if (idx > -1) {
        ARTICLES[idx] = custom;
      } else {
        ARTICLES.unshift(custom);
      }
    });
  }

  // 3. Filter out any local deleted articles
  if (deletedIds.length > 0) {
    for (let i = ARTICLES.length - 1; i >= 0; i--) {
      if (deletedIds.includes(ARTICLES[i].id)) {
        ARTICLES.splice(i, 1);
      }
    }
  }

  // 4. Try to fetch the absolute latest truth from Google Sheets
  if (GOOGLE_SHEETS_API_URL) {
    fetch(GOOGLE_SHEETS_API_URL)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          // Intelligently merge Google Sheets data with our local queue instead of blindly wiping!
          const localCustom = JSON.parse(localStorage.getItem('iot_custom_articles') || '[]');

          // Inject Google Sheets items into local state safely
          data.forEach(sheetItem => {
            const existingIdx = localCustom.findIndex(a => a.id === sheetItem.id);
            if (existingIdx === -1) { localCustom.push(sheetItem); }
            else { localCustom[existingIdx] = sheetItem; } // Sheets takes precedence for existing files
          });

          // Sync the unified state back to storage safely
          localStorage.setItem('iot_custom_articles', JSON.stringify(localCustom));

          ARTICLES = []; // clear the local/backup memory state temporarily 

          localCustom.forEach(sheetArticle => {
            if (sheetArticle.date && sheetArticle.date.includes('GMT')) {
              try {
                const d = new Date(sheetArticle.date);
                if (!isNaN(d.getTime())) {
                  sheetArticle.date = d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
                }
              } catch (e) { }
            }
            ARTICLES.push(sheetArticle);
          });

          // Re-trigger render with the fresh Google Sheets data!
          if (typeof handleHashRouting === 'function') {
            handleHashRouting();
          }
        }
      })
      .catch(err => {
        console.warn('Google Sheets sync offline or blocked by CORS. Utilizing local storage and backup data:', err);
        // We already pre-loaded the Backup/Local data in steps 1-3, so just force a render:
        if (typeof handleHashRouting === 'function') {
          handleHashRouting();
        }
      });
  } else {
    if (typeof handleHashRouting === 'function') {
      handleHashRouting();
    }
  }
}

loadArticlesFromStorage();

// ==========================================
// 2. APP STATE MANAGEMENT
// ==========================================

const state = {
  currentCategory: 'ALL',
  currentArticleId: null,
  view: 'home', // 'home', 'category', 'article', 'about', 'archive', 'publish'
  searchQuery: '',
  bookmarks: JSON.parse(localStorage.getItem('iot_bookmarks') || '[]'),
  theme: localStorage.getItem('iot_theme') || 'light'
};

// Apply saved theme on boot
document.documentElement.setAttribute('data-theme', state.theme);

// ==========================================
// 3. UI INITIALIZATION & EVENT LISTENERS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initCategoryNav();
  initFooterNav();
  initEventListeners();
  handleHashRouting();

  // Set real date
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  const dateEl = document.getElementById('top-date-display');
  if (dateEl) dateEl.textContent = dateStr;
});

window.addEventListener('hashchange', handleHashRouting);
window.addEventListener('scroll', updateReadingProgress);

function initEventListeners() {
  // Theme toggle
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);

  // Mobile menu drawer
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');

  mobileBtn?.addEventListener('click', () => openMobileDrawer(true));
  closeDrawerBtn?.addEventListener('click', () => openMobileDrawer(false));
  mobileDrawer?.addEventListener('click', (e) => {
    if (e.target === mobileDrawer) openMobileDrawer(false);
  });

  // Search Modal
  const openSearchBtn = document.getElementById('open-search-btn');
  const closeSearchBtn = document.getElementById('close-search-btn');
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('search-input');

  openSearchBtn?.addEventListener('click', () => openSearchModal(true));
  closeSearchBtn?.addEventListener('click', () => openSearchModal(false));
  searchModal?.addEventListener('click', (e) => {
    if (e.target === searchModal) openSearchModal(false);
  });

  searchInput?.addEventListener('input', (e) => handleSearch(e.target.value));

  // Keyboard shortcut '/' for search, 'Esc' to close
  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      openSearchModal(true);
    } else if (e.key === 'Escape') {
      openSearchModal(false);
      openMobileDrawer(false);
    }
  });

  // Newsletter Subscribe Form
  const subscribeForm = document.getElementById('subscribe-form');
  subscribeForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('subscribe-email');
    if (emailInput && emailInput.value) {
      const email = emailInput.value.trim();

      // Dispatch payload to Google Sheets API
      if (typeof GOOGLE_SHEETS_API_URL !== 'undefined' && GOOGLE_SHEETS_API_URL) {
        fetch(GOOGLE_SHEETS_API_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify({ action: 'subscribe', email: email })
        }).catch(err => console.log('Google Sheets subscribe offline:', err));
      }

      document.getElementById('subscribe-success')?.classList.remove('hidden');
      showToast('✓ Successfully subscribed to The Dispatch');
      emailInput.value = '';
      setTimeout(() => {
        document.getElementById('subscribe-success')?.classList.add('hidden');
      }, 5000);
    }
  });

  // Back to top link
  document.getElementById('back-to-top')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ==========================================
// 4. ROUTING & RENDER CONTROLLER
// ==========================================

function handleHashRouting() {
  const hash = window.location.hash || '';

  if (hash.startsWith('#article/')) {
    const articleId = hash.replace('#article/', '');
    renderArticleView(articleId);
  } else if (hash.startsWith('#category/')) {
    const catKey = hash.replace('#category/', '').toUpperCase();
    if (CATEGORIES[catKey]) {
      state.currentCategory = catKey;
      renderCategoryView(catKey);
    } else {
      renderHomeView();
    }
  } else if (hash === '#about') {
    renderAboutView();
  } else if (hash === '#archive') {
    renderArchiveView();
  } else if (hash === '#publish') {
    window.location.href = 'publish.html';
  } else {
    state.currentCategory = 'ALL';
    renderHomeView();
  }

  updateCategoryNavPills();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Category Nav Bar Initializer
function initCategoryNav() {
  const navContainer = document.getElementById('category-nav');
  const mobileCatLinks = document.getElementById('mobile-cat-links');
  if (!navContainer) return;

  let desktopHtml = '';
  let mobileHtml = '';

  Object.keys(CATEGORIES).forEach((key) => {
    if (key === 'ALL') return;
    const cat = CATEGORIES[key];
    const catName = cat.name;
    const hash = `#category/${key.toLowerCase()}`;

    desktopHtml += `
      <a href="${hash}" data-cat="${key}" class="cat-pill ${state.currentCategory === key ? 'active' : ''}">
        ${catName}
      </a>
    `;

    mobileHtml += `
      <a href="${hash}" class="mobile-cat-link text-ink hover:text-editorial transition-colors">
        ${catName}
      </a>
    `;
  });

  navContainer.innerHTML = desktopHtml;
  if (mobileCatLinks) mobileCatLinks.innerHTML = mobileHtml;
}

function updateCategoryNavPills() {
  const pills = document.querySelectorAll('.cat-pill');
  pills.forEach(pill => {
    const cat = pill.getAttribute('data-cat');
    if (cat === state.currentCategory) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });
}

function initFooterNav() {
  const footerCatList = document.getElementById('footer-categories-list');
  if (!footerCatList) return;

  let html = '';
  Object.keys(CATEGORIES).forEach(key => {
    if (key === 'ALL') return;
    const hash = `#category/${key.toLowerCase()}`;
    html += `<li><a href="${hash}" class="hover:text-ink transition-colors">${CATEGORIES[key].name}</a></li>`;
  });
  footerCatList.innerHTML = html;
}

// Helper to resolve Image URLs
function resolveImage(url, placeholderFallback) {
  if (!url) return placeholderFallback;
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
    return url;
  }
  if (url.startsWith('images/')) {
    return url;
  }
  // Automatically prefix with images folder
  return `images/${url}`;
}

// ==========================================
// 5. VIEW RENDERERS
// ==========================================

// --- VIEW A: HOME PAGE VIEW ---
function renderHomeView() {
  state.view = 'home';
  const container = document.getElementById('app-container');
  if (!container) return;

  if (ARTICLES.length === 0) {
    container.innerHTML = `
      <div class="flex items-center justify-center py-32 animate-pulse">
        <span class="font-serif italic text-ink-50">Loading articles from CMS...</span>
      </div>
    `;
    return;
  }

  const coverStory = ARTICLES.find(a => a.isCoverStory) || ARTICLES[0];
  const featuredArticles = ARTICLES.filter(a => a.isFeatured && a.id !== coverStory.id).reverse();
  const allCategoryArticles = ARTICLES.filter(a => a.id !== coverStory.id);

  container.innerHTML = `
    <!-- Inaugural Issue Banner -->
    <div class="py-6 animate-fade-in relative">
      <div class="absolute bottom-0" style="left: 50%; transform: translateX(-50%); width: 100vw; border-bottom: 1px solid var(--color-ink-15);"></div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- 1st Grid -->
        <div>
          <div class="font-ui text-[10px] uppercase tracking-[0.25em] text-ink-50 font-bold mb-2">THE INAUGURAL ISSUE</div>
          <h2 class="font-serif italic text-3xl sm:text-4xl font-normal text-ink">Women who refuse to choose</h2>
        </div>
        <!-- 2nd Grid -->
        <div class="font-serif italic text-base sm:text-lg text-ink-60 leading-relaxed max-w-xl md:pl-8 lg:pl-16">
          New rules for a multidimensional career, dispatches from inside the labs, and the executive who made a movie.
        </div>
      </div>
    </div>

    <!-- Hero Cover Story Section -->
    <section class="mb-20 py-12 md:py-16 animate-fade-in relative">
      <!-- Full Bleed Gray Background -->
      <div class="absolute inset-y-0" style="left: 50%; transform: translateX(-50%); width: 100vw; background-color: #f3f4f6;"></div>
      
      <!-- Relative content so it sits on top of the background -->
      <div class="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <!-- Left: Text Block -->
        <div class="lg:col-span-7 flex flex-col justify-center space-y-6 pr-0 lg:pr-6">
          <div class="space-y-4">
            <a href="#category/interviews" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'" class="inline-flex items-center text-[10px] font-ui uppercase tracking-[0.2em] font-bold text-editorial">
              The Inaugural Issue <span class="text-ink-40 mx-2 no-underline">·</span> Cover Story
            </a>
            
            <h1 class="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.05] text-ink hover:text-editorial transition-colors">
              <a href="#article/${coverStory.id}">${coverStory.title}</a>
            </h1>
            
            <p class="font-serif text-lg md:text-xl text-ink-70 leading-relaxed italic">
               ${coverStory.subtitle}
            </p>
            
            <div class="font-ui text-[10px] uppercase tracking-wider text-ink-50 pt-2">
              BY ${coverStory.author} <span class="mx-2">•</span> ${coverStory.readTime.toUpperCase()}
            </div>
          </div>

          <div class="pt-6 flex flex-col items-start gap-4">
            <a href="#article/${coverStory.id}" class="inline-flex items-center justify-center bg-ink hover:bg-editorial text-paper font-ui text-[10px] font-bold uppercase tracking-widest px-8 py-3.5 transition-colors border border-ink group">
              READ THE COVER STORY <span class="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#newsletter-section" class="inline-flex items-center justify-center bg-transparent hover:bg-ink text-ink hover:text-paper font-ui text-[10px] font-bold uppercase tracking-widest px-8 py-3.5 transition-colors border border-ink">
              SUBSCRIBE TO THE ISSUE
            </a>
          </div>
        </div>

        <!-- Right: Cover Image -->
        <div class="lg:col-span-5 flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div class="relative w-full shadow-2xl">
            <!-- Badging -->
            <div style="background-color: #F5C71A; color: #000000; top: -16px; left: -28px;" class="absolute font-ui text-[10px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 z-10 shadow-md">
              VOL. I · NO. 1
            </div>
            <a href="#article/${coverStory.id}" class="block overflow-hidden bg-ink-5 border border-ink-10">
               <img src="${resolveImage(coverStory.heroImage, 'https://placehold.co/800x1100/e5e5e5/0f0f0f?text=Cover+Story')}" alt="${coverStory.title}" class="w-full h-auto object-cover shrink-0 hover:scale-105 transition-transform duration-700" />
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- 2-Column Featured Section -->
    ${featuredArticles.length > 0 ? `
    <section class="mb-24"  style="padding-top: 5rem; padding-bottom: 5rem;">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-stretch">
        ${featuredArticles.map(article => renderArticleCard(article, 'featured')).join('')}
        
      </div>
    </section>
    ` : ''}

    <!-- Complete Category Articles Section -->
    <section class="mb-12" style="padding-top: 5rem; padding-bottom: 5rem;">
      <div class="flex items-end justify-between mb-10">
        <h2 class="font-serif text-4xl sm:text-5xl font-normal text-ink">The Issue</h2>
        <span class="font-ui text-[12px] italic text-ink-80 max-w-[150px] text-right tracking-wider"> Stories from across the desks of Icons of Tech.</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        ${allCategoryArticles.slice(0, 6).map(article => renderArticleCard(article, 'grid')).join('')}
      </div>
    </section>
  `;
}

// --- VIEW B: CATEGORY VIEW ---
function renderCategoryView(catKey) {
  state.view = 'category';
  const container = document.getElementById('app-container');
  if (!container) return;

  const catInfo = CATEGORIES[catKey] || CATEGORIES.ALL;
  const categoryArticles = ARTICLES.filter(a => a.category.toUpperCase() === catKey);

  container.innerHTML = `
    <div class="mb-16 border-b border-ink-15 pt-12 pb-16 bg-paper-dark animate-fade-in" style="width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; margin-top: -2.75rem; padding-bottom: 2rem;">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <span class="block font-ui text-[10px] uppercase tracking-[0.3em] font-semibold text-ink-40" style="margin-bottom: 1rem;">SECTION</span>
        <h1 class="font-serif text-6xl sm:text-[80px] font-normal leading-none text-ink tracking-tight" style="margin-bottom: 1rem;">${catInfo.name}</h1>
        <p class="font-serif text-[17px] sm:text-[19px] text-ink-60 italic max-w-8xl text-left">${catInfo.slogan}</p>
      </div>
    </div>

    ${categoryArticles.length > 0 ? `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${categoryArticles.map(article => renderArticleCard(article, 'grid')).join('')}
      </div>
    ` : `
      <div class="text-center py-16 text-ink-50 font-serif italic">
        No articles found in this category yet.
      </div>
    `}
  `;
}

// --- VIEW C: ARTICLE DETAIL VIEW ---
function renderArticleView(articleId) {
  state.view = 'article';
  state.currentArticleId = articleId;
  const container = document.getElementById('app-container');
  if (!container) return;

  const article = ARTICLES.find(a => a.id === articleId);
  if (!article) {
    container.innerHTML = `
      <div class="text-center py-20 space-y-4">
        <h2 class="font-serif text-3xl font-bold text-ink">Article Not Found</h2>
        <a href="#" class="font-ui text-xs uppercase tracking-widest text-editorial">← Return to Homepage</a>
      </div>
    `;
    return;
  }

  const isBookmarked = state.bookmarks.includes(article.id);
  const relatedArticles = ARTICLES.filter(a => a.id !== article.id).slice(0, 3);

  container.innerHTML = `
    <article class="max-w-3xl mx-auto py-4 animate-fade-in">
      
      <!-- Back Navigation & Actions -->
      <div class="flex items-center justify-between border-b border-ink-10 pb-4 mb-8">
        <a href="#${article.category ? `category/${article.category.toLowerCase()}` : ''}" class="font-ui text-xs uppercase tracking-widest text-ink-60 hover:text-editorial transition-colors">
          ← Back to ${article.category}
        </a>
        <div class="flex items-center gap-3 font-ui text-xs text-ink-60">
          <button onclick="toggleBookmark('${article.id}')" class="hover:text-editorial transition-colors flex items-center gap-1 cursor-pointer">
            <svg class="w-4 h-4" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
            <span>${isBookmarked ? 'Bookmarked' : 'Save'}</span>
          </button>
          <span>·</span>
          <button onclick="shareArticle('${article.title}')" class="hover:text-editorial transition-colors flex items-center gap-1 cursor-pointer">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 100-5.999 3 3 0 000 5.999zm0 11.998a3 3 0 100-5.999 3 3 0 000 5.999z"></path></svg>
            <span>Share</span>
          </button>
        </div>
      </div>

      <!-- Header Banner -->
      <header class="space-y-6 mb-10 text-center sm:text-left">
        <div class="flex items-center justify-center sm:justify-start gap-3">
          <span class="font-ui text-xs uppercase tracking-[0.2em] font-bold text-editorial">
            ${article.category}
          </span>
          <span class="text-ink-30">·</span>
          <span class="font-ui text-xs uppercase tracking-wider text-ink-50">${article.readTime}</span>
        </div>

        <h1 class="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] text-ink">
          ${article.title}
        </h1>

        <p class="font-serif text-lg sm:text-xl text-ink-70 leading-relaxed italic">
          ${article.subtitle}
        </p>

        <div class="pt-4 border-t border-ink-10 flex flex-wrap items-center justify-between text-xs font-ui text-ink-60 gap-2">
          <div>By <span class="font-semibold text-ink">${article.author}</span></div>
          <div>Published ${article.date}</div>
        </div>

        <!-- Featured Image Placeholder -->
        <div class="mt-8 rounded-lg overflow-hidden bg-ink-5 border border-ink-10">
          <img src="${resolveImage(article.heroImage, 'https://placehold.co/1200x600/e5e5e5/0f0f0f?text=Hero+Image')}" alt="${article.title}" class="w-full h-auto object-cover max-h-[70vh]" loading="eager" />
        </div>
      </header>

      <!-- Article Body -->
      <div class="article-body space-y-6 font-serif text-lg sm:text-xl text-ink-90 leading-relaxed border-t border-ink-10 pt-8">
        ${article.content.map((paragraph, index) => {
    if (index === 0) {
      return `<p class="drop-cap">${paragraph}</p>`;
    }
    if (index === Math.floor(article.content.length / 2) && article.content.length > 3) {
      return `
              <blockquote class="pull-quote">
                "${article.excerpt}"
              </blockquote>
              <p>${paragraph}</p>
            `;
    }
    return `<p>${paragraph}</p>`;
  }).join('')}
      </div>

      <!-- Tags & Share Footer -->
      <footer class="mt-12 pt-8 border-t border-ink-15 space-y-6">
        <div class="flex flex-wrap items-center gap-2">
          <span class="font-ui text-xs uppercase tracking-wider text-ink-50 mr-2">Tags:</span>
          ${article.tags.map(tag => `
            <span class="font-ui text-xs text-ink-70 bg-ink-5 px-3 py-1 rounded-full border border-ink-10">
              #${tag}
            </span>
          `).join('')}
        </div>

        <!-- Related Articles Footer -->
        <div class="pt-8 border-t border-ink-10 space-y-6">
          <h3 class="font-serif text-2xl font-bold text-ink">More Stories from Icons of Tech</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${relatedArticles.map(rel => `
              <a href="#article/${rel.id}" class="block group space-y-2 border-b md:border-b-0 border-ink-10 pb-4 md:pb-0">
                <span class="font-ui text-[10px] uppercase tracking-widest text-editorial font-bold">${rel.category}</span>
                <h4 class="font-serif text-base font-bold text-ink group-hover:text-editorial transition-colors leading-snug">${rel.title}</h4>
                <span class="font-ui text-[11px] text-ink-50 block">${rel.readTime}</span>
              </a>
            `).join('')}
          </div>
        </div>
      </footer>

    </article>
  `;
}

// --- VIEW D: PUBLISH VIEW (CMS EDITOR) ---
function renderPublishView() {
  state.view = 'publish';
  const container = document.getElementById('app-container');
  if (!container) return;

  container.innerHTML = `
    <div class="max-w-3xl mx-auto py-8 animate-fade-in space-y-8">
      <div class="border-b border-ink-15 pb-6 text-center sm:text-left space-y-2">
        <div class="flex items-center justify-center sm:justify-start gap-2">
          <span class="font-ui text-xs uppercase tracking-[0.25em] font-bold text-editorial">CMS EDITOR</span>
          <span class="text-ink-40">·</span>
          <span class="font-ui text-xs text-ink-60">Publish to Icons of Tech</span>
        </div>
        <h1 class="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink">
          Publish a New Article
        </h1>
        <p class="font-serif text-base text-ink-60">
          Enter article details below. Clicking publish will instantly publish your story to the magazine home, section archives, and search index.
        </p>
      </div>

      <form id="publish-article-form" onsubmit="handlePublishSubmit(event)" class="space-y-6 bg-paper-card border border-ink-15 p-6 sm:p-10 rounded-xl shadow-lg">
        
        <!-- Title Input -->
        <div class="space-y-2">
          <label for="pub-title" class="block font-ui text-xs uppercase tracking-wider font-bold text-ink">
            Article Title <span class="text-editorial">*</span>
          </label>
          <input 
            type="text" 
            id="pub-title" 
            required 
            placeholder="e.g. The Quiet Revolution of Autonomous Cinema" 
            class="w-full bg-paper border border-ink-20 px-4 py-3 font-serif text-xl text-ink focus:outline-none focus:border-editorial rounded-lg placeholder-ink-40"
          />
        </div>

        <!-- Subtitle / Excerpt -->
        <div class="space-y-2">
          <label for="pub-subtitle" class="block font-ui text-xs uppercase tracking-wider font-bold text-ink">
            Subtitle / Excerpt <span class="text-editorial">*</span>
          </label>
          <input 
            type="text" 
            id="pub-subtitle" 
            required 
            placeholder="e.g. On synthetic actors, generative set design, and the directors quietly shifting the craft." 
            class="w-full bg-paper border border-ink-20 px-4 py-3 font-serif text-base text-ink focus:outline-none focus:border-editorial rounded-lg placeholder-ink-40"
          />
        </div>

        <!-- Meta Grid: Category, Author, Read Time -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          <div class="space-y-2">
            <label for="pub-category" class="block font-ui text-xs uppercase tracking-wider font-bold text-ink">
              Category <span class="text-editorial">*</span>
            </label>
            <select id="pub-category" required class="w-full bg-paper border border-ink-20 px-4 py-3 font-ui text-sm text-ink focus:outline-none focus:border-editorial rounded-lg">
              <option value="AI">AI</option>
              <option value="Film">Film</option>
              <option value="Tech">Tech</option>
              <option value="Ambition">Ambition</option>
              <option value="Culture">Culture</option>
              <option value="Interviews">Interviews</option>
              <option value="Business">Business</option>
            </select>
          </div>

          <div class="space-y-2">
            <label for="pub-author" class="block font-ui text-xs uppercase tracking-wider font-bold text-ink">
              Author Name <span class="text-editorial">*</span>
            </label>
            <input 
              type="text" 
              id="pub-author" 
              required 
              placeholder="e.g. Soumya Vijay" 
              class="w-full bg-paper border border-ink-20 px-4 py-3 font-ui text-sm text-ink focus:outline-none focus:border-editorial rounded-lg placeholder-ink-40"
            />
          </div>

          <div class="space-y-2">
            <label for="pub-readtime" class="block font-ui text-xs uppercase tracking-wider font-bold text-ink">
              Read Time
            </label>
            <input 
              type="text" 
              id="pub-readtime" 
              placeholder="3 min read" 
              value="3 min read"
              class="w-full bg-paper border border-ink-20 px-4 py-3 font-ui text-sm text-ink focus:outline-none focus:border-editorial rounded-lg placeholder-ink-40"
            />
          </div>

        </div>

        <!-- Content Body (Textarea) -->
        <div class="space-y-2">
          <label for="pub-content" class="block font-ui text-xs uppercase tracking-wider font-bold text-ink">
            Article Content <span class="text-editorial">*</span>
          </label>
          <p class="font-ui text-xs text-ink-50">Separate paragraphs with a blank line (double enter).</p>
          <textarea 
            id="pub-content" 
            required 
            rows="10" 
            placeholder="Type or paste the full article body here...\n\nSecond paragraph content goes here...\n\nThird paragraph content goes here..."
            class="w-full bg-paper border border-ink-20 px-4 py-3 font-serif text-lg text-ink focus:outline-none focus:border-editorial rounded-lg placeholder-ink-40 leading-relaxed"
          ></textarea>
        </div>

        <!-- Tags Input -->
        <div class="space-y-2">
          <label for="pub-tags" class="block font-ui text-xs uppercase tracking-wider font-bold text-ink">
            Tags (comma separated)
          </label>
          <input 
            type="text" 
            id="pub-tags" 
            placeholder="cinema, ai, leadership, future" 
            class="w-full bg-paper border border-ink-20 px-4 py-3 font-ui text-sm text-ink focus:outline-none focus:border-editorial rounded-lg placeholder-ink-40"
          />
        </div>

        <!-- Checkbox Options -->
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 pt-2 border-t border-ink-10">
          <label class="flex items-center gap-2 cursor-pointer font-ui text-xs font-semibold text-ink">
            <input type="checkbox" id="pub-featured" class="w-4 h-4 accent-editorial rounded cursor-pointer" />
            <span>Feature on Magazine Homepage</span>
          </label>

          <label class="flex items-center gap-2 cursor-pointer font-ui text-xs font-semibold text-ink">
            <input type="checkbox" id="pub-cover" class="w-4 h-4 accent-editorial rounded cursor-pointer" />
            <span>Set as Issue Cover Story</span>
          </label>
        </div>

        <!-- Action Buttons -->
        <div class="pt-6 border-t border-ink-15 flex items-center justify-between gap-4">
          <a href="#" class="font-ui text-xs font-semibold uppercase tracking-wider text-ink-60 hover:text-ink">
            Cancel
          </a>

          <button 
            type="submit" 
            class="bg-editorial hover:bg-ink text-paper font-ui text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center gap-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            Publish Article
          </button>
        </div>

      </form>
    </div>
  `;
}

// Publish Submit Form Handler
function handlePublishSubmit(e) {
  e.preventDefault();

  const title = document.getElementById('pub-title').value.trim();
  const subtitle = document.getElementById('pub-subtitle').value.trim();
  const category = document.getElementById('pub-category').value;
  const author = document.getElementById('pub-author').value.trim();
  const readTime = document.getElementById('pub-readtime').value.trim() || '3 min read';
  const rawContent = document.getElementById('pub-content').value.trim();
  const rawTags = document.getElementById('pub-tags').value.trim();
  const isFeatured = document.getElementById('pub-featured').checked;
  const isCoverStory = document.getElementById('pub-cover').checked;

  if (!title || !subtitle || !author || !rawContent) {
    showToast('Please fill out all required fields');
    return;
  }

  // Process paragraphs
  const paragraphs = rawContent.split(/\n\s*\n/).map(p => p.trim()).filter(p => p.length > 0);

  // Process tags
  const tags = rawTags ? rawTags.split(',').map(t => t.trim().toLowerCase().replace(/^#/, '')).filter(Boolean) : [category.toLowerCase()];

  // Generate date string
  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  // Generate unique slug id
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const newId = `pub-${slug}-${Date.now().toString().slice(-4)}`;

  // If cover story, reset previous cover stories
  if (isCoverStory) {
    ARTICLES.forEach(a => a.isCoverStory = false);
  }

  const newArticle = {
    id: newId,
    title,
    subtitle,
    category,
    isCoverStory,
    isFeatured,
    author,
    date: dateStr,
    readTime,
    tags,
    excerpt: subtitle,
    content: paragraphs
  };

  // Add to main ARTICLES array at top
  ARTICLES.unshift(newArticle);

  // Save custom articles to localStorage
  const savedCustom = JSON.parse(localStorage.getItem('iot_custom_articles') || '[]');
  savedCustom.unshift(newArticle);
  localStorage.setItem('iot_custom_articles', JSON.stringify(savedCustom));

  // Show Toast
  showToast('✓ Article published successfully!');

  // Navigate to newly created article!
  window.location.hash = `#article/${newId}`;
}

// --- VIEW E: ABOUT VIEW ---
function renderAboutView() {
  state.view = 'about';
  const container = document.getElementById('app-container');
  if (!container) return;

  container.innerHTML = `
    <div class="max-w-5xl mx-auto py-16 px-4 sm:px-6 space-y-12 animate-fade-in text-left">
      
      <div class="space-y-6 pb-6 border-b-0">
        <span class="block font-ui text-[10px] uppercase tracking-[0.25em] font-semibold text-editorial text-pink">ABOUT THE MAGAZINE</span>
        <h1 class="font-serif font-normal text-ink max-w-[1200px]" style="font-size: 64px; line-height: 1.15; letter-spacing: -0.02em;">
          We started <i class="italic font-light" style="font-weight: 200;">Icons of Tech</i> because the existing magazines no longer fit.
        </h1>
      </div>

      <div class="font-serif text-[15px] sm:text-[17px] text-ink-80 leading-[1.8] space-y-8 max-w-[680px]">
        <p class="drop-cap">
          <span class="float-left font-serif text-[72px] text-ink font-bold leading-none pr-3 pt-2">I</span>cons of Tech is a monthly magazine about the people, ideas, and aesthetics shaping the next decade of technology, film, and culture. We write long. We write seriously. We are not trying to be the fastest. We are trying, slowly, to be the best.
        </p>

        <p>
          We are starting small. The first issues consolidate the best reporting and commentary from across the internet — assembled, edited, and framed in the spirit of the magazine. As we grow, we will replace the consolidated pieces, one by one, with original reporting and long-form interviews with the people we believe will define the era.
        </p>

        <blockquote class="my-10 italic text-ink-70 font-normal leading-relaxed" style="border-left: 2px solid #ff69b4; padding-left: 24px; font-size: 32px; line-height: 1.4;">
          <span class="text-ink-60">A magazine should look at the world the way a serious person looks at a stranger — closely, patiently, and with the expectation of being surprised.</span>
        </blockquote>

        <p>
          If you are someone we should interview, or you have a story you think belongs here, we want to hear from you. The masthead is small. The standards are not.
        </p>

        <p class="font-serif italic text-[15px] sm:text-[17px] text-ink-70 pt-2">
          — The editors
        </p>
      </div>

      <!-- Pitch Box / Contact -->
      <div class="pt-8 mt-10 border-t border-ink-15 space-y-3" >
        <span class="block font-ui text-[10px] uppercase tracking-[0.25em] font-semibold text-ink-40">PITCH US</span>
        <div class="pt-1">
          <a href="mailto:techiconsofus@gmail.com" class="font-serif text-3xl sm:text-4xl text-ink hover:text-editorial transition-colors">
            techiconsofus@gmail.com
          </a>
        </div>
      </div>

    </div>
  `;
}

// --- VIEW F: ARCHIVE VIEW ---
function renderArchiveView() {
  state.view = 'archive';
  const container = document.getElementById('app-container');
  if (!container) return;

  container.innerHTML = `
    <div class="max-w-4xl mx-auto py-8 space-y-8 animate-fade-in">
      <div class="border-b border-ink-15 pb-6 text-center">
        <span class="font-ui text-xs uppercase tracking-[0.25em] font-bold text-editorial">INDEX</span>
        <h1 class="font-serif text-4xl font-bold text-ink pt-2">Complete Issue Archive</h1>
        <p class="font-serif text-base text-ink-60 pt-1">All ${ARTICLES.length} stories published in Volume I · June 2026</p>
      </div>

      <div class="divide-y divide-ink-10">
        ${ARTICLES.map(article => `
          <div class="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
            <div class="space-y-1 max-w-2xl">
              <div class="flex items-center gap-3">
                <span class="font-ui text-[10px] uppercase tracking-widest text-editorial font-bold">${article.category}</span>
                <span class="text-xs font-ui text-ink-40">· ${article.date}</span>
                ${article.isCoverStory ? `<span class="bg-editorial/10 text-editorial font-ui text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">COVER STORY</span>` : ''}
              </div>
              <h3 class="font-serif text-xl font-bold text-ink group-hover:text-editorial transition-colors">
                <a href="#article/${article.id}">${article.title}</a>
              </h3>
              <p class="font-serif text-sm text-ink-60 line-clamp-1">${article.subtitle}</p>
            </div>
            <a href="#article/${article.id}" class="font-ui text-xs font-bold uppercase tracking-wider text-ink-70 group-hover:text-editorial whitespace-nowrap">
              Read Story →
            </a>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ==========================================
// 6. HELPER CARD COMPONENT RENDERER
// ==========================================

function renderArticleCard(article, variant = 'grid') {
  return `
    <article class="article-card group flex flex-col h-full ${variant === 'featured' ? 'space-y-3' : 'space-y-3'}">
      <!-- Card Image -->
      <a href="#article/${article.id}" style="aspect-ratio: ${variant === 'featured' ? '5/4' : '4/3'};" class="block overflow-hidden mb-4 bg-ink-5 relative w-full shrink-0">
        <img src="${resolveImage(article.heroImage, 'https://placehold.co/800x600/e5e5e5/0f0f0f?text=Placeholder')}" alt="${article.title}" class="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700 ease-out" loading="lazy" />
      </a>
      <div class="space-y-2 flex-grow">
        <div class="flex items-center text-[9px] font-ui uppercase tracking-[0.2em] font-bold text-editorial">
          ${article.category} <span class="text-ink-40 mx-2">•</span> ${article.readTime}
        </div>
        <a href="#article/${article.id}" class="block">
          <h3 class="font-serif ${variant === 'featured' ? 'text-2xl lg:text-[28px] leading-tight' : 'text-xl sm:text-2xl leading-snug'} font-normal text-ink group-hover:text-editorial transition-colors">
            ${article.title}
          </h3>
        </a>
        <p class="font-serif text-[15px] ${variant === 'featured' ? 'text-ink-70 italic' : 'text-ink-60'} line-clamp-2 leading-relaxed">
          ${article.subtitle}
        </p>
      </div>

      <div class="${variant === 'featured' ? 'pt-4' : 'pt-3'} text-[9px] font-ui uppercase tracking-widest text-ink-50">
        BY ${article.author}
      </div>
    </article>
  `;
}

// ==========================================
// 7. UTILITIES: Search, Theme, Progress, Toast
// ==========================================

function openSearchModal(open) {
  const modal = document.getElementById('search-modal');
  const content = document.getElementById('search-modal-content');
  const input = document.getElementById('search-input');

  if (!modal) return;
  if (open) {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    content?.classList.remove('scale-95');
    content?.classList.add('scale-100');
    setTimeout(() => input?.focus(), 100);
  } else {
    modal.classList.add('opacity-0', 'pointer-events-none');
    content?.classList.remove('scale-100');
    content?.classList.add('scale-95');
  }
}

function handleSearch(query) {
  const resultsContainer = document.getElementById('search-results');
  if (!resultsContainer) return;

  const q = query.toLowerCase().trim();
  if (!q) {
    resultsContainer.innerHTML = `<div class="text-center py-8 text-ink-50 font-serif italic">Type to begin searching the archives...</div>`;
    return;
  }

  const matches = ARTICLES.filter(a =>
    a.title.toLowerCase().includes(q) ||
    a.subtitle.toLowerCase().includes(q) ||
    a.category.toLowerCase().includes(q) ||
    a.author.toLowerCase().includes(q) ||
    a.tags.some(t => t.toLowerCase().includes(q)) ||
    a.content.some(p => p.toLowerCase().includes(q))
  );

  if (matches.length === 0) {
    resultsContainer.innerHTML = `<div class="text-center py-8 text-ink-50 font-serif italic">No stories matching "${query}"</div>`;
    return;
  }

  resultsContainer.innerHTML = matches.map(article => `
    <a href="#article/${article.id}" onclick="openSearchModal(false)" class="block p-3 rounded hover:bg-ink-5 transition-colors border-b border-ink-10">
      <div class="flex items-center justify-between text-xs font-ui text-editorial uppercase font-bold tracking-wider mb-1">
        <span>${article.category}</span>
        <span class="text-ink-40 font-normal">${article.readTime}</span>
      </div>
      <h4 class="font-serif text-base font-bold text-ink leading-snug">${article.title}</h4>
      <p class="font-serif text-xs text-ink-60 line-clamp-1 mt-0.5">${article.subtitle}</p>
    </a>
  `).join('');
}

function openMobileDrawer(open) {
  const drawer = document.getElementById('mobile-drawer');
  const panel = document.getElementById('mobile-drawer-panel');
  if (!drawer || !panel) return;

  if (open) {
    drawer.classList.remove('opacity-0', 'pointer-events-none');
    panel.classList.remove('-translate-x-full');
  } else {
    drawer.classList.add('opacity-0', 'pointer-events-none');
    panel.classList.add('-translate-x-full');
  }
}

function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem('iot_theme', state.theme);
  showToast(`Theme switched to ${state.theme} mode`);
}

function toggleBookmark(id) {
  const idx = state.bookmarks.indexOf(id);
  if (idx > -1) {
    state.bookmarks.splice(idx, 1);
    showToast('Removed from bookmarks');
  } else {
    state.bookmarks.push(id);
    showToast('Saved to bookmarks');
  }
  localStorage.setItem('iot_bookmarks', JSON.stringify(state.bookmarks));
  if (state.view === 'article') renderArticleView(id);
}

function shareArticle(title) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(window.location.href);
    showToast('Article link copied to clipboard!');
  } else {
    showToast(`Sharing: ${title}`);
  }
}

function updateReadingProgress() {
  const progressBar = document.getElementById('read-progress');
  if (!progressBar) return;

  if (state.view !== 'article') {
    progressBar.style.width = '0%';
    return;
  }

  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (totalHeight <= 0) return;

  const currentScroll = window.scrollY;
  const progress = Math.min((currentScroll / totalHeight) * 100, 100);
  progressBar.style.width = `${progress}%`;
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
