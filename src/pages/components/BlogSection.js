import React, { useState } from 'react';
import { motion } from 'framer-motion';
import education from '../assets/education.jpg';
import research from '../assets/research.jpg';
import success from '../assets/success.jpg';
import resources from '../assets/resources.jpg';

const blogPosts = [
  {
    id: 1,
    title: "Understanding Early Signs of Substance Abuse",
    excerpt: "Learn to identify warning signs and approach teens struggling with substance abuse.",
    category: "education",
    date: "May 15, 2023",
    author: "Dr. Sarah Moyo",
    readTime: "8 min read",
    image: education
  },
  {
    id: 2,
    title: "Impact of Peer Pressure on Youth Substance Use",
    excerpt: "Exploring how social dynamics influence youth decisions and build resilience.",
    category: "research",
    date: "June 2, 2023",
    author: "Michael Ndlovu",
    readTime: "6 min read",
    image: research
  },
  {
    id: 3,
    title: "Success Story: School Programs Reduced Substance Use",
    excerpt: "A look at our intervention programs and their measurable impact.",
    category: "success",
    date: "April 28, 2023",
    author: "Grace Mutasa",
    readTime: "10 min read",
    image: success
  },
  {
    id: 4,
    title: "Parent Guide: Talking to Children About Substance Abuse",
    excerpt: "Advice for parents on maintaining conversations about substance abuse.",
    category: "resources",
    date: "May 10, 2023",
    author: "Thomas Chikwanda",
    readTime: "7 min read",
    image: resources
  }
];

const BlogSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

    const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };


  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeTab === 'all' || post.category === activeTab;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="py-16 px-8">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Stay informed with our latest resources and research.
          </p>
        </motion.div>

        <div className="mb-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex mb-4 sm:mb-0 overflow-x-auto pb-2">
            {['all', 'education', 'research', 'success', 'resources'].map(category => (
              <button 
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 mr-2 rounded-full ${activeTab === category ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            />
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <motion.div 
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wide bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="mr-4">{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm">{post.author}</span>
                  </div>
                  <a href={`#blog/${post.id}`} className="mt-4 inline-flex items-center text-red-600 hover:text-red-700">
                    Read more
                  </a>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500">No articles found matching your criteria.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;