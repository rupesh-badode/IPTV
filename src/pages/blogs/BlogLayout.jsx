import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const BlogLayout = () => {
  // Dummy data for the recent blogs sidebar to keep the code clean
  const recentBlogs = [
    { id: 1, title: "Is IPTV the Future of Entertainment in Canada?" },
    { id: 2, title: "Is IPTV the Future of Entertainment in Canada?" },
    { id: 3, title: "Is IPTV the Future of Entertainment in Canada?" },
    { id: 4, title: "Is IPTV the Future of Entertainment in Canada?" },
    { id: 5, title: "Is IPTV the Future of Entertainment in Canada?" },
    { id: 6, title: "Is IPTV the Future of Entertainment in Canada?" },
  ];

  return (
    <main className="w-full bg-[#f4f6f8] min-h-screen flex flex-col font-sans">
      
      {/* --- HERO BANNER --- */}
      <section className="relative bg-[#052644] w-full py-16 md:py-20 overflow-hidden flex items-center justify-center">
        {/* Network Pattern Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}
        />
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-[#ffab00] font-bold text-4xl md:text-5xl tracking-wide drop-shadow-md"
        >
          Blogs
        </motion.h1>
      </section>

      {/* --- MAIN TWO-COLUMN LAYOUT --- */}
      <section className="max-w-[1250px] mx-auto w-full px-6 md:px-12 py-12 flex flex-col lg:flex-row gap-10 lg:gap-14">
        
        {/* --- LEFT COLUMN: Article Content --- */}
        <div className="w-full lg:w-[68%] flex flex-col">
          
          {/* Main Featured Image Placeholder */}
          <div className="w-full h-[250px] md:h-[400px] bg-white rounded-2xl shadow-sm border border-gray-100 mb-6 flex items-center justify-center">
            <span className="text-gray-400 font-medium">Featured Image Placeholder</span>
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 text-gray-500 mb-4">
            <Calendar size={16} />
            <span className="text-sm font-medium">13th January, 2025</span>
          </div>

          {/* Article Title */}
          <h2 className="text-[#19527a] font-bold text-3xl md:text-[34px] leading-tight mb-6">
            Is IPTV the Future of Entertainment in Canada?
          </h2>

          {/* Article Text Content */}
          <div className="text-[#444444] text-[15px] md:text-base leading-relaxed space-y-5">
            <p>
              The way people watch television is really different now than it was ten years ago. Traditional cable is just too expensive. You do not get that many channels. The contracts are also very confusing. So Canadians are looking for ways to watch television. They want something that's easy to use and not too pricey. This is where the best IPTV in Canada comes in. The best iptv box for your home is a way of watching television that uses the internet. With the best IPTV service in Canada people can watch thousands of channels from around the world. They can stream television over the internet with IPTV Canada.
            </p>
            
            <p>
              From Indian content to international news, movies and entertainment Internet Protocol Television or IPTV is becoming very popular with Canadians. Canadians like IPTV because it has a lot of variety. It is also flexible. The viewing quality is really good. Canadians want to watch all sorts of things like Indian content and international news and IPTV has all of that. So IPTV is a choice for Canadians who want to watch movies and entertainment from all around the world.
            </p>

            <p>
              IPTV Brampton is at the front of this change as one of the companies that give people the best IPTV service in Canada. If you want to watch channels or events or movies or shows for kids on IPTV these platforms are really good at giving you a great time.
            </p>

            {/* Subheading */}
            <h3 className="text-[#19527a] font-bold text-2xl md:text-[26px] mt-8 mb-4">
              What is different about IPTV compared to cable?
            </h3>

            <p>
              When it comes to the noticeable difference, IPTV Brampton lets people pick the plan they want so they only pay for the things they really like to watch on IPTV Brampton. People in Canada are really getting into Internet Protocol Television or IPTV for short. IPTV in Canada is becoming very popular. The main reason for this is that IPTV in Canada gives people a lot of options to watch their shows and movies.
            </p>

            {/* Bulleted List */}
            <ul className="list-disc pl-6 space-y-2 my-6">
              <li>IPTV in Canada has a lot of channels to choose from</li>
              <li>People can watch IPTV in Canada on different devices</li>
              <li>IPTV service in Canada is often cheaper than other ways of watching television</li>
            </ul>

            <p>
              Many people like IPTV in Canada because it is easy to use and has a lot of good things to watch. More and more people are starting to use the best IPTV in Canada every day. IPTV, in Canada is definitely becoming a way for people to watch television.
            </p>

            <p>
              I think one of the reasons IPTV is becoming so popular is that it is really flexible. People can watch IPTV whenever they want and wherever they are. They can use all sorts of devices to watch IPTV like TVs, Android boxes and their mobile devices.
            </p>

            <p>
              This is a change from the way things used to be with traditional broadcasting. With broadcasting you had to watch what was on, at a certain time. IPTV is different because it lets people watch what they want when they want to watch it on their best IPTV box.
            </p>

            <p>
              The thing is, there are many different types of content to choose from. People in Canada can now watch hundreds of IPTV channels like Hindi, Punjabi, Bengali, Gujarati and Urdu channels. Being able to stream IPTV channels from different places is great because it helps Indian IPTV channels keep people who have moved away connected to their Indian culture. Indian IPTV channels are good, for the whole family too because there are so many options.
            </p>

            <p>
              So the thing that is really making people switch to IPTV services is that they are cost efficient. When you use the best IPTV service in Canada you can watch thousands of channels and get Video On Demand and high definition or 4K streaming. The best part is that you get all of this for a lot more money than you would pay for a traditional cable subscription. This is really what is driving people to adopt IPTV services in Canada.
            </p>
          </div>
        </div>

        {/* --- RIGHT COLUMN: Sidebar --- */}
        <div className="w-full lg:w-[32%]">
          
          {/* Sidebar Card Container */}
          <div className="bg-white rounded-[20px] p-6 md:p-8 shadow-[0_5px_25px_rgba(0,0,0,0.04)] sticky top-6">
            
            {/* Sidebar Header */}
            <div className="relative mb-6 pb-3 border-b border-gray-100">
              <h3 className="text-[#19527a] font-bold text-xl">Recent Blogs</h3>
              {/* Blue accent line over the border */}
              <div className="absolute left-0 bottom-[-1px] w-12 h-[2px] bg-[#19527a]"></div>
            </div>

            {/* List of Recent Blogs */}
            <div className="flex flex-col gap-6">
              {recentBlogs.map((blog, index) => (
                <div key={index} className="flex items-center gap-4 group cursor-pointer pb-5 border-b border-gray-50 last:border-0 last:pb-0">
                  
                  {/* Thumbnail Placeholder */}
                  <div className="w-[70px] h-[70px] flex-shrink-0 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group-hover:border-[#ffab00] transition-colors">
                    {/* Real images will go here */}
                  </div>
                  
                  {/* Sidebar Link Title */}
                  <h4 className="text-[#19527a] font-semibold text-[14.5px] leading-snug group-hover:text-[#ffab00] transition-colors">
                    {blog.title}
                  </h4>
                  
                </div>
              ))}
            </div>

          </div>

        </div>

      </section>
    </main>
  );
};

export default BlogLayout;