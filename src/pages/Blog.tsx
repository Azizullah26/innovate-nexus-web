import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  Search,
  TrendingUp,
  Cpu,
  Cloud,
  Brain,
  Code,
  Smartphone
} from "lucide-react";

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "The Future of AI Integration in Modern Web Applications",
    excerpt: "Exploring how artificial intelligence is revolutionizing user experiences and backend processes in contemporary web development.",
    author: "Alex Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    image: "/api/placeholder/800/400",
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "Building Scalable Microservices with Node.js and Docker",
      excerpt: "Learn how to architect and deploy microservices that can handle millions of requests while maintaining code quality.",
      author: "Sarah Johnson", 
      date: "2024-01-12",
      readTime: "12 min read",
      category: "Backend Development",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "React Performance Optimization: Advanced Techniques",
      excerpt: "Deep dive into advanced React optimization strategies that can dramatically improve your application's performance.",
      author: "Mike Rodriguez",
      date: "2024-01-10", 
      readTime: "10 min read",
      category: "Frontend Development",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Cloud Migration Strategies for Enterprise Applications",
      excerpt: "A comprehensive guide to moving enterprise applications to the cloud with minimal downtime and maximum efficiency.",
      author: "Jennifer Liu",
      date: "2024-01-08",
      readTime: "15 min read", 
      category: "Cloud & DevOps",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Mobile-First Design Principles for Modern Apps",
      excerpt: "Essential principles and practices for creating mobile-first applications that provide exceptional user experiences.",
      author: "David Park",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Mobile Development", 
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Cybersecurity Best Practices for Startups",
      excerpt: "Essential security measures every startup should implement to protect their applications and user data.",
      author: "Lisa Wang",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "Security",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = [
    { name: "AI & Machine Learning", icon: Brain, count: 8 },
    { name: "Frontend Development", icon: Code, count: 15 },
    { name: "Backend Development", icon: Cpu, count: 12 },
    { name: "Cloud & DevOps", icon: Cloud, count: 10 },
    { name: "Mobile Development", icon: Smartphone, count: 7 },
    { name: "Security", icon: TrendingUp, count: 5 }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "AI & Machine Learning": "electric-gradient",
      "Frontend Development": "primary-gradient", 
      "Backend Development": "secondary-gradient",
      "Cloud & DevOps": "silver-gradient",
      "Mobile Development": "primary-gradient",
      "Security": "dark-gradient"
    };
    return colors[category] || "primary-gradient";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Tech Insights & <span className="gradient-text">Innovation</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Stay ahead of the curve with our latest insights on AI, fullstack development, 
                and digital transformation strategies.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-3 text-lg border-2 focus:border-secondary"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              <div className="mb-16">
                <div className="flex items-center mb-6">
                  <TrendingUp className="h-6 w-6 text-secondary mr-2" />
                  <h2 className="text-2xl font-bold text-foreground">Featured Article</h2>
                </div>
                
                <Card className="overflow-hidden border-0 shadow-xl glow-on-hover group">
                  <div className="relative">
                    <div className="aspect-video bg-gradient-primary flex items-center justify-center">
                      <div className="w-16 h-16 electric-gradient rounded-lg flex items-center justify-center">
                        <Brain className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <Badge className={`absolute top-4 left-4 ${getCategoryColor(featuredPost.category)} text-white border-0`}>
                      {featuredPost.category}
                    </Badge>
                  </div>
                  <CardContent className="p-8">
                    <CardTitle className="text-2xl font-bold text-foreground mb-4 group-hover:text-secondary transition-colors">
                      {featuredPost.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-lg mb-6">
                      {featuredPost.excerpt}
                    </CardDescription>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                      
                      <Button variant="hero" className="group">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Latest Articles */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-8">Latest Articles</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                      <div className="relative">
                        <div className="aspect-video bg-gradient-secondary flex items-center justify-center">
                          <div className="w-12 h-12 primary-gradient rounded-lg flex items-center justify-center">
                            <Code className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <Badge className={`absolute top-3 left-3 ${getCategoryColor(post.category)} text-white border-0 text-xs`}>
                          {post.category}
                        </Badge>
                      </div>
                      
                      <CardContent className="p-6">
                        <CardTitle className="text-lg font-bold text-foreground mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground mb-4 line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-3">
                            <span>{post.author}</span>
                            <span>•</span>
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Categories */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">Categories</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {categories.map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <div key={category.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors group">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 primary-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                              <IconComponent className="h-4 w-4 text-white" />
                            </div>
                            <span className="text-foreground font-medium text-sm">{category.name}</span>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {category.count}
                          </Badge>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="border-0 shadow-lg primary-gradient text-white">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Stay Updated</h4>
                    <p className="text-white/80 text-sm mb-4">
                      Get the latest tech insights delivered to your inbox weekly.
                    </p>
                    <div className="space-y-3">
                      <Input 
                        placeholder="Enter your email"
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                      />
                      <Button variant="glass" size="sm" className="w-full">
                        Subscribe
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Tags */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">Popular Tags</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'AI', 'Cloud', 'TypeScript', 'Docker', 'AWS', 'MongoDB', 'GraphQL', 'Next.js'].map((tag) => (
                        <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-secondary hover:text-white transition-colors">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 primary-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <span className="text-xl font-bold text-background">TechFlow</span>
              </div>
              <p className="text-background/80 mb-4 max-w-md">
                Building the future with fullstack development, AI integration, and 
                cutting-edge digital solutions that drive business growth.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-background/60 hover:text-background transition-colors">LinkedIn</a>
                <a href="#" className="text-background/60 hover:text-background transition-colors">Twitter</a>
                <a href="#" className="text-background/60 hover:text-background transition-colors">GitHub</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-background mb-4">Services</h4>
              <ul className="space-y-2 text-background/80 text-sm">
                <li><a href="/services" className="hover:text-background transition-colors">Web Development</a></li>
                <li><a href="/services" className="hover:text-background transition-colors">Mobile Apps</a></li>
                <li><a href="/services" className="hover:text-background transition-colors">AI Integration</a></li>
                <li><a href="/services" className="hover:text-background transition-colors">Cloud Solutions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-background mb-4">Company</h4>
              <ul className="space-y-2 text-background/80 text-sm">
                <li><a href="/about" className="hover:text-background transition-colors">About Us</a></li>
                <li><a href="/portfolio" className="hover:text-background transition-colors">Portfolio</a></li>
                <li><a href="/blog" className="hover:text-background transition-colors">Blog</a></li>
                <li><a href="/contact" className="hover:text-background transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60 text-sm">
            <p>&copy; 2024 TechFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;