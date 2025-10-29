import { 
  Wand2, 
  Mic, 
  Image, 
  Search, 
  MapPin, 
  Sparkles, 
  Brain, 
  MessageSquare,
  Video,
  Ratio,
  ScanSearch,
  Zap,
  PlaySquare,
  AudioLines,
  Lightbulb,
  Volume2
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Wand2,
    title: "Nano banana powered app",
    description: "Add powerful photo editing to your app. Allow users to add objects, remove backgrounds, or change a photo's style just by typing."
  },
  {
    icon: Mic,
    title: "Create conversational voice apps",
    description: "Use the Gemini Live API to give your app a voice and make your own conversational experiences."
  },
  {
    icon: Image,
    title: "Animate images with Veo",
    description: "Bring images to life with Veo 2. Let users upload a product photo and turn it into a dynamic video ad, or animate a character's portrait."
  },
  {
    icon: Search,
    title: "Use Google Search data",
    description: "Connect your app to Google Search results. Build an agent that can discuss current events, cite recent news, or fact-check information."
  },
  {
    icon: MapPin,
    title: "Use Google Maps data",
    description: "Connect your app to real-time Google Maps data. Build an agent that can pull information about places, routes, or directions."
  },
  {
    icon: Sparkles,
    title: "Generate images with a prompt",
    description: "Generate high-quality images from a text prompt. Create blog post heroes, concept art, or unique assets in your application."
  },
  {
    icon: Brain,
    title: "Gemini intelligence in your app",
    description: "Embed Gemini in your app to complete all sorts of tasks - analyze content, make edits, and more"
  },
  {
    icon: MessageSquare,
    title: "AI powered chatbot",
    description: "Add a context-aware chatbot to your app. Give your users a support agent that remembers the conversation, perfect for multi-step bookings or troubleshooting."
  },
  {
    icon: Video,
    title: "Prompt based video generation",
    description: "Add video generation to your creative app. Let users turn their blog posts, scripts, or product descriptions into short video clips."
  },
  {
    icon: Ratio,
    title: "Control image aspect ratios",
    description: "Control the exact aspect of AI generated images. Build an app that creates perfect-fit images for vertical phone wallpapers or horizontal web banners."
  },
  {
    icon: ScanSearch,
    title: "Analyze images",
    description: "Enable your app to see and understand images. Allow users to upload a photo of a receipt, a menu, or a chart to get instant data extraction, translations, or summaries."
  },
  {
    icon: Zap,
    title: "Fast AI responses",
    description: "Add lightning-fast time responses to your app using 2.5 Flash-Lite. Perfect for instant auto-completes, or conversational agents that feel alive."
  },
  {
    icon: PlaySquare,
    title: "Video understanding",
    description: "Help users find the key moments in long videos. Add a feature to analyze video content to instantly generate summaries, flashcards, or marketing highlights."
  },
  {
    icon: AudioLines,
    title: "Transcribe audio",
    description: "Add a feature to provide live, real-time transcription of any audio feed for your users."
  },
  {
    icon: Lightbulb,
    title: "Think more when needed",
    description: "Give your app's AI time to think. Enable 'Thinking Mode' to handle your users' most complex queries."
  },
  {
    icon: Volume2,
    title: "Generate speech",
    description: "Give your app a voice. Add text-to-speech to read articles aloud, provide audio navigation, or create voice-based assistants for your users."
  }
];

const AIFeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Supercharge your apps with AI
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Integrate powerful AI capabilities into your applications with our cutting-edge solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIFeaturesSection;
