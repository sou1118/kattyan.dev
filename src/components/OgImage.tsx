import { loadDefaultJapaneseParser } from "budoux";
import React from "react";

export const OgImage = ({ title = "kattyan.dev" }) => {
  const parser = loadDefaultJapaneseParser();
  const words = parser.parse(title);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #FF8C00, #FFD700)",
        padding: "24px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          background: "white",
          borderRadius: "48px",
          padding: "64px",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
          maxHeight: "100%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            flex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            padding: "20px 0",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "#333333",
              lineHeight: 1.4,
              margin: 0,
              textAlign: "center",
              width: "100%",
              maxWidth: "1000px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {words.map((word) => (
              <div
                key={word}
                style={{
                  display: "block",
                }}
              >
                {word}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            fontSize: "36px",
            color: "#666666",
            textAlign: "center",
            marginTop: "36px",
            fontWeight: "normal",
            flexShrink: 0,
          }}
        >
          kattyan.dev
        </div>
      </div>
    </div>
  );
};

export default OgImage;
