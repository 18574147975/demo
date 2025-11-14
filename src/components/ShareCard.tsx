import { forwardRef } from "react";

interface ShareCardProps {
  title: string;
  result: {
    name: string;
    description: string;
  };
  iconColor: string;
}

const ShareCard = forwardRef<HTMLDivElement, ShareCardProps>(
  ({ title, result }, ref) => {
    return (
      <div
        ref={ref}
        style={{ 
          width: "900px", 
          height: "800px",
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 80px",
          position: "relative",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif",
          boxSizing: "border-box"
        }}
      >
        {/* 顶部装饰条 */}
        <div 
          style={{ 
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "12px",
            background: "#f97316"
          }}
        />

        {/* 网站标题 - 使用纯色 */}
        <div
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            color: "#f97316",
            marginBottom: "35px",
            textAlign: "center",
            letterSpacing: "2px",
            lineHeight: "1.2"
          }}
        >
          选择困难症救星
        </div>

        {/* 推荐类型 - 简洁样式 */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            fontSize: "34px",
            fontWeight: "bold",
            color: "#f97316",
            background: "transparent",
            padding: "8px 20px",
            marginBottom: "45px",
            lineHeight: "1.2"
          }}
        >
          <span style={{ fontSize: "32px", lineHeight: "1" }}>🎁</span>
          <span style={{ lineHeight: "1" }}>{title}</span>
        </div>

        {/* 推荐结果卡片 */}
        <div
          style={{
            width: "100%",
            maxWidth: "700px",
            background: "#ffffff",
            borderRadius: "32px",
            padding: "50px",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
            border: "4px solid #fed7aa",
            position: "relative"
          }}
        >
          {/* 顶部装饰 */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "6px",
              background: "#f97316",
              borderRadius: "32px 32px 0 0"
            }}
          />

          {/* 推荐标签 */}
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#f97316",
              textAlign: "center",
              marginBottom: "25px"
            }}
          >
            🎉 为你推荐
          </div>

          {/* 推荐名称 */}
          <div
            style={{
              fontSize: "52px",
              fontWeight: "bold",
              color: "#1f2937",
              textAlign: "center",
              marginBottom: "25px",
              lineHeight: "1.3"
            }}
          >
            {result.name}
          </div>

          {/* 分隔线 */}
          <div
            style={{
              width: "140px",
              height: "5px",
              background: "#f97316",
              margin: "0 auto 25px auto",
              borderRadius: "10px"
            }}
          />

          {/* 推荐描述 */}
          <div
            style={{
              fontSize: "22px",
              color: "#4b5563",
              textAlign: "center",
              lineHeight: "1.7",
              fontWeight: "500"
            }}
          >
            {result.description}
          </div>
        </div>

        {/* 底部提示 */}
        <div
          style={{
            fontSize: "18px",
            color: "#6b7280",
            textAlign: "center",
            marginTop: "35px",
            fontWeight: "600"
          }}
        >
          ✨ 扫码体验更多推荐 ✨
        </div>

        {/* 底部装饰点 */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "18px"
          }}
        >
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#f97316" }} />
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#fb923c" }} />
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#fbbf24" }} />
        </div>
      </div>
    );
  }
);

ShareCard.displayName = "ShareCard";

export default ShareCard;
