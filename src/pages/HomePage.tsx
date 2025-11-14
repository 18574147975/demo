import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Utensils, Calendar, Film, BookOpen, Sparkles, Download, RotateCcw, Gift, Zap } from "lucide-react";
import html2canvas from "html2canvas";
import ShareCard from "@/components/ShareCard";
import { useToast } from "@/hooks/use-toast";

// 推荐数据
const foodRecommendations = [
  { name: "火锅", description: "热气腾腾的火锅，和朋友一起享受美食的快乐！" },
  { name: "日式料理", description: "精致的寿司和刺身，体验日本料理的艺术。" },
  { name: "川菜", description: "麻辣鲜香的川菜，让味蕾尽情舞动！" },
  { name: "西餐牛排", description: "嫩滑多汁的牛排，配上红酒，享受优雅时光。" },
  { name: "烧烤", description: "炭火烧烤的香气，夏日夜晚的最佳选择。" },
  { name: "粤式早茶", description: "精致的点心和茶，悠闲的周末早晨。" },
  { name: "韩式料理", description: "泡菜、烤肉、石锅拌饭，感受韩国风味。" },
  { name: "意大利面", description: "浓郁的番茄酱汁，经典的意式美味。" },
  { name: "东南亚菜", description: "酸辣开胃的泰式或越南菜，异域风情满满。" },
  { name: "中式快餐", description: "简单快捷的盖浇饭或面条，满足你的胃。" },
];

const activityRecommendations = [
  { name: "户外徒步", description: "呼吸新鲜空气，欣赏大自然的美景。" },
  { name: "看电影", description: "在电影院享受视听盛宴，放松身心。" },
  { name: "逛博物馆", description: "探索历史文化，增长见识。" },
  { name: "咖啡馆阅读", description: "找一家安静的咖啡馆，享受阅读时光。" },
  { name: "健身运动", description: "去健身房或公园运动，保持健康活力。" },
  { name: "宅家追剧", description: "窝在沙发上，追一部心仪的剧集。" },
  { name: "朋友聚会", description: "约上三五好友，聊天聚餐，增进感情。" },
  { name: "学习新技能", description: "利用周末学习一项新技能或爱好。" },
  { name: "逛街购物", description: "去商场逛逛，买些喜欢的东西犒劳自己。" },
  { name: "郊游野餐", description: "准备美食，到郊外享受野餐的乐趣。" },
];

const movieRecommendations = [
  { name: "《肖申克的救赎》", description: "经典励志片，讲述希望与自由的故事。" },
  { name: "《盗梦空间》", description: "烧脑科幻片，探索梦境与现实的边界。" },
  { name: "《泰坦尼克号》", description: "浪漫爱情片，感人至深的经典之作。" },
  { name: "《阿甘正传》", description: "温暖励志，平凡人的不平凡人生。" },
  { name: "《星际穿越》", description: "宏大的太空史诗，探索爱与时间。" },
  { name: "《三傻大闹宝莱坞》", description: "幽默又深刻，反思教育与人生。" },
  { name: "《寻梦环游记》", description: "温馨动画，关于家庭与梦想的故事。" },
  { name: "《楚门的世界》", description: "发人深省，探讨真实与虚幻。" },
  { name: "《当幸福来敲门》", description: "励志感人，父爱与坚持的力量。" },
  { name: "《哈利·波特》系列", description: "魔法世界的冒险，适合全家观看。" },
];

const bookRecommendations = [
  { name: "《活着》", description: "余华的经典之作，讲述生命的韧性与尊严。" },
  { name: "《百年孤独》", description: "马尔克斯的魔幻现实主义巨著，探索家族与命运。" },
  { name: "《三体》", description: "刘慈欣的科幻史诗，宏大的宇宙视角。" },
  { name: "《小王子》", description: "温暖治愈的童话，适合所有年龄段阅读。" },
  { name: "《人类简史》", description: "尤瓦尔·赫拉利的历史巨作，重新认识人类文明。" },
  { name: "《围城》", description: "钱钟书的讽刺小说，幽默又深刻。" },
  { name: "《挪威的森林》", description: "村上春树的青春物语，细腻的情感描写。" },
  { name: "《解忧杂货店》", description: "东野圭吾的温情之作，关于时间与羁绊。" },
  { name: "《平凡的世界》", description: "路遥的史诗巨著，描绘普通人的奋斗历程。" },
  { name: "《月亮与六便士》", description: "毛姆的经典，探讨理想与现实的冲突。" },
];

// 提示信息
const hints = {
  food: ["辣的 🌶️", "清淡 🥗", "油腻 🍖", "爽口 🥒", "甜的 🍰", "咸的 🧂", "酸的 🍋", "鲜美 🦐"],
  activity: ["室内 🏠", "户外 🌳", "安静 📚", "热闹 🎉", "运动 ⚽", "休闲 ☕", "社交 👥", "独处 🧘"],
  movie: ["喜剧 😄", "悲剧 😢", "动作 💥", "爱情 💕", "科幻 🚀", "悬疑 🔍", "治愈 🌸", "烧脑 🧠"],
  book: ["轻松 😊", "深刻 🤔", "励志 💪", "治愈 🌈", "历史 📜", "科幻 🛸", "文学 📖", "哲学 💭"],
};

// 立方体图案配置
const cubePatterns = {
  food: {
    emoji: "🍜",
    gradient: "from-orange-400 to-red-500",
  },
  activity: {
    emoji: "⚽",
    gradient: "from-blue-400 to-cyan-500",
  },
  movie: {
    emoji: "🎬",
    gradient: "from-purple-400 to-pink-500",
  },
  book: {
    emoji: "📚",
    gradient: "from-green-400 to-teal-500",
  },
};

interface Recommendation {
  name: string;
  description: string;
}

interface RecommendationCardProps {
  title: string;
  icon: React.ReactNode;
  recommendations: Recommendation[];
  iconColor: string;
  hintType: keyof typeof hints;
}

function RecommendationCard({ title, icon, recommendations, iconColor, hintType }: RecommendationCardProps) {
  const [result, setResult] = useState<Recommendation | null>(null);
  const [isShaking, setIsShaking] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);
  const [currentHint, setCurrentHint] = useState<string>("");
  const [showHint, setShowHint] = useState(false);
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [shareImageUrl, setShareImageUrl] = useState<string>("");
  const shareCardRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const pattern = cubePatterns[hintType];

  // 摇一摇功能
  const handleShake = () => {
    if (isShaking || isDrawing) return;
    
    setIsShaking(true);
    setShowHint(false);
    
    // 随机选择一个提示
    const randomHint = hints[hintType][Math.floor(Math.random() * hints[hintType].length)];
    
    setTimeout(() => {
      setCurrentHint(randomHint);
      setShowHint(true);
      setIsShaking(false);
      
      toast({
        title: "提示已生成！",
        description: `看起来是：${randomHint}`,
      });
    }, 800);
  };

  // 直接抽盲盒功能
  const handleDraw = () => {
    if (isDrawing) return;
    
    setIsDrawing(true);
    setIsFlipped(false);
    setShowSparkles(false);
    setShowHint(false);
    
    // 抽奖动画效果
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * recommendations.length);
      setResult(recommendations[randomIndex]);
      
      // 翻转卡片
      setTimeout(() => {
        setIsFlipped(true);
        setShowSparkles(true);
        
        // 闪光效果消失
        setTimeout(() => {
          setShowSparkles(false);
          setIsDrawing(false);
        }, 1000);
      }, 1000);
    }, 1000);
  };

  // 重置功能
  const handleReset = () => {
    setIsFlipped(false);
    setResult(null);
    setShowSparkles(false);
    setShowHint(false);
    setCurrentHint("");
  };

  // 生成分享图片
  const handleShare = async () => {
    if (!result || !shareCardRef.current) return;

    try {
      const canvas = await html2canvas(shareCardRef.current, {
        backgroundColor: "#ffffff",
        scale: 2,
        logging: false,
      });
      
      const imageUrl = canvas.toDataURL("image/png");
      setShareImageUrl(imageUrl);
      setShareDialogOpen(true);
    } catch (error) {
      toast({
        title: "生成失败",
        description: "图片生成失败，请重试",
        variant: "destructive",
      });
    }
  };

  // 下载分享图片
  const handleDownload = () => {
    if (!shareImageUrl || !result) return;
    
    const link = document.createElement("a");
    link.download = `选择困难症救星-${title}-${result.name}.png`;
    link.href = shareImageUrl;
    link.click();
    
    toast({
      title: "下载成功！",
      description: "图片已保存到本地，快去分享给朋友吧！",
    });
  };

  return (
    <>
      <Card className="shadow-card hover:shadow-hover transition-all duration-300 border-2 overflow-hidden">
        <CardContent className="p-6">
          {/* 标题区域 */}
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-full ${iconColor} shadow-lg`}>
              {icon}
            </div>
            <h3 className="text-2xl max-sm:text-xl font-bold">{title}</h3>
          </div>

          {/* 3D 立方体盲盒区域 */}
          <div className="mb-4">
            {/* 翻转卡片 */}
            <div className="flip-card mb-2">
              <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
                {/* 正面 - 3D 立方体 */}
                <div className="flip-card-front">
                  <div className="py-2 flex items-center justify-center">
                    <div className="cube-container">
                      <div className={`cube ${isShaking ? "shaking" : ""} ${isDrawing ? "opening" : ""}`}>
                        {/* 立方体六个面 */}
                        <div className={`cube-face front bg-gradient-to-br ${pattern.gradient}`}>
                          <span className="relative z-10">{pattern.emoji}</span>
                        </div>
                        <div className={`cube-face back bg-gradient-to-br ${pattern.gradient}`}>
                          <span className="relative z-10">{pattern.emoji}</span>
                        </div>
                        <div className={`cube-face right bg-gradient-to-br ${pattern.gradient}`}>
                          <span className="relative z-10">{pattern.emoji}</span>
                        </div>
                        <div className={`cube-face left bg-gradient-to-br ${pattern.gradient}`}>
                          <span className="relative z-10">{pattern.emoji}</span>
                        </div>
                        <div className={`cube-face top bg-gradient-to-br ${pattern.gradient}`}>
                          <span className="relative z-10">{pattern.emoji}</span>
                        </div>
                        <div className={`cube-face bottom bg-gradient-to-br ${pattern.gradient}`}>
                          <span className="relative z-10">{pattern.emoji}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 背面 - 结果 */}
                <div className="flip-card-back">
                  {result && (
                    <div className="bg-muted rounded-3xl p-4 min-h-[220px] flex flex-col justify-center relative overflow-hidden shadow-2xl border-4 border-border">
                      {showSparkles && (
                        <>
                          <Sparkles className="absolute top-4 left-4 h-8 w-8 text-primary sparkle-animation" />
                          <Sparkles className="absolute top-4 right-4 h-8 w-8 text-secondary sparkle-animation" style={{ animationDelay: "0.2s" }} />
                          <Sparkles className="absolute bottom-4 left-1/2 -translate-x-1/2 h-8 w-8 text-accent sparkle-animation" style={{ animationDelay: "0.4s" }} />
                        </>
                      )}
                      <div className="zoom-in-animation relative z-10">
                        <div className="text-center mb-3">
                          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full mb-3">
                            <p className="text-primary font-bold text-xs">🎉 恭喜抽中</p>
                          </div>
                        </div>
                        <h4 className="text-2xl max-sm:text-xl font-bold mb-4 text-primary text-center">
                          {result.name}
                        </h4>
                        <p className="text-muted-foreground text-sm max-sm:text-xs leading-relaxed text-center px-2">
                          {result.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* 提示信息区域 - 固定高度确保所有卡片一致 */}
            <div className="h-[72px] flex items-center justify-center">
              {showHint && currentHint && !isFlipped && (
                <div className="inline-block px-6 py-3 bg-primary/10 backdrop-blur-sm rounded-full hint-pop border-2 border-primary/20">
                  <p className="text-primary text-lg max-sm:text-base font-bold">
                    提示：{currentHint}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* 操作按钮 */}
          <div className="space-y-3">
            {!result ? (
              <div className="grid grid-cols-2 gap-3">
                <Button
                  onClick={handleShake}
                  disabled={isShaking || isDrawing}
                  size="lg"
                  variant="outline"
                  className="text-base max-sm:text-sm font-semibold py-6 max-sm:py-5 rounded-2xl border-2"
                >
                  {isShaking ? (
                    <>
                      <Zap className="mr-2 h-5 w-5 spin-animation" />
                      摇动中
                    </>
                  ) : showHint ? (
                    <>
                      <Zap className="mr-2 h-5 w-5" />
                      再摇一次
                    </>
                  ) : (
                    <>
                      <Zap className="mr-2 h-5 w-5" />
                      摇一摇
                    </>
                  )}
                </Button>
                <Button
                  onClick={handleDraw}
                  disabled={isDrawing}
                  size="lg"
                  className="text-base max-sm:text-sm font-semibold py-6 max-sm:py-5 rounded-2xl"
                >
                  {isDrawing ? (
                    <>
                      <Sparkles className="mr-2 h-5 w-5 spin-animation" />
                      开启中
                    </>
                  ) : (
                    <>
                      <Gift className="mr-2 h-5 w-5" />
                      直接抽
                    </>
                  )}
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-2">
                <Button
                  onClick={handleReset}
                  variant="outline"
                  size="lg"
                  className="rounded-xl max-sm:text-sm"
                >
                  <RotateCcw className="h-4 w-4 max-sm:h-3 max-sm:w-3" />
                  <span className="ml-1 max-sm:hidden">再抽</span>
                </Button>
                <Button
                  onClick={handleShare}
                  variant="outline"
                  size="lg"
                  className="rounded-xl max-sm:text-sm col-span-2"
                >
                  <Sparkles className="h-4 w-4 max-sm:h-3 max-sm:w-3" />
                  <span className="ml-1">生成分享图</span>
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      {/* 分享对话框 */}
      <Dialog open={shareDialogOpen} onOpenChange={setShareDialogOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">分享你的推荐</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            {/* 图片预览 */}
            {shareImageUrl && (
              <div className="flex justify-center bg-gray-50 rounded-2xl p-6 mt-[NaNpx] border-solid border-[#1c4264ff] border-[0px] border-[transparent]">
                <img 
                  src={shareImageUrl} 
                  alt="分享图片" 
                  className="flex justify-center bg-gray-50 p-6 mt-[10px] border-solid border-[#468ac6ff] rounded-[30px] border-[0px] border-[transparent]"
                />
              </div>
            )}
            
            {/* 操作按钮 */}
            <div className="flex gap-4 justify-center">
              <Button
                onClick={handleDownload}
                size="lg"
                className="px-8 py-6 text-lg rounded-2xl"
              >
                <Download className="mr-2 h-5 w-5" />
                下载图片
              </Button>
              <Button
                onClick={() => setShareDialogOpen(false)}
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg rounded-2xl"
              >
                关闭
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {/* 隐藏的分享卡片 */}
      {result && (
        <div className="fixed -left-[9999px] -top-[9999px]">
          <ShareCard
            ref={shareCardRef}
            title={title}
            result={result}
            iconColor={iconColor}
          />
        </div>
      )}
    </>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-8 xl:py-16 max-w-7xl">
        {/* 标题区域 */}
        <div className="text-center mb-8 xl:mb-12 animate-fade-in">
          <h1 className="text-3xl xl:text-6xl font-bold mb-3 xl:mb-4 bg-gradient-primary bg-clip-text text-transparent">
            选择困难症救星
          </h1>
          <p className="text-base xl:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            不知道吃什么？不知道做什么？让我们帮你快速做决定！
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Zap className="h-4 w-4 text-primary" />
            <span>摇一摇获取提示，开启盲盒获取惊喜</span>
          </div>
        </div>

        {/* 推荐卡片网格 */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-6">
          <RecommendationCard
            title="美食推荐"
            icon={<Utensils className="h-6 w-6 text-primary-foreground" />}
            recommendations={foodRecommendations}
            iconColor="bg-primary"
            hintType="food"
          />
          
          <RecommendationCard
            title="周末活动"
            icon={<Calendar className="h-6 w-6 text-secondary-foreground" />}
            recommendations={activityRecommendations}
            iconColor="bg-secondary"
            hintType="activity"
          />
          
          <RecommendationCard
            title="影视剧推荐"
            icon={<Film className="h-6 w-6 text-primary-foreground" />}
            recommendations={movieRecommendations}
            iconColor="bg-gradient-primary"
            hintType="movie"
          />
          
          <RecommendationCard
            title="书籍推荐"
            icon={<BookOpen className="h-6 w-6 text-secondary-foreground" />}
            recommendations={bookRecommendations}
            iconColor="bg-gradient-secondary"
            hintType="book"
          />
        </div>

        {/* 使用说明 */}
        <div className="mt-8 xl:mt-12 bg-card rounded-2xl p-6 xl:p-8 shadow-card border-2 animate-fade-in">
          <h2 className="text-xl xl:text-2xl font-bold mb-4 text-center">使用说明</h2>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-6 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">摇一摇（可选）</h3>
              <p className="text-sm text-muted-foreground">摇一摇获取神秘提示，可多次摇动</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto">
                <Gift className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold">直接抽取</h3>
              <p className="text-sm text-muted-foreground">也可以直接抽取，立即获得推荐</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold">分享结果</h3>
              <p className="text-sm text-muted-foreground">生成精美图片分享给朋友</p>
            </div>
          </div>
        </div>

        {/* 页脚 */}
        <footer className="text-center mt-12 xl:mt-16 text-muted-foreground">
          <p className="text-sm">2025 选择困难症救星</p>
        </footer>
      </div>
    </div>
  );
}
