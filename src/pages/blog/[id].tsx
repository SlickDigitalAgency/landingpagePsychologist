import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../../data/blog-posts';
import { fadeIn } from '../../utils/animations/variants';
import Navbar from '../../components/common/navbar/Navbar';
import Footer from '../../components/common/footer/Footer';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <motion.article
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="pt-24 pb-12"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
            
            <div className="flex items-center text-sm text-gray-400 mb-8">
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>

            <div className="space-y-4 text-gray-300">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">{paragraph.slice(3)}</h2>;
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <ul key={index} className="list-disc list-inside">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i}>{item.slice(2)}</li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.match(/^\d\./)) {
                  return (
                    <ol key={index} className="list-decimal list-inside">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i}>{item.slice(3)}</li>
                      ))}
                    </ol>
                  );
                }
                return <p key={index}>{paragraph}</p>;
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.article>
      <Footer />
    </div>
  );
};

export default BlogPost;