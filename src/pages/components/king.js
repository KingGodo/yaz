// ... (previous imports remain the same)

const BlogSection = () => {
  // ... (previous states and animations remain the same)

  const blogPosts = [
    // Education Category
    {
      id: 1,
      title: "Understanding Early Signs of Substance Abuse",
      excerpt: "Learn to identify warning signs and approach teens struggling with substance abuse.",
      category: "education",
      date: "May 15, 2023",
      author: "Dr. Sarah Moyo",
      readTime: "8 min read",
      image: "https://picsum.photos/id/433/600/400"
    },
    {
      id: 2,
      title: "Prevention Strategies in Schools: A Comprehensive Guide",
      excerpt: "Effective methods for implementing substance abuse prevention programs in educational settings.",
      category: "education",
      date: "May 18, 2023",
      author: "Prof. James Wilson",
      readTime: "12 min read",
      image: "https://picsum.photos/id/453/600/400"
    },
    {
      id: 3,
      title: "Building Resilience in Young Adults",
      excerpt: "Educational approaches to strengthen mental health and resistance to substance abuse.",
      category: "education",
      date: "May 20, 2023",
      author: "Dr. Emily Chen",
      readTime: "10 min read",
      image: "https://picsum.photos/id/628/600/400"
    },
    {
      id: 4,
      title: "Digital Tools for Substance Abuse Education",
      excerpt: "Modern technological approaches to educating youth about substance abuse risks.",
      category: "education",
      date: "May 22, 2023",
      author: "Tech Specialist Mark Brown",
      readTime: "7 min read",
      image: "https://picsum.photos/id/655/600/400"
    },

    // Research Category
    {
      id: 5,
      title: "Impact of Peer Pressure on Youth Substance Use",
      excerpt: "Exploring how social dynamics influence youth decisions and building resilience.",
      category: "research",
      date: "June 2, 2023",
      author: "Michael Ndlovu",
      readTime: "6 min read",
      image: "https://picsum.photos/id/26/600/400"
    },
    {
      id: 6,
      title: "Latest Findings in Addiction Prevention",
      excerpt: "New research reveals breakthrough methods in preventing substance dependency.",
      category: "research",
      date: "June 5, 2023",
      author: "Dr. Rachel Martinez",
      readTime: "15 min read",
      image: "https://picsum.photos/id/366/600/400"
    },
    {
      id: 7,
      title: "Genetic Factors in Substance Abuse Susceptibility",
      excerpt: "Recent studies on genetic predisposition to addiction and preventive measures.",
      category: "research",
      date: "June 8, 2023",
      author: "Dr. Alex Thompson",
      readTime: "11 min read",
      image: "https://picsum.photos/id/447/600/400"
    },
    {
      id: 8,
      title: "Environmental Influences on Substance Use",
      excerpt: "Research on how community and environment shape substance use patterns.",
      category: "research",
      date: "June 10, 2023",
      author: "Prof. Lisa Wong",
      readTime: "9 min read",
      image: "https://picsum.photos/id/528/600/400"
    },

    // Success Stories Category
    {
      id: 9,
      title: "Success Story: School Programs Reduced Substance Use",
      excerpt: "A look at our intervention programs and their measurable impact.",
      category: "success",
      date: "April 28, 2023",
      author: "Grace Mutasa",
      readTime: "10 min read",
      image: "https://picsum.photos/id/239/600/400"
    },
    {
      id: 10,
      title: "Community Initiative Transforms Local Youth",
      excerpt: "How one neighborhood's program became a model for substance abuse prevention.",
      category: "success",
      date: "April 30, 2023",
      author: "Community Leader John Davis",
      readTime: "8 min read",
      image: "https://picsum.photos/id/575/600/400"
    },
    {
      id: 11,
      title: "From Struggle to Strength: A Recovery Journey",
      excerpt: "An inspiring story of overcoming addiction through community support.",
      category: "success",
      date: "May 3, 2023",
      author: "Sarah Johnson",
      readTime: "13 min read",
      image: "https://picsum.photos/id/679/600/400"
    },
    {
      id: 12,
      title: "School District's Revolutionary Prevention Program",
      excerpt: "How innovative approaches led to a 70% reduction in substance use cases.",
      category: "success",
      date: "May 5, 2023",
      author: "Education Director Patricia Moore",
      readTime: "9 min read",
      image: "https://picsum.photos/id/611/600/400"
    },

    // Resources Category
    {
      id: 13,
      title: "Parent Guide: Talking to Children About Substance Abuse",
      excerpt: "Advice for parents on maintaining conversations about substance abuse.",
      category: "resources",
      date: "May 10, 2023",
      author: "Thomas Chikwanda",
      readTime: "7 min read",
      image: "https://picsum.photos/id/160/600/400"
    },
    {
      id: 14,
      title: "Essential Resources for Educators",
      excerpt: "Comprehensive toolkit for teachers dealing with substance abuse in schools.",
      category: "resources",
      date: "May 12, 2023",
      author: "Education Specialist Maria Garcia",
      readTime: "14 min read",
      image: "https://picsum.photos/id/203/600/400"
    },
    {
      id: 15,
      title: "Community Support Networks Directory",
      excerpt: "Complete guide to local and national substance abuse support services.",
      category: "resources",
      date: "May 14, 2023",
      author: "Resource Coordinator David Kim",
      readTime: "6 min read",
      image: "https://picsum.photos/id/292/600/400"
    },
    {
      id: 16,
      title: "Digital Tools and Apps for Recovery Support",
      excerpt: "Modern technological resources for maintaining sobriety and wellness.",
      category: "resources",
      date: "May 16, 2023",
      author: "Tech Expert Amanda Foster",
      readTime: "8 min read",
      image: "https://picsum.photos/id/328/600/400"
    }
  ];

  // ... (rest of the component code remains the same)
};

export default BlogSection;