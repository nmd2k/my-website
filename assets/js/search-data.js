// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-",
          title: "",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-mixture-of-expert-explanation",
        
          title: "Mixture of expert explanation",
        
        description: "What&#39;s new behind Mixture of expert (MoE) mechanism? [Part 1]",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/moe/";
          
        },
      },{id: "post-alternative-dataset-for-code-understanding-and-generation",
        
          title: "Alternative dataset for Code Understanding and Generation",
        
        description: "A Comprehensive Multilingual Dataset for Advancing Code Understanding and Generation",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/the-vault/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-was-offered-to-become-full-time-ai-resident-at-fptsoftware-ai-center-sparkles-smile",
          title: 'I was offered to become full-time AI Resident at FPTSoftware AI Center :sparkles:...',
          description: "",
          section: "News",},{id: "news-i-got-my-bachelor-degree-in-computer-science-from-university-of-engineering-and-technology-vietnam-national-unviersity-cgpa-3-61",
          title: 'I got my Bachelor degree in Computer Science from University of Engineering and...',
          description: "",
          section: "News",},{id: "news-sparkles-i-happy-to-share-that-our-work-on-the-vault-has-been-accepted-to-emnlp-findings-2023-see-more-details-here",
          title: ':sparkles: I happy to share that our work on The Vault has been...',
          description: "",
          section: "News",},{id: "news-a-new-benchmark-for-measuring-coding-understanding-capability-of-codellms-checkout-our-homepage-codemmlu-for-more-details",
          title: '🚀 A new benchmark for measuring coding understanding capability of CodeLLMs, checkout our...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%75%6E%67%6E%6D.%77%6F%72%6B%73%70%61%63%65@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/nmd2k", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=BHpeA4MAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/_nmd2k", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
