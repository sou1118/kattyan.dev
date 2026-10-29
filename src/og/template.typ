#import "@preview/vitis:0.1.0": japanese-parser

#let title = sys.inputs.at("title", default: "kattyan.dev")

#set page(
  width: 1200pt,
  height: 630pt,
  margin: 24pt,
  fill: gradient.linear(rgb("#FF8C00"), rgb("#FFD700"), angle: 45deg),
)
#set text(font: "LINE Seed JP_OTF", lang: "ja", cjk-latin-spacing: none)

#block(width: 100%, height: 100%, fill: white, radius: 48pt, inset: 64pt)[
  #grid(
    columns: 100%,
    rows: (1fr, auto),
    row-gutter: 36pt,
    align(center + horizon)[
      #set text(size: 72pt, weight: "bold", fill: rgb("#333333"))
      #set par(leading: 0.55em, justify: false)
      #let max-width = 1000pt
      #context {
        let phrases = (japanese-parser.parse)(title).map(p => if measure(box(p)).width > max-width {
          p.split(" ").map(box).join(" ")
        } else {
          box(p)
        })
        block(width: max-width, phrases.join(sym.zws))
      }
    ],
    align(center, text(size: 36pt, fill: rgb("#666666"))[kattyan.dev]),
  )
]
