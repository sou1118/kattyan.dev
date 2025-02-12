import React from "react";

export const OgImage = ({ title = "kattyan.dev" }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: "white",
        position: "relative",
      }}
    >
      {/* 背景のグラデーション装飾 */}
      <div
        style={{
          position: "absolute",
          inset: "-16px",
          background: "linear-gradient(135deg, #FFA500, #FFD700)",
          filter: "blur(32px)",
          opacity: 0.5,
        }}
      />

      {/* メインコンテンツエリア */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          padding: "64px",
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* アクセントライン */}
          <div
            style={{
              width: "96px",
              height: "4px",
              background: "linear-gradient(to right, #FFA500, #FFD700)",
            }}
          />

          {/* タイトル */}
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              color: "#44403c",
              lineHeight: 1.3,
              margin: 0,
              maxWidth: "1000px",
            }}
          >
            {title}
          </h1>
        </div>

        {/* フッター */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#57534e",
            }}
          >
            kattyan.dev
          </div>

          {/* デコレーティブな要素 */}
          <div
            style={{
              display: "flex",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "48px",
                borderRadius: "9999px",
                background: "linear-gradient(to bottom, #FFA500, #FFD700)",
              }}
            />
            <div
              style={{
                width: "12px",
                height: "32px",
                borderRadius: "9999px",
                background: "linear-gradient(to bottom, #FFD700, #FFA500)",
              }}
            />
            <div
              style={{
                width: "12px",
                height: "64px",
                borderRadius: "9999px",
                background: "linear-gradient(to bottom, #FFA500, #FFD700)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OgImage;
